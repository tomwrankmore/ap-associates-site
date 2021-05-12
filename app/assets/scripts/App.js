import '../styles/styles.css'
import 'lazysizes'
import './modules/slider2'
import LocomotiveScroll from 'locomotive-scroll';
import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Cursor from './modules/cursor';

import { smoothScroll, MouseFollow, borderBottom, landingPageAnim, splitParagraph, MyMobileMenu, MobileMenu, Modal, MyModal, sliderFunc } from './modules'; /* Import animation functions */
import { showModal, hideModal, homeEnter, homeLeave, aboutEnter, aboutLeave, artistEnter, artistLeave, businessEnter, businessLeave, contactEnter, contactLeave } from './animations'; /* Import animation functions */

new MobileMenu();
// new MyModal();

let menuIcon = document.querySelector(".site-header__menu-icon")
let menuContent = document.querySelector(".site-header__menu-content")
let siteHeader = document.querySelector(".site-header")

function toggleTheMenu() {
  menuContent.classList.remove("site-header__menu-content--is-visible")
  siteHeader.classList.remove("site-header--is-expanded") 
  menuIcon.classList.remove("site-header__menu-icon--close-x")
}

// hot modules means that webpack generates javascript file to memory rather than creating a file...
if (module.hot) {
  module.hot.accept()
}

