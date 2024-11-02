export function onAnswerButtonListClick(event, model) {
  console.log("onAnswerButtonListClick called!");
  event.preventDefault();

  if(targetIsNotAButton(event)) {
    console.log(`this event: ${event}, was not related to a button. Doing nothing...`);
    return;
  }

  const question = model.state.getCurrentQuestion();
  const selectedButton = event.target;
  console.debug(`api answers for question: ${question.correct_answers}`);
  const selectedButtonIdx = model.state.getIndexOfAnswer(selectedButton);
  const correctAnswerIdx = getCorrectAnswerIndex(question);
  console.debug(`selected answer idx ${selectedButtonIdx}, correct answer idx: ${correctAnswerIdx}`);
  if (selectedButtonIdx === correctAnswerIdx) {
    console.log(`selected answer: ${selectedButton} was correct`);
    selectedButton.style.backgroundColor = "green";
    model.state.incrementScore();
  } else {
    console.log(`selected answer: ${selectedButton} was incorrect`);
    selectedButton.style.backgroundColor = "red";
  }
  model.state.getAnswerButtons().forEach((button) => {
    button.disabled = true;
  });

  model.dom.button.next.disabled = false;

  if (model.dom.button.next.disabled !== true) {
    model.dom.button.next.style.border = "none";
  }

  model.state.moveToNextQuestion();
}

function targetIsNotAButton(event) {
  return event.target.tagName !== "BUTTON";
}

function getCorrectAnswerIndex(question) {
  return Object.values(question.correct_answers).indexOf("true");
}
