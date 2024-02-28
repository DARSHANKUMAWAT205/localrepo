
const boxes = document.querySelectorAll('.box')
const body = document.querySelector('body')

boxes.forEach((box) => {
    // console.log(box);
    box.addEventListener("click", (event) => {
        console.log(event)
        console.log(event.target);
        if(event.target === grey) body.style.backgroundColor = "grey"
        else if (event.target === pink) body.style.backgroundColor = "pink"
        else if (event.target === yellow) body.style.backgroundColor = "yellow"
        else if (event.target === white) body.style.backgroundColor = "white"
    })
})