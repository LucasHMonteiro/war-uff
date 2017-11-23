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

    free_territories = document.getElementsByClassName('free');
    for (let index = 0; index < free_territories.length; index++) {
      free_territories[index].classList.remove('free_0');
      free_territories[index].classList.remove('free_1');
      free_territories[index].classList.remove('free_2');
      free_territories[index].classList.remove('free_3');
      free_territories[index].classList.remove('free_4');
      free_territories[index].classList.remove('free_5');
      free_territories[index].classList.add('free_'+player);
      free_territories[index].addEventListener('click', function() {
        this.classList.remove('free_' + player);
        this.classList.remove('free');
        this.classList.add('taken_' + player);
      });
    }
  }

  this.firstTurn = function () {
    this.currentPlayer = 0;
    this.setTurn(0);
  }

  this.nextTurn = function () {
    this.currentPlayer = (this.currentPlayer+1)%this.players.length;
    this.setTurn(this.currentPlayer);
  }
}

function buildNamesList() {
  listBuilder = '';
  colors = ['crimson', 'dodgerblue', 'limegreen', 'deeppink', 'orangered', 'yellow', 'purple'];
  for (var i = 0; i < names.length; i++) {
    listBuilder += '<li id="player' + i + '" color="'+colors[i]+'">' + names[i] + '</li>'
  }
  $("#player_names").html(listBuilder);
}

$(function(){
  buildNamesList();
  turnsManager = new TurnsManager(names);
  turnsManager.firstTurn();
  end_turn = document.getElementsByClassName('end_turn')[0];
  end_turn.addEventListener('click', function() {
    turnsManager.nextTurn();
  })
});
