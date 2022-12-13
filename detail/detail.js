import { getHaikuById } from '../fetch-utils.js';
import { renderHaiku } from '../render-utils.js';

const haikuContainer = document.getElementById('haiku-container');

const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const listEl = document.querySelector('.list');
async function fetchAndDisplayHaiku() {
    listEl.textContent = '';
    const haiku = await getHaikuById(id);
    // console.log('haiku', haiku);

    const singleHaiku = renderHaiku(haiku);
    listEl.append(singleHaiku);
}

window.addEventListener('load', async () => {
    await fetchAndDisplayHaiku();
});
