players_counter = 0;
set_goals_interval = setInterval(function () {
  fetch(server_base_url + 'rooms/' + room_code.toUpperCase() + '/players/' + players[names[players_counter]].id, {
    method: 'PATCH',
    body: JSON.stringify({ "attributes": players[names[players_counter]].goal_cards }),
    headers: {
      'Content-Type': "application/json"
    }
  }).then(function (myBlob) {
    if (players_counter < names.length){
      if(players_counter+1 == names.length){
        console.log(players_counter);
        clearInterval(set_goals_interval);
        players_counter--;
      }
      players_counter++;
    }
  });
}, 250);
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
    listBuilder += '<li id="player' + i + '" color="' + colors[i] + '">' + names[i] + '</li>'
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
      if(territories_names.length > 0){
        target_territory_index = Math.floor(Math.random() * (territories_names.length - 1));
        name = territories_names[target_territory_index];
        target_territory = document.getElementsByClassName(name)[0];
        target_territory.classList.add('taken-' + i % names.length);
        players[names[i % names.length]].territories.push(name);
        territories_names.splice(target_territory_index, 1);
        territories[name].troops = 1;
        territories[name].owner = names[i % names.length];
        updateTerritory(name, tooltips[name]);
      }else{
        break;
      }
    }
    players[names[i % names.length]].calculateTroops();
  }
}

turnsManager.firstTurn();
turnsManager.showAllocMenu();
next_turn = document.getElementsByClassName('next-phase')[0];
players[names[turnsManager.currentPlayer]].calculateTroops();
first_loop = 0;
next_turn.onclick = function () {
  if (players[names[turnsManager.currentPlayer]].troops == 0) {
    turnsManager.nextTurn();
    players[names[turnsManager.currentPlayer]].calculateTroops();
    turnsManager.showAllocMenu();
    document.getElementsByClassName('next-phase')[0].innerHTML = 'ALOCAR';
    first_loop++;
    if (first_loop >= names.length) {
      next_turn.onclick = null;
      next_turn.onclick = function () {
        switch (phase) {
          case 'alloc':
            if (players[names[turnsManager.currentPlayer]].troops == 0) {
              phase = 'attack';
              turnsManager.showAttackMenuIntro();
              document.getElementsByClassName('next-phase')[0].innerHTML = 'ATACAR';
              console.log('Attack')
            }
            break;
          case 'attack':
            console.log('Realloc')
            document.getElementById('support-troops').innerHTML = 0;
            document.getElementById('support-origin').innerHTML = "Origem";
            document.getElementById('support-destiny').innerHTML = "Destino";
            turnsManager.selected_territories = 0;
            document.getElementById('support-confirm').onclick = null;
            phase = 'realloc';
            turnsManager.showReallocMenuIntro();
            document.getElementsByClassName('next-phase')[0].innerHTML = 'REALOCAR';
            objective_check(players[names[turnsManager.currentPlayer]].goal_cards[0]);
            break;
          case 'realloc':
            console.log('Alloc')
            phase = 'alloc';
            turnsManager.nextTurn();
            players[names[turnsManager.currentPlayer]].calculateTroops();
            turnsManager.showAllocMenu();
            document.getElementsByClassName('next-phase')[0].innerHTML = 'ALOCAR';
            break;
          default:
            break;
        }
      };
    }
  };
}

