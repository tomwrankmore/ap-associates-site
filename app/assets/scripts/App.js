import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import AOS from 'aos';
import 'aos/dist/aos.css';

new MobileMenu();

if (module.hot) {
  module.hot.accept()
}

// hot modules means that webpack generates javascript file to memory rather than creating a file...


AOS.init({
  easing: 'ease-in-out',
  duration: 500,
  delay: 0,
  once: true,
  mirror: false,
  disable: 'mobile',
  anchorPlacement: 'top-center',
});
// window.addEventListener('load', function () {
//   AOS.refresh();
// });