window.onload = () => {
    const TABLE_CELLS = document.querySelectorAll(`td`).values();

    for (let cell of TABLE_CELLS) {
        cell.addEventListener(`click`, updatePageOnClick, false);
    }
};

function updatePageOnClick() {
    const TABLE_CELLS = document.querySelectorAll(`td`).values();

    if (this.classList.contains(`rotated`)) {
        for (let cell of TABLE_CELLS) {
            cell.classList.remove(`rotated`);
        }
    } else {
        for (let cell of TABLE_CELLS) {
            if (this.innerHTML === cell.innerHTML) {
                cell.classList.add(`rotated`);
            } else {
                cell.classList.remove(`rotated`);
            }
        }
    }
}
