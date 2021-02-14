/** GSAP Mobile Menu */
import { gsap } from "gsap";
const MyMobileMenu = function() {
  const menuIcon = document.querySelector(".site-header__menu-icon")
  const menuContent = document.querySelector(".site-header__menu-content")
  const siteHeader = document.querySelector(".site-header")
  const menuLinks = document.querySelectorAll(".primary-nav ul li a")
  const topLine = document.querySelectorAll(".topLine")
  const middleLine = document.querySelectorAll(".middleLine")
  const bottomLine = document.querySelectorAll(".bottomLine")
  
  
  const tl = gsap.timeline({
    defaults: { 
      ease: 'in',
      duration: 0.5
    }
  })
  
  tl.to(topLine, {
    transform: "rotate(45deg) scaleX(1.25) translateY(-3px)",
    transformOrigin: "0 0"
  })
  tl.to(middleLine, {
    autoAlpha: 0
  }, "<")
  tl.to(bottomLine, {
    transform: "rotate(-45deg) scaleX(1.25) translateY(6px)",
    transformOrigin: "0 100%"
  }, "<")
  tl.to(menuContent, {
    y: 0,
    duration: 0.1
  }, "<")
  tl.from(menuLinks, {
    autoAlpha: 0
  }, "<0.1")
  tl.reverse();
  
  menuIcon.addEventListener('click', function(){
    if(!tl.isActive()){
      //only reverse the direction if the tween is not active
      tl.reversed(!tl.reversed())
    }
  })
}

export default MyMobileMenu