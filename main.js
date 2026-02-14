let thatDibba = document.getElementById("dibba");

let square = document.createElement("div");
square.classList.add("square")
console.log(square);

thatDibba.appendChild(square)

document.addEventListener("mousemove", () => {
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  console.log(mouseX, mouseY);
  

  square.style.transform = `translate(calc(${mouseX}px - 100px), calc(${mouseY}px - 100px))`
})
