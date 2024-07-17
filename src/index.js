import homeLoad from './homeload.js';
import menuLoad from './menuload.js';
import aboutLoad from './aboutload.js';
import './style.css';

homeLoad();

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const aboutBtn = document.querySelector('.about');

const tabSwitch = (loadPage) => {
  const content = document.getElementById('content');
  while (content.firstChild) {
  content.removeChild(content.lastChild);
  }
  loadPage();
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
