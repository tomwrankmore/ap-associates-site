import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

const splitParagraph = (container) => {

  const borderBottom = container.querySelector('border-bottom')
  const targetPara = container.querySelector('.split-para')

  let childSplit = new SplitText(targetPara, {
    type: "lines",
    linesClass: "childLines"
  });
  let parentSplit = new SplitText(targetPara, {
    type: "lines",
    linesClass: "parentLines"
  });

  const tl = gsap.timeline({
    defaults: {
      duration: 0.7, ease: 'none'
    }
  })

  tl
    .to(targetPara, { autoAlpha: 1 })
    .from(".childLines", {
      duration: 0.75,
      ease: "power2.inOut",
      yPercent: 101,
      stagger: 0.1,
      // Remove the extra markup when it's done
      onComplete: () => {
        parentSplit.revert();
        childSplit.revert();
      }
    }, "<")
}

export default splitParagraph