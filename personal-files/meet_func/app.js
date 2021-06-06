var firebaseConfig = {
    apiKey: "AIzaSyCxVa_ES_OsPqHr1pTpyIa0hVET7cjPxZM",
    authDomain: "harrify-data.firebaseapp.com",
    databaseURL: "https://harrify-data-default-rtdb.firebaseio.com",
    projectId: "harrify-data",
    storageBucket: "harrify-data.appspot.com",
    messagingSenderId: "809277492044",
    appId: "1:809277492044:web:70e9433832b73214269de9",
    measurementId: "G-8E9DJ85NH7"
  };


firebase.initializeApp(firebaseConfig);

function makeid(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
    result.push(characters.charAt(Math.floor(Math.random() * 
charactersLength)));
}
return result.join('');
}

var text = window.location.search.substr(1);
if(text){
    firebase.database().ref("meet_r/open/" + makeid(5)).set({
        id: text
    },function(err){})
}
