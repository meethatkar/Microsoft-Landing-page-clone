function locomotive(){
    // gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

locomotive();

// MENU LOGIC
var menuBtn = document.querySelector("#Menu-btn");
// let isMenuOpen = false;
menuBtn.addEventListener("click", () => {
    console.log(document.querySelector("#nav-mobile"));
    const navMobile = document.querySelector("#nav-mobile");
    let isMeunOpen = navMobile.getAttribute("data-isOpen");
    if (isMeunOpen == "true") {
        navMobile.classList.add("opacity-0", "-translate-x-[100%]");
        navMobile.classList.remove("opacity-100", "translate-x-0");
        navMobile.setAttribute("data-isOpen", "false");
    }
    else {
        navMobile.classList.remove("opacity-0", "-translate-x-[100%]");
        navMobile.classList.add("opacity-100", "translate-x-0");
        gsap.from("#nav-mobile li", {
            x: -120,
            opacity: 0,
            duration: 0.4,
            ease: "power1.in",
            stagger: 0.08
        })
        navMobile.setAttribute("data-isOpen", "true");
    }
})


// PAGE 1 SLIDER LOGIC
var imgSlides = document.querySelectorAll(".slide-grp-1");
// console.log(imgSlides);
var nextBtn = document.querySelector("#next");
var previousBtn = document.querySelector("#previous");
let counter = 0;
// INITIAL POSISTION
imgSlides.forEach((img, index) => {
    img.style.left = `${index * 100}%)`;
})

function slideImg() {
    imgSlides.forEach((img, index) => {
        index++;
        img.style.transform = `translateX(-${counter * 100}%)`;
    })
}

nextBtn.addEventListener("click", () => {
    if (counter < (imgSlides.length) - 1) {
        counter++;
    }
    else {
        counter = imgSlides.length - 1;
    }
    slideImg();
})
previousBtn.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
    }
    else {
        counter = 0;
    }
    slideImg();
})

function timeBaseSlide() {
    setInterval(() => {
        if (counter < (imgSlides.length) - 1) {
            counter++;
        }
        else {
            counter = 1;
        }
        slideImg()
    }, 10100);
}

