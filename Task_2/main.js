const boxes = document.querySelectorAll(".box");
boxes.forEach(element => {
    if (element.getAttribute("data-id")>5) {
        console.log(element.textContent);
    }
});