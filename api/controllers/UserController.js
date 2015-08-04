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
	    passport.authenticate('local', { successRedirect: '/',
	                                       failureRedirect: '/signin',
	                                       failureFlash: true });
	},
	logout: function(req, res, next) {
	    //Чистим куки с нашим token'ом
	    res.clearCookie('token');
	    req.logout();
	    res.redirect('/');
	},
	register: function(req, res, next) {
		passport.authenticate('local-signup', {
		    successRedirect : '/', // redirect to the secure profile section
		    failureRedirect : '/', // redirect back to the signup page if there is an error
		    failureFlash : true // allow flash messages
		});
	}
};

