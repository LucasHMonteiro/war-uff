turnsManager = new TurnsManager(names);
buildNamesList();
boardInit();
document.getElementById('player_names').addEventListener('click', function (e) {
  if (e.target && e.target.nodeName == 'LI' && !e.target.classList.contains('animated')) {
    var lis = this.getElementsByTagName('li');
    for (var index = 0; index < lis.length; index++) {
      lis[index].classList.remove('animated');
      lis[index].classList.remove('pulse');
      lis[index].classList.remove('infinite');
    }
  }
});

function buildNamesList() {
  listBuilder = '';
  colors = ['crimson', 'dodgerblue', 'limegreen', 'deeppink', 'orangered', 'yellow', 'purple'];
  for (var i = 0; i < names.length; i++) {
    listBuilder += '<li id="player' + i + '" color="'+colors[i]+'">' + names[i] + '</li>'
  }
  $("#player_names").html(listBuilder);
}

function boardInit() {
  territories_names = Object.keys(territories);
  num_players = names.length;
  territories_per_player = Math.floor(territories_names.length / num_players);
  mod = territories_names.length % num_players;
  for (var i = 0; i < names.length + mod; i++) {
    for (var j = 0; j < territories_per_player; j++) {
      target_territory_index = Math.floor(Math.random() * (territories_names.length-1));
      name = territories_names[target_territory_index];
      target_territory = document.getElementsByClassName(name)[0];
      target_territory.classList.add('taken-' + i % names.length);
      players[names[i % names.length]].territories.push(name);
      territories_names.splice(target_territory_index, 1);
      territories[name].troops = 1;
      territories[name].owner = names[i % names.length];
      updateTerritory(name, tooltips[name]);
    }
    players[names[i % names.length]].calculateTroops();
  }
}

turnsManager.firstTurn();
next_turn = document.getElementsByClassName('next-phase')[0];
next_turn.addEventListener('click', function() {
  switch (phase) {
    case 'alloc':
      phase = 'attack';
      break;
    case 'attack':
      phase = 'realloc';
      break;
    case 'realloc':
      phase = 'alloc';
      turnsManager.nextTurn();
      break;
    default:
      break;
  }
});
