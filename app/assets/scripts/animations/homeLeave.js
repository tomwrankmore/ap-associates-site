import gsap from 'gsap';

const fromHome = (container) => {

  const tl = gsap.timeline({
    defaults: {
      duration: 0.9, ease: 'power4.in'
    }
  })

  tl
  .to(container, {
    clipPath: "inset(100% 0 0 0)"
  })
  return tl
}

export default fromHome;