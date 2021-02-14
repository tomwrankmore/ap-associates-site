import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText)

const aboutEnter = function (container) {
    const heading = container.querySelector('h1')

    const header = container.querySelector('.site-header')

    document.activeElement.blur();

    const tl = gsap.timeline({
        defaults: {
            duration: 1.2, ease: 'power4.out'
        }
    })

    tl
        .from('.about', {
            y: '200',
        })
        .from('.teamHeading', {
            y: '200',
        }, '<')
        .from('.teamMember--photo', {
            y: '250',
        }, '<')
        .from('.teamMember--bio', {
            y: '350',
        }, '<')



    return tl
}

export default aboutEnter