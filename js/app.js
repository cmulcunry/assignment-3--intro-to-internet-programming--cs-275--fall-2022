window.onload = () => {
    //Decided to use classlist to determine the state of the letters. Info from here:
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    const table = document.getElementsByTagName('td');

    for (const letter of table) {
        letter.addEventListener(`click`, function() {
        for (const letters of table) {
            if (letter === letters) {
                if (letters.classList.contains(`flipped`)) {
                    letters.classList.remove(`flipped`);
                    letters.classList.add(`default`);
                }
                else {
                    letters.classList.remove(`default`);
                    letters.classList.add(`flipped`);
                }
            }
            else if (letters.classList.contains(`flipped`)){
                letters.classList.remove(`flipped`);
                letters.classList.add(`default`);
            }
        }
        });
    }
};
