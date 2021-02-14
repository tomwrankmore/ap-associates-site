import '../styles/styles.css'
import 'lazysizes'
import './modules/slider2'
import LocomotiveScroll from 'locomotive-scroll';
import barba from '@barba/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import {smoothScroll, MouseFollow, borderBottom, landingPageAnim, splitParagraph, MobileMenu, Modal, BusinessLogos, ArtistScrollTrigger, sliderFunc, toHome, toArtist, toBusiness , fromHome, fromArtist, fromBusiness} from './modules'; /* Import animation functions */

// MouseFollow()
new MobileMenu();
new Modal();

// hot modules means that webpack generates javascript file to memory rather than creating a file...
if (module.hot) {
  module.hot.accept()
}

function init() {

  let scroll;

  barba.hooks.after(({next}) => {
    console.log(next.url);
  });

 // scroll to the top of the page
  barba.hooks.enter(({next}) => {
    window.scrollTo(0, 0);
    // scroll.destroy();
    smoothScroll(next.container);
    console.log(next.namespace);
  });

  barba.init({

  views: [
    {
      namespace: 'home',
      beforeLeave() {},
      afterLeave() {},
      beforeEnter({next}) {
        sliderFunc(next.container)
        let triggers = ScrollTrigger.getAll();
        triggers.forEach( trigger => {			
          trigger.kill();
        });
      smoothScroll(next.container);
      },
      afterEnter() {}
    },
    {
      namespace: 'artists',
      beforeLeave() {},
      afterLeave() {},
      beforeEnter({next}) {
        let triggers = ScrollTrigger.getAll();
        triggers.forEach( trigger => {			
          trigger.kill();
        });
      smoothScroll(next.container); // initialise locomotive scroll
      splitParagraph(next.container)
      },
      afterEnter() {}
    },
    {
      namespace: 'business',
      beforeLeave() {},
      afterLeave() {},
      beforeEnter({next}) {
        let triggers = ScrollTrigger.getAll();
        triggers.forEach( trigger => {			
          trigger.kill();
        });
      
      smoothScroll(next.container); // initialise locomotive scroll
      splitParagraph(next.container)
      },
      afterEnter() {}
    }
],

  transitions: [
        {
    name: 'default-transition',
    once({next}) {
      landingPageAnim(next.container)
    },
    leave: ({current}) => {
      return gsap.to(current.container, {
        autoAlpha: 0,
        duration: 0.5
      });
    },
    enter ({next}) {
       gsap.from(next.container, {
        autoAlpha: 0,
        duration: 0.5
      });
    }
  },
  {
    /** TO HOME */
    name: 'home-to-artists',
    to: {
      namespace: ['home'] 
    },
    once({next}) {
      landingPageAnim(next.container)
    },
    leave: ({current}) => {
      // animation run on current container when heading to Artists.
      // console.log('from-business')
      // fromBusiness(current.container)
      return gsap.to(current.container, {
        x:500,
        duration: 3
      })
    },
    // beforeEnter({next}) {},
    enter({next}) {
      console.log("to-home!!!")
      toHome(next.container)
    }
  },
  {
    /** TO ARTISTS */
    name: 'to-artists',
    to: {
      namespace: ['artists'] 
    },
    once({next}) {
      gsap.to('.site-header', {autoAlpha: 1})
      ArtistScrollTrigger(next.container)
      borderBottom(next.container)
    },
    leave: ({current}) => {
      // animation run on current container when heading to Artists.
      // console.log('from-business')
      // fromBusiness(current.container)
      return gsap.to(current.container, {
        x:500,
        duration: 3
      })
    },
    // beforeEnter({next}) {},
    enter({next}) {
      console.log("to-artists!!!")
      ArtistScrollTrigger(next.container)
      borderBottom(next.container)
    }
  },
  {
    /** TO BUSINESS */
    name: 'to-business',
    to: {
      namespace: ['business'] 
    },
    once({next}) {
      gsap.to('.site-header', {autoAlpha: 1})
      toBusiness(next.container)
      borderBottom(next.container)
    },
    leave: ({current}) => {
      // animation run on current container when heading to Artists.
      // console.log('from-business')
      // fromBusiness(current.container)
      return gsap.to(current.container, {
        x:500,
        duration: 3
      })
    },
    // beforeEnter({next}) {},
    enter({next}) {
      console.log("TO BUSINESS")
      toBusiness(next.container)
      borderBottom(next.container)
    }
  },
  // {
  //   /** FROM HOME */
  //   name: 'from-home',
  //   from: {
  //     namespace: ['home'] 
  //   },
  //   leave: ({current}) => {
  //     // animation run on current container when heading to Artists.
  //     console.log("from-home")
  //     // fromHome(current.container)
  //     return gsap.to(current.container, {
  //       x:500,
  //       duration: 3
  //     })
  //   }
  // },
  // {
  //   /** FROM ARTISTS */
  //   name: 'from-artists',
  //   from: {
  //     namespace: ['artists'] 
  //   },
  //   leave: ({current}) => {
  //     // animation run on current container when heading to Artists.
  //     console.log('from-artists')
  //     // fromArtist(current.container)
  //     return gsap.to(current.container, {
  //       x:500,
  //       duration: 3
  //     })
      
  //   }
  // },
  // {
  //   /** FROM BUSINESS */
  //   name: 'from-business',
  //   from: {
  //     namespace: ['business'] 
  //   },
  //   leave: ({current}) => {
  //     // animation run on current container when heading to Artists.
  //     // console.log('from-business')
  //     // fromBusiness(current.container)
  //     return gsap.to(current.container, {
  //       x:500,
  //       duration: 3
  //     })
  //   }
  // }
]
});

}

window.addEventListener("load", function(event) {
  init()
})