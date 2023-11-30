let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector("#guessfield")
const guessSlot = document.querySelector(".guesses")
const remining = document.querySelector(".lastresult")
const loworhi = document.querySelector(".lowOrHi")
const startover = document.querySelector(".resultParas")
const p = document.createElement('p')

let prevguess = []
let numguess = 1

let playgame = true;
if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateguess(guess)
    })
}

function validateguess(guess) {
    if (isNaN(guess)) {
        alert("please enter valid number")
    } else if (guess < 1) {
        alert("plese enter a number more than 1 ")
    } else if (guess > 100) {
        alert("plese enter a number less than 100 ")
    } else {
        prevguess.push(guess)
        if (numguess === 11) {
            displayguess(guess)
            displaymessage(`Game over. Random number was ${randomNumber}`)
            endgames()
        } else {
            displayguess(guess)
            checkguess(guess)
        }
    }
}
function checkguess(guess) {
    if (guess === randomNumber) {
        displaymessage(`You Guessed Is Right`)
        endgames()
    } else if (guess < randomNumber) {
        displaymessage(`Number Is Tooo Low`)
    } else if (guess > randomNumber) {
        displaymessage(`Number Is Tooo High`)
    }
}

function displayguess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}   `
    numguess++
    remining.innerHTML = `${11 - numguess}`
}
function displaymessage(message) {
    loworhi.innerHTML = `<h2> ${message}</h2>`
}


function endgames() {
    userInput.value = ``
    userInput.setAttribute('disabled', "")
    p.classList.add('button')
    p.innerHTML = `<h2 id="newgame"> Start Now Game</h2>`
    startover.appendChild(p)
    playgame = false
    newgame()
}
function newgame() {
    const newgamebutton = document.querySelector('#newgame')
    newgamebutton.addEventListener("click", function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevguess = []
        numguess = 1
        guessSlot.innerHTML = ''
        remining.innerHTML = `${11 - numguess}`
        userInput.removeAttribute('disabled')
        startover.removeChild(p)
        playgame = true;
    })
}