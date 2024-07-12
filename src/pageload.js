const pageLoad = () => {
  const header = document.createElement('div');
  const main = document.createElement('div');
  const footer = document.createElement('div');
  const title = document.createElement('div');


  header.classList.add('header');
  main.classList.add('main');
  footer.classList.add('footer');
  title.classList.add('title');

  document.appendChild(header);
  header.appendChild(title);
  document.appendChild(main);
  document.appendChild(footer);
}

export default pageLoad;