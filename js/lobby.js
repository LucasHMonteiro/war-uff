document.getElementById("code").innerHTML += room_code;
players_list = document.getElementById("players");

var lobbyInterval = setInterval(function(){
    fetch('https://war-room-server.herokuapp.com/rooms/'+room_code, {
        method: 'get',
        headers: {
            'Content-Type': "application/json"
        }
    }).then(function(response) {
        response.text().then(function(data){
            room_data = JSON.parse(data);
            players_list.innerHTML = room_data.players.join(', ').toUpperCase();
            if(room_data.players.length == room_data.size){
                clearInterval(lobbyInterval);
                names = room_data.players;
                for (var index = 0; index < names.length; index++) {
                    players[names[index]] = new Player(names[index], index);
                }
                $(function(){
                    $("#content").load("map.html");
                });
            }
        });
    }).catch(function(err) {
        players_list.innerHTML = err;
    });
}, 500);

function formatNames(namesArray) {
    return;
}