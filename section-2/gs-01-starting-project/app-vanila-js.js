// Variables
const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

// Methods
function addGoal() {
  const enteredValue = inputEl.value;
  const listElement = document.createElement("li");

  if (enteredValue) {
    listElement.textContent = enteredValue;
    listEl.appendChild(listElement);
  }

  resetInput();
}
function resetInput() {
  inputEl.value = "";
}

// Events
buttonEl.addEventListener("click", addGoal);
inputEl.addEventListener(
  "keypress",
  (keypressEvent) => keypressEvent.key === "Enter" && addGoal()
);
