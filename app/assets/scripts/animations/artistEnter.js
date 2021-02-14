import '../../styles/locomotiveScroll.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);

const artistEnter = (container) => {

    document.activeElement.blur();
    const header = container.querySelector('.site-header')
    const cards = container.querySelectorAll('.artist-card')
    const scrollContainer = container.querySelector('.scrollContainer')
    const artistCards = gsap.utils.toArray(cards);

    artistCards.forEach((card, index) => {
        let imgContainer = card.querySelector(".artist-image"),
            atag = card.querySelector("a"),
            img = card.querySelector("img"),
            artistInfo = card.querySelector(".artist-info"),
            artistName = card.querySelector("h3"),
            labelName = card.querySelector("p")

        gsap.set(".artist-grid", { autoAlpha: 1 })
        gsap.set(card, { autoAlpha: 1 })

        const tl = gsap.timeline({
            defaults: {
                duration: 0.9,
                ease: 'power4.out'
            },
            scrollTrigger: {
                trigger: card,
                start: "top 65%",  // start timeline when top of content is 100px above bottom of browser window
                end: "bottom top", // bottom of content is 20% from the t op of browser window
                scroller: scrollContainer,
                toggleActions: "play none none none",
                // toggleClass: {targets: section, className: "is-active"},
                // markers:true,
                // scrub:1,
                // pin:true
            }
        })

        tl
            .from(img, { scale: 1.6 }, "<")
            .from(imgContainer, { yPercent: "-100" }, "<")
            .from(img, { yPercent: "100" }, "<")
            .from(artistInfo, { opacity: 0, yPercent: "-100" }, "-=0.5")
            .from(artistName, { opacity: 0, yPercent: "200", ease: "back" }, "<0.1")
            .from(labelName, { opacity: 0, yPercent: "100", ease: "back" }, "<0.1")
    })
}

export default artistEnter