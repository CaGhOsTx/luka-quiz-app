"use strict";
import { onStart, onAnswerButtonListClick, onTryAgain, onNext } from "./controller/index.js";
import * as QuestionDao from "./dao/index.js"
import model from "./model/index.js";

function initController() {
  model.dom.button.start.addEventListener("click", event => onStart(event, model));
  model.dom.questionList.addEventListener("click", event => onAnswerButtonListClick(event, model));
  model.dom.button.next.addEventListener("click", event => onNext(event, model));
  model.dom.button.tryAgain.addEventListener("click", event => onTryAgain(event, model));
}

console.log("starting script.")

QuestionDao.getQuestions().then(questions => {
    console.log("questions loaded successfuly.");
    model.state.setQuestions(questions);
    model.dom.button.start.style.display = "block"
    model.dom.loader.style.display = "none";
    console.log("state ready, initialising controller.");
  }).then(initController)
