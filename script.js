let buttonPlay = document.querySelector('.play')
let buttonPause = document.querySelector('.pause')
let buttonStop = document.querySelector('.stop')
let buttonIncrease = document.querySelector('.increase')
let buttonDecrease = document.querySelector('.decrease')
let svgIncrease = document.querySelector('.svg-increase')
let svgDecrease = document.querySelector('.svg-decrease')

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

let displayMinutes = document.querySelector('.minutes')
let displaySeconds = document.querySelector('.seconds')
let numberMinutes = Number(displayMinutes.innerText)
let numberSeconds = Number(displaySeconds.innerText)
let countDown

function disableForestCard() {
    audioForest.pause()
    cardForest.classList.remove('selected')
    svgForest.classList.remove('selected')
}
function disableRainCard() {
    audioRain.pause()
    cardRain.classList.remove('selected')
    svgRain.classList.remove('selected')
}
function disableCoffeeshopCard() {
    audioCoffeeshop.pause()
    cardCoffeeshop.classList.remove('selected')
    svgCoffeeshop.classList.remove('selected')
}
function disableFireplaceCard() {
    audioFireplace.pause()
    cardFireplace.classList.remove('selected')
    svgFireplace.classList.remove('selected')
}
function enableForestCard() {
    audioForest.play()
    audioForest.loop = true
    cardForest.classList.add('selected')
    svgForest.classList.add('selected')
}
function enableRainCard() {
    audioRain.play()
    audioRain.loop = true 
    cardRain.classList.add('selected')
    svgRain.classList.add('selected')    
}
function enableCoffeeshopCard() {
    audioCoffeeshop.play()
    audioCoffeeshop.loop = true
    cardCoffeeshop.classList.add('selected')
    svgCoffeeshop.classList.add('selected')
}
function enableFireplaceCard(){
    audioFireplace.play()
    audioFireplace.loop = true
    cardFireplace.classList.add('selected')
    svgFireplace.classList.add('selected')
}

function togglePlayPause() {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
    svgDecrease.classList.remove('stop-decrement')
}
function turnStringDisplayIntoNumber() {
    numberMinutes = Number(displayMinutes.innerText)
    numberSeconds = Number(displaySeconds.innerText)
}

buttonPlay.addEventListener('click', () => {
    togglePlayPause()
    countDown = setInterval(() => {
        if (numberMinutes == 00 && numberSeconds == 00) {
            audioAlertTimer.play()
            togglePlayPause()
            clearInterval(countDown)
            disableForestCard()
            disableRainCard()
            disableCoffeeshopCard()
            disableFireplaceCard()
            return
        } else if (numberSeconds == 00) {
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
    
    togglePlayPause()
    
    disableForestCard()
    disableRainCard()
    disableCoffeeshopCard()
    disableFireplaceCard()

    displayMinutes.textContent = '05'
    displaySeconds.textContent = '00'

    turnStringDisplayIntoNumber()
})
buttonIncrease.addEventListener('click', () => {
    displayMinutes.textContent = String(numberMinutes += 5).padStart(2, '0')
    numberMinutes = Number(displayMinutes.textContent)
    svgDecrease.classList.remove('stop-decrement')
})
buttonDecrease.addEventListener('click', () => {
    if (numberMinutes >= 5) {
        displayMinutes.textContent = String(numberMinutes -= 5).padStart(2, '0') || "00"
        numberMinutes = Number(displayMinutes.textContent)
        svgDecrease.classList.remove('stop-decrement')
    } else if (numberMinutes < 5) {
        svgDecrease.classList.add('stop-decrement')
    }
})

cardForest.addEventListener('click', () => {
    if (audioForest.paused == true) {
        enableForestCard()
        disableRainCard()
        disableCoffeeshopCard()
        disableFireplaceCard()
    } else {
        disableForestCard()
    }
})
cardRain.addEventListener('click', () => {
    if (audioRain.paused == true) {
        enableRainCard()
        disableForestCard()
        disableCoffeeshopCard()
        disableFireplaceCard()
    } else {
        disableRainCard()
    }
})
cardCoffeeshop.addEventListener('click', () => {
    if (audioCoffeeshop.paused == true) {
        enableCoffeeshopCard()
        disableForestCard()
        disableRainCard()
        disableFireplaceCard()
    } else {
        disableCoffeeshopCard()
    }
})
cardFireplace.addEventListener('click', () => {
    if (audioFireplace.paused == true) {
        enableFireplaceCard()
        disableForestCard()        
        disableRainCard()
        disableCoffeeshopCard()
    } else {
        disableFireplaceCard()
    }

})