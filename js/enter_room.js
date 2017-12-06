button = document.getElementById('submit')
identity = Math.random().toString(36).substring(2, 20);
button.onclick = function(){
    room_code = document.getElementById('code').value.toUpperCase();
    name = document.getElementById('name').value;
    if(room_code && name){
        fetch(server_base_url + 'rooms/' + room_code + '/players', {
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
// identity = '7fclss3gvd9';
// button.onclick = function () {
//     room_code = 'Q24X7';
//     name = 'ERICK';
//     $('#content').load("wait_game.html");
// }

// button = document.getElementById('submit')
// identity = 'zok988pnlvr';
// button.onclick = function () {
//     room_code = 'Q24X7';
//     name = 'Lucas monteiro';
//     $('#content').load("wait_game.html");
// }

// button = document.getElementById('submit')
// identity = '9lm83h0otmd';
// button.onclick = function () {
//     room_code = 'Q24X7';
//     name = 'VITOR';
//     $('#content').load("wait_game.html");
// }