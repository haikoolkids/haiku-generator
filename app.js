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
    // looping through each object in haikus area
    for (let haiku of haikus) {
        const haikuEl = renderHaiku(haiku);
        listEl.append(haikuEl);
        // makes each clickable to redirect to the detail page
        haikuEl.addEventListener('click', () => {
            location.replace(`./detail/?id=${haiku.id}`);
        });
    }
}
