import { gsap } from "gsap";

const hideModal = () => {

    const tl = gsap.timeline({
        defaults: { 
          ease: 'power4.in'
        }
      })

    tl
    .to(".modal__inner", {
        y: -100,
        autoAlpha: 0
    })
    .to(".modal__title, .modal__description, .modal__link", {
        y: "0",
        stagger: 0.2
    })
    .to(".modal", {
        clipPath: "inset(0 0 100% 0)"
    }, "<")
    console.log("Bye Modal!")
}

export default hideModal

