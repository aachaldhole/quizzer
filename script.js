var quizdata = [
  {
    question: "Which framework is related to Js?",
    a: ".net",
    b: "flask",
    c: "react",
    d: "django",
    correct: "c",
  },

  {
    question: "Which is not a programming language?",
    a: "html",
    b: "python",
    c: "java",
    d: "JS",
    correct: "a",
  },

  {
    question: "Which is not a framework?",
    a: "react",
    b: "javascript",
    c: "angular",
    d: "django",
    correct: "b",
  },

  {
    question: "CSS stands for",
    a: "cascading style state",
    b: "cascading style sheet",
    c: "cascading sheet of style",
    d: "none",
    correct: "b",
  },
];

//accessing variable to show them dynamically
var quiz = document.getElementById("quiz");
var answer = document.querySelectorAll(".answer"); // to select one radio button, dot for selection
var question = document.getElementById("question");

var option_a = document.getElementById("a_value");
var option_b = document.getElementById("b_value");
var option_c = document.getElementById("c_value");
var option_d = document.getElementById("d_value");

var submitbtn = document.getElementById("submit");

var currentQuestion = 0;
var quizScore = 0;
//how to load the question with the help of above data
loadQuiz();

// whenever the load quiz option perform for the first time increment currentq and score by 1
function loadQuiz() {
  //to remove if radio button is clicked initially
  deselect();

  question.innerHTML = quizdata[currentQuestion].question;
  option_a.innerText = quizdata[currentQuestion].a;
  option_b.innerText = quizdata[currentQuestion].b;
  option_c.innerText = quizdata[currentQuestion].c;
  option_d.innerText = quizdata[currentQuestion].d;
}

function deselect() {
  //ans ko deselect as all radio buttons are stored in radio button
  answer.forEach((answer) => (answer.checked = false));
}

//after clicking on submit button this executed, arrow function
submitbtn.addEventListener("click", () => {
  var selectedoption;
  answer.forEach((answer) => {
    if (answer.checked) {
      selectedoption = answer.id;
    }
  });

  if (selectedoption == quizdata[currentQuestion].correct) {
    quizScore = quizScore + 1;
  }
  currentQuestion = currentQuestion + 1;
  //again load next question

  //if we are in last question after it show result and load quiz option
  if (currentQuestion == quizdata.length) {
    //add text to display score in quizdiv
    //use bactics as use javascript to display score.. to take javascriot variable, interpolation
    document.getElementById(
      "quizdiv"
    ).innerHTML = `<h2>You have answered ${quizScore} correctly out of ${quizdata.length}</h2>`;
  } else {
    loadQuiz();
  }
});
