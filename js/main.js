room_code = "";
names = [];
players = new Array();
territories = {
    'bib': new Territory('bib'),
    'psi': new Territory('psi'),
    'aloj': new Territory('aloj'),
    'canta': new Territory('canta'),
    'let': new Territory('let'),
    'band1': new Territory('band1'),
    'mat': new Territory('mat'),
    'quadras': new Territory('quadras'),
    'edfi': new Territory('edfi'),
    'biomed': new Territory('biomed'),
    'iacs1': new Territory('iacs1'),
    'eco': new Territory('eco'),
    'dir': new Territory('dir'),
    'iacs2': new Territory('iacs2'),
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
    'casav': new Territory('casav'),
    // 'grag': new Territory('grag'),
    // 'pv': new Territory('pv'),
    // 'valong': new Territory('valong'),
    // 'biomed': new Territory('biomed'),
    // 'canta': new Territory('canta'),
    // 'eco': new Territory('eco'),
    // 'dir': new Territory('dir'),
    // 'iacs1': new Territory('iacs1'),
    // 'iacs2': new Territory('iacs2')
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



territories_true_names = {
    'bib': 'Biblioteca',
    'psi': "Psicologia",
    'aloj': 'Alojamento',
    'canta': "Cantareira",
    'let': 'Letras',
    'band1': 'Bandejão Gragoatá',
    'mat': 'Matemática',
    'quadras': 'Quadras',
    'edfi': 'Educação Física',
    'biomed': 'Biomédico',
    'iacs1': 'IACS 1',
    'eco': 'Economia',
    'dir': 'Direito',
    'iacs2': 'IACS 2',
    'dce': 'DCE',
    'adm': 'Administração',
    'bio': 'Biologia',
    'odonto': 'Odontologia',
    'ana': 'Anal',
    'arq': 'Arquitetura',
    'band2': 'Bandejão PV',
    'eng': 'Engenharia',
    'quim': 'Química',
    'ic': 'Instituto de Computação',
    'geoc': 'Geociência',
    'fis': 'Física',
    'bh': 'Bloco H',
    'casav': 'Casa Verde',
    // 'grag': 'Gragoatá',
    // 'pv': 'Praia Vermelha',
    // 'valong': 'Valonguinho',
    // 'biomed': 'Biomédico',
    // 'canta': 'Cantareira',
    // 'eco': 'Economia',
    // 'dir': 'Direito',
    // 'iacs1': 'IACS 1',
    // 'iacs2': 'IACS 2'
}
phase = 'alloc';

$(function(){
    $("#content").load("main_menu.html");
});