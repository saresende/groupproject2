
gapi.load('auth2'),
    function() {
        auth2 = gapi.auth2.init({
            client_id: '520273713084-3nf5h5gnn1dqmljom2n2p0onrjlhkh27.apps.googleusercontent.com',
            fetch_basic_profile: false,
            scope: 'profile'
        });
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
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
        console.log('User signed out.');
    });
}

var xhr = new XMLHttpRequest();
xhr.open('POST', '/');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
    console.log('Signed in as: ' + xhr.responseText);
};
xhr.send('idtoken=' + id_token);