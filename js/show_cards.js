my_cards = [];
get_cards_interval = setInterval(function() {
    fetch(server_base_url + 'rooms/' + room_code + '/players/' + identity, {
        method: 'get',
        headers: {
            'Content-Type': "application/json"
        }
    }).then(function (response) {
        response.text().then(function(data) {
            room_data = JSON.parse(data);
            if (room_data.attributes) {
                my_cards = room_data.attributes.split(',').map(x => parseInt(x));
                my_cards = my_cards.map(i => goal_cards[i]);
                clearInterval(get_cards_interval);
                $(function () {
                    current_card = 0;
                    dots = document.getElementById('dots');
                    document.getElementById('card-text').innerHTML = my_cards[current_card];
                    document.getElementById('dots').innerHTML = my_cards.map(i => '<li>.</li>').join('');
                    dots = dots.getElementsByTagName('li')
                    dots[current_card].style.color = '#990303';
                    document.getElementById('prev').disabled = true;
                    document.getElementById('prev').addEventListener('click', function() {
                        if(!this.disabled){
                            current_card -= 1;
                            dots[current_card].style.color = '#990303';
                            dots[current_card + 1].style.color = '#cecece';
                            document.getElementById('card-text').innerHTML = my_cards[current_card];
                            document.getElementById('next').disabled = false;
                            document.getElementById('next').style.display = 'inline-block';
                            if(current_card - 1 < 0){
                                this.disabled = true;
                                //this.style.display = 'none';
                            }
                        }
                    });
                    document.getElementById('next').addEventListener('click', function () {
                        if (!this.disabled) {
                            current_card += 1;
                            dots[current_card].style.color = '#990303';
                            dots[current_card - 1].style.color = '#cecece';
                            document.getElementById('card-text').innerHTML = my_cards[current_card];
                            document.getElementById('prev').disabled = false;
                            document.getElementById('prev').style.display = 'inline-block';
                            if (current_card + 1 >= my_cards.length) {
                                this.disabled = true;
                                //this.style.display = 'none';
                            }
                        }
                    })
                });
            }
        });
    }).catch(function (err) {
        document.getElementById('cards').innerHTML = err;
    });
}, 250);
