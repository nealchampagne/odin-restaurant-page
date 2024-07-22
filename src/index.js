import homeLoad from './homeload.js';
import menuLoad from './menuload.js';
import aboutLoad from './aboutload.js';
import './style.css';

homeLoad();

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const aboutBtn = document.getElementById('about');

const tabSwitch = (pageFunc) => {
  const content = document.getElementById('content');
  while (content.firstChild) {
  content.removeChild(content.lastChild);
  }
  pageFunc();
};

homeBtn.addEventListener('click', () => {
  tabSwitch(homeLoad);
});

menuBtn.addEventListener('click', () => {
  tabSwitch(menuLoad);
});

aboutBtn.addEventListener('click', () => {
  tabSwitch(aboutLoad);
});
