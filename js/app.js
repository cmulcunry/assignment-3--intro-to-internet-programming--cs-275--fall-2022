window.onload = () => {
    let tableCellA = document.querySelectorAll(`td`)[0];
    let tableCellB = document.querySelectorAll(`td`)[1];
    let tableCellC = document.querySelectorAll(`td`)[2];
    let tableCellD = document.querySelectorAll(`td`)[3];

    let cellAFlipped = cellBFlipped = cellCFlipped = cellDFlipped = false;
    
    let flipCellA = () => {
        reset();

        tableCellA.style.transition = `transform .5s`;
        tableCellA.style.transform = `rotate(180deg)`;
        cellAFlipped = true;
    };

    let flipCellB = () => {
        reset();

        tableCellB.style.transition = `transform .5s`;
        tableCellB.style.transform = `rotate(180deg)`;
    };

    let flipCellC = () => {
        reset();
        tableCellC.style.transition = `transform .5s`;
        tableCellC.style.transform = `rotate(180deg)`;
    };

    let flipCellD = () => {

        reset();

        tableCellD.style.transition = `transform .5s`;
        tableCellD.style.transform = `rotate(180deg)`;
    };

    function reset() {
        tableCellA.style.transition = tableCellB.style.transition = tableCellC.style.transition = tableCellD.style.transition = `transform .5s`;
        tableCellA.style.transform = tableCellB.style.transform = tableCellC.style.transform = tableCellD.style.transform = `rotate(0deg)`;

        cellAFlipped = cellBFlipped = cellCFlipped = cellDFlipped = false;
    }

    tableCellA.addEventListener(`click`, flipCellA);
    tableCellB.addEventListener(`click`, flipCellB);
    tableCellC.addEventListener(`click`, flipCellC);
    tableCellD.addEventListener(`click`, flipCellD);
};