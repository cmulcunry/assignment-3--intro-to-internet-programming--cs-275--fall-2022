window.onload = () => {
    const table = document.getElementsByTagName('td');

    for (const letter of table) {
        for (const letters of table) {
            if (letter === letters) {
                if (letters.classList.contains(`flipped`)) {
                    letter.classList.remove(`default`);
                    letter.classList.add(`flipped`);
                }
                else {
                    letter.classList.remove(`flipped`);
                    letter.classList.add(`default`);
                }
            }
        }
    }
}
