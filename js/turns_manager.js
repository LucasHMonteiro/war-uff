
function TurnsManager(players_names) {
  this.players_names = players_names;
  this.currentPlayer = 0;
  this.selected_territories = 0;

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
            break;
          case 'attack':
            break;
          case 'realloc':
            if (this.classList.contains('taken-' + turnsManager.currentPlayer)) {
              if (self.selected_territories == 0) {
                self.selected_territories = 1;
                self.showReallocMenuOptions();
                document.getElementById('realloc-origin').innerHTML = territories_true_names[this.classList[0]];
                realloc_menu();
              } else {
                if (territories[true_name_to_code_name(document.getElementById('realloc-origin').innerHTML)].adjacents.indexOf(territories[this.classList[0]]) != -1) {
                  document.getElementById('realloc-destiny').innerHTML = territories_true_names[this.classList[0]];
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
  }

  this.showReallocMenuIntro = function () {
    menu = document.getElementById('realloc-phase');
    menu.innerHTML = 'Escolha seu Território ';
    menu.style.display = 'inline-block';
    document.getElementById('attack-phase').style.display = 'none';
    document.getElementById('alloc-phase').style.display = 'none';
    document.getElementById('realloc-troops').style.display = 'none';
    document.getElementById('cancel-realloc').style.display = 'none';
    document.getElementById('confirm-realloc').style.display = 'none';
    document.getElementById('plus-realloc').style.display = 'none';
    document.getElementById('minus-realloc').style.display = 'none';
    document.getElementById('realloc-origin').style.display = 'none';
    document.getElementById('realloc-destiny').style.display = 'none';
    
  }

  this.showReallocMenuOptions = function () {
    document.getElementById('realloc-phase').innerHTML = 'Escolha destino ';
    document.getElementById('realloc-origin').style.display = 'inline-block';
    document.getElementById('realloc-destiny').style.display = 'inline-block';
    document.getElementById('realloc-troops').style.display = 'inline-block';
    document.getElementById('cancel-realloc').style.display = 'inline-block';
    document.getElementById('confirm-realloc').style.display = 'inline-block';
    document.getElementById('plus-realloc').style.display = 'inline-block';
    document.getElementById('minus-realloc').style.display = 'inline-block';

  }
}