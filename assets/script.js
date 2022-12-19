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
let i = 60;
let timer;
let currentQuestion = 0;
let score = 0;


//array of questions that will be cycled through for the quiz
let quizQuestions = [
{
    question:"What does HTML stand for?",
    a:"Hi, Tommy ate My Lunch",
    b:"Hurry to Manditoy Meeting",
    c:"Hypertext Markup Language",
    d:"Hpyertext Makeup Language",
    correct: "Hypertext Markup Language",
},
{
    question:"What does CSS stand for?",
    a:"Coloring Style Sheet",
    b:"Cool Student Survey",
    c:"Cascade Style Shoes",
    d:"Cascading Style Sheets",
    correct: "Cascading Style Sheets",
},
{
    question:"What does JS stnd for?",
    a:"Just Saying",
    b:"Jessica Simpson",
    c:"JavaScript",
    d:"Jesery Shore",
    correct: "JavaScript",
},
{
    question:"Which of the below is an 'operator' in JavaScript?",
    a:"Jason Borne",
    b:"oper8or",
    c:"+ - / *",
    d:"The person who actually makes the internet work.",
    correct: "+ - / *",
},
{
    question:"If you dont know how to do something, what should you do?",
    a:"Just give up - this is all too hard anyway",
    b:"Ask for help, take a break and clear your head, office hours, sign up for a tutor",
    c:"+ - / *",
    d:"Just Google it and use any code you find - it will work!",
    correct: "Ask for help, take a break and clear your head, office hours, sign up for a tutor",
},    
];



// event listener - load question - start timer 
startTime.addEventListener("click", function(){
    startTimer();
    $('.quiz-box').children().eq(1).show()
    $('.quiz-box').children().eq(2).show()
    $('.quiz-box').children().eq(3).show()
    $('.quiz-box').children().eq(4).show()
    $('.quiz-box').children().eq(5).show()
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
    //console.log(displayedQuestion.question);

    questionEl.innerText = displayedQuestion.question;
    a_text.innerText = displayedQuestion.a;
    //console.log(displayedQuestion.a);
    b_text.innerText = displayedQuestion.b;
    //console.log(displayedQuestion.b);
    c_text.innerText = displayedQuestion.c;
    //console.log(displayedQuestion.c);
    d_text.innerText = displayedQuestion.d;
    //console.log(displayedQuestion.d);
};


//function to clear answer selection 
function clearSlection() {
    answerEls.forEach(answerEl => answerEl.checked = false)
};

/*
//function that holds the answer selected
function getSelection() {
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;

};*/

function handleSubmit(e) {
    const answer = e.target.innerText;
    console.log(answer)

    if(answer) {
        if(answer === quizQuestions[currentQuestion].correct){
            score++;
        }

        currentQuestion++;

        if(currentQuestion < quizQuestions.length) {
            loadQuestion()
        }

        else {
            questionEl.innerHTML = `<h2>You answered ${score}/${quizQuestions.length} questions correctly.</h2>`
        
        }
    }
};

answerEls.forEach(answer => {

    answer.addEventListener('click' , handleSubmit)

} );



// event listent - start quiz button - start quiz questions
        // roll through 1 by 1 - driven by user's answer "click"
        //multiple choice answers 
        //maybe an alert for prior question correct/incorrect?
startQuiz.addEventListener("click", function() {            
        
      $('.quiz-box').children().eq(0).hide()

});

$('.quiz-box').children().addClass('boxy')
$('.quiz-box').children().eq(1).hide()
$('.quiz-box').children().eq(2).hide()
$('.quiz-box').children().eq(3).hide()
$('.quiz-box').children().eq(4).hide()
$('.quiz-box').children().eq(5).hide()

//User input box - initials & Score saves to local


