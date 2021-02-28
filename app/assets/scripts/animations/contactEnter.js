import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText)

const contactEnter = function (container) {
    const heading = container.querySelector('h1')
    const header = container.querySelector('.site-header')
    document.activeElement.blur();

    const tl = gsap.timeline({
        defaults: {
            duration: 1.2, ease: 'power4.out'
        }
    })

    tl
        .from('.contact', {
            y: '200',
        })

    return tl
}

export default contactEnter;