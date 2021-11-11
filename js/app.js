window.onload = () => {
    const table = document.getElementsByTagName(`td`);
    let flipped = -1;

    let flip = (cellNum) => {
        let cell = table[cellNum];
        if (flipped == cellNum) {
            cell.classList.remove(`flipped`);
            flipped = -1;
            return;
        }
        if (flipped === -1) {
            cell.classList.add(`flipped`);
            flipped = cellNum;
        }
        else {
            let flippedCell = table[flipped];
            flippedCell.classList.remove(`flipped`);
            cell.classList.add(`flipped`);
            flipped = cellNum;}
    };

    for(let i=0;i<table.length;i++) {
        table[i].addEventListener(`click`, function() {flip(i);});
    }
};
