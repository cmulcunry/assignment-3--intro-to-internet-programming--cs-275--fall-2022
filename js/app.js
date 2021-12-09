window.onload = () => {
    //classList to determine the state of the letters. Info from here:
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

    let table = document.querySelectorAll(`td`);

    //for...of to iterate logic over each individual element in the table,
    //without having to convert table to an array. Info from here:
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
    //Statements/for...of
    for (let currentLetter of table) {
        for (let letters of table) {
            currentLetter.addEventListener(`click`, () => {
                if (currentLetter === letters) {
                    if (letters.classList.contains(`flipped`)) {
                        letters.classList.remove(`flipped`);
                        letters.classList.add(`default`);
                    }
                    else {
                        letters.classList.remove(`default`);
                        letters.classList.add(`flipped`);
                    }
                }
                else if (letters.classList.contains(`flipped`)) {
                    letters.classList.remove(`flipped`);
                    letters.classList.add(`default`);
                }
            });
        }

    }
};
