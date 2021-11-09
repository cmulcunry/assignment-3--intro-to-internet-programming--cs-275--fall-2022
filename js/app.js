var tableCellA = document.querySelectorAll(`td`)[0];
var tableCellB = document.querySelectorAll(`td`)[1];
var tableCellC = document.querySelectorAll(`td`)[2];
var tableCellD = document.querySelectorAll(`td`)[3];
var cells = [tableCellA, tableCellB, tableCellC, tableCellD];
var body = document.body;
var style = getComputedStyle(document.body);

window.onload = () => {
    let resetButton = document.getElementById("reset-bg");
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener(`click`, flipCell, false);
    }
    resetButton.addEventListener(`click`, reset, false);
};

function flipCell() {
    for (let i = 0; i < cells.length; i++) { 
        if (this.innerHTML == cells[i].innerHTML) {
            cells[i].style.transition = `transform .5s`;
            cells[i].style.transform = `rotate(180deg)`;

            if (i == 0) {
                body.style.background = style.getPropertyValue(`--cellAColor`);
            } else if (i == 1) {
                body.style.background = style.getPropertyValue(`--cellBColor`);
            } else if (i == 2) {
                body.style.background = style.getPropertyValue(`--cellCColor`);
            } else if (i == 3) {
                body.style.background = style.getPropertyValue(`--cellDColor`);
            }
        } else {
            cells[i].style.transition = `transform .5s`;
            cells[i].style.transform = `rotate(0deg)`;
        }
    }
}

function reset() {
    for (let i = 0; i < cells.length; i++) { 
        cells[i].style.transition = `transform .5s`;
        cells[i].style.transform = `rotate(0deg)`;
    }

    body.style.background = style.getPropertyValue(`--bgcolor`);
}

document.getElementById(`reset-bg`).onclick = () => {
    var style = getComputedStyle(document.body);
    body.style.background = style.getPropertyValue(`--bgcolor`);
    reset();
};