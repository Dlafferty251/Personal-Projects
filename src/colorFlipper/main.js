const colors = ["green", "red", "purple", 
    "#000", "rgba(133,122,200)"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    //get random number between 0 - 4 colors[3]

    const randomNumber = 2;

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})