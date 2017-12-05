function TurnsManager(players_names) {
  this.players_names = players_names;
  this.currentPlayer = 0;
  this.selected_territories = 0;
  this.first_attack=false;

  this.setTurn = function (player) {
    li_names = document.getElementById('player_names').getElementsByTagName('li');
    for (var index = 0; index < li_names.length; index++) {
      li_names[index].classList.remove('animated');
      li_names[index].classList.remove('pulse');
      li_names[index].classList.remove('infinite');
    }
    li_names[player].className += ' animated pulse infinite';
    territory_html_objects = document.getElementsByClassName('territory');
    for (let index = 0; index < territory_html_objects.length; index++) {
      self = this;
      territory_html_objects[index].onclick = null;
      territory_html_objects[index].onclick = function () {
        switch (phase) {
          case 'alloc':
            if (this.classList.contains('taken-' + turnsManager.currentPlayer))
              alloc(this.classList[0]);
            self.showAllocMenu();
            turnsManager.first_attack=true;
            break;
          case 'attack':
            if (self.selected_territories == 0) {
              if (this.classList.contains('taken-' + turnsManager.currentPlayer) && territories[this.classList[0]].troops > 1) {
                self.selected_territories = 1;
                self.showSupportMenu();
                document.getElementById('support-origin').innerHTML = territories_true_names[this.classList[0]];
                attack_menu();
              }
            } else {
              if (!(this.classList.contains('taken-' + turnsManager.currentPlayer)) &&
                territories[true_name_to_code_name(document.getElementById('support-origin').innerHTML)].adjacents.indexOf(territories[this.classList[0]]) != -1) {
                  document.getElementById('support-destiny').innerHTML = territories_true_names[this.classList[0]];
                  attack_confirm();
              }

            }
            break;
          case 'realloc':
            if (this.classList.contains('taken-' + turnsManager.currentPlayer)) {
              if (self.selected_territories == 0) {
                if (territories[this.classList[0]].troops > 1) {
                  self.selected_territories = 1;
                  self.showSupportMenu();
                  document.getElementById('support-origin').innerHTML = territories_true_names[this.classList[0]];
                  realloc_menu();
                }
              } else {
                if (territories[true_name_to_code_name(document.getElementById('support-origin').innerHTML)].adjacents.indexOf(territories[this.classList[0]]) != -1) {
                  document.getElementById('support-destiny').innerHTML = territories_true_names[this.classList[0]];
                  realloc_confirm();
                }
              }
            }
            break;
          default:
            break;
        }
      }
    }
  }

  this.firstTurn = function () {
    this.currentPlayer = players_names.length - 1;
    this.setTurn(players_names.length - 1);
  }

  this.nextTurn = function () {
    if (this.currentPlayer == 0) {
      this.currentPlayer = players_names.length - 1;
    } else this.currentPlayer -= 1;
    this.setTurn(this.currentPlayer);
  }

  this.showAllocMenu = function () {
    menu = document.getElementById('alloc-phase');
    menu.innerHTML = 'Tropas Restantes: ' + players[this.players_names[this.currentPlayer]].troops;
    menu.style.display = 'inline-block';
    document.getElementById('attack-phase').style.display = 'none';
    document.getElementById('realloc-phase').style.display = 'none';
//    document.getElementById('support-menu').style.display = 'none';
    document.getElementById('support-troops').style.display = 'none';
    document.getElementById('support-cancel').style.display = 'none';
    document.getElementById('support-confirm').style.display = 'none';
    document.getElementById('support-plus').style.display = 'none';
    document.getElementById('support-minus').style.display = 'none';
    document.getElementById('support-origin').style.display = 'none';
    document.getElementById('support-destiny').style.display = 'none';
  }

  this.showAttackMenuIntro = function () {
    menu = document.getElementById('attack-phase');
    menu.innerHTML = 'Escolha seu Território ';
    menu.style.display = 'inline-block';
    document.getElementById('alloc-phase').style.display = 'none';
    document.getElementById('realloc-phase').style.display = 'none';
//    document.getElementById('support-menu').style.display = 'none';
    document.getElementById('support-troops').style.display = 'none';
    document.getElementById('support-cancel').style.display = 'none';
    document.getElementById('support-confirm').style.display = 'none';
    document.getElementById('support-plus').style.display = 'none';
    document.getElementById('support-minus').style.display = 'none';
    document.getElementById('support-origin').style.display = 'none';
    document.getElementById('support-destiny').style.display = 'none';
  }


  this.showReallocMenuIntro = function () {
    menu = document.getElementById('realloc-phase');
    menu.innerHTML = 'Escolha seu Território ';
    menu.style.display = 'inline-block';
    document.getElementById('attack-phase').style.display = 'none';
    document.getElementById('alloc-phase').style.display = 'none';
    //document.getElementById('support-menu').style.display = 'none';
    document.getElementById('support-troops').style.display = 'none';
    document.getElementById('support-cancel').style.display = 'none';
    document.getElementById('support-confirm').style.display = 'none';
    document.getElementById('support-plus').style.display = 'none';
    document.getElementById('support-minus').style.display = 'none';
    document.getElementById('support-origin').style.display = 'none';
    document.getElementById('support-destiny').style.display = 'none';
  }

  this.showSupportMenu = function () {
    document.getElementById('realloc-phase').innerHTML = 'Escolha destino ';
//    document.getElementById('support-menu').style.display = 'inline-block';
    document.getElementById('support-origin').style.display = 'inline-block';
    document.getElementById('support-destiny').style.display = 'inline-block';
    document.getElementById('support-troops').style.display = 'inline-block';
    document.getElementById('support-cancel').style.display = 'inline-block';
    document.getElementById('support-confirm').style.display = 'inline-block';
    document.getElementById('support-plus').style.display = 'inline-block';
    document.getElementById('support-minus').style.display = 'inline-block';

  }
}