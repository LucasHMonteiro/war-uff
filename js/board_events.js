function updateTerritory(objClass, territory) {
    t = territories[objClass];
    territory.innerHTML = '<p>' + territories_true_names[objClass] + '</p>' + '<p>' + t.owner + '</p>' + '<p>Tropas: ' + t.troops + '</p>';
}

tooltips = new Array();
tooltips['bib'] = document.querySelector('#bib-tooltip'); updateTerritory('bib', tooltips['bib']);
tooltips['psi'] = document.querySelector('#psi-tooltip'); updateTerritory('psi', tooltips['psi']);
tooltips['aloj'] = document.querySelector('#aloj-tooltip'); updateTerritory('aloj', tooltips['aloj']);
tooltips['canta'] = document.querySelector('#canta-tooltip'); updateTerritory('canta', tooltips['canta']);
tooltips['let'] = document.querySelector('#let-tooltip'); updateTerritory('let', tooltips['let']);
tooltips['band1'] = document.querySelector('#band1-tooltip'); updateTerritory('band1', tooltips['band1']);
tooltips['mat'] = document.querySelector('#mat-tooltip'); updateTerritory('mat', tooltips['mat']);
tooltips['quadras'] = document.querySelector('#quadras-tooltip'); updateTerritory('quadras', tooltips['quadras']);
tooltips['edfi'] = document.querySelector('#edfi-tooltip'); updateTerritory('edfi', tooltips['edfi']);
tooltips['biomed'] = document.querySelector('#biomed-tooltip'); updateTerritory('biomed', tooltips['biomed']);
tooltips['iacs1'] = document.querySelector('#iacs1-tooltip'); updateTerritory('iacs1', tooltips['iacs1']);
tooltips['eco'] = document.querySelector('#eco-tooltip'); updateTerritory('eco', tooltips['eco']);
tooltips['dir'] = document.querySelector('#dir-tooltip'); updateTerritory('dir', tooltips['dir']);
tooltips['iacs2'] = document.querySelector('#iacs2-tooltip'); updateTerritory('iacs2', tooltips['iacs2']);
tooltips['dce'] = document.querySelector('#dce-tooltip'); updateTerritory('dce', tooltips['dce']);
tooltips['adm'] = document.querySelector('#adm-tooltip'); updateTerritory('adm', tooltips['adm']);
tooltips['bio'] = document.querySelector('#bio-tooltip'); updateTerritory('bio', tooltips['bio']);
tooltips['odonto'] = document.querySelector('#odonto-tooltip'); updateTerritory('odonto', tooltips['odonto']);
tooltips['ana'] = document.querySelector('#ana-tooltip'); updateTerritory('ana', tooltips['ana']);
tooltips['arq'] = document.querySelector('#arq-tooltip'); updateTerritory('arq', tooltips['arq']);
tooltips['band2'] = document.querySelector('#band2-tooltip'); updateTerritory('band2', tooltips['band2']);
tooltips['eng'] = document.querySelector('#eng-tooltip'); updateTerritory('eng', tooltips['eng']);
tooltips['quim'] = document.querySelector('#quim-tooltip'); updateTerritory('quim', tooltips['quim']);
tooltips['ic'] = document.querySelector('#ic-tooltip'); updateTerritory('ic', tooltips['ic']);
tooltips['geoc'] = document.querySelector('#geoc-tooltip'); updateTerritory('geoc', tooltips['geoc']);
tooltips['fis'] = document.querySelector('#fis-tooltip'); updateTerritory('fis', tooltips['fis']);
tooltips['bh'] = document.querySelector('#bh-tooltip'); updateTerritory('bh', tooltips['bh']);
tooltips['casav'] = document.querySelector('#casav-tooltip'); updateTerritory('casav', tooltips['casav']);


// tooltips['grag'] = document.querySelector('#grag-tooltip'); updateTerritory('grag', tooltips['grag']);
// tooltips['pv'] = document.querySelector('#pv-tooltip'); updateTerritory('pv', tooltips['pv']);
// tooltips['eco'] = document.querySelector('#eco-tooltip'); updateTerritory('eco', tooltips['eco']);
// tooltips['valong'] = document.querySelector('#valong-tooltip'); updateTerritory('valong', tooltips['valong']);
// tooltips['canta'] = document.querySelector('#canta-tooltip'); updateTerritory('canta', tooltips['canta']);
// tooltips['dir'] = document.querySelector('#dir-tooltip'); updateTerritory('dir', tooltips['dir']);
// tooltips['iacs1'] = document.querySelector('#iacs1-tooltip'); updateTerritory('iacs1', tooltips['iacs1']);
// tooltips['iacs2'] = document.querySelector('#iacs2-tooltip'); updateTerritory('iacs2', tooltips['iacs2']);
// tooltips['biomed'] = document.querySelector('#biomed-tooltip'); updateTerritory('biomed', tooltips['biomed']);

