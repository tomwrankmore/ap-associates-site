import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'

new MobileMenu();
let i = 0;
let images = [];
let time = 2000;

images[0] = '/assets/images/home-slide/home-slide-0.png';
images[1] = '/assets/images/home-slide/home-slide-1.png';
images[2] = '/assets/images/home-slide/home-slide-2.png';

function changeImg() {
  document.slide.src = images[i];

  if(i < images.length - 1) {
     i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;

if(module.hot) {
  module.hot.accept()
}

// hot modules means that webpack generates javascript file to memory rather than creating a file...