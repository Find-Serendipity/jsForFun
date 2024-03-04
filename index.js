const timeRemaining = 5;
const timerElement = document.getElementById ("number");

function countdown () {
    timeRemaining = timeRemaining - 1
    if (timeRemaining <= 0) {
        timerElement.innertext = "Time for Fun!!!"
    } else {
        timerElement.innertext = timeRemaining
    }
}

setInterval (countdown, 1000) ;

countdown () {
    return timeRemaining
}
