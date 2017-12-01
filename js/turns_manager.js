function TurnsManager(players){
  this.players = players;
  this.currentPlayer = 0;

  this.setTurn = function(player) {
    this.currentPlayer = player%this.players.length;
    li_names = document.getElementById('player_names').getElementsByTagName('li');
    for (var index = 0; index < li_names.length; index++) {
      li_names[index].classList.remove('animated');
      li_names[index].classList.remove('pulse');
      li_names[index].classList.remove('infinite');
    }
    li_names[player].className += ' animated pulse infinite';

    territory_html_objects = document.getElementsByClassName('territory');
    for (let index = 0; index < territory_html_objects.length; index++) {
      territory_html_objects[index].onclick = null;
      territory_html_objects[index].onclick = function() {
        switch (phase) {
          case 'alloc':
            if(this.classList.contains('taken-'+turnsManager.currentPlayer))
              alloc(this.classList[0]);
            break;
          case 'attack':
            break;
          case 'realloc':
            break;
          default:
            break;
        }
      }
    }
  }

  this.firstTurn = function () {
    this.currentPlayer = 0;
    this.setTurn(0);
  }

  this.nextTurn = function () {
    this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
    this.setTurn(this.currentPlayer);
  }
}