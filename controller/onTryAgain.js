import * as QuestionDao from "../dao/index.js"
import { onStart } from "./onStart.js";

export function onTryAgain(event, model) {
  console.log("onTryAgain called!");
  event.preventDefault();

  model.dom.questionDescription.innerHTML = "";
  model.dom.button.tryAgain.style.display = "none";
  model.dom.loader.style.display = "block";
  model.dom.questionList.innerHTML = "";
  console.log("reseting state and re-fetching questions...");
  model.state.reset();
  QuestionDao.getQuestions().then(questions => {
    model.state.setQuestions(questions);
    model.dom.loader.style.display = "none";
    console.log("state reset and fetch complete, starting quiz again..");
    onStart(event, model);
  })
}
