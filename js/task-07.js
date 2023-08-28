const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");


const initialFontSize = fontSizeControl.value + "px";
text.style.fontSize = initialFontSize;

fontSizeControl.addEventListener("input", () => {
  const fontSize = fontSizeControl.value + "px";
  text.style.fontSize = fontSize;
});
