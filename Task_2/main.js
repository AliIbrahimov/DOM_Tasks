const boxes = document.querySelectorAll(".box");
boxes.forEach(element => {
    if (element.getAttribute("data-id")>5) {
        element.classList.add("btn-danger");
        console.log(element.textContent);
        element.innerHTML += " Data-id: " + element.getAttribute("data-id")
        }else {
        element.classList.add("btn-success");
        element.innerHTML += " Data-id: " + element.getAttribute("data-id")
        }
});