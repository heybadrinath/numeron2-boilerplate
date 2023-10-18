// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

window.addEventListener(("load"),()=>{
    inseringRandomNumbers()
})
window.addEventListener(("load"),()=>{
    timerDisplay()
})



var number1 = document.getElementById("number1")
var number2 = document.getElementById("number2")


function random(){
    var x = Math.ceil(Math.random()*100)
    return x
}
let arr; 
function generateRandomNumbers(){
    let r1 = 0
    let r2 = 0
    r1 = random()
    r2 = random()
    arr = [r1,r2]
    // console.log(arr)
    return [r1,r2]
}
function inseringRandomNumbers(){
    var k = generateRandomNumbers()
    number1.textContent = k[0]
    number2.textContent = k[1]
    // randomOperater()
    calculatingValues(arr[0],arr[1]);
}

// Iteration 3: Creating variables required to make the game functional
var plus = document.getElementById("plus")
var minus = document.getElementById("minus")
var mul = document.getElementById("mul")
var divide = document.getElementById("divide")
var modulus = document.getElementById("modulus")

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

var number3 = document.getElementById("number3")

// Iteration 5: Creating a randomise function to make the game functional
var calculations = []

function calculatingValues(number1,number2){
    calculations = []
    calculations.push(number1+number2)
    calculations.push(number1-number2)
    calculations.push(number1*number2)

    var num1divnum2 = parseFloat(number1/number2).toFixed(2)
    calculations.push(num1divnum2)
    calculations.push(number1 % number2)
    console.log(calculations)
    randomOperater()
}



var flag = 0;
var score = 0

function randomOperater(){
    var op = Math.floor(Math.random()*5)
    number3.innerHTML = calculations[op]
    flag = op
    console.log("answer index:",flag)
}

function checkAnswers(value){

    console.log(flag)
    if (flag == value ){
        score++
        console.log("score:",score)
    }else{
        window.localStorage.setItem('Final',score)
        window.location.href = "./gameover.html"
        // console.log("gameover")
    }

}



// Iteration 6: Making the Operators (button) functional

var clickedbtn = 0
btns = [plus,minus,mul,divide,modulus]

for(let i=0;i<btns.length; i++){
    btns[i].addEventListener('click', ()=>{
        checkAnswers(i)
        inseringRandomNumbers()
        timerCount = 20
    })
}


// Iteration 7: Making Timer functional
 
var timer = document.getElementById("timer")
var timerCount = 20

function timerDisplay() {
    return setInterval(() => {
        if (timerCount > 0) {
            timerCount--;
            timer.textContent = timerCount; 
        } else {
            window.localStorage.setItem('Final',score)
            // console.log(localStorage)
            window.location.href = "./gameover.html";
        }
    }, 1000);
}




