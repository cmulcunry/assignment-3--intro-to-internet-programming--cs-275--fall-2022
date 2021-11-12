window.onload = () => {
    const tablelist = document.getElementsByTagName(`td`);
    for (const currentLetter of tablelist) {
        currentLetter.addEventListener(`click`, function() {
            for (const cell of tablelist) {
                if (currentLetter === cell) {
                    if (cell.classList.contains(`flipped`)) {
                        flip(cell);
                    } else {
                        cell.classList.remove(`initial`);
                        cell.classList.add(`flipped`);
                    }
                } else if (cell.classList.contains(`flipped`)) {
                    flip(cell);
                } else {
                    cell.classList.add(`initial`);
                }
            }
        });
    }
    let flip = (currentLetter) => {
        currentLetter.classList.remove(`flipped`);
        currentLetter.classList.add(`initial`);
    };
};
