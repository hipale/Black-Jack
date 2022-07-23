let health = document.querySelector("#hp");
let button = document.querySelector("button");
let butts = document.querySelectorAll("button");
let counter = document.getElementById("licznik");
const cont = document.querySelector("#container");
let endPage = document.getElementById("nav2");
for (let x = 0; x < 4; x++) {
    butts[x].addEventListener("click", choose)
}
play()
function choose(e) {
    health.innerHTML = parseInt(health.innerHTML) + parseInt(e.target.innerHTML);
    e.target.innerHTML = Math.floor(Math.random() * (10 + 6) - 6);
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
    do { e.target.innerHTML = Math.floor(Math.random() * (10 + 6) - 6) }
    while (e.target.innerHTML == 0);
    console.log(butts[0]);
    if (health.innerHTML > 21 || health.innerHTML < -21) {
        gameOver()
    }
    if (e.target.innerHTML > 0) {
        e.target.style.backgroundColor = "#b53643";
    } else if (e.target.innerHTML < 0) {
        e.target.style.backgroundColor = "#2973b8";
    };
}
function play() {
    health.innerHTML = 0;
    counter.innerHTML = 0;
    getTheButtonVal()
    
}
function gameOver() {
    endPage.style.visibility = "visible";
    endPage.style.transform = "scale(1.167, 1.20)"
    for (let y = 0; y < 4; y++) {
        butts[y].removeEventListener("click", choose);
    }
}
function getTheButtonVal() {
    for (let i = 0; i < 4; i++) {
        butts[i].innerHTML = Math.floor(Math.random() * (10 + 6) - 6);
        if (butts[i].innerHTML > 0) {
            butts[i].style.backgroundColor = "#b53643";
        } else if (butts[i].innerHTML < 0) {
            butts[i].style.backgroundColor = "#2973b8";
        };
        if (Math.floor(Math.random() * 2) == 1) {
            butts.innerHTML = butts.innerHTML * -1
        } else {
            butts.innerHTML = butts.innerHTML * 1
        }
    } 
};
