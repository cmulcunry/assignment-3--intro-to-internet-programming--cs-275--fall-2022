window.onload = () => {
    for (let thisCell of document.querySelectorAll(`td`).values()) {
        thisCell.addEventListener(`click`, () => {
            if (thisCell.classList.contains(`rotated`)) {
                thisCell.classList.remove(`rotated`);
            } else {
                for (let someCell of document.querySelectorAll(`td`).values()) {
                    someCell.classList.remove(`rotated`);
                }
                thisCell.classList.add(`rotated`);
            }
        });
    }
};
