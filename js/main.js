let nav = document.querySelector("nav")
let hadding = document.querySelector("nav .hading")

window.addEventListener("scroll", () => {
  if (window.scrollY > 75) {
    nav.style.paddingTop = "0.5rem"
    nav.style.paddingBottom = "0.5rem"
    hadding.style.fontSize = "1.5rem"
  }else if (window.scrollY <= 75) {
    nav.style.paddingTop = ""
    nav.style.paddingBottom = ""
    hadding.style.fontSize = ""
  }
})

let portfolo = document.querySelector("nav .portfolio")
let about = document.querySelector("nav .about-link")
let contact = document.querySelector("nav .contact")
let sectionPortfolio = document.querySelector(".section-portfolio")
let sectionAbout = document.querySelector(".section-about")
let sectionContact = document.querySelector(".section-contact")

window.addEventListener("scroll", () => {
  if (window.scrollY >= sectionPortfolio.offsetTop - 700) {
    portfolo.classList.add("active")
    if (window.scrollY >= sectionAbout.offsetTop - 500){
      portfolo.classList.remove("active")
    }
  }else {
    portfolo.classList.remove("active")
  }
  if(window.scrollY >= sectionAbout.offsetTop - 500) {
    about.classList.add("active")
  }
  else {
    about.classList.remove("active")
  }
  if (window.scrollY >= sectionContact.offsetTop - 500){
    about.classList.remove("active")
  }
  if(window.scrollY >= sectionContact.offsetTop - 500) {
    contact.classList.add("active")
  }
  else {
    contact.classList.remove("active")
  }
})

let up = document.querySelector(".up")

window.addEventListener("scroll", () => {
  if (window.scrollY >= 800) {
    up.style.display = "block"
  }else {
    up.style.display = ""
  }
})

let one = document.querySelector(".section-contact form #name")

one.addEventListener("blur", () => {
  let name = document.querySelector(".section-contact form #name").value
  let nameRx = /\w+/
  let validayionResult = nameRx.test(name)
  let required = document.querySelector(".required-name")
  if (validayionResult === false) {
    one.classList.add("is-invalid")
    required.style.display = "block"
  }else {
    one.classList.remove("is-invalid")
    required.style.display = "none"
  }
})

let two = document.querySelector(".section-contact form #email")

two.addEventListener("blur", () => {
  let email = document.querySelector(".section-contact form #email").value
  let notEmpty = /\w+/
  let validayionResult = notEmpty.test(email)
  let required = document.querySelector(".required-email")
  if (validayionResult === false) {
    two.classList.add("is-invalid")
    required.style.display = "block"
  }else {
    two.classList.remove("is-invalid")
    required.style.display = "none"
  }
  validEmail = /\w+@\w+.\w+/
  validEmailResult = validEmail.test(email)
  let valid = document.querySelector(".email")
  if (validEmailResult === false) {
    two.classList.add("is-invalid")
    valid.style.display = "block"
  }else {
    two.classList.remove("is-invalid")
    valid.style.display = "none"
  }
})

let three = document.querySelector(".section-contact form #phone")

three.addEventListener("blur", () => {
  let phone = document.querySelector(".section-contact form #phone").value
  let phoneRx = /\d+/
  validEmailResult = phoneRx.test(phone)
  let required = document.querySelector(".required-phone")
  if (validEmailResult === false) {
    three.classList.add("is-invalid")
    required.style.display = "block"
  }else {
    three.classList.remove("is-invalid")
    required.style.display = "none"
  }
  validPhone = /01\d{9}/
  validPhoneResult = validPhone.test(phone)
  let numbers = document.querySelector(".phone")
  if (validPhoneResult === false) {
    three.classList.add("is-invalid")
    numbers.style.display = "block"
  }else {
    three.classList.remove("is-invalid")
    numbers.style.display = "none"
  }
})
