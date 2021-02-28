import gsap from 'gsap';

const contactLeave = (container) => {

    const heading = container.querySelector('h1')
    const borderBottom = container.querySelector('.border-bottom')
    const introText = container.querySelectorAll('.aboutParagraph')

    const tl = gsap.timeline({
        defaults: {
            duration: 0.9, ease: 'power4.in'
        }
    })

    tl
        .to(".contact", {
            y: 300,
            autoAlpha: 0

        })

    return tl
}

export default contactLeave;