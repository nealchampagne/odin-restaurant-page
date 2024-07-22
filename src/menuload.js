import menuJson from './menu.js';

const menuLoad = () => {
  const content = document.getElementById('content');
  const menuContainer = document.createElement('div');
  const title = document.createElement('div');
  const menu = document.createElement('div');

  menuContainer.classList.add('menucontainer');
  title.classList.add('menutitle');
  title.textContent = 'Menu';
  menu.classList.add('menu');

  menuContainer.appendChild(title);
  
  const populateMenu = obj => {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object') {

        const item = document.createElement('div');
        const info = document.createElement('div');
        const name = document.createElement('div');
        const desc = document.createElement('div');
        const price = document.createElement('div');
        const imageContainer = document.createElement('div');
        const image = new Image();

        item.classList.add('menuitem');
        info.classList.add('info');
        image.classList.add('dishimage');
        name.classList.add('name');
        desc.classList.add('desc');
        price.classList.add('price');
        name.textContent = obj[key].name;
        desc.textContent = obj[key].description;
        price.textContent = obj[key].price;
        image.src = obj[key].image;
      
        menu.appendChild(item);
        item.appendChild(info);
        info.appendChild(name);
        info.appendChild(desc);
        info.appendChild(price);
        item.appendChild(imageContainer);
        imageContainer.appendChild(image);
      }
    })
  }

  populateMenu(menuJson);

  menuContainer.appendChild(menu);
  content.appendChild(menuContainer);
};

export default menuLoad;