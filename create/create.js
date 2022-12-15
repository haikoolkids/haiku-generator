/* eslint-disable space-before-function-paren */
import '../auth/user.js';
import { getUser, insertHaiku, checkError, getRandomLine } from '../fetch-utils.js';
import { checkHaiku } from '../syllables.js';

const errorDisplay = document.getElementById('error-display');
const haikuForm = document.getElementById('create-form');
const lineOne = haikuForm.querySelector('[name = line-1]');
const lineTwo = haikuForm.querySelector('[name = line-2]');
const lineThree = haikuForm.querySelector('[name = line-3]');
const theme = document.getElementById('theme-selector');
const displayOne = document.querySelector('#display-one');
const displayTwo = document.querySelector('#display-two');
const displayThree = document.querySelector('#display-three');
const fiveBtn = document.querySelector('.random-five-button');
const sevenBtn = document.querySelector('.random-seven-button');
const fiveBtn2 = document.querySelector('.random-five-button2');
const previewImg = document.getElementById('preview-image');

let error = null;

const user = getUser();

haikuForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(haikuForm);

    // grabs input for syllable check function
    const line1 = formData.get('line-1');
    const line2 = formData.get('line-2');
    const line3 = formData.get('line-3');
    // resets form if syllable checker returns false and posts alert
    if (checkHaiku(line1, line2, line3) === false) {
        haikuForm.reset();
        //clear out input fields
        return alert('Haikus should have 5/7/5 syllables!');
        //this return statement stops the redirect below
    }

    const haikuObj = {
        poem: [formData.get('line-1'), formData.get('line-2'), formData.get('line-3')],
        themes: formData.get('theme-select'),
    };
// sets display to user input, either typed or filled by randomizer below.
    const response = await insertHaiku(haikuObj);
    displayOne.textContent = formData.get('line-1');
    displayTwo.textContent = formData.get('line-2');
    displayThree.textContent = formData.get('line-3');

    error = response.error;

    if (error) {
        errorDisplay.textContent = error.message;
    } else {
        location.assign('/');
    }
    return checkError(response);
});

// eslint-disable-next-line space-before-function-paren
lineOne.onkeyup = function () {
    displayOne.innerHTML = lineOne.value;
    let val = lineOne.value;
    displayOne.value = val;
};
// gets display while user is typing
// eslint-disable-next-line space-before-function-paren
lineTwo.onkeyup = function () {
    displayTwo.innerHTML = lineTwo.value;
    let val = lineTwo.value;
    displayTwo.value = val;
};
lineThree.onkeyup = function () {
    displayThree.innerHTML = lineThree.value;
    let val = lineThree.value;
    displayThree.value = val;
};
// randomizer for 5 and 7 syllable lines
fiveBtn.addEventListener('click', async (e) => {
    displayOne.textContent = '';
    e.preventDefault();
    const response = await getRandomLine();
    displayOne.textContent = response[0].five;
    lineOne.value = response[0].five;
});

sevenBtn.addEventListener('click', async (e) => {
    displayTwo.textContent = '';
    e.preventDefault();
    const response = await getRandomLine();
    lineTwo.value = response[0].seven;
    displayTwo.textContent = response[0].seven;
});
// almost the same as above, but set to display third line (5,7,5)
fiveBtn2.addEventListener('click', async (e) => {
    displayThree.textContent = '';
    e.preventDefault();
    const response = await getRandomLine();
    lineThree.value = response[0].five;
    displayThree.textContent = response[0].five;
});
// allows preview of theme change by selector
theme.addEventListener('change', (e) => {
    const value = e.target.value;

    previewImg.src = `../assets/${value}.png`;
});
