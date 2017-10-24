var dotCounter = 0;
var waitInterval = setInterval(function(){
    if(dotCounter < 3){
        document.getElementById('wait_title').innerHTML += '.';
        dotCounter++;
    }else{
        document.getElementById('wait_title').innerHTML = 'Waiting Game to Start';
        dotCounter = 0;
    }
    fetch('http://localhost:3000/rooms/'+room_code, {
        method: 'get',
        headers: {
            'Content-Type': "application/json"
        }
    }).then(function(response) {
        response.text().then(function(data){
            room_data = JSON.parse(data);
            console.log(room_data);
            if(room_data.players.length == room_data.size){
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