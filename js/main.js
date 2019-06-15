var listItems = document.querySelectorAll('#buttons li');

function changeColor() {
  this.classList.add('blue');
  this.removeAttribute('id');
};

for (i = 0; i< listItems.length; i++) {
  listItems[i].addEventListener('mouseover', changeColor);
};


var firstButton = document.getElementById('button1');


firstButton.addEventListener('click',
  function() {
      alert('Oooh - so close, but no cigar');
  },
);

var secondButton = document.getElementById('button2');


secondButton.addEventListener('click',
  function() {
      alert('DING DING DING - We have a winner');
  },
);

var thirdButton = document.getElementById('button3');


thirdButton.addEventListener('click',
  function() {
      alert('Oops, butter luck next time”');
  },
);
