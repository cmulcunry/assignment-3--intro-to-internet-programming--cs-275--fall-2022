window.onload = () => {
    const tablelist = document.getElementsByTagName(`td`);
    for (const currentLetter of tablelist) {
        currentLetter.addEventListener(`click`, function() {
            for (const cells of tablelist) {
                if (currentLetter === cells) {
                    if (cells.classList.contains(`flipped`)) {
                        flip(cells);
                    } else {
                        cells.classList.remove(`initial`);
                        cells.classList.add(`flipped`);
                    }
                } else if (cells.classList.contains(`flipped`)) {
                    flip(cells);
                } else {
                    cells.classList.add(`initial`);
                }
            }
        });
    }
    let flip = (cell) => {
        cell.classList.remove(`flipped`);
        cell.classList.add(`initial`);
    };
};
