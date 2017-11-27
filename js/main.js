room_code = "";
names = [];
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
$(function(){
    $("#content").load("main_menu.html");
});