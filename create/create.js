import '../auth/user.js';
import { getUser, insertHaiku } from '../fetch-utils.js';

const errorDisplay = document.getElementById('error-display');
const haikuForm = document.getElementById('create-form');
// const lineOne = haikuForm.querySelector('[name = line-1]');
// const lineTwo = haikuForm.querySelector('[name = line-2]');
// const lineThree = haikuForm.querySelector('[name = line-3]');
const theme = document.getElementById('theme-selector');
const displayContainer = document.querySelector('.display-container');
const test = document.querySelector('#test');
const inputBox = document.querySelector('textarea');

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
    test.textContent = formData.get('line-1');

    return checkError(response);
});

inputBox.onkeyup = function () {
    document.getElementById('test').innerHTML = inputBox.value;
    let val = document.getElementById('input').value;
    document.getElementById('test').value = val;
};
