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

  square.style.transform = `translate(calc(${mouseX}px - 150px), calc(${mouseY}px - 150px))`
  gulMotor.style.transform = `translate(calc(${mouseX}px - 50px), calc(${mouseY}px - 50px))`
})
document.addEventListener("touchmove", (e) => {
  let mouseX = e.touches[0].clientX;
  let mouseY = e.touches[0].clientY;

  square.style.transform = `translate(calc(${mouseX}px - 150px), calc(${mouseY}px - 150px))`
  gulMotor.style.transform = `translate(calc(${mouseX}px - 50px), calc(${mouseY}px - 50px))`
})
