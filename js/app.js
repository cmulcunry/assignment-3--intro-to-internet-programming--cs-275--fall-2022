window.onload = () => {
    const BODY = document.querySelector(`body`);
    BODY.setAttribute(`id`, `gradient`);
    const TDLIST = document.getElementsByTagName(`td`);
    for (const clickedCell of TDLIST) {
        clickedCell.addEventListener(`click`, () => {
            for (const cells of TDLIST) {
                if (clickedCell === cells) {
                    if (cells.classList.contains(`flipped`)) {
                        cells.classList.remove(`flipped`);
                    } else {
                        cells.classList.add(`flipped`);
                    }
                } else {
                    if (cells.classList.contains(`flipped`)) {
                        cells.classList.remove(`flipped`);
                    }
                }
            }
        });
    }
};
