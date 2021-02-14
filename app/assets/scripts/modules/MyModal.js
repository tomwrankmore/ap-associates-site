import { gsap } from "gsap";

class MyModal {
    constructor() {
        // this.injectHTML()
        this.modal = document.querySelector(".modal")
        this.closeIcon = document.querySelector(".modal__close")
        this.openModalButtons = document.querySelectorAll(".open-modal")
        this.events()
    }
    events() {
        this.openModalButtons.forEach(el => el.addEventListener("click", e => this.openTheModal(e)))
        this.closeIcon.addEventListener("click", () => this.closeTheModal())
        // this.modal.addEventListener("click", () => this.closeTheModal())
    }

    openTheModal(e) {
        e.preventDefault()
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
            }, "<")

        console.log("Hi Modal!")
    }

    closeTheModal() {
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

    // injectHTML() {
    //     document.body.insertAdjacentHTML('beforeend', `
    //     <section class="modal">
    //     <div class="modal__inner">
    //     <h3 class="modal__title">Contact</h3>
    //     <p class="modal__description">If you would like to find out more about the services we provide, please email us: </p>
    //     <p><a href="mailto:AP@AP.ASSOCIATES" class="modal__link">ap@ap.associates</a></p>

    //   <span class="modal__border-bottom"></span>
    //     </div>
    //     <div class="modal__close">
    //   <svg id="closeIcon" x="10px" y="10px"
    //        viewBox="0 0 43.5 43.6" style="" xml:space="preserve">
    //   <style type="text/css">
    //       .st0{stroke:#FFFFFF;stroke-width:6;stroke-linecap:round;stroke-miterlimit:10;}
    //   </style>
    //   <g>
    //       <line class="st0" x1="3.4" y1="3.4" x2="40.1" y2="40.2"/>
    //       <line class="st0" x1="40.1" y1="3.4" x2="3.4" y2="40.2"/>
    //   </g>
    //   </svg>
    //     </div>
    //   </section>
    //     `)
    // }
}

export default MyModal