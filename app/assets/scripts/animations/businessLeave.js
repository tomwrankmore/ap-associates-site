import { gsap } from "gsap";

const fromBusiness = (container) => {

  const introText = container.querySelectorAll('.intro-text'),
  tl = gsap.timeline({
    defaults: {
      duration: 0.9, ease: 'power4.in'
    }
  })

  tl
  .to(introText, {
    y:100,
    autoAlpha: 0
  })
  .to('.business-box', {
    y: 300,
    opacity: 0,
    // transformOrigin: "50% 50%",
  }, "<")
  // .to('.business-grid', {
  //   autoAlpha: 0
  // }, "<")
  return tl
}

export default fromBusiness