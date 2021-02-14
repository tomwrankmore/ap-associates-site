import gsap from 'gsap';

const artistLeave = (container) => {

  const cards = container.querySelectorAll('.artist-card')
  const introText = container.querySelectorAll('.intro-text')

  const tl = gsap.timeline({
    defaults: {
      duration: 0.9, ease: 'power4.in'
    }
  })

    tl
    .to(introText, {
      y:100,
      autoAlpha: 0
    })
    .to(cards, {
      autoAlpha: 0,
      y:300
    }, "<")
  return tl
}

export default artistLeave;