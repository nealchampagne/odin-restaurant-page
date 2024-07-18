import menuJson from './menu.json5';

const menuLoad = () => {
  const content = document.getElementById('content');
  const menuContainer = document.createElement('div');
  const menu = document.createElement('div');

  menuContainer.classList.add('menucontainer');
  menu.classList.add('menu');
  content.appendChild(menuContainer);
  
  const populateMenu = obj => {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object') {

        const item = document.createElement('div');
        const name = document.createElement('div');
        const desc = document.createElement('div');
        const price = document.createElement('div');
        const imageContainer = document.createElement('div');
        const image = new Image();

        item.classList.add('menuitem');
        name.textContent = obj[key].name;
        desc.textContent = obj[key].description;
        price.textContent = obj[key].price;
        image.src = `./${obj[key].image}`;
      
        menu.appendChild(item);
        item.appendChild(name);
        item.appendChild(desc);
        item.appendChild(price);
        item.appendChild(imageContainer);
      }
    })
  }

  populateMenu(menuJson);

  menuContainer.appendChild(menu);
};

export default menuLoad;