import { html, render } from './node_modules/lit-html/lit-html.js'
import { towns as townsData } from './towns.js'

const towns = townsData.map(t => ({name: t, active: false}));

const townTemplate = (town) => html`<li class=${town.active ? 'active' : ''}>${town.name}</li>`

const root = document.getElementById('towns');

update()

document.querySelector('button').addEventListener('click', onSearch);

function update() {
   render(html`<ul>${towns.map(t => townTemplate(t))}</ul>`, root)
}

function onSearch() {
   const text = document.getElementById('searchText').value.trim().toLocaleLowerCase();

   
   const result = document.getElementById('result');
   let count = 0;
   
   towns.forEach(t => {
      if(text && t.name.toLocaleLowerCase().includes(text)) {
         t.active = true;
         count++;
      } else {
         t.active = false;z
      }
   });

   render(html`<p>${count} matches found</p>`, result)

   update();
}