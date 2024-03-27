const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question : "What is JavaScript?", // Q.No : 1
        answer : [
            { text : "JavaScript is a scripting language used to make the website interactive " , correct : true },
            { text : "JavaScript is an assembly language used to make the website interactive " , correct : false },
            { text : " JavaScript is a compiled language used to make the website interactive"  , correct : false },
            { text : "None of the mentioned " , correct : false }

        ]
    },
    {
        question : " Which of the following is correct about JavaScript?", // Q.No : 2
        answer : [
            { text : " JavaScript is Assembly-language " , correct : false},
            { text : "JavaScript is an Object-Oriented language" , correct : false },
            { text : "JavaScript is a High-level language"  , correct : false },
            { text : "JavaScript is an Object-Based language " , correct : true }

        ]
    },
    {
        question : "Among the given statements, which statement defines closures in JavaScript?", // Q.No : 3
        answer : [
            { text : "  JavaScript is a function that is enclosed with references to its inner function scope" , correct : false},
            { text : "JavaScript is a function that is enclosed with references to its lexical environment" , correct : true },
            { text : " JavaScript is a function that is enclosed with the object to its inner function scope"  , correct : false },
            { text : " None of the mentioned" , correct : false }

        ]
    },
    {
        question : "Arrays in JavaScript are defined by which of the following statements?",  // Q.No : 4
        answer : [
            { text : " It is an ordered list of values" , correct : true},
            { text : "It is an ordered list of objects " , correct : false },
            { text : "  It is an ordered list of string"  , correct : false },
            { text : " It is an ordered list of functions " , correct : false }

        ]
    },
    {
        question : "  Which of the following is not javascript data types?",  // Q.No : 5
        answer : [
            { text : " Null type " , correct : false},
            { text : " Undefined type" , correct : false },
            { text : " Number type"  , correct : false },
            { text : "All of the mentioned" , correct : true }

        ]
    },
    {
        question : "Where is Client-side JavaScript code is embedded within HTML documents?",  // Q.No : 6
        answer : [
            { text : " A URL that uses the special javascript:code " , correct : false},
            { text : " A URL that uses the special javascript:protocol" , correct : true },
            { text : " A URL that uses the special javascript:encoding"  , correct : false },
            { text : " A URL that uses the special javascript:stack " , correct : false }

        ]
    },
    {
        question : "  Which of the following object is the main entry point to all client-side JavaScript features and APIs?",  // Q.No : 7
        answer : [
            { text : " Position " , correct : false},
            { text : " Window " , correct : true },
            { text : " Standard"  , correct : false },
            { text : " Location " , correct : true }

        ]
    },
    {
        question : "  Which of the following can be used to call a JavaScript Code Snippet?",  // Q.No : 8
        answer : [
            { text : " Function/Method " , correct : true},
            { text : "Preprocessor" , correct : false },
            { text : " Triggering Event"  , correct : false },
            { text : " RMI" , correct : false }

        ]
    },
    {
        question : "Which of the following scoping type does JavaScript use?",  // Q.No : 9
        answer : [
            { text : " Sequential " , correct : false},
            { text : " Segmental" , correct : false },
            { text : " Lexical"  , correct : true },
            { text : " Literal " , correct : false }

        ]
    },
    {
        question : "Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine? ",  // Q.No : 10
        answer : [
            { text : " will work perfectly well on a Windows Machine " , correct : true},
            { text : " will be displayed as JavaScript text on the browser" , correct : false },
            { text : "  will throw errors and exceptions"  , correct : false },
            { text : " must be restricted to a Unix Machine only " , correct : false }

        ]
    }
    
];


function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add("hide");
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(selectedButton, correct);
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.classList.remove("hide");
    } else {
        nextButton.innerText = "Finish";
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("incorrect");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("incorrect");
}

setNextQuestion();



nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setNextQuestion();
    } else {
        alert("Quiz completed!");
    }
});