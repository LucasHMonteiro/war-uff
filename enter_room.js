button = document.getElementById('submit')
button.onclick = function(){
    room_code = document.getElementById('code').value;
    name = document.getElementById('name').value;
    console.log(room_code, name);
    if(room_code && name){
        fetch('http://localhost:3000/rooms/'+room_code+'/players', {
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