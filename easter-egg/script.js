const navigation = document.getElementsByTagName('nav');
function show(event) {
  if ((event.ctrlKey) && (event.altKey)) {
    console.log('true');
    if (event.code === 'KeyP') {
      navigation[0].classList.toggle('visible');
      console.log('event');
    }
  } 
}

document.addEventListener('keyup', show());

