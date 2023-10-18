// Iteration 8: Making scoreboard functional

score = localStorage.getItem('Final')
var container = document.getElementById("score-board")
console.log(score)
container.textContent = score

  console.log(localStorage)
document.getElementById("play-again-button").addEventListener(('click'),()=>{
    window.location.href="./game.html"
})