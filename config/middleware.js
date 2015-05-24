//config/middleware.js
var bcrypt = require('bcrypt'), //Подключаем bcrypt
    crypto = require('crypto'), //crypto для генерации устойчивого token'а
    passport = require('passport'), //passport
    LocalStrategy = require('passport-local').Strategy, //Локальную стратегию
    RememberMeStrategy = require('passport-remember-me').Strategy, //Remember Me стратегию
    User = require('../api/models/User');

//Чтобы добавить поддержку "login sessions"
//нужно задать функции serialize\deserialize.
passport.serializeUser(function(user, next) {
    next(null, user.id);
});

passport.deserializeUser(function(id, next) {
    User
        .findOne(id)
        .done(function(error, user) {
            next(error, user);
        });
});

module.exports = {
    express: {
        customMiddleware: function(app) {

            //Настроим локальную стратегию
            passport.use(new LocalStrategy(
              function(username, password, done) {
                User.findOne({ username: username }, function (err, user) {
                  if (err) { return done(err); }
                  if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                  }
                  if (!user.validPassword(password)) {
                    return done(null, false, { message: 'Incorrect password.' });
                  }
                  return done(null, user);
                });
              }
            ));

            /*passport.use('local-login', new LocalStrategy({
                // by default, local strategy uses username and password, we will override with email
                usernameField : 'email',
                passwordField : 'password'
            },
            function(req, email, password, done) { // callback with email and password from our form

                // find a user whose email is the same as the forms email
                // we are checking to see if the user trying to login already exists
                User.findOne({ 'local.email' :  email }, function(err, user) {
                    // if there are any errors, return the error before anything else
                    if (err)
                        return done(err);

                    // if no user is found, return the message
                    if (!user)
                        return done(null, false, { message: 'Incorrect username.' }); // req.flash is the way to set flashdata using connect-flash

                    // if the user is found but the password is wrong
                    if (!user.validPassword(password))
                        return done(null, false, { message: 'Incorrect password.' }); // create the loginMessage and save it to session as flashdata

                    // all is well, return successful user
                    return done(null, user);
                });

            }));*/

            passport.use('local-signup', new LocalStrategy({
                // by default, local strategy uses username and password, we will override with email
                usernameField : 'email',
                passwordField : 'password',
                passReqToCallback : true // allows us to pass back the entire request to the callback
            },
            function(req, email, password, done) {

                // asynchronous
                // User.findOne wont fire unless data is sent back
                process.nextTick(function() {

                // find a user whose email is the same as the forms email
                // we are checking to see if the user trying to login already exists
                User.findOne({ 'local.email' :  email }, function(err, user) {
                    // if there are any errors, return the error
                    if (err)
                        return done(err);

                    // check to see if theres already a user with that email
                    if (user) {
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {

                        // if there is no user with that email
                        // create the user
                        var newUser = new User();

                        // set the user's local credentials
                        newUser.local.email    = email;
                        newUser.local.password = newUser.generateHash(password);

                        // save the user
                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });

                    }

                });    

                });

            }));

            //Настраиваем RememberMe стратегию
            passport.use(new RememberMeStrategy({
                    key: 'token' //Указываем имя cookie, где хранится ваш token
                },
                function(token, done) {
                    //Ищем пользователя с этим token'ом
                    User
                        .findOne()
                        .where({
                            autoLoginHash: token
                        })
                        .done(function(error, user) {
                            if (error) {
                                done(error);
                            } else if (!user) {
                                done(null, false);
                            } else {
                                //Нужно инвалидировать token в целях безопасности
                                delete user.autoLoginHash;
                                user.save(function() {});
                                done(null, user);
                            }
                        });
                }, function(user, done) {
                    //И генерируем новый token
                    var token = crypto.randomBytes(32).toString('hex');
                    user.autoLoginHash = token;
                    user.save(function() {});
                    done(null, token);
                }));

            app.use(passport.initialize());
            app.use(passport.session());
            app.use(passport.authenticate('remember-me'));
        }
    }
};