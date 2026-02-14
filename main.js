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

  square.style.transform = `translate(calc(${mouseX}px - 100px), calc(${mouseY}px - 100px))`
  gulMotor.style.transform = `translate(calc(${mouseX}px - 50px), calc(${mouseY}px - 50px))`
})
