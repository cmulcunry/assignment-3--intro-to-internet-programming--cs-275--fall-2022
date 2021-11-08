window.onload = () => {
    document.getElementsByTagName(`body`)[0].setAttribute(`id`, `gradient`);
    const TDLIST = document.getElementsByTagName(`td`);
    for (const cell of TDLIST) {
        cell.addEventListener(`click`, () => {
            for (const cells of TDLIST) {
                if (cell === cells) {
                    if (cells.classList.contains(`flipped`))
                        cells.classList.remove(`flipped`);
                    else
                        cells.classList.add(`flipped`);
                } else if (cells.classList.contains(`flipped`))
                    cells.classList.remove(`flipped`);
            }
        });
    }
};