//Globaly defind variables
let startTime = document.querySelector(".start");
let startQuiz = document.querySelector(".start");
let button = document.querySelector(".start")
let timerElement = document.querySelector(".timer-count")
let answerEls = document.querySelectorAll('.answer')
let questionEl = document.getElementById('question')
let a_text = document.getElementById('a_text')
let b_text = document.getElementById('b_text')
let c_text = document.getElementById('c_text')
let d_text = document.getElementById('d_text')
let i = 61;
let timer;
let currentQuestion = 0;
let score = 0;


//array of questions that will be cycled through for the quiz
let quizQuestions = [
{
    question:"What does HTML stand for?",
    a:"Hi, Tommy at My Lunch",
    b:"Hurry to Manditoy Meeting",
    c:"Hypertext Markup Language",
    d:"Hpyertext Makeup Language",
    correct: "c",
},
{
    question:"What does CSS stand for?",
    a:"Coloring Style Sheet",
    b:"Cool Student Survey",
    c:"Cascade Style Shoes",
    d:"Cascading Style Sheets",
    correct: "d",
},
{
    question:"What does JS stnd for?",
    a:"Just Saying",
    b:"Jessica Simpson",
    c:"JavaScript",
    d:"Jesery Shore",
    correct: "c",
},
{
    question:"Which of the below is an 'operator' in JavaScript?",
    a:"Jason Borne",
    b:"oper8or",
    c:"+ - / *",
    d:"The person who actually makes the internet work.",
    correct: "c",
},
{
    question:"If you dont know how to do something, what should you do?",
    a:"Just give up - this is all too hard anyway",
    b:"Ask for help, take a break and clear your head, office hours, sign up for a tutor",
    c:"+ - / *",
    d:"Just Google it and use any code you find - it will work!",
    correct: "cb",
},    
];




// event listener - load question - start timer 
startTime.addEventListener("click", function(){
    startTimer();
    loadQuestion();
});


   
//function to start time
function startTimer(){
    timer = setInterval(function() {
        i--;
        timerElement.textContent = i;

    
        if ( i === 0){
            clearInterval(timer)
            alert("GAME OVER")
        }
    }, 1000);
};



//function to load a Question
function loadQuestion() {
    clearSlection();

    let displayedQuestion = quizQuestions[currentQuestion]
    console.log(displayedQuestion.question);

    questionEl.innerText = displayedQuestion.question;
    a_text.innerText = displayedQuestion.a;
    b_text.innerText = displayedQuestion.b;
    c_text.innerText = displayedQuestion.c;
    d_text.innerText = displayedQuestion.d;
};

//function to clear answer selection 
function clearSlection() {
    answerEls.forEach(answerEl => answerEl.checked = false)
};

//function that holds the answer selected
function getSelection() {
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;

};

function handleSubmit() {
    const answer = getSelection();

    if(answer) {
        if(answer === quizQuestions[currentQuestion].correct){
            score++;
        }

        currentQuestion++;

        if(currentQuestion < quizQuestions.length) {
            loadQuestion()
        }

        else {
            quiz.innerHTML = '<h2>You answered ${score}/${quizQuestions.length} questions correctly.</h2>'
        
        }
    }
};





// event listent - start quiz button - start quiz questions
        // roll through 1 by 1 - driven by user's answer "click"
        //multiple choice answers 
        //maybe an alert for prior question correct/incorrect?
startQuiz.addEventListener("click", function() {            
        
      $('.quiz-box').children().eq(0).hide()

});


//User input box - initials & Score saves to local


