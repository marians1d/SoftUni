function solve(input) {
    let register = {};
    // proces input data 
    for (let line of input) {
        // - split each line by " | "
        let [systemName, componentName, subcomponentName] = line.split(' | ');

        if (!(Object.keys(register)).includes(systemName)) {
            register[systemName] = {};
        }

        if (!(Object.keys(register[systemName])).includes(componentName)) {
            register[systemName][componentName] = [];
        }

        register[systemName][componentName].push(subcomponentName);
    }

    // sorting 
    let registerArr = Object.entries(register);
    for (let i = 0; i < registerArr.length; i++) {
        registerArr[i][1] = Object.entries(registerArr[i][1])
    }
    // sorting systems
    registerArr.sort(sortingSystems);

    // sorting components
    for (let i = 0; i < registerArr.length; i++) {
        registerArr[i][1].sort(sortingComponents);
    }
    
    function sortingSystems(a, b) {
        // - Systems need to be ordered by amount of components in desending order
        return Object.keys(b[1]).length - Object.keys(a[1]).length ||
        // - or by alphabetical order as second criteria
        a[0].localeCompare(b[0]);
    }
    
    function sortingComponents(a, b) {
        // components must be ordered by amount of subcomponents
        return b[1].length - a[1].length;
    }

    // print output in given pattern
    for (let i = 0; i < registerArr.length; i++) {
        let currentSystem = registerArr[i];
        console.log(currentSystem[0]);

        for (let j = 0; j < currentSystem[1].length; j++) {
            let currentComponent = registerArr[i][1][j];
            console.log('|||' + currentComponent[0]);

            for (let x = 0; x < currentComponent[1].length; x++) {
                let currentSubcomponent = registerArr[i][1][j][1][x]
                console.log('||||||' + currentSubcomponent);
            }
        }
    }
}

solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);