/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var Waterline = require('waterline');

var user = Waterline.Collection.extend({
	tableName: 'users',
	adapter: 'sails-mongo',	
	migrate: 'safe',
	autoCreatedAt: true,
	autoUpdatedAt: true,
	autoPK: true,
	attributes: {
	  	email        : {
	  		type: 'String'
	  	},
	  	password     : {
	  		type: 'String'
	  	}
  	}
});

module.exports = user;
