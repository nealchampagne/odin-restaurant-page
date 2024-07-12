const pageLoad = () => {
  const content = document.querySelector('#content');
  const header = document.createElement('div');
  const main = document.createElement('div');
  const footer = document.createElement('div');
  const title = document.createElement('div');


  header.classList.add('header');
  main.classList.add('main');
  footer.classList.add('footer');
  title.classList.add('title');
  title.textContent = 'Hope you brought your appetite!';
  main.textContent = 'Content TBD';
  footer.textContent = 'Content TBD';

  content.appendChild(header);
  header.appendChild(title);
  content.appendChild(main);
  content.appendChild(footer);
}

export default pageLoad;