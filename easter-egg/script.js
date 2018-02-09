const navigation = document.getElementsByTagName('nav');
let str = [];
const egg = ['KeyY', 'KeyT', 'KeyN', 'KeyJ','KeyK', 'KeyJ','KeyU', 'KeyB', 'KeyZ'];
let symbol;
function show(event) {
  if ((event.ctrlKey) && (event.altKey)) {
    console.log('true');
    if (event.code === 'KeyT') {
      navigation[0].classList.toggle('visible');
      console.log('event');
    }
  } else {
    symbol = event.code;
    str.push(symbol);
    console.log(str);
  }
}

document.addEventListener('keyup', show);

while(str.length <= egg.length) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== egg[i]) {
      str = [];
    } else {
      console.log('yyy');
    }
  }
}