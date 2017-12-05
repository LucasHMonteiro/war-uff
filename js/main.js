server_base_url = 'https://war-room-server.herokuapp.com/';
// server_base_url = 'http://127.0.0.1:3000/';
room_code = "";
names = [];
players = new Array();
territories = {
    'biomed': new Territory('biomed'),
    'canta': new Territory('canta'),
    'eco': new Territory('eco'),
    'dir': new Territory('dir'),
    'iacs1': new Territory('iacs1'),
    'iacs2': new Territory('iacs2'),
    'bib': new Territory('bib'),
    'psi': new Territory('psi'),
    'aloj': new Territory('aloj'),
    'let': new Territory('let'),
    'band1': new Territory('band1'),
    'mat': new Territory('mat'),
    'quadras': new Territory('quadras'),
    'edfi': new Territory('edfi'),
    'dce': new Territory('dce'),
    'adm': new Territory('adm'),
    'bio': new Territory('bio'),
    'odonto': new Territory('odonto'),
    'ana': new Territory('ana'),
    'arq': new Territory('arq'),
    'band2': new Territory('band2'),
    'eng': new Territory('eng'),
    'quim': new Territory('quim'),
    'ic': new Territory('ic'),
    'geoc': new Territory('geoc'),
    'fis': new Territory('fis'),
    'bh': new Territory('bh'),
    'casav': new Territory('casav')
};

// territories['grag'].setAdjacent('valong'); territories['grag'].setAdjacent('canta');
// territories['biomed'].setAdjacent('valong');
// territories['canta'].setAdjacent('iacs1'); territories['canta'].setAdjacent('pv');
// territories['iacs1'].setAdjacent('eco');
// territories['eco'].setAdjacent('iacs2'); territories['eco'].setAdjacent('dir');
// territories['pv'].setAdjacent('dir'); territories['pv'].setAdjacent('iacs1');
territories['bib'].setAdjacent('let'); territories['bib'].setAdjacent('psi'); territories['bib'].setAdjacent('mat');
territories['psi'].setAdjacent('aloj'); territories['psi'].setAdjacent('let');
territories['aloj'].setAdjacent('bh');
territories['canta'].setAdjacent('band1');territories['canta'].setAdjacent('arq');territories['canta'].setAdjacent('dce');territories['canta'].setAdjacent('iacs1');territories['canta'].setAdjacent('biomed');
territories['let'].setAdjacent('band1');territories['let'].setAdjacent('quadras');territories['let'].setAdjacent('mat');
territories['band1'].setAdjacent('quadras');
territories['mat'].setAdjacent('quadras');
territories['quadras'].setAdjacent('edfi');
territories['edfi'].setAdjacent('dce');
territories['biomed'].setAdjacent('iacs1');territories['biomed'].setAdjacent('ana');
territories['iacs1'].setAdjacent('arq');territories['iacs1'].setAdjacent('eco');
territories['eco'].setAdjacent('dir');territories['eco'].setAdjacent('iacs2');
territories['dir'].setAdjacent('iacs2');territories['dir'].setAdjacent('quim');
//iacs2 ja teve a vizinhança feita acima
territories['dce'].setAdjacent('bio');territories['dce'].setAdjacent('adm');
territories['adm'].setAdjacent('odonto');territories['adm'].setAdjacent('bio');
territories['bio'].setAdjacent('ana');territories['bio'].setAdjacent('odonto');
territories['odonto'].setAdjacent('ana');
//ana ja teve sua vizinhanca feita acima
territories['arq'].setAdjacent('eng');territories['arq'].setAdjacent('band2');
territories['band2'].setAdjacent('eng');territories['band2'].setAdjacent('geoc'); territories['band2'].setAdjacent('ic');
territories['eng'].setAdjacent('geoc');territories['eng'].setAdjacent('casav');
territories['quim'].setAdjacent('ic'); 
territories['ic'].setAdjacent('geoc');
territories['geoc'].setAdjacent('casav'); territories['geoc'].setAdjacent('fis');
territories['fis'].setAdjacent('bh'); territories['fis'].setAdjacent('casav');
//bh ja teve sua vizinhança feita acima
territories['casav'].setAdjacent('bh');

