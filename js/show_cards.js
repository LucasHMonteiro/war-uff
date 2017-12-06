current_card = 0;
forms_tags = {
    'triangle': '<img src="triangle.png" alt="Triangle">',
    'circle': '<img src="circle.png" alt="Circle">',
    'square': '<img src="square.png" alt="Circle">'
}
dots = document.getElementById('dots');
card_contents = my_cards[current_card].split(':');
if (card_contents[1]) {
    document.getElementById('card-title').innerHTML = forms_tags[card_contents[1]];
}else{
    document.getElementById('card-title').innerHTML = 'OBJETIVO';
}
document.getElementById('card-text').innerHTML = card_contents[0];
document.getElementById('dots').innerHTML = my_cards.map(i => '<li>.</li>').join('');
dots = dots.getElementsByTagName('li')
dots[current_card].style.color = '#990303';
document.getElementById('prev').addEventListener('click', function() {
    if(current_card > 0){
        dots[current_card].style.color = '#cecece';
        current_card -= 1;
        dots[current_card].style.color = '#990303';
        card_contents = my_cards[current_card].split(':');
        if(card_contents[1]){
            document.getElementById('card-title').innerHTML = forms_tags[card_contents[1]];
        } else {
            document.getElementById('card-title').innerHTML = 'OBJETIVO';
        }
        document.getElementById('card-text').innerHTML = card_contents[0];
    }
});
document.getElementById('next').addEventListener('click', function () {
    if (current_card < my_cards.length - 1) {
        dots[current_card].style.color = '#cecece';
        current_card += 1;
        dots[current_card].style.color = '#990303';
        card_contents = my_cards[current_card].split(':');
        if (card_contents[1]) {
            document.getElementById('card-title').innerHTML = forms_tags[card_contents[1]];
        } else {
            document.getElementById('card-title').innerHTML = 'OBJETIVO';
        }
        document.getElementById('card-text').innerHTML = card_contents[0];
    }
});

document.getElementById('get-cards').addEventListener('click', function() {
    fetch(server_base_url + 'rooms/' + room_code, {
        method: 'get',
        headers: {
            'Content-Type': "application/json"
        }
    }).then(function (response) {
        response.text().then(function (data) {
            room_data = JSON.parse(data);
            players_array = Object.entries(room_data.players).map(p => p[1]);
            if (check_cards(players_array)) {
                me = players_array.filter(e => e.identity == identity);
                my_cards = me[0].attributes.split(',').map(x => parseInt(x));
                my_goal = [goal_cards[my_cards[0]]];
                my_territories = my_cards.slice(1).map(i => territory_cards[i]);
                my_cards = my_goal.concat(my_territories);
                $(function () {
                    $('#content').load("cards.html");
                });
            }
        });
    }).catch(function (err) {
        players.innerHTML = err;
    });
});
