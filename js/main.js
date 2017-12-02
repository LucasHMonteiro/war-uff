server_base_url = 'https://war-room-server.herokuapp.com/';
// server_base_url = 'http://127.0.0.1:3000/';
room_code = "";
names = [];
players = new Array();
territories = {
    'grag': new Territory('grag'),
    'pv': new Territory('pv'),
    'valong': new Territory('valong'),
    'biomed': new Territory('biomed'),
    'canta': new Territory('canta'),
    'eco': new Territory('eco'),
    'dir': new Territory('dir'),
    'iacs1': new Territory('iacs1'),
    'iacs2': new Territory('iacs2')
};

territories['grag'].setAdjacent('valong'); territories['grag'].setAdjacent('canta');
territories['biomed'].setAdjacent('valong');
territories['canta'].setAdjacent('iacs1'); territories['canta'].setAdjacent('pv');
territories['iacs1'].setAdjacent('eco');
territories['eco'].setAdjacent('iacs2'); territories['eco'].setAdjacent('dir');
territories['pv'].setAdjacent('dir'); territories['pv'].setAdjacent('iacs1');

territories_true_names = {
    'grag': 'Gragoatá',
    'pv': 'Praia Vermelha',
    'valong': 'Valonguinho',
    'biomed': 'Biomédico',
    'canta': 'Cantareira',
    'eco': 'Economia',
    'dir': 'Direito',
    'iacs1': 'IACS 1',
    'iacs2': 'IACS 2'
}
phase = 'alloc';

goal_cards = [
    'piroca',
    'cu',
    'buceta',
    'vagina',
    'xoxota',
    'cebola',
    'cramulhão',
    'rinoceronte',
    'pênis',
    'artrose',
    'sirigaita',
    'sacerdotisa',
    'vai tomar no cu',
    'dfasdfa',
    'dragon ball é uma merda',
    'es2 de cu é rola',
    '22cm de piroca',
    'chupa xoxota é uma coisa linda'
]

function popRandomElement(array) {
    return array.splice(Math.floor(Math.random() * array.length), 1);
}

$(function(){
    $("#content").load("main_menu.html");
});