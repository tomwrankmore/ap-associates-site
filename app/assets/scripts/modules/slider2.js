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
  
    setTimeout(() => current.classList.remove('current'))
  }
  
  // Auto slide
  
  if(auto) {
    //run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime)
  }
   
}
