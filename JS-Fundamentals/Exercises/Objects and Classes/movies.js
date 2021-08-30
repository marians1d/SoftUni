function movies(moviesInfo) {
    let movies = [];
    for (let i = 0; i < moviesInfo.length; i++) {
        let movie = {};
        if (moviesInfo[i].includes("addMovie")) {
            let currentName = moviesInfo[i].slice(9);
            movie.name = currentName;
            movies.push(movie);
        } else if (moviesInfo[i].includes("directedBy")) {
            let [name, director] = moviesInfo[i].split(" directedBy ");
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].name === name) {
                    movies[i].director = director;
                }
            }
        } else if (moviesInfo[i].includes("onDate")) {
            let [name, date] = moviesInfo[i].split(" onDate ");
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].name === name) {
                    movies[i].date = date;
                }
            }
        }
    }

    for (let movie of movies) {
        if (
            movie.name !== undefined &&
            movie.director !== undefined &&
            movie.date !== undefined
        ) {
            console.log(JSON.stringify(movie));
        }
    }
}
