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

$(function(){
    $("#content").load("main_menu.html");
});