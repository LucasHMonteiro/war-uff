var dotCounter = 0;
var waitInterval = setInterval(function(){
    if(dotCounter < 3){
        document.getElementById('wait_title').innerHTML += '.';
        dotCounter++;
    }else{
        document.getElementById('wait_title').innerHTML = 'Waiting Game to Start';
        dotCounter = 0;
    }
    fetch(server_base_url + 'rooms/' + room_code, {
        method: 'get',
        headers: {
            'Content-Type': "application/json"
        }
    }).then(function(response) {
        response.text().then(function(data){
            room_data = JSON.parse(data);
            players_array = Object.entries(room_data.players).map(p => p[1]);
            if(check_cards(players_array)){
                me = players_array.filter(e => e.identity == identity);
                my_cards = me[0].attributes.split(',').map(x => parseInt(x));
                console.log("my_cards: " + my_cards);
                my_goal = [goal_cards[my_cards[0]]];
                my_territories = my_cards.slice(1).map(i => territory_cards[i]);
                my_cards = my_goal.concat(my_territories);
                clearInterval(waitInterval);
                $(function(){
                    $('#content').load("cards.html");
                });
            }
        });
    }).catch(function(err) {
        players.innerHTML = err;
    });
}, 500);

function check_cards(players) {
    test = players.map(i => !!(i.identity == identity && i.attributes));
    return test.includes(true);
}