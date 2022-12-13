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
const sevenBtn = document.getElementById('#random-seven-button');
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
    document.getElementById('display-one').innerHTML = lineOne.value;
    let val = document.getElementById('line-one').value;
    document.getElementById('display-one').value = val;
};
lineTwo.onkeyup = function () {
    document.getElementById('display-two').innerHTML = lineTwo.value;
    let val = document.getElementById('line-two').value;
    document.getElementById('display-two').value = val;
};
lineThree.onkeyup = function () {
    document.getElementById('display-three').innerHTML = lineThree.value;
    let val = document.getElementById('input').value;
    document.getElementById('display-three').value = val;
};

fiveBtn.addEventListener('click', async () => {
    displayOne.textContent = '';

    const response = await getRandomLine();
    displayOne.textContent = response[0].five;
});
