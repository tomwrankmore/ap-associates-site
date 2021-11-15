import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

const landingPageAnim = function (container) {

  const introHeading = container.querySelector('.introHeading')

  gsap.set(".site-header", { autoAlpha: 1 })
  gsap.set("#overlayHeader", { autoAlpha: 1 })

  /**split text twice to create child to animate up into parent */
  // let lineChild = new SplitText(".introHeading", {
  //   type: "lines",
  //   linesClass: "lineChild"
  // })
  // let lineParent = new SplitText(".introHeading", {
  //   type: "lines",
  //   linesClass: "lineParent"
  // })

  const tl = gsap.timeline({
    defaults: {
      // duration: 0.9, 
      ease: 'power4.out'
    }
  }),
    overlayHeaderSplit = new SplitText("#overlayHeader", {
      type: "words,chars"
    }),
    chars = overlayHeaderSplit.chars //an array of all the divs that wrap each character 

  tl
  .from('.slider', {
    scale: 1.6,
    duration: 1.875
  })
    // .from(chars, {
    //   y: 20,
    //   opacity: 0,
    //   ease: "back",
    //   stagger: {
    //     amount: 0.1,
    //     duration: 1.2
    //   }
    // })
    // .to(chars, {
    //   y: -80,
    //   opacity: 0,
    //   delay: 1,
    //   ease: "expo.inOut",
    //   stagger: {
    //     amount: 0.1,
    //     duration: 1.2
    //   },
    //   onComplete: () => {
    //     overlayHeaderSplit.revert()
    //   }
    // })
    // .to(".blackOverlay", {
    //   yPercent: -101,
    //   duration: 1,
    //   ease: "expo.inOut"
    // }, "<")
    // .from(".introHeading", {
    //   y: '150px',
    //   duration: 1.2,
    //   autoAlpha: 0,
    //   ease: "power4.out"
    // }, "<")


  return tl
}

export default landingPageAnim