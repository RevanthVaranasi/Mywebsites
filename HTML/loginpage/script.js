function login(){
    var uname = document.getElementById("uname").value;
    var pass = document.getElementById("pass").value;
    
    var fbr = firebase.database().ref("/users");
    fbr.on('value',function(snapshot){
       var data = snapshot.val();
        var key = Object.keys(data)[0]

       if (data[key].username===uname && data[key].password === pass)
            window.alert("Successfully logged in.");
            else{
                alert("no uid ofund");
            } 
    });
}

function reg(){
    var uname = document.getElementById("uname").value;
    var pass = document.getElementById("pass").value;
    var fbr = firebase.database().ref("/users");
    fbr.push().set({
        username: uname,
        password: pass
    })
}