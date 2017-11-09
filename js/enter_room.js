button = document.getElementById('submit')
button.onclick = function(){
    room_code = document.getElementById('code').value;
    name = document.getElementById('name').value;
    console.log(room_code, name);
    if(room_code && name){
        fetch('https://war-room-server.herokuapp.com/rooms/'+room_code.toUpperCase()+'/players', {
            method: 'POST',
            body: '{"name":"'+name+'"}',
            headers: {
                'Content-Type': "application/json"
            }
        }).then(function(myBlob){
            $('#content').load("wait_game.html");
        });
    }
}