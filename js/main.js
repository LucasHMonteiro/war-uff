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
    'obj1',
    'obj2',
    'obj3',
    'obj4',
    'obj5',
    'obj6',
    'obj7',
    'obj8',
    'obj9',
    'obj10',
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