const navigation = document.getElementsByTagName('nav');
let str = [];
const egg = ['KeyY', 'KeyT', 'KeyN', 'KeyJ','KeyK', 'KeyJ','KeyU', 'KeyB', 'KeyZ'];
const secret = document.querySelector('div.secret');
let symbol;

function check() {
  let eq = false;
  for (let i = 0; i < egg.length; i++) {
    if (str[i] !== egg[i]) {
      str = [];
      eq = false;
      break;
    } else {
      eq = true;
    }
  }
  if (eq) {
    secret.classList.add('visible');
  }
}

function show(event) {
  if ((event.ctrlKey) && (event.altKey) && (event.code === 'KeyT') ) {
    navigation[0].classList.toggle('visible');
  } else {
    symbol = event.code;
    if (str.length < egg.length) {
      str.push(symbol);
    } else {
      str = [];
      str.push(symbol);
    }
  }
  if (str.length == egg.length) {
    check();
  }
}

document.addEventListener('keyup', show);
