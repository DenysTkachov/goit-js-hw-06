const inputName = document.querySelector(`#name-input`);
const span = document.querySelector(`#name-output`);

inputName.addEventListener("input", () => {
  if (inputName.value.trim() === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = inputName.value;
  }
});