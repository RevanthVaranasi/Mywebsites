var mtext = document.getElementById("mainText");
var btn  = document.getElementById("submitBtn");
var heading= document.getElementById("Heading");

var firebaseHeadingRef = firebase.database().ref().child("txt/xf");

firebaseHeadingRef.on('value', function(datasnap){
    heading.innerText = datasnap.val().fds;
});

function submitClick(){
    var messageText = mtext.value;

    var firebaseref = firebase.database().ref("txt/t1");

    firebaseref.set(messageText);

}