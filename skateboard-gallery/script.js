const items = document.getElementsByTagName('a');
const largePic = document.getElementById('view');

function select(event) {
  let pic = this.href;
  console.log(pic);

  event.preventDefault();
  for (let i = 0; i< items.length; i++) {
    items[i].classList.remove('gallery-current');
  }
  this.classList.add('gallery-current');
  largePic.src = pic;
  
}
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', select);
}
