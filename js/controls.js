function Controls({
    play,
    pause,
}) {
    function buttonPlay() {
        play.classList.add('hide')
        pause.classList.remove('hide')
    }
    function buttonPause() {
        play.classList.remove('hide')
        pause.classList.add('hide')
    }
    function buttonStop() {
        play.classList.remove('hide')
        pause.classList.add('hide')
    }
    return {
        buttonPlay,
        buttonPause,
        buttonStop,
        buttonStop,
    }
} export { Controls }