tippy('.bib', {
    html: tooltips['bib'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.psi', {
    html: tooltips['psi'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.aloj', {
    html: tooltips['aloj'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.canta', {
    html: tooltips['canta'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.let', {
    html: tooltips['let'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.band1', {
    html: tooltips['band1'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.mat', {
    html: tooltips['mat'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.quadras', {
    html: tooltips['quadras'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.edfi', {
    html: tooltips['edfi'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.biomed', {
    html: tooltips['biomed'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.iacs1', {
    html: tooltips['iacs1'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.eco', {
    html: tooltips['eco'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.dir', {
    html: tooltips['dir'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.iacs2', {
    html: tooltips['iacs2'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.dce', {
    html: tooltips['dce'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.adm', {
    html: tooltips['adm'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.bio', {
    html: tooltips['bio'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.odonto', {
    html: tooltips['odonto'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.ana', {
    html: tooltips['ana'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.arq', {
    html: tooltips['arq'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.band2', {
    html: tooltips['band2'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.eng', {
    html: tooltips['eng'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.quim', {
    html: tooltips['quim'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.ic', {
    html: tooltips['ic'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.geoc', {
    html: tooltips['geoc'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.fis', {
    html: tooltips['fis'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.bh', {
    html: tooltips['bh'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});
tippy('.casav', {
    html: tooltips['bib'],
    arrow: true,
    animation: 'fade',
    distance: -40,
    arrowTransform: 'scale(2)',
    theme: 'war'
});



// tippy('.pv', {
//     html: tooltips['pv'],
//     arrow: true,
//     animation: 'fade',
//     distance: -50,
//     arrowTransform: 'scale(2)',
//     theme: 'war'
// });
// tippy('.eco', {
//     html: tooltips['eco'],
//     arrow: true,
//     animation: 'fade',
//     distance: 15,
//     arrowTransform: 'scale(2)',
//     theme: 'war'
// });
// tippy('.valong', {
//     html: tooltips['valong'],
//     arrow: true,
//     animation: 'fade',
//     distance: 15,
//     arrowTransform: 'scale(2)',
//     theme: 'war'
// });
// tippy('.canta', {
//     html: tooltips['canta'],
//     arrow: true,
//     animation: 'fade',
//     distance: 15,
//     arrowTransform: 'scale(2)',
//     theme: 'war'
// });
// tippy('.dir', {
//     html: tooltips['dir'],
//     arrow: true,
//     animation: 'fade',
//     distance: 15,
//     arrowTransform: 'scale(2)',
//     theme: 'war'
// });
// tippy('.iacs1', {
//     html: tooltips['iacs1'],
//     arrow: true,
//     animation: 'fade',
//     distance: 15,
//     arrowTransform: 'scale(2)',
//     theme: 'war'
// });
// tippy('.iacs2', {
//     html: tooltips['iacs2'],
//     arrow: true,
//     animation: 'fade',
//     distance: 15,
//     arrowTransform: 'scale(2)',
//     theme: 'war'
// });
// tippy('.biomed', {
//     html: tooltips['biomed'],
//     arrow: true,
//     animation: 'fade',
//     distance: 15,
//     arrowTransform: 'scale(2)',
//     theme: 'war'
// });

function true_name_to_code_name(territory) {
    territories_names = Object.keys(territories_true_names)
    for (var index = 0; index < territories_names.length; index++) {
        if (territories_true_names[territories_names[index]] == territory) return territories_names[index];
    }
    return "Erro."
}

function alloc(territory) {
    player = players[names[turnsManager.currentPlayer]];
    if (player.troops > 0 && player.territories.indexOf(territory) != -1) {
        territories[territory].troops += 1;
        player.troops -= 1;
        updateTerritory(territory, tooltips[territory]);
    }
}

function attack_menu() {
    document.getElementById('support-cancel').addEventListener('click', function () {
        turnsManager.showReallocMenuIntro();
        document.getElementById('support-troops').innerHTML = 0;
        document.getElementById('support-origin').innerHTML = "Origem";
        document.getElementById('support-destiny').innerHTML = "Destino";
        turnsManager.selected_territories = 0;
    });
    var attack_troops = 0;
    function inc_realloc_troops() {
        if ((attack_troops < territories[true_name_to_code_name(document.getElementById('support-origin').innerHTML)].troops - 1) && attack_troops < 3) attack_troops++;
        document.getElementById('support-troops').innerHTML = attack_troops;
    }
    function dec_realloc_troops() {
        if (attack_troops > 0) attack_troops--;
        document.getElementById('support-troops').innerHTML = attack_troops;
    }
    document.getElementById('support-minus').addEventListener('click', function () {
        dec_realloc_troops();
    });
    document.getElementById('support-plus').addEventListener('click', function () {
        inc_realloc_troops();
    });
}

function realloc_menu() {
    document.getElementById('support-cancel').addEventListener('click', function () {
        turnsManager.showReallocMenuIntro();
        document.getElementById('support-troops').innerHTML = 0;
        document.getElementById('support-origin').innerHTML = "Origem";
        document.getElementById('support-destiny').innerHTML = "Destino";
        turnsManager.selected_territories = 0;
    });
    var realloc_troops = 0;
    function inc_realloc_troops() {
        if (realloc_troops < territories[true_name_to_code_name(document.getElementById('support-origin').innerHTML)].troops - 1) realloc_troops++;
        document.getElementById('support-troops').innerHTML = realloc_troops;
    }
    function dec_realloc_troops() {
        if (realloc_troops > 0) realloc_troops--;
        document.getElementById('support-troops').innerHTML = realloc_troops;
    }

    document.getElementById('support-minus').addEventListener('click', function () {
        dec_realloc_troops();
    });
    document.getElementById('support-plus').addEventListener('click', function () {
        inc_realloc_troops();
    });
}

function roll_dices(attack, defense) {
    attack_rolls = [];
    defense_rolls = [];
    show_dice_atk = document.getElementById('dice_atk');
    show_dice_def = document.getElementById('dice_def');
    show_dice_atk.innerHTML = "Dados de Ataque";
    show_dice_def.innerHTML = "Dados de Defesa";
    for (var i = 0; i < defense; i++) {
        var roll = Math.floor((Math.random() * 6) + 1);
        defense_rolls.push(roll);
    }
    for (var j = 0; j < attack; j++) {
        var roll = Math.floor((Math.random() * 6) + 1);
        attack_rolls.push(roll);
    }
    attack_rolls.reverse(attack_rolls.sort());
    defense_rolls.reverse(defense_rolls.sort());
    show_dice_atk.innerHTML = attack_rolls;
    show_dice_atk.style.display = 'inline-block';
    show_dice_def.innerHTML = defense_rolls;
    show_dice_def.style.display = 'inline-block';
    num_checks = Math.min(defense, attack);
    console.log(show_dice_atk.innerHTML + " D  " + show_dice_def.innerHTML );
    win_rolls = 0;
    for (var k = 0; k < num_checks; k++) {
        if (attack_rolls[k] > defense_rolls[k]) win_rolls++;
    }
    return win_rolls++;
}

function attack_confirm() {
    document.getElementById('support-confirm').addEventListener('click', function () {
        troops_attacking = parseInt(document.getElementById('support-troops').innerHTML);
        if (troops_attacking > 0) {
            origin = true_name_to_code_name(document.getElementById('support-origin').innerHTML);
            destiny = true_name_to_code_name(document.getElementById('support-destiny').innerHTML);
            if (territories[destiny].troops >= 3) {
                troops_defending = 3;
            } else {
                troops_defending = territories[destiny].troops;
            }
            win_rolls = roll_dices(troops_attacking, troops_defending);
            console.log(win_rolls);
            if (win_rolls >= troops_defending) {
                defender_name = territories[destiny].owner;
                players[defender_name].territories.splice(players[defender_name].territories.indexOf(destiny),1);
                territories[destiny].owner = names[turnsManager.currentPlayer];
                territories[destiny].troops = win_rolls;
                territories[origin].troops -= troops_attacking;
                players[names[turnsManager.currentPlayer]].territories.push(destiny);
                target_territory = document.getElementsByClassName(destiny)[0];
                target_territory.classList.remove('taken-' + names.indexOf(defender_name));
                target_territory.classList.add('taken-' + turnsManager.currentPlayer);
            } else {
                territories[destiny].troops -= win_rolls;
                territories[origin].troops -= troops_attacking - win_rolls;
            }
            updateTerritory(origin, tooltips[origin]);
            updateTerritory(destiny, tooltips[destiny]);
            turnsManager.showReallocMenuIntro();
            document.getElementById('support-troops').innerHTML = 0;
            document.getElementById('support-origin').innerHTML = "Origem";
            document.getElementById('support-destiny').innerHTML = "Destino";
            turnsManager.selected_territories = 0;
        }
    });
}

function realloc_confirm() {
    document.getElementById('support-confirm').addEventListener('click', function () {
        troops_moving = parseInt(document.getElementById('support-troops').innerHTML);
        if (troops_moving > 0) {
            origin = true_name_to_code_name(document.getElementById('support-origin').innerHTML);
            destiny = true_name_to_code_name(document.getElementById('support-destiny').innerHTML);
            territories[origin].troops -= troops_moving;
            territories[destiny].troops += troops_moving;
            updateTerritory(origin, tooltips[origin]);
            updateTerritory(destiny, tooltips[destiny]);
            turnsManager.showReallocMenuIntro();
            document.getElementById('support-troops').innerHTML = 0;
            document.getElementById('support-origin').innerHTML = "Origem";
            document.getElementById('support-destiny').innerHTML = "Destino";
            turnsManager.selected_territories = 0;
        }
    });
}
