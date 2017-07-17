
window.onload = function() {
FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    var accessToken = response.authResponse.accessToken;
    console.log(accessToken);
    console.log(response);
    facebookName();
    //loggedIn = true;
    loggedIn();
  } 
  else {
  	console.log('Not logged into FB')
  }
} );
};

function facebookName () {
	FB.api('/me', function(response) {
    //fbUser = JSON.stringify(response)
    //console.log(fbUser);
    console.log(response.id)
    console.log(response.name)
    fbUser = new user (response.id, response.name, "", "");
    users.push(fbUser);
    console.log(users);
});
} 
/**
 * Handle successful sign-ins.
 */
var onSuccess = function(user) {
    console.log('Signed in as ' + user.getBasicProfile().getName());
 };

/**
 * Handle sign-in failures.
 */
var onFailure = function(error) {
    console.log(error);
};


gapi.load('auth2'),
    function() {
        auth2 = gapi.auth2.init({
            client_id: '520273713084-3nf5h5gnn1dqmljom2n2p0onrjlhkh27.apps.googleusercontent.com',
            fetch_basic_profile: false,
            scope: 'profile'
        });
        auth2.attachClickHandler('signin-button', {}, onSuccess, onFailure);
    };

auth2.signIn().then(function() {
    console.log(auth2.currentUser.get().getId());
})


function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    googleUser = new user (profile.getId(), profile.getName(), googleUser.getAuthResponse().id_token, profile.getImageUrl());
    googleUser.push(users);
    console.log(users);
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
        console.log('User signed out of Google.');
    });

    FB.logout(function(response) {
   	console.log('User signed out of Facebook.')
});
    loggedIn = false;
    loggedOut();
}

var xhr = new XMLHttpRequest();
xhr.open('POST', '/');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
    console.log('Signed in as: ' + xhr.responseText);
};
xhr.send('idtoken=' + id_token);

var user = function (id, name, token, photo) {
	this.id = id;
	this.name = name;
	this.token = token;
	this.photo = photo;
}

var users = [];

var loggedIn;

function loggedView () {
	if (loggedIn === true) {
		$('.loggedOut').hide();
		$('loggedIn').show();

	}
	else {
		$('loggedIn').hide();
		$('loggedOut').show();
	}
}

function loggedOut () {
	$('.out').show();
	$('.in').hide();
	users = [];
	$('#userName').text("");
	$('#userPic').attr('src', "");
	location.reload(true);
}


$('.signInBtn').on('click', function (event) {
	event.preventDefault();

	loggedIn();
});

function loggedIn () {
	$('.in').show();
	$('.out').hide();
	$('#userName').text(users[0].name);
	$('#userPic').attr('src', users[0].name);
	location.reload(true);
}