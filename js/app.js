window.onload = () => {
    const TableCell = document.querySelectorAll(`td`);
    TableCell[0].addEventListener(`click`,() => {
        TableCell[0].classList.add(`flipped`);
    })
