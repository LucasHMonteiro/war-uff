var i = 3;
document.getElementById('inc').innerHTML = i;
function increment() {
    if(i < 6) i++;
    document.getElementById('inc').innerHTML = i;
}

function decrement(){
    if(i > 3) i--;
    document.getElementById('inc').innerHTML = i;
}

minus = document.getElementById('minus');
plus = document.getElementById('plus');

minus.onclick = decrement;
plus.onclick = increment;

create = document.getElementById('create');
create.onclick = function(){
    room_code = Math.random().toString(36).substring(2, 7);
    room_code = room_code.toUpperCase();
    fetch('https://war-room-server.herokuapp.com/rooms', {
        method: 'POST',
        body: '{"code": "'+room_code+'", "size": '+i+'}',
        headers: {
            'Content-Type': "application/json"
        }
    });
    $(function(){
        $("#content").load("lobby.html");
    });
}