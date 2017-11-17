
  buildNamesList();
  buildterrList();
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
  $('path').click(function(){
		var n = this.getAttribute("class");
		if(n == "bg") return;		
		board.territorios[n].tropas_atuais += 1;
		update_terr_view(board.territorios[n]);
   });


function buildNamesList() {
  listBuilder = '';
  for (var i = 0; i < names.length; i++) {
    listBuilder += '<li id="player' + i + '">' + names[i] + '</li>'
  }
  $("#player_names").html(listBuilder);
}

function buildterrList() {
  listBuilder = '';
  for(var k in board.territorios){
	  if (board.territorios.hasOwnProperty(k)) {
		listBuilder += '<li id="terr' + k + '">' + board.territorios[k].nome + ': dono=' + board.territorios[k].dono + ' tropas=' + board.territorios[k].tropas_atuais + '</li>';
		update_terr_view(board.territorios[k]);
		alert(board.territorios[k].nome + " " + board.territorios[k].dono + " " + board.territorios[k].tropas_atuais);
    } 
	$("#territories").html(listBuilder);
  }
  alert("oi");
}

function update_terr_view(t){
	document.getElementsByClassName(t.nome)[0].style.fill = jogadores[t.dono].cor;
	$("#terr"+t.nome).html(t.nome +": dono="+ t.dono +" tropas="+ t.tropas_atuais);
}