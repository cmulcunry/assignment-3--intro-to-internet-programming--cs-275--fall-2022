window.onload = () => {
    const table = document.getElementsByTagName(`td`);
    for (let count = 0; count < table.length; count++) {
        table[count].addEventListener(`click`, () => {
            if(table[count].classList.contains(`flipped`)){
                table[count].classList.remove(`flipped`);
            }
            else {
                reset();
                table[count].classList.add(`flipped`);
            }
        });
    }
    const reset = () => {
        table[0].classList.remove(`flipped`);
        table[1].classList.remove(`flipped`);
        table[2].classList.remove(`flipped`);
        table[3].classList.remove(`flipped`);
    };
};
