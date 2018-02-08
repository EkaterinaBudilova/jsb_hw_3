let mode = 'middle';
//const sounds = document.getElementsByTagName('audio');
//const set = document.getElementsByTagName('ul');

const lower = ['sounds/lower/first.mp3', 'sounds/lower/second.mp3', 'sounds/lower/third.mp3', 'sounds/lower/fourth.mp3', 'sounds/lower/fifth.mp3'];

const middle = ['sounds/middle/first.mp3', 'sounds/middle/second.mp3', 'sounds/middle/third.mp3', 'sounds/middle/fourth.mp3', 'sounds/middle/fifth.mp3'];

const higher = ['sounds/higher/first.mp3', 'sounds/higher/second.mp3', 'sounds/higher/third.mp3', 'sounds/higher/fourth.mp3', 'sounds/higher/fifth.mp3'];

//const sounds = document.getElementsByTagName('audio');

let mode = 'middle';
//const sounds = document.getElementsByTagName('audio');
//const set = document.getElementsByTagName('ul');



const keys = document.getElementsByTagName('li');
const play = function() {
  const sounds = this.getElementsByTagName('audio');
  const player = sounds[0];
  player.src = middle[0];//сюда как-то нужно передать номер звука в массиве
  player.play();
}
for (let i = 0; i < keys.length; i++) {
  
  keys[i].addEventListener('click', play) ;
  
}



//const keys = document.getElementsByTagName('li');

//for (let j = 0; j < keys.length; j++) {
//  sounds[j] = keys[j].getElementsByTagName('audio');
//f
//for (let i = 0; i < sounds.length; i++) {
//  sounds[i].src = middle[i];
//}
//
//
//
//const play = function () {
//  this.play();
//}
//document.addEventListener('click', play);

//function func = function(event) {
//  if (event.shiftKey) {
//    mode = 'lower';
//    set[0].classList.add('lower');
//    set[0].classList.remove('higher');
//  } else if (event.altlKey) {
//    mode = 'higher';
//  } 
//}
//
//
//  sounds[0].onclick = () => {
//    sounds[0].play();
//  
//}
//document.addEventListener('keydown', func);
//if (set[0].classList.contains('lower')) {
//  for (let i = 0; i < sounds.length; i++) {
//    sounds[i].src = lower[i];
//  }  
//} else if (set[0].classList.contains('middle')) {
//  for (let i = 0; i < sounds.length; i++) {
//    sounds[i].src = middle[i];
//  }  
//} else if (set[0].classList.contains('higher')) {
//  for (let i = 0; i < sounds.length; i++) {
//    sounds[i].src = higher[i];
//  }  
//}
//
//
//document.addEventListener('click', play);