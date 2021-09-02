function solve(string) {
    let junk = {};
    let legendary = {
        shards: 0,
        fragments: 0,
        motes: 0
    };
    // split string by space
    let input = string.split(' ');
    // go through the split string by each pair
    for (let i = 0; i < input.length; i += 2) {
        // - store legendary materials and push the others into a seperate array
        let amount = Number(input[i]);
        let material = input[i + 1].toLowerCase();

        if (Object.keys(legendary).includes(material)) {
            let isFound = addingLegendary(material, amount);

            if (isFound) {
                break;
            }
        } else {
            // push material into jun
            if (junk[material] == undefined) {
                junk[material] = 0;
            }
            junk[material] += amount;
        }
    }

    let legendaryArr = Object.entries(legendary);
    // sort legendary materials by amount then by alphabetical order
    legendaryArr.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    // print legendary materials on seperate lines
    for (let material of legendaryArr) {
        console.log(`${material[0]}: ${material[1]}`);
    }

    let junkArr = Object.entries(junk);
    // sort regular materials by alphabetical order
    junkArr.sort((a, b) => a[0].localeCompare(b[0]));
    // print regular materials on seperate lines
    for (let material of junkArr) {
        console.log(`${material[0]}: ${material[1]}`);
    }

    function addingLegendary(material, amount) {
        let items = {
            shards: 'Shadowmourne',
            fragments: 'Valanyr',
            motes: 'Dragonwrath'
        };

        legendary[material] += amount;

        // - if one of the materials reaches 250
        if (legendary[material] >= 250) {
            // -- subtract it from that material
            legendary[material] -= 250;

            // -- print that you got the item
            console.log(`${items[material]} obtained!`);
            // -- break the loop
            return true;
        }
    }
}

solve('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');