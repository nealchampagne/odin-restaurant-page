const aboutLoad = () => {
  const content = document.getElementById('content');
  const container = document.createElement('div');
  const about = document.createElement('div');
  const originHeading = document.createElement('div');
  const origin = document.createElement('div');
  const philHeading = document.createElement('div');
  const philosophy = document.createElement('div');

  container.classList.add('aboutcontainer');
  about.classList.add('about');
  originHeading.classList.add('originheading');
  origin.classList.add('origin');
  philHeading.classList.add('philheading');
  philosophy.classList.add('philosophy');

  originHeading.textContent = 'Our Origin Story'
  origin.innerHTML = `Nestled on the rugged shores of the North Atlantic, Blobfish 
  Bistro emerged from the depths like a hidden treasure. Founded in 1961 by Captain 
  Magnus "Salty” O’Sullivan, a grizzled seafarer with a penchant for adventure, 
  our humble eatery began as a dockside cottage. Salty, with a twinkle in his eye 
  and salt spray in his beard, envisioned a place where the ocean’s bounty could 
  be celebrated—a sanctuary for seafood enthusiasts and curious souls alike.<br><br>
  The legend goes that Salty stumbled upon a rare and peculiar creature during a 
  tempestuous night: the blobfish. With its gelatinous appearance and melancholic 
  expression, the blobfish seemed an unlikely muse. Yet, Salty saw beyond its unconventional 
  beauty. He believed that within its squishy exterior lay the essence of the sea—the 
  untamed, mysterious spirit of maritime adventure.<br><br>And so, Blobfish Bistro 
  was born—a haven where oceanic wonders collided with culinary creativity. Salty’s 
  crew, a motley crew of fishermen, foragers, and eccentric chefs, rallied behind 
  his vision. They scoured the coastline for the freshest catches, from luminescent 
  squid to crimson Dungeness crabs. Their motto? “From tide to table, with love.”`

  philHeading.textContent = 'Our Philosophy'
  philosophy.innerHTML = `At Blobfish Bistro, we embrace the wild and whimsical. 
  Our cuisine dances on the edge of tradition, daring to blend unexpected flavors 
  and textures. Here’s what sets us apart: <br><br><b>Sustainable Sourcing:</b> We 
  honor the sea by sourcing sustainably caught seafood. Our partnerships with local 
  fishermen ensure that every scallop, every oyster, and every tentacle is harvested 
  with care. We believe in leaving the ocean better than we found it. <br><br><b>Seaweed 
  Alchemy:</b> Our chefs are alchemists, transforming humble seafood into culinary 
  magic. Try our kelp-infused butter or the swordfish pastrami—it’s like tasting 
  the briny kiss of Poseidon himself. <br><br><b>Tidepool Fusion:</b> Our menu transcends 
  borders. Picture a fusion of Japanese umami, Mediterranean zest, and Pacific Northwest 
  flair.<br><br>Whether you’re a seasoned sailor or a landlubber seeking adventure, 
  Blobfish Bistro invites you to savor the sea’s secrets. Come, raise a glass of 
  seaweed-infused gin, listen to the haunting shanties of our resident accordionist, 
  and let the ocean weave its spell around you.`

  content.appendChild(container);
  container.appendChild(about);
  about.appendChild(originHeading);
  about.appendChild(origin);
  about.appendChild(philHeading);
  about.appendChild(philosophy);
};

export default aboutLoad;