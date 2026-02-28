const container = document.getElementById('container');
const number = document.getElementById('number');

container.addEventListener('click', (e) => {

  let number =Number(document.getElementById('number').innerText);
  
  if(e.target.classList.contains('increase')) {
    document.getElementById('number').innerText = ++number;
  }
  if(e.target.classList.contains('decrease')) {
    document.getElementById('number').innerText = --number;
  }
  if(e.target.classList.contains('reset')) {
    document.getElementById('number').innerText = '0';
  }
  
})

