function Cards({
    cardForest, svgForest, audioForest,
    cardRain, svgRain, audioRain,
    cardCoffeeshop, svgCoffeeshop, audioCoffeeshop,
    cardFireplace, svgFireplace, audioFireplace,
}){
    function enableForest() {
        audioForest.play()
        audioForest.loop = true
        cardForest.classList.add('selected')
        svgForest.classList.add('selected')
    }
    function enableRain() {
        audioRain.play()
        audioRain.loop = true 
        cardRain.classList.add('selected')
        svgRain.classList.add('selected')    
    }
    function enableCoffeeshop() {
        audioCoffeeshop.play()
        audioCoffeeshop.loop = true
        cardCoffeeshop.classList.add('selected')
        svgCoffeeshop.classList.add('selected')
    }
    function enableFireplace(){
        audioFireplace.play()
        audioFireplace.loop = true
        cardFireplace.classList.add('selected')
        svgFireplace.classList.add('selected')
    }
    function disableForest() {
        audioForest.pause()
        cardForest.classList.remove('selected')
        svgForest.classList.remove('selected')
    }
    function disableRain() {
        audioRain.pause()
        cardRain.classList.remove('selected')
        svgRain.classList.remove('selected')
    }
    function disableCoffeeshop() {
        audioCoffeeshop.pause()
        cardCoffeeshop.classList.remove('selected')
        svgCoffeeshop.classList.remove('selected')
    }
    function disableFireplace() {
        audioFireplace.pause()
        cardFireplace.classList.remove('selected')
        svgFireplace.classList.remove('selected')
    }
    return {
        enableForest,
        enableRain,
        enableCoffeeshop,
        enableFireplace,
        disableForest,
        disableRain,
        disableCoffeeshop,
        disableFireplace
    }
} export { Cards }