function init() {

  barba.use(barbaPrefetch)

  //Global hook
  barba.hooks.after(({ next }) => { });

  // scroll to the top of the page
  barba.hooks.enter(({ next }) => {
    window.scrollTo(0, 0);
    toggleTheMenu()
  })

  function killTriggers() {
    let triggers = ScrollTrigger.getAll();
    triggers.forEach(trigger => {
      trigger.kill();
    });
  }

  barba.init({

    views: [
      {
        namespace: 'home',
        beforeEnter({ next }) {
          sliderFunc(next.container)
          killTriggers()
          smoothScroll(next.container);
        }
      },
      {
        namespace: 'artists',
        beforeEnter({ next }) {
          killTriggers()
          smoothScroll(next.container);
          splitParagraph(next.container)
        }
      },
      {
        namespace: 'business',
        beforeEnter({ next }) {
          killTriggers()
          smoothScroll(next.container);
          splitParagraph(next.container)
        }
      },
      {
        namespace: 'about',
        beforeEnter({ next }) {
          killTriggers()
          smoothScroll(next.container);
          splitParagraph(next.container)
        }
      },
      {
        namespace: 'contact',
        beforeEnter({ next }) {
          killTriggers()
          smoothScroll(next.container);
          splitParagraph(next.container)
        }
      }
    ],
    transitions: [
      {
        name: 'default-transition',
        once({ next }) {
          gsap.to('.site-header', {
            autoAlpha: 1
          })
        },
        leave: ({ current }) => {
          return gsap.to(current.container, {
            autoAlpha: 0,
            duration: 0.5
          });
        },
        enter({ next }) {
          gsap.from(next.container, {
            autoAlpha: 0,
            duration: 0.5
          });
        }
      },

      /** HOME TRANSITIONS */
      {
        name: 'to-home',
        to: { namespace: ['home'] },
        once({ next }) {
          gsap.to('.site-header', {
            autoAlpha: 1
          })
          landingPageAnim(next.container)
        },
        leave: ({ current }) => { return homeLeave(current.container) },
        enter({ next }) { homeEnter(next.container) }
      },
      {
        name: 'home-to-about',
        from: { namespace: ['home'] },
        to: { namespace: ['about'] },
        leave: ({ current }) => { return homeLeave(current.container) },
        enter({ next }) {
          aboutEnter(next.container)
          borderBottom(next.container)
        }
      },
      {
        name: 'home-to-artists',
        from: { namespace: ['home'] },
        to: { namespace: ['artists'] },
        leave: ({ current }) => { return homeLeave(current.container) },
        enter({ next }) {
          artistEnter(next.container)
          borderBottom(next.container)
        }
      },
      {
        name: 'home-to-business',
        from: { namespace: ['home'] },
        to: { namespace: ['business'] },
        leave: ({ current }) => { return homeLeave(current.container) },
        enter({ next }) {
          businessEnter(next.container)
          borderBottom(next.container)
        }
      },
      {
        name: 'home-to-contact',
        from: { namespace: ['home'] },
        to: { namespace: ['contact'] },
        leave: ({ current }) => { return homeLeave(current.container) },
        enter({ next }) {
          contactEnter(next.container)
          borderBottom(next.container)
        }
      },
      // /** ABOUT TRANSITIONS */
      {
        name: 'to-about',
        to: { namespace: ['about'] },
        once({ next }) {
          gsap.to('.site-header', {
            autoAlpha: 1
          })
        },
        leave: ({ current }) => { return aboutLeave(current.container) },
        enter({ next }) { aboutEnter(next.container) }
      },
      {
        name: 'about-to-home',
        from: { namespace: ['about'] },
        to: { namespace: ['home'] },
        leave: ({ current }) => { return aboutLeave(current.container) },
        enter({ next }) { homeEnter(next.container) }
      },
      {
        name: 'about-to-artists',
        from: { namespace: ['about'] },
        to: { namespace: ['artists'] },
        leave: ({ current }) => { return aboutLeave(current.container) },
        enter({ next }) {
          artistEnter(next.container)
          borderBottom(next.container)
        }
      },
      {
        name: 'about-to-business',
        from: { namespace: ['about'] },
        to: { namespace: ['business'] },
        leave: ({ current }) => { return aboutLeave(current.container) },
        enter({ next }) {
          businessEnter(next.container)
          borderBottom(next.container)
        }
      },
      {
        name: 'about-to-contact',
        from: { namespace: ['about'] },
        to: { namespace: ['contact'] },
        leave: ({ current }) => { return aboutLeave(current.container) },
        enter({ next }) {
          contactEnter(next.container)
          borderBottom(next.container)
        }
      },

      /** ARTISTS TRANSITIONS */
      {
        name: 'to-artists',
        to: { namespace: ['artists'] },
        once({ next }) {
          gsap.to('.site-header', {
            autoAlpha: 1,
            onComplete: artistEnter(next.container)
          }),
            borderBottom(next.container)
        },
        leave: ({ current }) => { return artistLeave(current.container) },
        enter({ next }) {
          artistsEnter(next.container)
        }
      },
      {
        name: 'artists-to-home',
        from: { namespace: ['artists'] },
        to: { namespace: ['home'] },
        leave: ({ current }) => { return artistLeave(current.container) },
        enter({ next }) { homeEnter(next.container) }
      },
      {
        name: 'artists-to-about',
        from: { namespace: ['artists'] },
        to: { namespace: ['about'] },
        leave: ({ current }) => { return artistLeave(current.container) },
        enter({ next }) {
          aboutEnter(next.container)
          borderBottom(next.container)
        }
      },
      {
        name: 'artists-to-business',
        from: { namespace: ['artists'] },
        to: { namespace: ['business'] },
        leave: ({ current }) => { return artistLeave(current.container) },
        enter({ next }) {
          businessEnter(next.container)
          borderBottom(next.container)
        }
      },
      {
        name: 'artists-to-contact',
        from: { namespace: ['artists'] },
        to: { namespace: ['contact'] },
        leave: ({ current }) => { return artistLeave(current.container) },
        enter({ next }) {
          contactEnter(next.container)
          borderBottom(next.container)
        }
      },

      // /** BUSINESS TRANSITIONS */
      {
        name: 'to-business',
        to: { namespace: ['business'] },
        once({ next }) {
          gsap.to('.site-header', {
            autoAlpha: 1
          })
          businessEnter(next.container)
          borderBottom(next.container)
        },
        leave: ({ current }) => { return businessLeave(current.container) },
        enter({ next }) { businessEnter(next.container) }
      },
      {
        name: 'business-to-about',
        from: { namespace: ['business'] },
        to: { namespace: ['about'] },
        leave: ({ current }) => { return businessLeave(current.container) },
        enter({ next }) {
          aboutEnter(next.container)
          borderBottom(next.container)
        }
      },
      {
        name: 'business-to-artists',
        from: { namespace: ['business'] },
        to: { namespace: ['artists'] },
        leave: ({ current }) => { return businessLeave(current.container) },
        enter({ next }) {
          artistEnter(next.container)
          borderBottom(next.container)
        }
      },
      {
        name: 'business-to-home',
        from: { namespace: ['business'] },
        to: { namespace: ['home'] },
        leave: ({ current }) => { return businessLeave(current.container) },
        enter({ next }) { homeEnter(next.container) }
      },
      {
        name: 'business-to-contact',
        from: { namespace: ['business'] },
        to: { namespace: ['contact'] },
        leave: ({ current }) => { return businessLeave(current.container) },
        enter({ next }) {
          contactEnter(next.container)
          borderBottom(next.container)
        }
      },

      // /** Contact TRANSITIONS */
      {
      name: 'to-contact',
      to: { namespace: ['contact'] },
      once({ next }) {
        gsap.to('.site-header', {
          autoAlpha: 1
        })
        contactEnter(next.container)
        borderBottom(next.container)
      },
      leave: ({ current }) => { return contactLeave(current.container) },
      enter({ next }) { contactEnter(next.container) }
    },
    {
      name: 'contact-to-about',
      from: { namespace: ['contact'] },
      to: { namespace: ['about'] },
      leave: ({ current }) => { return contactLeave(current.container) },
      enter({ next }) {
        aboutEnter(next.container)
        borderBottom(next.container)
      }
    },
    {
      name: 'contact-to-artists',
      from: { namespace: ['contact'] },
      to: { namespace: ['artists'] },
      leave: ({ current }) => { return contactLeave(current.container) },
      enter({ next }) {
        artistEnter(next.container)
        borderBottom(next.container)
      }
    },
    {
      name: 'contact-to-home',
      from: { namespace: ['contact'] },
      to: { namespace: ['home'] },
      leave: ({ current }) => { return contactLeave(current.container) },
      enter({ next }) { homeEnter(next.container) }
          },
    ]
  });

  // const modal = document.querySelector(".modal")
  // const openModal = document.querySelector(".open-modal")
  // const closeModalBtn = document.querySelector(".modal__close")

  // modal.addEventListener('click', hideModal)
  // openModal.addEventListener('click', showModal)
  // closeModalBtn.addEventListener('click', hideModal)

}

window.addEventListener("load", function (event) {
  init()
})