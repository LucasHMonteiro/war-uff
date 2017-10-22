button = document.getElementById('submit')
button.onclick = function(){
    code = document.getElementById('code').value;
    name = document.getElementById('name').value;
    console.log(code, name);
    if(code && name){
        fetch('http://localhost:3000/rooms/'+code+'/players', {
            method: 'POST',
            body: '{"name":"'+name+'"}',
            headers: {
                'Content-Type': "application/json"
            }
        });
    }
}