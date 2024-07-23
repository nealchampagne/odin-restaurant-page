/** Import page load functions from the three page modules */

import homeLoad from './homeload.js';
import menuLoad from './menuload.js';
import aboutLoad from './aboutload.js';
import './style.css';

/** Initial home page load */

homeLoad();

/** Grab the buttons for tabbed browsing */

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const aboutBtn = document.getElementById('about');

/** Function to clear the DOM and call the relevant page load function */

const tabSwitch = (pageFunc) => {
  const content = document.getElementById('content');
  while (content.firstChild) {
  content.removeChild(content.lastChild);
  }
  pageFunc();
};

/** Slap event listeners on each button that call their respective
 *  imported page load functions */

homeBtn.addEventListener('click', () => {
  tabSwitch(homeLoad);
});

menuBtn.addEventListener('click', () => {
  tabSwitch(menuLoad);
});

aboutBtn.addEventListener('click', () => {
  tabSwitch(aboutLoad);
});
