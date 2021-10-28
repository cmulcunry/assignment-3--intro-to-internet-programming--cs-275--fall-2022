let window.onload = () => {
    const tdList = document.getElementsByTagName(`td`);
    for (const cell of tdList) {
        cell.addEventListener(`click`, function() {
            for (const cells of tdList) {
                if (cell === cells) {
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
