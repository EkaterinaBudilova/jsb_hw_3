const keys = document.getElementsByTagName('li');
const sounds = document.getElementsByTagName('audio');
const lower = ['sounds/lower/first.mp3', 'sounds/lower/second.mp3', 'sounds/lower/third.mp3', 'sounds/lower/fourth.mp3', 'sounds/lower/fifth.mp3'];
const middle = ['sounds/middle/first.mp3', 'sounds/middle/second.mp3', 'sounds/middle/third.mp3', 'sounds/middle/fourth.mp3', 'sounds/middle/fifth.mp3'];
const higher = ['sounds/higher/first.mp3', 'sounds/higher/second.mp3', 'sounds/higher/third.mp3', 'sounds/higher/fourth.mp3', 'sounds/higher/fifth.mp3'];

const p = document.getElementsByTagName('ul');
const piano = p[0];

function func(event) {
  if (event.altKey) {
    piano.classList.remove('middle');
    piano.classList.add('higher');
  } else if (event.shiftKey) {
    piano.classList.remove('middle');
    piano.classList.add('lower');
  }
//  console.log(piano.classList);
}

function reset(event) {
  if (event.code == 'ShiftLeft') {
    piano.classList.remove('lower');
    piano.classList.add('middle');
  } else if (event.code == 'AltLeft') {
    piano.classList.remove('higher');
    piano.classList.add('middle');
  }
//  console.log(piano.classList);
}

document.addEventListener('keydown', func);
document.addEventListener('keyup', reset);

function play() {
  for (let i = 0; i < sounds.length; i++) {
    if (piano.classList.contains('middle')) {
      sounds[i].src = middle[i];
    } else if (piano.classList.contains('lower')) {
      sounds[i].src = lower[i];
    } else if (piano.classList.contains('higher')) {
      sounds[i].src = higher[i];
    }
  }
  let players = this.getElementsByTagName('audio');
  let player = players[0];
  player.play();
}

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', play);
}