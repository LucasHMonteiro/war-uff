document.getElementById("code").innerHTML += room_code;
players_list = document.getElementById("players");

var lobbyInterval = setInterval(function(){
    fetch(server_base_url + 'rooms/' + room_code, {
        method: 'get',
        headers: {
            'Content-Type': "application/json"
        }
    }).then(function(response) {
        response.text().then(function(data){
            room_data = JSON.parse(data);
            players_array = Object.entries(room_data.players).map(p => p[1].name);
            players_ids = Object.entries(room_data.players).map(p => p[1].identity);
            players_list.innerHTML = players_array.join(', ').toUpperCase();
            if(players_array.length == room_data.size){
                clearInterval(lobbyInterval);
                names = formatNames(players_array);
                indexes = Array.apply(null, { length: goal_cards.length}).map(Number.call, Number)
                for (var index = 0; index < names.length; index++) {
                    goals = [
                        popRandomElement(indexes),
                        popRandomElement(indexes),
                        popRandomElement(indexes)
                    ]
                    players[names[index]] = new Player(names[index], index, goals.join(), players_ids[index]);
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
    return namesArray.map(i => i.toUpperCase());
}
