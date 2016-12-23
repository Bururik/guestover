// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'twitterAuth' : {
		'consumerKey' 		: 'process.env.TID',
		'consumerSecret' 	: 'process.env.TSECRET',
		'callbackURL' 		: 'http://127.0.0.1:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: 'process.env.GID',
		'clientSecret' 	: 'process.env.GSECRET',
		'callbackURL' 	: 'http://localhost:5050/auth/google/callback'
	}

};
