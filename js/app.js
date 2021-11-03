window.onload = () => {
    const body = document.body;
    var style = getComputedStyle(document.body);
    let tableCellA = document.querySelectorAll(`td`)[0];
    let tableCellB = document.querySelectorAll(`td`)[1];
    let tableCellC = document.querySelectorAll(`td`)[2];
    let tableCellD = document.querySelectorAll(`td`)[3];

    let cellAFlipped = false;
    let cellBFlipped = false;
    let cellCFlipped = false;
    let cellDFlipped = false;

    let flipCellA = () => {
        console.log(cellAFlipped);
        if (cellAFlipped == true) {
            reset();
        } else {
            reset();
            cellAFlipped = true;
            tableCellA.style.transition = `transform .5s`;
            tableCellA.style.transform = `rotate(180deg)`;
        }

        body.style.background = style.getPropertyValue(`--cellAColor`);
    };

    let flipCellB = () => {
        console.log(cellBFlipped);
        if (cellBFlipped == true) {
            reset();
        } else {
            reset();
            cellBFlipped = true;
            tableCellB.style.transition = `transform .5s`;
            tableCellB.style.transform = `rotate(180deg)`;
        }

        body.style.background = style.getPropertyValue(`--cellBColor`);
    };

    let flipCellC = () => {
        console.log(cellCFlipped);
        if (cellCFlipped == true) {
            reset();
        } else {
            reset();
            cellCFlipped = true;
            tableCellC.style.transition = `transform .5s`;
            tableCellC.style.transform = `rotate(180deg)`;
        }

        body.style.background = style.getPropertyValue(`--cellCColor`);
    };

    let flipCellD = () => {
        console.log(cellDFlipped);
        if (cellDFlipped == true) {
            reset();
        } else {
            reset();
            cellDFlipped = true;
            tableCellD.style.transition = `transform .5s`;
            tableCellD.style.transform = `rotate(180deg)`;
        }

        body.style.background = style.getPropertyValue(`--cellDColor`);
    };

    function reset() {
        tableCellA.style.transition = `transform .5s`;

        tableCellB.style.transition = `transform .5s`;

        tableCellC.style.transition = `transform .5s`;

        tableCellD.style.transition = `transform .5s`;

        tableCellA.style.transform = `rotate(0deg)`;

        tableCellB.style.transform = `rotate(0deg)`;

        tableCellC.style.transform = `rotate(0deg)`;

        tableCellD.style.transform = `rotate(0deg)`;
        cellAFlipped = false;
        cellBFlipped = false;
        cellCFlipped = false;
        cellDFlipped = false;
    }
    
    document.getElementById(`reset-bg`).onclick = () => {
        body.style.background = style.getPropertyValue(`--bgcolor`);
    };

    tableCellA.addEventListener(`click`, flipCellA);
    tableCellB.addEventListener(`click`, flipCellB);
    tableCellC.addEventListener(`click`, flipCellC);
    tableCellD.addEventListener(`click`, flipCellD);
};