import { getHaikuById } from '../fetch-utils.js';
import { renderHaiku } from '../render-utils.js';

const haikuContainer = document.getElementById('haiku-container');

async function fetchAndDisplayHaiku() {
    haikuContainer.textContent = '';
    const haiku = await getHaikuById();
    console.log('haiku', haiku);

    renderHaiku(haiku);
    haikuContainer.append(haiku);
}

window.addEventListener('load', async () => {
    fetchAndDisplayHaiku();
});
