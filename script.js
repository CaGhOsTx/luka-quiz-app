"use strict";

//Fetch
let quizQuestions = [];

//Za index
let buttonList = [];

//DOM-a varijable
const questions = document.getElementById("question-list");
const start = document.getElementById("start-btn");
const whatQuestion = document.getElementsByClassName("question-description")[0];
const next = document.getElementById("next");
const container = document.getElementById("container");
const tryAgain = document.createElement("button");

//Varijable koje ćemo raditi update
let questionIndex = 0;
let score = 0;

//Asinkrona funkcija za fetch
async function fetchQuizQuestions() {
  try {
    const response = await fetch(
      "https://quizapi.io/api/v1/questions?apiKey=cSJvb0ZbxBFRsDCOcBJrieX7C0WOBZ7yh3EvdGdi&limit=5&category=Linux"
    );
    quizQuestions = await response.json();
    console.log(quizQuestions);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchQuizQuestions();

function loadQuestion() {
  buttonList = [];
  questions.innerHTML = "";

  const question = quizQuestions[questionIndex];
  console.log(question);

  //Paragraf
  whatQuestion.innerHTML = question.question;

  const values = Object.values(question.answers);

  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      const button = document.createElement("button");
      button.classList.add("btn");
      button.innerHTML = values[i];
      buttonList.push(button);
      questions.appendChild(button);
    }
  }

  console.log(buttonList);

  if (next.disabled === true) {
    next.style.border = "5px solid red ";
  }

  if (questionIndex === 4) {
    next.textContent = "Finish";
  } else {
    next.textContent = "Next";
  }
}

function correct(e) {
  e.preventDefault();

  const question = quizQuestions[questionIndex];
  const whichButton = e.target.tagName === "BUTTON" ? e.target : null;
  const index = buttonList.indexOf(whichButton);
  const trueList = Object.values(question.correct_answers);
  const trueIndex = trueList.indexOf("true");

  if (index === trueIndex) {
    whichButton.style.backgroundColor = "green";
    score++;
  } else {
    whichButton.style.backgroundColor = "red";
  }
  buttonList.forEach((button) => {
    button.disabled = true;
  });

  next.disabled = false;

  if (next.disabled !== true) {
    next.style.border = "none";
  }

  questionIndex++;
}

//Event listeneri

start.addEventListener("click", (e) => {
  e.preventDefault();
  next.disabled = true;
  next.style.display = "block";
  start.style.display = "none";
  loadQuestion();
});

questions.addEventListener("click", correct);

next.addEventListener("click", () => {
  if (questionIndex > 4) {
    next.style.display = "none";
    questions.innerHTML = "";
    whatQuestion.innerHTML = `Kviz je završen! Score: ${score}/5`;
    tryAgain.classList.add("try-button");
    tryAgain.style.display = "block";
    tryAgain.textContent = "Try again";
    container.appendChild(tryAgain);

    fetchQuizQuestions();
  } else {
    next.disabled = true;
    loadQuestion();
  }
});

tryAgain.addEventListener("click", (e) => {
  e.preventDefault();
  whatQuestion.innerHTML = "";
  tryAgain.style.display = "none";
  questionIndex = 0;
  score = 0;
  questions.innerHTML = "";
  start.style.display = "block";
});
