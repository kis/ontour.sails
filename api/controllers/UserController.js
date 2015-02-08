/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var passport = require('passport');

module.exports = {
	login: function(req, res, next) {
	    //Вызываем метод authenticate с LocalStrategy
	    passport.authenticate('local', function(error, user, info) {
	        if (error) {
	            next(new Error('Some error was occured'));
	        } else if (!user) {
	        	sails.log('----' + user);
	        	sails.log('----' + info);
	            next(info);
	        } else {
	            //Если все проверки прошли успешно
	            //То нужно вызвать метод login
	            //и передать объект нашего пользователя
	            req.login(user, function(error) {
	                if (error) {
	                    next(new Error(error));
	                } else {
	                    res.redirect('/');
	                }
	            });
	        }
	    })(req, res); //IMPORTANT: обращаем внимание на то, что мы вызываем authenticate('login', ...)(req,res);
	    //Passport'у нужно получить значения логина\пароля с req.body
	},
	logout: function(req, res, next) {
	    //Чистим куки с нашим token'ом
	    res.clearCookie('token');
	    req.logout();
	    res.redirect('/');
	},
	register: function(req, res, next) {
		passport.authenticate('local-signup',
		  function(err, user, info) {
		    return err 
		      ? next(err)
		      : user
		        ? req.logIn(user, function(err) {
		            return err
		              ? next(err)
		              : res.redirect('/');
		          })
		        : res.redirect('/signup');
		  }
		)(req, res, next);
	}
};

