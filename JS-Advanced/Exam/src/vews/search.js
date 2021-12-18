import { searchAlbums } from '../api/data.js';
import {html} from '../lib.js'
import { getUserData } from '../util.js';

let isSearched = false;

const searchTamplate = (onSearch, albums, userData) => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>

    <!--Show after click Search button-->
    ${isSearched 
        ? html`
        <div class="search-result">
            ${albums.length == 0 
                ? html`<p class="no-result">No result.</p>` 
                : albums.map(a => albumCard(a, userData))}
        </div>` : null}

    
</section>`;

const albumCard = (album, userData) => html`
<div class="card-box">
    <img src=${album.imgUrl}>
    <div>
        <div class="text-center">
            <p class="name">Name: ${album.name}</p>
            <p class="artist">Artist: ${album.artist}</p>
            <p class="genre">Genre: ${album.genre}</p>
            <p class="price">Price: $${album.price}</p>
            <p class="date">Release Date: ${album.releaseDate}</p>
        </div>
        <div class="btn-group">
            ${userData ? html`<a href="/details/${album._id}" id="details">Details</a>` : null}
        </div>
    </div>
</div>`

export function searchPage(ctx) {
    const userData = getUserData();

    update([]);

    async function update(albums) {
        ctx.render(searchTamplate(onSearch, albums, userData));
    }

    async function onSearch() {
        const query = document.querySelector('.search input').value.trim();

        if (query == '') {
            return alert('Fill search bar!')
        }
        
        isSearched = true;

        const albums = await searchAlbums(query);

        update(albums);
    }
}