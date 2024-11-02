import { loadQuestion } from "../utils/common.js";

const QUIZ_LENGTH = 5;

export function onNext(event, model) {
  console.log("onNext called!");
  event.preventDefault();
  console.debug(`${model.state.getCurrentQuestionIndex()} / ${QUIZ_LENGTH} questions answered.`);
  if (model.state.getCurrentQuestionIndex() === QUIZ_LENGTH) {
    console.log(`reached end of quiz`);
    model.dom.button.next.style.display = "none";
    model.dom.questionList.innerHTML = "";
    model.dom.questionDescription.innerHTML = `Kviz je završen! score: ${model.state.getScore()}/5`;
    model.dom.button.tryAgain.classList.add("try-button");
    model.dom.button.tryAgain.style.display = "block";
    model.dom.button.tryAgain.textContent = "Try again";
    model.dom.container.appendChild(model.dom.button.tryAgain);
  } else {
    console.log(`loading next question...`);
    model.dom.button.next.disabled = true;
    loadQuestion(model);
  }
}
