window.onload = () => {
    for (let cell of document.querySelectorAll(`td`).values()) {
        cell.addEventListener(`click`, () => {
            if (cell.classList.contains(`rotated`)) {
                cell.classList.remove(`rotated`);
            } else {
                for (let someCell of document.querySelectorAll(`td`).values()) {
                    someCell.classList.remove(`rotated`);
                }
                cell.classList.add(`rotated`);
            }
        });
    }
};
