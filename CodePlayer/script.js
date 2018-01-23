$("#html").click(function(){
    $("#html").css("background-color","white");
    $("#css,#js,#result").css("background-color","rgb(104, 98, 98)");
    $("#menubar").css("border-radius","10px 0px 0px 10px ");
    $("#hdiv").children().html("this is html div");
    });

$("#css").click(function(){
    $("#css").css("background-color","white");
    $("#html,#js,#result").css("background-color","rgb(104, 98, 98)");
    $("#menubar").css("border-radius","10px");
    });

$("#js").click(function(){
    $("#js").css("background-color","white");
    $("#html,#css,#result").css("background-color","rgb(104, 98, 98)");
    $("#menubar").css("border-radius","10px");
    });

$("#result").click(function(){
    $("#result").css("background-color","white");
    $("#html,#js,#css").css("background-color","rgb(104, 98, 98)");
    $("#menubar").css("border-radius","10px");
    });
