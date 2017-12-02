button = document.getElementById('submit')
identity = Math.random().toString(36).substring(2, 20);
button.onclick = function(){
    room_code = document.getElementById('code').value;
    name = document.getElementById('name').value;
    if(room_code && name){
        fetch(server_base_url + 'rooms/' + room_code.toUpperCase() + '/players', {
            method: 'POST',
            body: JSON.stringify({ "name": name, "identity": identity}),
            headers: {
                'Content-Type': "application/json"
            }
        }).then(function(myBlob){
            $('#content').load("wait_game.html");
        });
    }
}

// button = document.getElementById('submit')
// identity = 'nbi0kzjen69';
// button.onclick = function () {
//     room_code = 'LNX2Y';
//     name = 'qwer';
//     $('#content').load("wait_game.html");
// }