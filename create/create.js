/* eslint-disable space-before-function-paren */
import '../auth/user.js';
import { getUser, insertHaiku, checkError, getRandomLine } from '../fetch-utils.js';

const errorDisplay = document.getElementById('error-display');
const haikuForm = document.getElementById('create-form');
const lineOne = haikuForm.querySelector('[name = line-1]');
const lineTwo = haikuForm.querySelector('[name = line-2]');
const lineThree = haikuForm.querySelector('[name = line-3]');
const theme = document.getElementById('theme-selector');
const displayContainer = document.querySelector('.display-container');
const displayOne = document.querySelector('#display-one');
const displayTwo = document.querySelector('#display-two');
const displayThree = document.querySelector('#display-three');
const fiveBtn = document.querySelector('.random-five-button');
const sevenBtn = document.querySelector('.random-seven-button');
const fiveBtn2 = document.querySelector('.random-five-button2');
// const inputBox = document.querySelector('textarea');
let testObj = {};
let error = null;
let haiku = [];

const user = getUser();

haikuForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(haikuForm);
    // console.log(formData.data);
    const haikuObj = {
        poem: [formData.get('line-1'), formData.get('line-2'), formData.get('line-3')],
        // user_name: user.id,
    };

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

fiveBtn2.addEventListener('click', async (e) => {
    displayThree.textContent = '';
    e.preventDefault();
    const response = await getRandomLine();
    lineThree.value = response[0].five;
    displayThree.textContent = response[0].five;
});
