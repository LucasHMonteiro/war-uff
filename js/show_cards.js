current_card = 0;
dots = document.getElementById('dots');
document.getElementById('card-text').innerHTML = my_cards[current_card];
document.getElementById('dots').innerHTML = my_cards.map(i => '<li>.</li>').join('');
dots = dots.getElementsByTagName('li')
dots[current_card].style.color = '#990303';
document.getElementById('prev').addEventListener('click', function() {
    if(current_card > 0){
        console.log(current_card);
        current_card -= 1;
        dots[0].style.color = '#cecece';
        dots[1].style.color = '#cecece';
        dots[2].style.color = '#cecece';
        dots[current_card].style.color = '#990303';
        document.getElementById('card-text').innerHTML = my_cards[current_card];
    }
});
document.getElementById('next').addEventListener('click', function () {
    if (current_card < my_cards.length - 1) {
        console.log(current_card);
        current_card += 1;
        dots[0].style.color = '#cecece';
        dots[1].style.color = '#cecece';
        dots[2].style.color = '#cecece';
        dots[current_card].style.color = '#990303';
        document.getElementById('card-text').innerHTML = my_cards[current_card];
    }
})
