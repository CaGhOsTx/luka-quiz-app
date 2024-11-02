/**
 * Contains references to the dom elements mutated by this script.
 */
export default {
    questionList: document.getElementById("question-list"),
    questionDescription: document.getElementsByClassName("question-description")[0],
    container: document.getElementById("container"),
    loader: document.getElementById("loader"),
    button: {
        tryAgain: document.createElement("button"),
        next: document.getElementById("next"),
        start: document.getElementById("start-btn"),
    }
}
