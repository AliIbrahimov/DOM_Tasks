const inputColor = document.getElementById("inputColor");
const submitButton = document.getElementById("changeButton");
const bodyElement = document.querySelector("body");
submitButton.addEventListener("click",() => {
    const value = inputColor.value;
    bodyElement.style.backgroundColor = value;
})