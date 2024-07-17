import restaurant from './restaurant.jpeg';

const pageLoad = () => {
  const content = document.querySelector('#content');
  const banner = document.createElement('div');
  const container = document.createElement('div');
  const main = document.createElement('div');
  const footContainer = document.createElement('div');
  const footer = document.createElement('div');
  const title = document.createElement('div');
  const restaurantImage = new Image();
  restaurantImage.src = restaurant;


  banner.classList.add('banner');
  title.classList.add('title');
  title.textContent = `Bob's Blobfish`;
  container.classList.add('container');
  main.classList.add('main');
  restaurantImage.classList.add('restaurant');
  footContainer.classList.add('footcontainer');
  footer.classList.add('footer');
  footer.textContent = 'Est. 1961';

  content.appendChild(banner);
  banner.appendChild(title);
  content.appendChild(container);
  container.appendChild(main);
  main.appendChild(restaurantImage);
  content.appendChild(footContainer);
  footContainer.appendChild(footer);
}

export default pageLoad;