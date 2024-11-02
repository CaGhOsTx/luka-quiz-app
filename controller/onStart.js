import { loadQuestion } from "../utils/common.js";

export function onStart(event, model) {
    console.log("onStart called!");
    event.preventDefault();

    model.dom.button.next.disabled = true;
    model.dom.button.next.style.display = "block";
    model.dom.button.start.style.display = "none";

    loadQuestion(model);
}
