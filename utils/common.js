function createButtonWithText(text) {
    if (text == undefined) throw new Error(`Error while creating button, param text: (value=${text}) should not be undefined`)
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerHTML = text;
    return button;
}

export function loadQuestion(model) {
    model.dom.questionList.innerHTML = "";
    const question = model.state.getCurrentQuestion()
    console.debug("current question: ", question);

    // load question
    model.dom.questionDescription.innerHTML = question.question;

    // load answers
    console.debug("current question raw answer options: ", Object.values(question.answers))
    model.state.setAnswerOptions(Object.values(question.answers)
        .filter(answer => answer)
        .map(createButtonWithText)
    )
    model.state.getAnswerButtons().forEach(option => model.dom.questionList.appendChild(option))

    console.debug("initialised answer option buttons: ", model.state.getAnswerButtons());

    if (model.dom.button.next.disabled === true) {
        model.dom.button.next.style.border = "5px solid red ";
    }

    if (model.state.getCurrentQuestionIndex() === 4) {
        model.dom.button.next.textContent = "Finish";
    } else {
        model.dom.button.next.textContent = "Next";
    }
}