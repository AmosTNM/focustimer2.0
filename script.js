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

buttonPlay.addEventListener('click', () => {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    countDown = setInterval(() => {
        if (numberMinutes == 00 && numberSeconds == 00) {
            audioAlertTimer.play()
            clearInterval(countDown)

            cardForest.classList.remove('selected')
            svgForest.classList.remove('selected')
            audioForest.pause()

            cardRain.classList.remove('selected')
            svgRain.classList.remove('selected')
            audioRain.pause()

            cardCoffeeshop.classList.remove('selected')
            svgCoffeeshop.classList.remove('selected')
            audioCoffeeshop.pause()

            cardFireplace.classList.remove('selected')
            svgFireplace.classList.remove('selected')
            audioFireplace.pause()
            
            buttonPlay.classList.remove('hide')
            buttonPause.classList.add('hide')
            buttonIncrease.disabled = false
            buttonDecrease.disabled = false
            svgDecrease.classList.remove('stop-decrement')

            return
        } else if (numberSeconds == 00) {
            numberMinutes--
            numberSeconds = 60
            displayMinutes.textContent = String(numberMinutes).padStart(2, '0')
        }
        numberSeconds--
        displaySeconds.textContent = String(numberSeconds).padStart(2, '0')
        console.log(`${String(numberMinutes).padStart(2, '0')}:${String(numberSeconds).padStart(2, '0')}`)
        return
    }, 1000)
})
buttonPause.addEventListener('click', () => {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    audioAlertTimer.pause()
    clearTimeout(countDown)
})
buttonStop.addEventListener('click', () => {
    clearInterval(countDown)
    displayMinutes.textContent = '05'
    displaySeconds.textContent = '00'
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonIncrease.disabled = false
    buttonDecrease.disabled = false
    svgDecrease.classList.remove('stop-decrement')
    
    cardForest.classList.remove('selected')
    svgForest.classList.remove('selected')
    audioForest.pause()

    cardRain.classList.remove('selected')
    svgRain.classList.remove('selected')
    audioRain.pause()

    cardCoffeeshop.classList.remove('selected')
    svgCoffeeshop.classList.remove('selected')
    audioCoffeeshop.pause()

    cardFireplace.classList.remove('selected')
    svgFireplace.classList.remove('selected')
    audioFireplace.pause()
    numberMinutes = Number(displayMinutes.innerText)
    numberSeconds = Number(displaySeconds.innerText)
    console.log(displayMinutes.textContent + ':' + displaySeconds.textContent)
})
buttonIncrease.addEventListener('click', () => {
    displayMinutes.textContent = String(numberMinutes += 5).padStart(2, '0')
    numberMinutes = Number(displayMinutes.textContent)
    svgDecrease.classList.remove('stop-decrement')
    console.log(`${numberMinutes} é ${typeof numberMinutes}`)
})
buttonDecrease.addEventListener('click', () => {
    if (numberMinutes > 5) {
        svgDecrease.classList.remove('stop-decrement')
        displayMinutes.textContent = String(numberMinutes -= 5).padStart(2, '0') || "00"
        numberMinutes = Number(displayMinutes.textContent)
        console.log(`${numberMinutes} é ${typeof numberMinutes}`)
    } else if (numberMinutes <=5) {
        svgDecrease.classList.add('stop-decrement')
    }
})

cardForest.addEventListener('click', () => {
    if (audioForest.paused == true) {
        audioForest.play()
        audioForest.loop = true
        cardForest.classList.add('selected')
        svgForest.classList.add('selected')

        cardRain.classList.remove('selected')
        svgRain.classList.remove('selected')
        audioRain.pause()

        cardCoffeeshop.classList.remove('selected')
        svgCoffeeshop.classList.remove('selected')
        audioCoffeeshop.pause()

        cardFireplace.classList.remove('selected')
        svgFireplace.classList.remove('selected')
        audioFireplace.pause()
    } else {
        cardForest.classList.remove('selected')
        svgForest.classList.remove('selected')
        audioForest.pause()
    }
})
cardRain.addEventListener('click', () => {
    if (audioRain.paused == true) {
        cardForest.classList.remove('selected')
        svgForest.classList.remove('selected')
        audioForest.pause()
        
        cardRain.classList.add('selected')
        svgRain.classList.add('selected')
        audioRain.play()
        audioRain.loop = true
        
        cardCoffeeshop.classList.remove('selected')
        svgCoffeeshop.classList.remove('selected')
        audioCoffeeshop.pause()
        
        cardFireplace.classList.remove('selected')
        svgFireplace.classList.remove('selected')
        audioFireplace.pause()
    } else {
        cardRain.classList.remove('selected')
        svgRain.classList.remove('selected')
        audioRain.pause()      
    }
})
cardCoffeeshop.addEventListener('click', () => {
    if (audioCoffeeshop.paused == true) {
        cardForest.classList.remove('selected')
        svgForest.classList.remove('selected')
        audioForest.pause()
        
        cardRain.classList.remove('selected')
        svgRain.classList.remove('selected')
        audioRain.pause()
        
        cardCoffeeshop.classList.add('selected')
        svgCoffeeshop.classList.add('selected')
        audioCoffeeshop.play()
        audioCoffeeshop.loop = true
   
        cardFireplace.classList.remove('selected')
        svgFireplace.classList.remove('selected')
        audioFireplace.pause()
    } else {
        cardCoffeeshop.classList.remove('selected')
        svgCoffeeshop.classList.remove('selected')
        audioCoffeeshop.pause()
    }
})
cardFireplace.addEventListener('click', () => {
    if (audioFireplace.paused == true) {
        cardForest.classList.remove('selected')
        svgForest.classList.remove('selected')
        audioForest.pause()
        
        cardRain.classList.remove('selected')
        svgRain.classList.remove('selected')
        audioRain.pause()
        
        cardCoffeeshop.classList.remove('selected')
        svgCoffeeshop.classList.remove('selected')
        audioCoffeeshop.pause()
        
        cardFireplace.classList.add('selected')
        svgFireplace.classList.add('selected')
        audioFireplace.play()
        audioFireplace.loop = true
    } else {
        cardFireplace.classList.remove('selected')
        svgFireplace.classList.remove('selected')
        audioFireplace.pause()
    }

})