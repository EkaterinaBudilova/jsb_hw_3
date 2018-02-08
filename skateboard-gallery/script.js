const items = document.getElementsByTagName('a');

function select(event) {
  event.preventDefault();
  this.classList.add('gallery-current');
}
items.addEventListener('click', select);