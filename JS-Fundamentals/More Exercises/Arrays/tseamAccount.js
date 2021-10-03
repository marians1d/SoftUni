function solve(input) {
    let actions = {
        Install: install,
        Uninstall: uninstall,
        Update: update,
        Expansion: expansion
    };
    let acount = input.shift().split(' ');

    while (input[0] !== 'Play!') {
        let [action, info] = input.shift().split(' ');

        actions[action](info);
    }

    console.log(acount.join(' '));

    function install(game) {
        if (!acount.includes(game)) {
            acount.push(game);
        }
    }

    function uninstall(game) {
        if (acount.includes(game)) {
            let index = acount.indexOf(game);
            acount.splice(index, 1);
        }
    }

    function update(game) {
        if (acount.includes(game)) {
            let index = acount.indexOf(game);
            acount.splice(index, 1);

            acount.push(game);
        }
    }

    function expansion(info) {
        let [game, expansion] = info.split('-');
        if (acount.includes(game)) {
            expansion = game + ':' + expansion;

            let index = acount.indexOf(game);

            acount.splice(index + 1, 0, expansion);
        }
    }
}

solve([
    'CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
]);