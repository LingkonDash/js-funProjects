let thatDibba = document.getElementById("dibba");

let square = document.createElement("div");
square.classList.add("square")
thatDibba.appendChild(square)
let gulMotor = document.createElement("div");
gulMotor.classList.add("motor")
thatDibba.appendChild(gulMotor)

document.addEventListener("mousemove", (e) => {
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  square.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`
  gulMotor.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`
})
document.addEventListener("touchmove", (e) => {
  let mouseX = e.touches[0].clientX;
  let mouseY = e.touches[0].clientY;

  square.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`
  gulMotor.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`
})

document.getElementById('right').addEventListener('mouseenter', () => {
  document.body.classList.remove('light-mode')
  document.body.classList.add('dark-mode')
})
document.getElementById('left').addEventListener('mouseenter', () => {
  document.body.classList.remove('dark-mode')
  document.body.classList.add('light-mode')
})