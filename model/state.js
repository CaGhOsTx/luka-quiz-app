const STATE = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  possibleAnswerButtons: []
}

export const getAnswerButtons = () => {
  return STATE.possibleAnswerButtons;
}
export const getCurrentQuestionIndex = () => {
  return STATE.currentQuestionIndex;
}

export const getCurrentQuestion = () => {
  return STATE.questions[STATE.currentQuestionIndex];
}

export const getIndexOfAnswer = (answer) => {
  const idx = STATE.possibleAnswerButtons.indexOf(answer);
  if (idx === -1)
    throw new Error(`The supplied answer button: ${answer} does not exist in state array: ${possibleAnswerButtons}`);
  return idx;
}

export const getScore = () => {
  return STATE.score;
}

export const getQuestions = () => {
  return STATE.questions;
}

export const moveToNextQuestion = () => {
  STATE.currentQuestionIndex++;
}

export const setQuestions = (questions) => {
  STATE.questions = questions;
  return STATE.questions;
}

export const setAnswerOptions = (answers) => {
  STATE.possibleAnswerButtons = answers;
  return STATE.possibleAnswerButtons;
}

export const incrementScore = () => {
  STATE.score++;
  return STATE.score;
}

export const reset = () => {
  STATE.questions = []
  STATE.currentQuestionIndex = 0,
    STATE.score = 0;
  STATE.possibleAnswerButtons = []
}
