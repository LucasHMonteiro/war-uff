document.getElementById("code").innerHTML += room_code;
players = document.getElementById("players")

var interval = setInterval(function(){
    fetch('http://war-room-server.herokuapp.com/rooms/'+room_code, {
        method: 'get'
    }).then(function(response) {
        response.text().then(function(data){
            room_data = JSON.parse(data);
            players.innerHTML = room_data.players;
            if(room_data.free_space == 0){
                clearInterval(interval);
                names = room_data.players
                $(function(){
                    $("#content").load("map.html");
                });
            }
        });
    }).catch(function(err) {
        players.innerHTML = err;
    });
}, 500);