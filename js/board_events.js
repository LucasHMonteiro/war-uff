function updateTerritory(objClass, territory){
    t = territories[objClass];
    territory.innerHTML = '<p>'+territories_true_names[objClass]+'</p>'+'<p>'+t.owner+'</p>'+'<p>Tropas: '+t.troops+'</p>';
}

tooltips = new Array();

tooltips['grag'] = document.querySelector('#grag-tooltip'); updateTerritory('grag', tooltips['grag']);
tooltips['pv'] = document.querySelector('#pv-tooltip'); updateTerritory('pv', tooltips['pv']);
tooltips['eco'] = document.querySelector('#eco-tooltip'); updateTerritory('eco', tooltips['eco']);
tooltips['valong'] = document.querySelector('#valong-tooltip'); updateTerritory('valong', tooltips['valong']);
tooltips['canta'] = document.querySelector('#canta-tooltip'); updateTerritory('canta', tooltips['canta']);
tooltips['dir'] = document.querySelector('#dir-tooltip'); updateTerritory('dir', tooltips['dir']);
tooltips['iacs1'] = document.querySelector('#iacs1-tooltip'); updateTerritory('iacs1', tooltips['iacs1']);
tooltips['iacs2'] = document.querySelector('#iacs2-tooltip'); updateTerritory('iacs2', tooltips['iacs2']);
tooltips['biomed'] = document.querySelector('#biomed-tooltip'); updateTerritory('biomed', tooltips['biomed']);

tippy('.grag', {
    html: tooltips['grag'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.pv', {
    html: tooltips['pv'],
    arrow: true,
    animation: 'fade',
    distance: -50,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.eco', {
    html: tooltips['eco'],
    arrow: true,
    animation: 'fade',
    distance: 15,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.valong', {
    html: tooltips['valong'],
    arrow: true,
    animation: 'fade',
    distance: 15,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.canta', {
    html: tooltips['canta'],
    arrow: true,
    animation: 'fade',
    distance: 15,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.dir', {
    html: tooltips['dir'],
    arrow: true,
    animation: 'fade',
    distance: 15,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.iacs1', {
    html: tooltips['iacs1'],
    arrow: true,
    animation: 'fade',
    distance: 15,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.iacs2', {
    html: tooltips['iacs2'],
    arrow: true,
    animation: 'fade',
    distance: 15,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.biomed', {
    html: tooltips['biomed'],
    arrow: true,
    animation: 'fade',
    distance: 15,
    arrowTransform: 'scale(2)',
    theme: 'war'
});

function alloc(territory) {
    player = players[names[turnsManager.currentPlayer]]
    if(player.troops > 0 && player.territories.indexOf(territory) != -1){
        territories[territory].troops += 1;
        player.troops -= 1;
        updateTerritory(territory, tooltips[territory]);
    }
}
