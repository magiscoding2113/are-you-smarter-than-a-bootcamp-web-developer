var startQuiz
var timeInterval
var question1
var dataAtrributes
var nesting
var question2
var cssQUes
var question3
var jsQuest
var startBtn

secondsLeft = 0


function startQuiz() {

}


document.querySelector("#start-quiz").addEventListener("click", function() {

    window.location.href = "./index.html";
});



var timeInterval = setInterval(function() {
    secondsLeft--;
    timeInterval.textContent = "Time left :" + secondsLeft;
    if(secondsLeft === 0) {
        clearInterval(timeInterval);
    }
}, 1000);


alert(timeInterval)