continents = {
    'praia-vermelha' : new continent('pv'),
    'gragoata' : new continent('grag'),
    'valonguinho': new continent('valong'),
    'UCI' : new continent('uci')
}
continents['praia-vermelha'].territories.push('band2');
continents['praia-vermelha'].territories.push('eng');
continents['praia-vermelha'].territories.push('quim');
continents['praia-vermelha'].territories.push('ic');
continents['praia-vermelha'].territories.push('geoc');
continents['praia-vermelha'].territories.push('fis');
continents['praia-vermelha'].territories.push('bh');
continents['praia-vermelha'].territories.push('casav');
continents['praia-vermelha'].territories.push('arq');
continents['gragoata'].territories.push('bib');
continents['gragoata'].territories.push('psi');
continents['gragoata'].territories.push('aloj');
continents['gragoata'].territories.push('let');
continents['gragoata'].territories.push('band1');
continents['gragoata'].territories.push('mat');
continents['gragoata'].territories.push('quadras');
continents['gragoata'].territories.push('edfi');
continents['gragoata'].territories.push('canta');
continents['valonguinho'].territories.push('dce');
continents['valonguinho'].territories.push('adm');
continents['valonguinho'].territories.push('bio');
continents['valonguinho'].territories.push('odonto');
continents['valonguinho'].territories.push('ana');
continents['valonguinho'].territories.push('biomed');
continents['UCI'].territories.push('iacas1');
continents['UCI'].territories.push('iacas2');
continents['UCI'].territories.push('dir');
continents['UCI'].territories.push('eco');

territories_true_names = {
    'biomed': 'Biomédico',
    'canta': 'Cantareira',
    'eco': 'Economia',
    'dir': 'Direito',
    'iacs1': 'IACS 1',
    'iacs2': 'IACS 2',
    'bib': 'Biblioteca',
    'psi': 'Psicologia',
    'aloj': 'Moradia',
    'let': 'Letras',
    'band1': 'Bandejão',
    'mat': 'Matemática',
    'quadras': 'Quadras',
    'edfi': 'Educação Física',
    'dce': 'DCE',
    'adm': 'Administração',
    'bio': 'Biologia',
    'odonto': 'Odontologia',
    'ana': 'Anatomia',
    'arq': 'Escola de Arquitetura e Urbanismo',
    'band2': 'Bandejão',
    'eng': 'Escola de Engenharia',
    'quim': 'Instituto de Química',
    'ic': 'Instituto de Computação',
    'geoc': 'Instituto de Geociências',
    'fis': 'Instituto de Física',
    'bh': 'Bloco H',
    'casav': 'Casa Verde'
}
phase = 'alloc';

goal_cards = [
    'Conquistar Praia Vermelha em sua totalidade.',
    'Conquistar Gragoatá em sua totalidade.',
    'Conquistar Valonguinho e a União dos Campi Independentes em suas totalidades.',
    'Conquistar 18 territórios à sua escolha.',
    'Conquistar 16 territórios com ao menos 2 exércitos à sua escolha.',
    'Destruir totalmente o exército vermelho.',
    'Destruir totalmente o exército verde.',
    'Destruir totalmente o exército rosa.',
    'Destruir totalmente o exército laranja.',
    'Destruir totalmente o exército azul.',
    'obj11',
    'obj12',
    'obj13',
    'obj14',
    'obj15'
]

territory_cards = [
    'Biomédico:triangle',
    'Cantareira:triangle',
    'Economia:triangle',
    'Direito:circle',
    'IACS 1:circle',
    'IACS 2:circle',
    'Biblioteca:square',
    'Psicologia:square',
    'Moradia:square',
    'Letras:triangle',
    'Bandejão:triangle',
    'Matemática:triangle',
    'Quadras:circle',
    'Educação Física:circle',
    'DCE:circle',
    'Administração:square',
    'Biologia:square',
    'Odontologia:square',
    'Anatomia:triangle',
    'Escola de Arquitetura e Urbanismo:triangle',
    'Bandejão:triangle',
    'Escola de Engenharia:circle',
    'Instituto de Química:circle',
    'Instituto de Computação:circle',
    'Instituto de Geociências:square',
    'Instituto de Física:square',
    'Bloco H:square',
    'Casa Verde:triangle'
]

my_cards = []
my_goals = []
my_territories = []

function popRandomElement(array) {
    return array.splice(Math.floor(Math.random() * array.length), 1);
}

$(function(){
    $("#content").load("main_menu.html");
});