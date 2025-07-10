
(function () {

    let hours = document.querySelector('.hour')
    let minutes = document.querySelector('.minute')
    let seconds = document.querySelector('.second')

    // all buttons 
    let start = document.querySelector('.start')
    let stop = document.querySelector('.stop')
    let reset = document.querySelector('.reset')

    console.log(hours.value)

    let countDownTimer = null;

    start.addEventListener("click", function () {
        // console.log("jai maata di") 
        if ((hours.value) == 0 && (minutes.value) == 0 && (seconds.value) == 0) {
            // console.log("enter the values please ")
            alert("enter the values in input fields ")
            return
        }

        function startInterval() {

            start.style.display = "none"
            stop.style.display = "block"


            countDownTimer = setInterval(() => timer(), 1000)

        }

        startInterval()
    })


    function stopInterval(state) {
        console.log(state)

        start.style.display = "block";
        stop.style.display = "none"

        // stop.innerText = state === "pause" ? "Continue" : "Start"

        start.innerText = state === "pause" ? "Continue" : "Start"
        clearInterval(countDownTimer);


    }
    function timer() {
        // console.log("jai")
        if (seconds.value > 60) {
            minutes.value++;
            seconds.value = seconds.value - 60
        }
        if (minutes.value > 60) {
            hours.value++;
            minutes.value = minutes.value - 60
        }

        if ((hours.value) == 0 && (minutes.value) == 0 && (seconds.value) == 0) {

            hours.value = ""
            minutes.value = ""
            seconds.value = ""
            // clearInterval(countDownTimer)
            stopInterval()
        }
        else if (seconds.value != 0) {
            seconds.value = `${seconds.value < 10 ? "0" : ""}${seconds.value - 1}`
        }
        else if (minutes.value != 0 && seconds.value == 0) {
            seconds.value = 59
            minutes.value = `${minutes.value < 10 ? "0" : ""}${minutes.value - 1}`
        } else if (hours.value != 0 && minutes.value == 0 && seconds.value == 0) {
            minutes.value = 59
            seconds.value = 59
            hours.value = `${hours.value < 10 ? "0" : ""}${hours.value - 1}`


        }





    }

    stop.addEventListener("click", function () {

        stopInterval("pause")
    })

    reset.addEventListener("click", function () {
        hours.value = ""
        minutes.value = ""
        seconds.value = ""


        stopInterval()

    })


})()