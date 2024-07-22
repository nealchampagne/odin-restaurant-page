import restaurant from './images/restaurant.jpeg';

const homeLoad = () => {
  const content = document.querySelector('#content');
  const homeContainer = document.createElement('div');
  const home = document.createElement('div');
  const hours = document.createElement('div');
  const title = document.createElement('div');
  const monFri = document.createElement('div');
  const satSun = document.createElement('div');
  const address = document.createElement('div');
  const restaurantImage = new Image();
  restaurantImage.src = restaurant;

  homeContainer.classList.add('homecontainer');
  home.classList.add('home');
  hours.classList.add('hours');
  title.classList.add('hourstitle');
  monFri.classList.add('monfri');
  satSun.classList.add('satsun');
  address.classList.add('address');
  restaurantImage.classList.add('restaurant');

  title.textContent = 'Hours'
  monFri.textContent = 'Mon-Fri: 10am - 7pm'
  satSun.textContent = 'Sat-Sun: 9am - 4pm'
  address.textContent = '498 Bayside Dr, Portsville, ME 09310'

  content.appendChild(homeContainer);
  homeContainer.appendChild(home);
  home.appendChild(restaurantImage);
  home.appendChild(hours);
  hours.appendChild(title);
  hours.appendChild(monFri);
  hours.appendChild(satSun);
  home.appendChild(address);
}

export default homeLoad;