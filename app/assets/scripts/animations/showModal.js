import { gsap } from "gsap";

const showModal = () => {

    const tl = gsap.timeline({
        defaults: { 
          ease: 'power4.out'
        }
      })

    tl
    .to(".modal", {
        clipPath: "inset(0 0 0% 0)"
    })
    .to(".modal__inner", {
        y: 0,
        autoAlpha: 1
    }, "-=0.25")
    .from(".modal__border-bottom", {
        width: "0"
    }, "<")
    .from(".modal__title, .modal__description, .modal__link", {
        autoAlpha: 0,
        y: 30,
        stagger: 0.2,
        ease: "back"
    },"<")

    console.log("Hi Modal!")

}

export default showModal