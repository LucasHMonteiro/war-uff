

turn_owner = -1;
turn_phase = 0;



listaterritorios = [];

board = new Board_object();
board.continentes[0] = "nit";
board.territorios["grag"] = new Territorio("grag", "nit"); listaterritorios[0] = "grag";
board.territorios["valong-biomed1"] = new Territorio("valong-biomed1", "nit"); listaterritorios[1] = "valong-biomed1";
board.territorios["valong-biomed2"] = new Territorio("valong-biomed2", "nit"); listaterritorios[2] = "valong-biomed2";
board.territorios["iacs1"] = new Territorio("iacs1", "nit"); listaterritorios[3] = "iacs1";
board.territorios["iacs2"] = new Territorio("iacs2", "nit"); listaterritorios[4] = "iacs2";
board.territorios["eco"] = new Territorio("eco", "nit"); listaterritorios[5] = "eco";
board.territorios["dir"] = new Territorio("dir", "nit"); listaterritorios[6] = "dir";
board.territorios["canta"] = new Territorio("canta", "nit"); listaterritorios[7] = "canta";
board.territorios["pv"] = new Territorio("pv", "nit"); listaterritorios[8] = "pv";

cartas = {};
for(var i = 0; i < board.territorios.length; i++){
	cartas[i] = new Carta(board.territorios[i].nome, i%3);
}

cores = {};
cores[0] = "crimson";
cores[1] = "dodgerblue";
cores[2] = "limegreen";
cores[3] = "deeppink";
cores[4] = "orangered";
cores[5] = "yellow";

jogadores = [];
for(var i = 0; i < names.length; i++){
	jogadores[i] = new Jogador(names[i], cores[i]);
	jogadores[i].objetivo = Math.floor((Math.random() * 14)); //resolver objetivos repetidos
}

curr = 0;

while(listaterritorios.length > 0){
	var temp = listaterritorios.splice(Math.floor((Math.random() * listaterritorios.length)),1);
	alert(temp);
	board.territorios[temp].dono = curr;
	curr += 1;
	if(curr == jogadores.length) curr = 0;
}



