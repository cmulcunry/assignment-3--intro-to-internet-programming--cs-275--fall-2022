window.onload = () => {
    //Decided to use classlist to determine the state of the letters. Info from here:
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    const table = document.getElementsByTagName('td');

    for (const letter of table) {
        letter.addEventListener(`click`, function() {
        for (const letters of table) {
            if (letter === letters) {
                if (letters.classList.contains(`flipped`)) {
                    letter.classList.remove(`flipped`);
                    letter.classList.add(`default`);
                }
                else {
                    letter.classList.remove(`default`);
                    letter.classList.add(`flipped`);
                }
            }
        }
     });
    }
}
