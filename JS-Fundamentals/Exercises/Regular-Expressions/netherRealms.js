function solve(names) {
    let demons = {};
    names = names.split(',');

    for (let i = 0; i < names.length; i++) {
        names[i] = names[i].trim();
    }
    names = names.filter((x) => x !== '');

    getHealth();
    getDamage();

    let namesArr = Object.keys(demons).sort((a, b) => a.localeCompare(b));
    for (let demon of namesArr) {
        console.log(
            `${demon} - ${demons[demon][0]} health, ${demons[demon][1].toFixed(
                2
            )} damage`
        );
    }

    function getHealth() {
        for (let name of names) {
            demons[name] = [];

            let healthPattern = /[^\d\+\-\*\/\.]/g;
            let health = 0;

            while ((letter = healthPattern.exec(name)) !== null) {
                let hp = letter[0].charCodeAt();

                health += hp;
            }

            demons[name][0] = health;
        }
    }

    function getDamage() {
        for (let name of names) {
            let damagePattern = /[\-\+]?\d*\.?\d+/g;
            let actionPattern = /[\*\/]/g;
            let damage = 0;

            while ((num = damagePattern.exec(name)) !== null) {
                let ad = Number(num[0]);

                damage += ad;
            }

            while ((action = actionPattern.exec(name))) {
                if (action[0] === '*') {
                    damage *= 2;
                } else if (action[0] === '/') {
                    damage /= 2;
                }
            }

            demons[name][1] = damage;
        }
    }
}

solve('///*M5ph-0.5s-0.5t0.0**')
solve('M3ph1st0**,,    Azazel, Gos/ho');
solve('Gos/ho')