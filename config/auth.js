// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'twitterAuth' : {
		'consumerKey' 		: 'your-consumer-key-here',
		'consumerSecret' 	: 'your-client-secret-here',
		'callbackURL' 		: 'http://127.0.0.1:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '617810408702-ses9607r95nojkcg2jopkcs0fc9lfvjl.apps.googleusercontent.com',
		'clientSecret' 	: 'ug0nYTAvUP97EBkwZHzukYJ4',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};
