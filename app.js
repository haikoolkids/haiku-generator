/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { renderHaiku } from './render-utils.js';
import { getHaikus } from './fetch-utils.js';
/* Get DOM Elements */

const listEl = document.querySelector('.list');
/* State */

/* Events */

/* Display Functions */

window.addEventListener('load', async () => {
    fetchAndDisplayHaikus();
});

async function fetchAndDisplayHaikus() {
    listEl.textContent = '';
    const haikus = await getHaikus();
    console.log('haikus', haikus);
    for (let haiku of haikus) {
        const haikuEl = renderHaiku(haiku);
        listEl.append(haikuEl);
        haikuEl.addEventListener('click', () => {
            location.replace(`./detail/?id=${haiku.id}`);
        });
    }
}
