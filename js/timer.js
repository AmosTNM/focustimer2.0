function Timer({
    countDown,
    numberMinutes, numberSeconds,
    displayMinutes, displaySeconds,
    audioAlertTimer, controls, cards, 
}) {
    function play() {
        countDown = setInterval(() => {
            if (numberMinutes == 0 && numberSeconds == 0) {
                audioAlertTimer.play()
                clearInterval(countDown)
                controls.buttonStop()
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
    }
    function pause() {
        clearTimeout(countDown)
    }
    function stop() {
        clearInterval(countDown)
        displayMinutes.textContent = '00'
        displaySeconds.textContent = '00'
        numberMinutes = Number(displayMinutes.textContent)
        numberSeconds = Number(displaySeconds.textContent)
    }
    function increase() {
        displayMinutes.textContent = String(numberMinutes += 5).padStart(2, '0') || "00"
        numberMinutes = Number(displayMinutes.textContent)
    }
    function decrease() {
        if (numberMinutes >= 5) {
            displayMinutes.textContent = String(numberMinutes -= 5).padStart(2, '0') || "00"
            numberMinutes = Number(displayMinutes.textContent)
        } else if (numberMinutes < 5) {
            return
        }
    }
    return {
        play,
        pause,
        stop,
        increase,
        decrease
    }
} export { Timer }