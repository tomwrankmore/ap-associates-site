// class Slider {
//   constructor() {
//     this.slides = document.querySelectorAll('.slide');
//     this.intervalTime = 5000;
//     let slideInterval;
//     this.autoSlide()
//   }

// /* SCRIPT FAILS AT ASSIGNING current CLASS TO [0] of this.slides */

//   nextSlide() {
//     this.current = document.querySelector('.current');
//     this.current.classList.remove('current')
//     if(this.current.nextElementSibling) {
//       this.current.nextElementSibling.classList.add('current')
//     } else {
//       this.slides[0].classList.add('current')
//     }
  
//     setTimeout(() => current.classList.remove('current'))
//   }

//   autoSlide() {
//       this.slideInterval = setInterval(this.nextSlide, this.intervalTime)
//   }
// }

// export default Slider

// Slider
const sliderFunc = function(container) {

  const slides = container.querySelectorAll('.slide');
  const auto = true;
  const intervalTime = 5000;
  let slideInterval;
  
  const nextSlide = function() {
    // Get element with current as class
    const current = container.querySelector('.current');
    //Remove current class from element
    current.classList.remove('current')
    //Check if there is a next slide
    if(current.nextElementSibling) {
      //Add current to next sibling
      current.nextElementSibling.classList.add('current')
    } else {
      //Add current to first slide in slides nodelist from querySelectorAll('.slide'); at the top.
      slides[0].classList.add('current')
    }
    // Why do we need to remove class here? Experiment by removing it
    // setTimeout(() => current.classList.remove('current'))
  }
  
  // Auto slide
  if(auto) {
    //run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime)
  }
}

export default sliderFunc