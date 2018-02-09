const keys = document.getElementsByTagName('li');
const sounds = document.getElementsByTagName('audio');
const lower = ['sounds/lower/first.mp3', 'sounds/lower/second.mp3', 'sounds/lower/third.mp3', 'sounds/lower/fourth.mp3', 'sounds/lower/fifth.mp3'];
const middle = ['sounds/middle/first.mp3', 'sounds/middle/second.mp3', 'sounds/middle/third.mp3', 'sounds/middle/fourth.mp3', 'sounds/middle/fifth.mp3'];
const higher = ['sounds/higher/first.mp3', 'sounds/higher/second.mp3', 'sounds/higher/third.mp3', 'sounds/higher/fourth.mp3', 'sounds/higher/fifth.mp3'];

const p = document.getElementsByTagName('ul');
const piano = p[0];

document.addEventListener('keydown', func) 

function func(event) {
  console.log(event.code);
  if ((event.code === 'AltLeft') || (event.code === 'AltRight')) {
    piano.classList.remove('middle');
    piano.classList.add('higher');
  } else if ((event.code === 'ShiftLeft') || (event.code === 'ShifRight')) {
    piano.classList.remove('middle');
    piano.classList.add('lower');
  }
}

for (let i = 0; i < sounds.length; i++) {
  if (piano.classList.contains('middle')) {
    sounds[i].src = middle[i];
  } else if (piano.classList.contains('lower')) {
    sounds[i].src = lower[i];
  } else if (piano.classList.contains('higher')) {
    sounds[i].src = higher[i];
  }
}

function play() {
  let players = this.getElementsByTagName('audio');
  let player = players[0];
  player.play();
}

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', play);
}