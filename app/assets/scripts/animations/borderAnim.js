import gsap from 'gsap';

const borderBottom = (container) => {
  
  const border = container.querySelector(".border-bottom")
  const tl = gsap.timeline({
      defaults: {
        duration: 0.9, 
        ease: 'power4.out' 
    }
  })

  tl
  .to(border, {
    autoAlpha: 1
  })
  .from(border, {
    scaleX: 0,
    transformOrigin: "left",
    ease: "power2.inOut"
  }, "<")

  return tl
}

export default borderBottom;