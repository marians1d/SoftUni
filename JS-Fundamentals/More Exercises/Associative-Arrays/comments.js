function solve(input) {
    let comments = {};
    let userPattern = /user (\w+)/;
    let articlePattern = /article (\w+)/;
    let infoPattern = /(\w+) posts on (\w+): ([a-zA-Z ]+), ([a-zA-Z ]+)/;

    let usernameList = [];
    let articleList = [];

    // parse input

    for (let i = 0; i < input.length; i++) {
        if ((line = userPattern.exec(input[i])) !== null) {
            usernameList.push(line[1]);
        } else if ((line = articlePattern.exec(input[i])) !== null) {
            articleList.push(line[1]);
        } else if ((line = infoPattern.exec(input[i])) !== null) {
            post(line[1], line[2], line[3], line[4]);
        }
    }

    let commentList = Object.entries(comments).sort(
        (a, b) => b[1].length - a[1].length
    );

    for (let i = 0; i < commentList.length; i++) {
        console.log(`Comments on ${commentList[i][0]}`);
        commentList[i][1] = commentList[i][1].sort((a, b) =>
            a.username.localeCompare(b.username)
        );
        for (let j = 0; j < commentList[i][1].length; j++) {
            console.log(
                `--- From user ${commentList[i][1][j].username}: ${commentList[i][1][j].title} - ${commentList[i][1][j].content}`
            );
        }
    }

    function post(username, article, title, content) {
        if (usernameList.includes(username) && articleList.includes(article)) {
            if (comments[article] === undefined) {
                comments[article] = [];
            }
            let currentComment = {
                username,
                title,
                content
            };

            comments[article].push(currentComment);
        }
    }
}

solve([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);
console.log('\n-----\n');
solve([
    'user Mark',
    'Mark posts on someArticle: NoTitle, stupidComment',
    'article Bobby',
    'article Steven',
    'user Liam',
    'user Henry',
    'Mark posts on Bobby: Is, I do really like them',
    'Mark posts on Steven: title, Run',
    'someUser posts on Movies: Like'
]);
