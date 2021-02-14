import gsap from 'gsap';

const aboutLeave = (container) => {

    const heading = container.querySelector('h1')
    const borderBottom = container.querySelector('.border-bottom')
    const introText = container.querySelectorAll('.aboutParagraph')

    const tl = gsap.timeline({
        defaults: {
            duration: 0.9, ease: 'power4.in'
        }
    })

    tl
        // .to(heading, {
        //     y: 100,
        //     autoAlpha: 0
        // })
        // .to(borderBottom, {
        //     y: 200,
        //     autoAlpha: 0
        // }, '<')
        .to(".about", {
            y: 300,
            autoAlpha: 0

        })
        .to(".team", {
            y: 500,
            autoAlpha: 0

        }, '<')

    return tl
}

export default aboutLeave;