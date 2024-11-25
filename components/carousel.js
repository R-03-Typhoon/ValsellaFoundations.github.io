let index = 0
function carousel() {
  const slides = document.querySelectorAll(".slide")
  const dots = document.querySelectorAll(".dot")
  for (let i = 0; i < slides.length; i++){
    let currentSLide = slides[i]
    let currentDot = dots[i]
    currentSLide.style.display = "none"
    currentDot.classList.remove("dot-active")
}
slides[index].style.display = "block"
dots[index].classList.add("dot-active")
index = index + 1
if (index > slides.length - 1){
    index = 0
}
setTimeout(carousel,2000)
}

export default carousel