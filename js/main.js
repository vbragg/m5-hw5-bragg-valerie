var listItems = document.querySelectorAll('#buttons li');

function changeColor() {
  this.classList.toggle('blue');
}

for (i = 0; i< listItems.length; i++) {
  listItems[i].addEventListener('mouseover', changeColor);
}
