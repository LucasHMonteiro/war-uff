new_room_button = document.getElementById("new_room");
enter_button = document.getElementById("enter");

new_room_button.onclick = function(){
    $(function(){
        $("#content").load("game_setup.html");
    });
}

enter_button.onclick = function(){
    $(function(){
        $("#content").load("enter_room.html");
    });
}
