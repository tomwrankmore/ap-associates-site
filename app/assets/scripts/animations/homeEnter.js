import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText)

const homeEnter = function(container) {

    document.activeElement.blur();

    const introHeadingSplit = new SplitText(container.querySelector(".introHeading"), {
      type:"chars,words,lines"
      /** Line split doesn't work because of the span */
    }), 
    introHeadingLines = introHeadingSplit.lines,
    introHeadingWords = introHeadingSplit.words,
    introHeadingChars = introHeadingSplit.chars; //an array of all the divs that wrap each character   

    const tl = gsap.timeline({
      defaults: {
        duration: 0.9, ease: 'power4.out'
      }
    })
    
    tl
    .from(container, {
      clipPath: "inset(0 0 100% 0)"
    })
    .from(introHeadingLines, {
      y:"300",
      autoAlpha: 0,
    }, "<")

    return tl
  }

  export default homeEnter