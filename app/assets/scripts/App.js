import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import Modal from './modules/Modal'
import AOS from 'aos';
import 'aos/dist/aos.css';

new MobileMenu();
new Modal();

if (module.hot) {
  module.hot.accept()
}

// hot modules means that webpack generates javascript file to memory rather than creating a file...


AOS.init({
  easing: 'ease-in-out',
  duration: 700,
  delay: 0,
  once: true,
  mirror: false,
  disable: 'mobile',
  anchorPlacement: 'top-center',
});