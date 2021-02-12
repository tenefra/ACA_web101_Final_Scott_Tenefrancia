const menu = document.querySelector("#mobile-menu")
const menuLinks = document.querySelector(".nav-menu")

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active")
  menuLinks.classList.toggle("active")
})

const newBlue = document.querySelector(".newblue")
const freelance = document.querySelector(".freelance")
const newBlueBtn = document.querySelector(".button-one")
const freelanceBtn = document.querySelector(".button-two")

const blueBtn = () => {
  newBlue.classList.remove("hide")
  newBlueBtn.classList.add("active-btn")
  freelanceBtn.classList.remove("active-btn")
  freelance.classList.remove("show")
}

const freeBtn = () => {
  freelance.classList.add("show")
  freelanceBtn.classList.add("active-btn")
  newBlueBtn.classList.remove("active-btn")
  newBlue.classList.remove("show")
  newBlue.classList.add("hide")
}

// contact sliders

const phoneBtn = document.querySelector(".phone")
const emailBtn = document.querySelector(".email")
const phoneInfo = document.querySelector(".phone-slider")
const emailInfo = document.querySelector(".email-slider")

const phoneSlider = () => {
  emailInfo.classList.remove("slider-active")
  phoneInfo.classList.toggle("slider-active")
}

const emailSlider = () => {
  phoneInfo.classList.remove("slider-active")
  emailInfo.classList.toggle("slider-active")
}

phoneBtn.addEventListener("click", phoneSlider)
emailBtn.addEventListener("click", emailSlider)

const nav = document.querySelector("nav")
const text = document.querySelector(".hero-title")
const sub = document.querySelector(".hero-sub")
const icon = document.querySelector("#mouse-icon")
const btn = document.querySelector(".btn")

// load animation

const loadTl = gsap.timeline({ defaults: { ease: "power1.out" } })

loadTl.to(".o-slider", { y: "-250%", duration: 1.5 })
loadTl.to(".p-slider", { y: "-250%", duration: 1.5 }, "-=.8")
loadTl.to(".b-slider", { y: "-250%", duration: 1.5 }, "-=.8")
loadTl.to(".slider-container", { display: "none", duration: 0.2 })
loadTl.to(".slider", { y: "-150%", duration: 1.5, delay: 0.5 }, "-=1.2")
loadTl.fromTo("#about-section", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=.8")

// mouse icon animation
const iconTl = gsap.timeline({ repeat: -1, paused: true })
iconTl
  .to(
    "#scroll",
    {
      y: 20,
      autoAlpha: 0,
      transformOrigin: "50% 100%",
      duration: 0.7
    },
    "icon"
  )
  .to("#outline", { y: 8, duration: 0.7 }, "icon")
  .to("#outline", { y: 0, duration: 0.7 }, "icon+=0.7")

//Panel reveal

ScrollTrigger.batch(".card", {
  start: "top center",
  onEnter: (elements, triggers) => {
    gsap.to(elements, { opacity: 1, stagger: 0.25 })
  }
  // ,
  // onLeave: (elements, triggers) => {
  //   gsap.to(elements, { opacity: 0, stagger: 0.25 })
  //   console.log(elements.length, "elements left")
  // }
})

ScrollTrigger.batch(".dots", {
  start: "top center",
  onEnter: (elements, triggers) => {
    gsap.to(elements, { opacity: 0.3, stagger: 0.25 })
  }
  // ,
  // onLeave: (elements, triggers) => {
  //   gsap.to(elements, { opacity: 0, stagger: 0.25 })
  //   console.log(elements.length, "elements left")
  // }
})

// Smooth Scroll Jquery

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault()
      var hash = this.hash
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        500,
        function () {
          window.location.hash = hash
        }
      )
    }
  })
})

// Force user to top of screen on refresh

$(document).ready(function () {
  $(this).scrollTop(0)
})
