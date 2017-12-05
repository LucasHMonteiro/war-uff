players_counter = 0;
set_goals_interval = setInterval(function () {
  fetch(server_base_url + 'rooms/' + room_code.toUpperCase() + '/players/' + players[names[players_counter]].id, {
    method: 'PATCH',
    body: JSON.stringify({ "attributes": players[names[players_counter]].goal_cards }),
    headers: {
      'Content-Type': "application/json"
    }
  }).then(function (myBlob) {
    if (players_counter < names.length) {
      if (players_counter + 1 == names.length) {
        console.log(players_counter);
        clearInterval(set_goals_interval);
        //        players_counter--;
      } else {
        players_counter++;
      }
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
  for (var i = 0; i < continents['praia-vermelha'].territories.length - 1; i++) {
    players[names[2]].territories.push(continents['praia-vermelha'].territories[i]);
    territories[continents['praia-vermelha'].territories[i]].troops = 2;
    territories[continents['praia-vermelha'].territories[i]].owner = names[2];
    target_territory = document.getElementsByClassName(continents['praia-vermelha'].territories[i])[0];
    target_territory.classList.add('taken-' + 2);
    updateTerritory(continents['praia-vermelha'].territories[i], tooltips[continents['praia-vermelha'].territories[i]]);
  }
  players[names[0]].territories.push(continents['praia-vermelha'].territories[continents['praia-vermelha'].territories.length - 1]);
  territories[continents['praia-vermelha'].territories[continents['praia-vermelha'].territories.length - 1]].troops = 1;
  territories[continents['praia-vermelha'].territories[continents['praia-vermelha'].territories.length - 1]].owner = names[0];
  target_territory = document.getElementsByClassName(continents['praia-vermelha'].territories[continents['praia-vermelha'].territories.length - 1])[0];
  target_territory.classList.add('taken-' + 0);
  updateTerritory(continents['praia-vermelha'].territories[continents['praia-vermelha'].territories.length - 1], tooltips[continents['praia-vermelha'].territories[continents['praia-vermelha'].territories.length - 1]]);
  for (var i = 0; i < continents['gragoata'].territories.length; i++) {
    players[names[2]].territories.push(continents['gragoata'].territories[i]);
    territories[continents['gragoata'].territories[i]].troops = 2;
    territories[continents['gragoata'].territories[i]].owner = names[2];
    target_territory = document.getElementsByClassName(continents['gragoata'].territories[i])[0];
    target_territory.classList.add('taken-' + 2);
    updateTerritory(continents['gragoata'].territories[i], tooltips[continents['gragoata'].territories[i]]);
  }
  for (var i = 0; i < continents['valonguinho'].territories.length; i++) {
    players[names[2]].territories.push(continents['valonguinho'].territories[i]);
    territories[continents['valonguinho'].territories[i]].troops = 2;
    territories[continents['valonguinho'].territories[i]].owner = names[2];
    target_territory = document.getElementsByClassName(continents['valonguinho'].territories[i])[0];
    target_territory.classList.add('taken-' + 2);
    updateTerritory(continents['valonguinho'].territories[i], tooltips[continents['valonguinho'].territories[i]]);
  }
  for (var i = 0; i < continents['UCI'].territories.length; i++) {
    players[names[1]].territories.push(continents['UCI'].territories[i]);
    territories[continents['UCI'].territories[i]].troops = 2;
    territories[continents['UCI'].territories[i]].owner = names[1];
    target_territory = document.getElementsByClassName(continents['UCI'].territories[i])[0];
    target_territory.classList.add('taken-' + 1);
    updateTerritory(continents['UCI'].territories[i], tooltips[continents['UCI'].territories[i]]);
  }
  players[names[0]].calculateTroops();
  players[names[1]].calculateTroops();
  players[names[2]].calculateTroops();
}

turnsManager.firstTurn();
turnsManager.showAllocMenu();
next_turn = document.getElementsByClassName('next-phase')[0];
players[names[turnsManager.currentPlayer]].calculateTroops();
document.getElementsByClassName('next-phase')[0].innerHTML = 'ATACAR';


next_turn.onclick = function () {
    switch (phase) {
      case 'alloc':
        if (players[names[turnsManager.currentPlayer]].troops == 0) {
          phase = 'attack';
          turnsManager.showAttackMenuIntro();
          document.getElementsByClassName('next-phase')[0].innerHTML = 'REALOCAR';
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
        document.getElementsByClassName('next-phase')[0].innerHTML = 'PRÓXIMO';
        objective_check(goal_cards[5]);
        break;
      case 'realloc':
        console.log('Alloc')
        phase = 'alloc';
        turnsManager.nextTurn();
        players[names[turnsManager.currentPlayer]].calculateTroops();
        turnsManager.showAllocMenu();
        document.getElementsByClassName('next-phase')[5].innerHTML = 'ATACAR';
        break;
      default:
        break;
    }
  };

