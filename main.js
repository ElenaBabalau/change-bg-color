let color = ['yellow', 'red', 'green', 'blue', 'black', 'orange', 'pink'];

const button = document.querySelector('button');


button.addEventListener('click', () => {
  
  const random = color[Math.floor(Math.random() * color.length)];

  
const bgEl = document.querySelector('section'); 
bgEl.style.backgroundColor = random;
})

