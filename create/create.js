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

let error = null;
let haiku = [];

const user = getUser();
console.log(user);

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

    return checkError(response);
});

// eslint-disable-next-line space-before-function-paren
lineOne.onkeyup = function () {
    displayOne.innerHTML = lineOne.value;
    let val = lineOne.value;
    displayOne.value = val;
};
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

fiveBtn.addEventListener('click', async () => {
    // displayOne.textContent = '';

    const response = await getRandomLine();
    console.log(response);
    displayOne.textContent = response[0].five;
});

sevenBtn.addEventListener('click', async () => {
    displayTwo.textContent = '';

    const response = await getRandomLine();
    displayTwo.textContent = response[0].seven;
});

fiveBtn2.addEventListener('click', async () => {
    displayThree.textContent = '';

    const response = await getRandomLine();
    displayThree.textContent = response[0].five;
});
