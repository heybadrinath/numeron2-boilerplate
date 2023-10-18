// Iteration 8: Making scoreboard functional

score = localStorage.getItem('scoreFinal')
var container = document.getElementById("score-board")

container.textContent = score

document.getElementById("play-again-button").addEventListener(('click'),()=>{
    window.location.href="./game.html"
})