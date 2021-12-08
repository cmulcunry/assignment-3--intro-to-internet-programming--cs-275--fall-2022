let previousLetter = null;

function rotate(element) {
    while(previousLetter === null) {
        element.classList.remove(`flipped`);
        element.classList.add(`normal`);
        previousLetter = element;
    }
    if(element === previousLetter) {
        if(previousLetter.classList.contains(`flipped`)) {
            previousLetter.classList.remove(`flipped`);
            previousLetter.classList.add(`normal`);
        }
        else {
            previousLetter.classList.remove(`normal`);
            previousLetter.classList.add(`flipped`);
        }
        previousLetter = element;
    }
    else {
        if(!element.classList.contains(`flipped`)) {
            element.classList.remove(`normal`);
            element.classList.add(`flipped`);
        }
        else if (element.classList.contains(`flipped`)) {
            element.classList.remove(`flipped`);
            element.classList.add(`normal`);
        }
        if(previousLetter.classList.contains(`flipped`)) {
            previousLetter.classList.remove(`flipped`);
            previousLetter.classList.add(`normal`);
        }
        previousLetter = element;
    }
}

window.onclick = element => {
    let letterClicked = element.target;
    if(letterClicked.tagName === `TD`) {
        rotate(letterClicked);
    }
};
