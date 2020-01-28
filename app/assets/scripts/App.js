import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'

new MobileMenu();

if(module.hot) {
  module.hot.accept()
}

// hot modules means that webpack generates javascript file to memory rather than creating a file...