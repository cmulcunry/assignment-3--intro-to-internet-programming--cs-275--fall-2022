window.onload = () => {
    //Decided to use classList to determine the state of the letters. Info from here:
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    const table = document.querySelectorAll(`td`);

    for (const currentLetter of table) {
        currentLetter.addEventListener(`click`, () => {
            for (const letters of table) {
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
            }
        });
    }
};
