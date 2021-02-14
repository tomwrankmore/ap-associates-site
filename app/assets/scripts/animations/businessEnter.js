import { gsap } from "gsap";

const toBusiness = (container) => {

  document.activeElement.blur();

  const tl = gsap.timeline({
    defaults: {
      duration: 0.9, ease: 'power4.out'
    }
  })

  tl
    .to('.business-grid', {
      autoAlpha: 1
    })
    .from(container, {
      y: '-50'
    }, '<')
    .from('.business-box', {
      ease: "back",
      y: -50,
      opacity: 0,
      transformOrigin: "50% 50%",
      stagger: 0.1
    }, "<")

  return tl
}

export default toBusiness