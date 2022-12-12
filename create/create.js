import '../auth/user.js';
import { getUser } from '../fetch-utils.js';

const errorDisplay = document.getElementById('error-display');
const haikuForm = document.getElementById('create-form');
const lineOne = haikuForm.querySelector('[name = line-1]');
const lineTwo = haikuForm.querySelector('[name = line-2]');
const lineThree = haikuForm.querySelector('[name = line-3]');
const theme = haikuForm.getElementById('theme-selector');

let error = null;
let haiku = [];

const user = getUser();

window.addEventListener('load', (async) => {});
