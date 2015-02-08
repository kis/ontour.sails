/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {
    var passport = require('passport'), //Подключаем passport
        http = require('http'), //И http
        initialize = passport.initialize(),
        session = passport.session(),
        //Недостающие методы :)
        methods = ['login', 'logIn', 'logout', 'logOut', 'isAuthenticated', 'isUnauthenticated'];

    sails.removeAllListeners('router:request'); //Убираем все listeners с request'ов

    sails.on('router:request', function(req, res) { //И назначаем свой event-listener
        initialize(req, res, function() {
            session(req, res, function(error) {
                if (error) {
                    return sails.config[500](500, req, res);
                }

                for (var i = 0; i < methods.length; i++) {
                    //Bind'им недостающие методы в req-объект
                    req[methods[i]] = http.IncomingMessage.prototype[methods[i]].bind(req);
                }

                //Продолжаем работу sails и вызываем нужный route
                sails.router.route(req, res);
            });
        });
    });
    //IMPORTANT: не забываем оставить cb()
    //Иначе Sails просто не поднимется
    cb();
};