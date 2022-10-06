import {
    displayMinutes, displaySeconds, numberMinutes, numberSeconds, countDown,
    play, pause, stop, increase, decrease,
    cardForest, cardRain, cardCoffeeshop, cardFireplace,
    svgForest, svgRain, svgCoffeeshop, svgFireplace,
    audioForest, audioRain, audioCoffeeshop, audioFireplace, audioAlertTimer
} from './elements.js'
import { Controls } from './controls.js';
import { Cards } from './cards.js';
import { Timer } from './timer.js';
import { Events } from "./events.js";

const controls = Controls({
    play,
    pause,
    displayMinutes,
    displaySeconds,
    numberMinutes,
    numberSeconds
})
const cards = Cards({
    cardForest, svgForest, audioForest,
    cardRain, svgRain, audioRain,
    cardCoffeeshop, svgCoffeeshop, audioCoffeeshop,
    cardFireplace, svgFireplace, audioFireplace,
})
const timer = Timer({
    countDown,
    numberMinutes, numberSeconds,
    displayMinutes, displaySeconds,
    audioAlertTimer, controls, cards, 
})
const events = Events({
    timer, controls,
    play, pause, stop, increase, decrease,
    cards,
    cardForest, cardRain, cardCoffeeshop, cardFireplace,
    audioForest, audioRain, audioCoffeeshop, audioFireplace
})

{ events.eventsControls(), events.eventsCards() } 