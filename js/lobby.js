document.getElementById("code").innerHTML += room_code;
players = document.getElementById("players")

var lobbyInterval = setInterval(function(){
    fetch('http://war-room-server.herokuapp.com/rooms/'+room_code, {
        method: 'get',
        headers: {
            'Content-Type': "application/json"
        }
    }).then(function(response) {
        response.text().then(function(data){
            room_data = JSON.parse(data);
            players.innerHTML = room_data.players;
            if(room_data.players.length == room_data.size){
                clearInterval(lobbyInterval);
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