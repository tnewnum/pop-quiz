//Globaly defind variables
//let startTime = document.querySelector("start");
var timerElement = document.querySelector(".timer-count")
let i = 60;
let timer;



//countdown timer starting at 60 and stops at 0

function startTimer(){
    timer = setInterval(function() {
        i--;
        timerElement.textContent = i;

    
        if ( i === 0){
            clearInterval(timer)
        }
    }, 1000);
}
startTimer()




//Globaly defind variables
//let startQuiz = document.querySelector("start");
//let timerEl = document.getElementById("timer");



//$('#root').children('header').children().add( '<p>' ).css( "background", "yellow")
//.css( "background-color", "red" );

//$('#root').children().eq(0).children().eq(1).css("background-color", "white");













// event listent - start quiz button - start quiz questions
        // roll through 1 by 1 - driven by user's answer "click"
//startQuiz.addEventListener("click", function() {
        //code to roll questions
        //Questions ( no min question required)
        




        //multiple choice answers 
        //maybe an alert for prior question correct/incorrect?

//});


// event listener - start quiz button - start timer 
//startTime.addEventListener("click", function(){
        //count down starting at 60 seconds
       
    
        // Timer that counts down from 30

        /*
function countdown() {
    var timeLeft = 30;

// Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
  // As long as the `timeLeft` is greater than 1
  if (timeLeft > 1) {
    timeLeft--;
  } else {
    // Once `timeLeft` gets to 0, set `timerEl` to an empty string
    timerEl.textContent = '';
    // Use `clearInterval()` to stop the timer
    clearInterval(timeInterval);
    
  }
}, 1000);
}
countdown();*/
   

//});


//User input box - initials & Score saves to local


/*
const QUESTIONS = "";

// Questions to be asked
 QUESTIONS = [{
        id: zero,
        q: "What does HTML stand for ?",
        a: [{ text: "High Tommy ate My Lunch ", isCorrect: false },
            { text: "Hurry To Manditory Meeting", isCorrect: false },
            { text: "Hypertext Markup Language", isCorrect: true },
            { text: "Hypertext Makeup Language", isCorrect: false }
        ]
  
    },
    {
        id: one,
        q: "What does CSS stand for?",
        a: [{ text: "Coloring Style Sheet", isCorrect: false },
            { text: "Cool Student Survey", isCorrect: false },
            { text: "Cascade Style Shoes", isCorrect: false },
            { text: "Cascading Style Sheets", isCorrect: true }
        ]
  
    },
    {
        id: two,
        q: "What does JS stand for?",
        a: [{ text: "Just Saying", isCorrect: false },
            { text: "Jessica Simpson", isCorrect: false },
            { text: "Javascript", isCorrect: true },
            { text: "Jersey Shore", isCorrect: false }
        ]
  
    },
    {
        id: three,
        q: "What is an 'operator' in Javascript?",
        a: [{ text: "Jason Borne", isCorrect: false },
            { text: "oper8or", isCorrect: false },
            { text: "+ - * ", isCorrect: true },
            { text: "the person who actually makes the internet work", isCorrect: false }
        ]

    },
    {
        id: four,
        q: "If you dont know how to do something, what do you do?",
        a: [{ text: "Just give up, this is too hard anyway", isCorrect: false },
            { text: "Ask for help, take a break to clear your head, office hours, get a tutor", isCorrect: true },
            { text: "+ - * ", isCorrect: false },
            { text: "just google it and throw any code in there you can find, it will work", isCorrect: false }
        ]

    },*/ 

