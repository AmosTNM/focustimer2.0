function Events({
    timer, controls,
    play, pause, stop, increase, decrease,
    cards,
    cardForest, cardRain, cardCoffeeshop, cardFireplace,
    audioForest, audioRain, audioCoffeeshop, audioFireplace
}) {    
    function eventsControls() {
        play.addEventListener('click', () => {
            controls.buttonPlay()
            timer.play()
        })
        pause.addEventListener('click', () => {
            controls.buttonPause()
            timer.pause()
        })
        stop.addEventListener('click', () => {
            controls.buttonStop()
            timer.stop()
            cards.disableForest()
            cards.disableRain()
            cards.disableCoffeeshop()
            cards.disableFireplace()
        })
        increase.addEventListener('click', () => {
            timer.increase()
        })
        decrease.addEventListener('click', () => {
            timer.decrease()
        })
    }
    function eventsCards() {
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
    }
    return {
        eventsControls,
        eventsCards
    }
} export { Events }