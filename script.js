let numbers = document.querySelector("#count")
let increment = document.querySelector("#increment")
let decrement = document.querySelector("#decrement")

let count = 0;

increment.addEventListener("click", () => {
    count++;
    numbers.innerText = count;
    numbers.style.color = "green"
})

decrement.addEventListener("click", () => {
    if(count > 0) {
        count--;
        numbers.innerText = count;
        numbers.style.color = "red"
    }
})

////////////////////////////////////////////////////////

let box = document.querySelector(".box")
let coordinatess = document.querySelector("#coordinates")


box.addEventListener("mousemove", (event) => {
    coordinatess.innerText = `x: ${event.offsetX}, y: ${event.offsetY}`
})

/////////////////////////////////////////////////////////


let color = document.querySelector("#color");

color.addEventListener("change", () => {
    document.body.style.backgroundColor = color.value;
});