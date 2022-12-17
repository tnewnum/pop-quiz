//Globaly defind variables
let startTime = document.querySelector(".start");
let startQuiz = document.querySelector(".start");
let button = document.querySelector(".start")
var timerElement = document.querySelector(".timer-count")
let i = 3;
let timer;


// event listener - start quiz button - start timer 
startTime.addEventListener("click", function(){
   
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
   

});



// event listent - start quiz button - start quiz questions
        // roll through 1 by 1 - driven by user's answer "click"
        //multiple choice answers 
        //maybe an alert for prior question correct/incorrect?
startQuiz.addEventListener("click", function() {            
        
    

    $('.quiz-box').children().eq(1).append($('<li>Classmates</li>'));

    $('.quiz-box').children().eq(0).hide()

});


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

