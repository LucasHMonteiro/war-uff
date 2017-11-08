$(function(){
  buildNamesList();
  document.getElementById('player_names').addEventListener('click', function (e) {
    if (e.target && e.target.nodeName == 'LI' && !e.target.classList.contains('animated')) {
      var lis = this.getElementsByTagName('li');
      for (var index = 0; index < lis.length; index++) {
        lis[index].classList.remove('animated');
        lis[index].classList.remove('pulse');
        lis[index].classList.remove('infinite');
      }
      e.target.className += ' animated pulse infinite';
    }
  });
});

function buildNamesList() {
  listBuilder = '';
  for (var i = 0; i < names.length; i++) {
    listBuilder += '<li id="player' + i + '">' + names[i] + '</li>'
  }
  $("#player_names").html(listBuilder);
}