svg = document.getElementsByTagName('svg')[0];
paths = svg.getElementsByTagName('path');
for (var index = 0; index < paths.length; index++) {
    path = paths[index];
    if (!path.classList.contains('bg')){
        path.addEventListener('mouseover', function() {
            c_name = this.classList[0];
            document.getElementById(c_name+'-info').style.display = 'block';
        });
        path.addEventListener('mouseout', function () {
            c_name = this.classList[0];
            document.getElementById(c_name + '-info').style.display = 'none';
        });
    }
}

function updateTerritory(objClass, territory){
    t = territories[objClass];
    territory.innerHTML += '<p>'+t.owner+'</p>'+'<p>Tropas: '+t.troops+'</p>';
}

grag = document.querySelector('#grag-tooltip'); updateTerritory('grag', grag);
pv = document.querySelector('#pv-tooltip'); updateTerritory('pv', pv);
eco = document.querySelector('#eco-tooltip'); updateTerritory('eco', eco);
valong = document.querySelector('#valong-tooltip'); updateTerritory('valong', valong);
canta = document.querySelector('#canta-tooltip'); updateTerritory('canta', canta);
dir = document.querySelector('#dir-tooltip'); updateTerritory('dir', dir);
iacs1 = document.querySelector('#iacs1-tooltip'); updateTerritory('iacs1', iacs1);
iacs2 = document.querySelector('#iacs2-tooltip'); updateTerritory('iacs2', iacs2);
biomed = document.querySelector('#biomed-tooltip'); updateTerritory('biomed', biomed);

tippy('.grag', {
    html: grag,
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.pv', {
    html: pv,
    arrow: true,
    animation: 'fade',
    distance: -50,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.eco', {
    html: eco,
    arrow: true,
    animation: 'fade',
    distance: 15,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.valong', {
    html: valong,
    arrow: true,
    animation: 'fade',
    distance: 15,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.canta', {
    html: canta,
    arrow: true,
    animation: 'fade',
    distance: 15,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.dir', {
    html: dir,
    arrow: true,
    animation: 'fade',
    distance: 15,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.iacs1', {
    html: iacs1,
    arrow: true,
    animation: 'fade',
    distance: 15,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.iacs2', {
    html: iacs2,
    arrow: true,
    animation: 'fade',
    distance: 15,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.biomed', {
    html: biomed,
    arrow: true,
    animation: 'fade',
    distance: 15,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
