import { Cards } from './cards.js';

let displayMinutes = document.querySelector('.minutes')
let displaySeconds = document.querySelector('.seconds')
let numberMinutes = Number(displayMinutes.innerText)
let numberSeconds = Number(displaySeconds.innerText)
let countDown

let buttonPlay = document.querySelector('.play')
let buttonPause = document.querySelector('.pause')
let buttonStop = document.querySelector('.stop')
let buttonIncrease = document.querySelector('.increase')
let buttonDecrease = document.querySelector('.decrease')

let cardForest = document.querySelector('.card-forest')
let svgForest = document.querySelector('.svg-forest')
let cardRain = document.querySelector('.card-rain')
let svgRain = document.querySelector('.svg-rain')
let cardCoffeeshop = document.querySelector('.card-coffeeshop')
let svgCoffeeshop = document.querySelector('.svg-coffeeshop')
let cardFireplace = document.querySelector('.card-fireplace')
let svgFireplace = document.querySelector('.svg-fireplace')

const audioForest = new Audio('./assets/Floresta.wav')
const audioRain= new Audio('./assets/Chuva.wav')
const audioCoffeeshop = new Audio('./assets/Cafeteria.wav')
const audioFireplace = new Audio('./assets/Lareira.wav')
const audioAlertTimer = new Audio("./assets/Alerta.mp3")

const cards = Cards({
    cardForest, svgForest, audioForest,
    cardRain, svgRain, audioRain,
    cardCoffeeshop, svgCoffeeshop, audioCoffeeshop,
    cardFireplace, svgFireplace, audioFireplace,
})

function togglePlayPause() {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
}
function turnStringDisplayIntoNumber() {
    numberMinutes = Number(displayMinutes.innerText)
    numberSeconds = Number(displaySeconds.innerText)
}
function reset() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    displayMinutes.textContent = '00'
    displaySeconds.textContent = '00'
}

buttonPlay.addEventListener('click', () => {
    togglePlayPause()
    countDown = setInterval(() => {
        if (numberMinutes == 0 && numberSeconds == 0) {
            audioAlertTimer.play()
            togglePlayPause()
            clearInterval(countDown)
            cards.disableForest()
            cards.disableRain()
            cards.disableCoffeeshop()
            cards.disableFireplace()
            return
        } else if (numberSeconds == 0) {
            numberMinutes--
            numberSeconds = 60
            displayMinutes.textContent = String(numberMinutes).padStart(2, '0')
        }
        numberSeconds--
        displaySeconds.textContent = String(numberSeconds).padStart(2, '0')
        return
    }, 1000)
})
buttonPause.addEventListener('click', () => {
    togglePlayPause()
    clearTimeout(countDown)
})
buttonStop.addEventListener('click', () => {
    clearInterval(countDown)
    reset()
    turnStringDisplayIntoNumber()
    cards.disableForest()
    cards.disableRain()
    cards.disableCoffeeshop()
    cards.disableFireplace()
})
buttonIncrease.addEventListener('click', () => {
    displayMinutes.textContent = String(numberMinutes += 5).padStart(2, '0')
    numberMinutes = Number(displayMinutes.textContent)
})
buttonDecrease.addEventListener('click', () => {
    if (numberMinutes >= 5) {
        displayMinutes.textContent = String(numberMinutes -= 5).padStart(2, '0') || "00"
        numberMinutes = Number(displayMinutes.textContent)
    } else if (numberMinutes < 5) {
        return
    }
})

cardForest.addEventListener('click', () => {
    if (audioForest.paused == true) {
        cards.enableForest()
        cards.disableRain()
        cards.disableCoffeeshop()
        cards.disableFireplace()
    } else {
        cards.disableForest()
    }
})
cardRain.addEventListener('click', () => {
    if (audioRain.paused == true) {
        cards.enableRain()
        cards.disableForest()
        cards.disableCoffeeshop()
        cards.disableFireplace()
    } else {
        cards.disableRain()
    }
})
cardCoffeeshop.addEventListener('click', () => {
    if (audioCoffeeshop.paused == true) {
        cards.enableCoffeeshop()
        cards.disableForest()
        cards.disableRain()
        cards.disableFireplace()
    } else {
        cards.disableCoffeeshop()
    }
})
cardFireplace.addEventListener('click', () => {
    if (audioFireplace.paused == true) {
        cards.enableFireplace()
        cards.disableForest()        
        cards.disableRain()
        cards.disableCoffeeshop()
    } else {
        cards.disableFireplace()
    }
})