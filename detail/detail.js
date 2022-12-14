import { decrementLikes, getHaikuById, incrementLikes } from '../fetch-utils.js';
import { renderHaiku } from '../render-utils.js';

const haikuContainer = document.getElementById('haiku-container');

const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const listEl = document.querySelector('.list');

let rating = 0;

async function fetchAndDisplayHaiku() {
    listEl.textContent = '';
    const haiku = await getHaikuById(id);
    // console.log('haiku', haiku);

    const singleHaiku = renderHaiku(haiku);
    const haikuRating = renderLikes(haiku);
    listEl.append(singleHaiku, haikuRating);
}

window.addEventListener('load', async () => {
    await fetchAndDisplayHaiku();
});

function renderLikes({ rating, haiku, id }) {
    const p = document.createElement('p');
    const downButton = document.createElement('button');
    const upButton = document.createElement('button');
    const haikuLikes = document.createElement('div');
    haikuLikes.classList.add('haiku-likes');
    haikuLikes.append(p, downButton, upButton);
    downButton.textContent = 'downvote';
    upButton.textContent = 'upvote';

    // p.textContent = `This Haiku has ${rating} stars`;

    downButton.addEventListener('click', async () => {
        await decrementLikes(id);
        await fetchAndDisplayHaiku();
    });

    upButton.addEventListener('click', async () => {
        await incrementLikes(id);
        await fetchAndDisplayHaiku();
    });
    return haikuLikes;
}
