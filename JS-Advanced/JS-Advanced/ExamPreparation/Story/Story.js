class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        }

        if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        } else if (this.creator == username) {
            throw new Error("You can't like your own story!");
        } else {
            this._likes.push(username);

            return `${username} liked ${this.title}!`;
        }
    }

    dislike(username) {
        if (this._likes.includes(username)) {
            this._likes.splice(this._likes.indexOf(username), 1);

            return `${username} disliked ${this.title}`;
        } else {
            throw new Error("You can't dislike this story!");
        }
    }

    comment(username, content, id) {
        if (id == undefined || this.comments.some((a) => a.id == id) == false) {
            this.comments.push({id: this.comments.length + 1, username, content, replies: []});

            return `${username} commented on ${this.title}`;
        } else {
            const index = id - 1;
            this.comments[index].replies.push({
                id: index + 1 + ((this.comments[index].replies.length + 1) * 0.1),
                username,
                content,
            });

            return 'You replied successfully';
        }
    }

    toString(sortingType) {
        
        const sort = {
            'asc': (section) => section.sort((a, b) => a.id - b.id),
            'desc': (section) => section.sort((a, b) => b.id - a.id),
            'username': (section) => section.sort((a, b) => a.username.localeCompare(b.username))
        }
        
        let sortedComents = sort[sortingType](this.comments);

        let result = [];
        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.length}`);
        result.push(`Comments:`);

        for (let comment of sortedComents) {
            result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);

            const sortedReplies = sort[sortingType](comment.replies);

            for(let replies of sortedReplies) {
                result.push(`--- ${replies.id}. ${replies.username}: ${replies.content}`);
            }
        }

        return result.join('\n');
    }
}

let art = new Story('My Story', 'Anny');
console.log(art.like('John'));
console.log(art.likes);
console.log(art.dislike('John'));
console.log(art.likes);
art.comment('Sammy', 'Some Content');
console.log(art.comment('Ammy', 'New Content'));
art.comment('Zane', 'Reply', 1);
art.comment('Jessy', 'Nice :)');
console.log(art.comment('SAmmy', 'Reply@', 1));
console.log();
console.log(art.toString('username'));
console.log();
art.like('Zane');
console.log(art.toString('asc'));
