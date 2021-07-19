var hamIcon = document.querySelector("#ham-icon")
var navLinks = document.querySelector(".nav-links")

function toggleClass(el, classname) {

  if (el.classList.contains(classname)) {
    el.classList.remove(classname)
  }
  else {
    el.classList.add(classname)
  }
}

hamIcon.addEventListener('click', function (e) {
  toggleClass(navLinks, 'open')
})