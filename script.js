let number = document.querySelector(".number")
let tipCont = document.getElementById("tip")
let lifeCont = document.getElementById("lifes")
let randomNumber = Math.floor(Math.random() * 22)
let gameIsLive = true
let lives = 5
let myArray = ["x", "x", "x","x", "x"]
const tryButton = document.querySelector(".but")
lifeCont.innerHTML = "Lives: " + myArray

function checkIsGameAlive() {
    if(lives <= 0) {
        tipCont.innerHTML = "You lose!"
        tipCont.style["color"] = "red";
        gameIsLive = false
    }
}

tryButton.addEventListener('click', () => {
    if(number.value < randomNumber) {
        tipCont.innerHTML = "Too Low!"
        tipCont.style["color"] = "yellow";
        gameIsLive = true
        lives -= 1
        //.pop usuwa ostatni element z tablicy
        myArray.pop()
        checkIsGameAlive()
        lifeCont.innerHTML = "Lives: " + myArray
    } else if(number.value > randomNumber) {
        tipCont.innerHTML = "Too High!"
        tipCont.style["color"] = "yellow";
        gameisLive = true
        lives -= 1
        myArray.pop()
        checkIsGameAlive()
        lifeCont.innerHTML = "Lives: " + myArray
    } else {
        tipCont.innerHTML = "You're right!"
        tipCont.style["color"] = "green";
        gameisLive = false
    }
})
