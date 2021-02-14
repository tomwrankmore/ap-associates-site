import { gsap } from "gsap";

const MouseFollow = function() {
    gsap.set(".ball", {xPercent: -50, yPercent: -50});

    var ball = document.querySelector(".ball");
    var pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    var mouse = { x: pos.x, y: pos.y };
    var speed = 0.1;

    var xSet = gsap.quickSetter(ball, "x", "px");
    var ySet = gsap.quickSetter(ball, "y", "px");

    window.addEventListener("mousemove", e => {    
    mouse.x = e.x;
    mouse.y = e.y;  
    });

    gsap.ticker.add(() => {
    var dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
    
    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
    });
}

export default MouseFollow