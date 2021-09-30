function solve(input) {
    let shelfs = {};

    for (let line of input) {
        if (line.includes(' -> ')) {
            makeShelf(line);
        } else {
            addBook(line);
        }
    }

    let shelfList = sortShelfs();

    printResult(shelfList);

    function makeShelf(line) {
        let [id, genre] = line.split(' -> ');

        if (shelfs[id] === undefined) {
            shelfs[id] = {
                genre,
                books: []
            };
        }
    }

    function addBook(line) {
        let [title, tokens] = line.split(': ');
        let [author, genre] = tokens.split(', ');
        let currentBook = {
            title,
            author,
            genre
        };

        for (let key in shelfs) {
            if (shelfs[key].genre === genre) {
                shelfs[key].books.push(currentBook);
            }
        }
    }

    function sortShelfs() {
        let shelfList = Object.entries(shelfs).sort(
            (a, b) => b[1].books.length - a[1].books.length
        );
        for (let i = 0; i < shelfList.length; i++) {
            shelfList[i][1].books = shelfList[i][1].books.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
        }

        return shelfList;
    }

    function printResult(list) {
        for (let i = 0; i < list.length; i++) {
            let current = list[i][1];
            console.log(
                `${list[i][0]} ${current.genre}: ${current.books.length}`
            );

            for (let j = 0; j < current.books.length; j++) {
                let bookInfo = current.books[j];
                console.log(`--> ${bookInfo.title}: ${bookInfo.author}`);
            }
        }
    }
}

solve([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
]);
console.log('\n-----\n');
solve([
    '1 -> mystery',
    '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi'
]);