// Time-line IMG SLIDER BAR
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo("#cover-tl", {
        translateX: "0%",
    }, {
        translateX: "100%",
        duration: 10,
        repeat: -1,
        delay: 5.5,
        ease: "power2.inOut"
    })

    if (window.innerWidth < 768) {

        // PAGE-2
        gsap.from("#L1", {
            ease:"power1.out",
            x: -100,
            opacity: 0,
            scrollTrigger: {
                scroller: "body",
                trigger: "#L1",
                start: "top 85%",
                end: "top 60%",
                markers: false,
                scrub: 0.5,
            }
        })
        gsap.from("#R1", {
            ease:"power1.out",
            x: 100,
            opacity: 0,
            scrollTrigger: {
                scroller: "body",
                trigger: "#R1",
                start: "top 85%",
                end: "top 60%",
                markers: false,
                scrub: 0.5,
            }
        })
        gsap.from("#L2", {
            ease:"power1.out",
            x: -100,
            opacity: 0,
            scrollTrigger: {
                scroller: "body",
                trigger: "#L2",
                start: "top 85%",
                end: "top 60%",
                markers: false,
                scrub: 0.5,
            }
        })
        gsap.from("#R2", {
            ease:"power1.out",
            x: 100,
            opacity: 0,
            scrollTrigger: {
                scroller: "body",
                trigger: "#R2",
                start: "top 85%",
                end: "top 60%",
                markers: false,
                scrub: 0.5,
            }
        })

        // PAGE -3
        gsap.from("#p3-wrapper", {
            ease:"power1.out",
            scale: 0.9,
            opacity: 0,
            scrollTrigger: {
                scroller: "body",
                trigger: "#p3-wrapper",
                start: "top 85%",
                end: "top 60%",
                markers: false,
                scrub: 0.5,
            }
        })


        // PAGE-4
        gsap.from("#L1-p4", {
            ease:"power1.out",
            x: -100,
            scale:0.85,
            opacity: 0,
            scrollTrigger: {
                scroller: "body",
                trigger: "#L1-p4",
                start: "top 85%",
                end: "top 60%",
                markers: false,
                scrub: 0.5,
            }
        })
        gsap.from("#R1-p4", {
            ease:"power1.out",
            x: 100,
            scale:0.85,
            opacity: 0,
            scrollTrigger: {
                scroller: "body",
                trigger: "#R1-p4",
                start: "top 85%",
                end: "top 60%",
                markers: false,
                scrub: 0.5,
            }
        })
        gsap.from("#L2-p4", {
            ease:"power1.out",
            x: -100,
            scale:0.85,
            opacity: 0,
            scrollTrigger: {
                scroller: "body",
                trigger: "#L2-p4",
                start: "top 85%",
                end: "top 60%",
                markers: false,
                scrub: 0.5,
            }
        })
        gsap.from("#R2-p4", {
            ease:"power1.out",
            x: 100,
            scale:0.85,
            opacity: 0,
            scrollTrigger: {
                scroller: "body",
                trigger: "#R2-p4",
                start: "top 85%",
                end: "top 60%",
                markers: false,
                scrub: 0.5,
            }
        })

        // SM LINKS 
        gsap.to("#links-cover",{
            // width:0,
            transform: "translatex(100%)",
            ease: "power1.out",
            scrollTrigger:{
                trigger: "#links-cover",
                scroller: "body",
                start: "top 85%",
                end: "top 50%",
                markers: false,
                scrub: 0.5
            }
        })

        // footer 
        gsap.from("#sec-1 p",{
            opacity: 0,
            y: 10,
            stagger: 0.1,
            ease: "power1.in",
            scrollTrigger:{
                scroller: "body",
                trigger: "#sec-1",
                start: "top 90%",
                end: "top 75%",
                markers:false,
                scrub:0.5,
            }
        })
        gsap.from("#sec-2 p",{
            opacity: 0,
            y: 10,
            stagger: 0.1,
            ease: "power1.in",
            scrollTrigger:{
                scroller: "body",
                trigger: "#sec-2",
                start: "top 90%",
                end: "top 75%",
                markers:false,
                scrub:0.5,
            }
        })
        gsap.from("#sec-3 p",{
            opacity: 0,
            y: 10,
            stagger: 0.1,
            ease: "power1.in",
            scrollTrigger:{
                scroller: "body",
                trigger: "#sec-3",
                start: "top 90%",
                end: "top 75%",
                markers:false,
                scrub:0.5,
            }
        })
        gsap.from("#sec-4 p",{
            opacity: 0,
            y: 10,
            stagger: 0.1,
            ease: "power1.in",
            scrollTrigger:{
                scroller: "body",
                trigger: "#sec-4",
                start: "top 90%",
                end: "top 75%",
                markers:false,
                scrub:0.5,
            }
        })
        gsap.from("#sec-5 p",{
            opacity: 0,
            y: 10,
            stagger: 0.1,
            ease: "power1.in",
            scrollTrigger:{
                scroller: "body",
                trigger: "#sec-5",
                start: "top 90%",
                end: "top 75%",
                markers:false,
                scrub:0.5,
            }
        })
        gsap.from("#sec-6 p",{
            opacity: 0,
            y: 10,
            stagger: 0.1,
            ease: "power1.in",
            scrollTrigger:{
                scroller: "body",
                trigger: "#sec-6",
                start: "top 90%",
                end: "top 75%",
                markers:false,
                scrub:0.5,
            }
        })
    }
    else {

        gsap.to("#logos .logo",{
            scale: 1.1,
            ease: "power1.out",
            // stagger: 0.5,
            scrollTrigger:{
                scroller: "main",
                trigger: "#logos",
                start: "top 90%",
                end: "top 70%",
                scrub: true,
                // markers: true
            }
        })

        // PAGE 2
        gsap.from(".page-2-lower",{
            opacity: 0,
            scale: 0.9,
            y: 100,
            stagger: 0.5,
            duration: 2,
            ease: "back.out(1.7)",
            scrollTrigger:{
                scroller: "main",
                trigger:".page-2-lower",
                start: "top 95%",
                end: "top 65%",
                // markers: true,
                scrub: true,
            }
        })

        // PAGE 4
        gsap.from(".pg-4-box",{
            opacity: 0,
            scale: 0.9,
            y:100,
            duration: 2,
            ease: "back.out(1.7)",
            stagger: {
                from: "end",
                each: 0.5
            },
            scrollTrigger:{
                scroller: "main",
                trigger: ".pg-4-box",
                // markers: true,
                scrub: true,
                start: "top 95%",
                end: "top 65%"
            }
        })


        //SM LINKS
        gsap.to("#links-cover",{
            // width:0,
            transform: "translatex(50%)",
            ease: "power1.out",
            scrollTrigger:{
                trigger: "#links-cover",
                scroller: "main",
                start: "top 85%",
                end: "top 60%",
                markers: false,
                scrub: 0.5
            }
        })

        // Footer
        gsap.from("#sec-1 p",{
            opacity: 0,
            y: 10,
            stagger: 0.1,
            ease: "power1.in",
            scrollTrigger:{
                scroller: "main",
                trigger: "#sec-1",
                start: "top 85%",
                end: "top 65%",
                // markers:true,
                scrub:0.5,
            }
        })
        gsap.from("#sec-2 p",{
            opacity: 0,
            y: 10,
            stagger: 0.1,
            ease: "power1.in",
            scrollTrigger:{
                scroller: "main",
                trigger: "#sec-2",
                start: "top 85%",
                end: "top 65%",
                markers:false,
                scrub:0.5,
            }
        })
        gsap.from("#sec-3 p",{
            opacity: 0,
            y: 10,
            stagger: 0.1,
            ease: "power1.in",
            scrollTrigger:{
                scroller: "main",
                trigger: "#sec-3",
                start: "top 85%",
                end: "top 65%",
                markers:false,
                scrub:0.5,
            }
        })
        gsap.from("#sec-4 p",{
            opacity: 0,
            y: 10,
            stagger: 0.1,
            ease: "power1.in",
            scrollTrigger:{
                scroller: "main",
                trigger: "#sec-4",
                start: "top 85%",
                end: "top 65%",
                markers:false,
                scrub:0.5,
            }
        })
        gsap.from("#sec-5 p",{
            opacity: 0,
            y: 10,
            stagger: 0.1,
            ease: "power1.in",
            scrollTrigger:{
                scroller: "main",
                trigger: "#sec-5",
                start: "top 85%",
                end: "top 65%",
                markers:false,
                scrub:0.5,
            }
        })
        gsap.from("#sec-6 p",{
            opacity: 0,
            y: 10,
            stagger: 0.1,
            ease: "power1.in",
            scrollTrigger:{
                scroller: "main",
                trigger: "#sec-6",
                start: "top 85%",
                end: "top 65%",
                markers:false,
                scrub:0.5,
            }
        })

    }

})

window.addEventListener("load", () => {

    var loaderDiv = document.querySelector("#loader");
    setTimeout(() => {
        gsap.to(loaderDiv, {
            // scale: 0,
            height: 10,
            width: 10,
            zIndex: 0,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in"
        })
        document.querySelector("#cube").style.animationPlayState = "paused",
            timeBaseSlide();
    }, 5000)


})