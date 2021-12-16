import {showCatalog} from './catalog.js';
import {showCreateForm} from './create.js';
import {render} from './utility.js';

// main module:
// initiate view whit dependecies
// - rendering
// - comunication between modules

const root = document.body;

const ctx = {
    update
};

update()

function update() {
    render([
        showCatalog(ctx),
        showCreateForm(ctx),
        ], root);
}