window.onload = () => {

        // locating all the table data tags
        let all = document.querySelectorAll(`td`);
        //intailizing all the columns in the row
        let firstcol = all[0];
        let secondcol = all[1];
        let thirdcol = all[2];
        let forthcol = all[3];

    // tells the cell that is clicked on to rotate
    firstcol.addEventListener(`click`, () => {
        rotation(firstcol);
    });
    secondcol.addEventListener(`click`, () => {
        rotation(secondcol);
    });
    thirdcol.addEventListener(`click`, () => {
        rotation(thirdcol);
    });
    forthcol.addEventListener(`click`, () => {
        rotation(forthcol);
    });



    function rotation(column){
        let prev = lastcolumn();
        gobacktolaststate(prev);

        if (prev == column){

        }

        else if (column.classList.contains(`returnbacktonormal`)){
            // if the current colum contains the returnbacktonormal class this will remove it and add the rotate class
            column.classList.remove(`returnbacktonormal`);
            column.classList.add(`rotation`);
        }
        else{
            column.classList.add(`rotation`);
        }
    }

    function gobacktolaststate(column){
        if (column != null){

          column.classList.remove(`rotation`);
          column.classList.add(`returnbacktonormal`);
        }
    }
    function lastcolumn(){
        let column = null;
        if (firstcol.classList.contains(`rotation`)){
            column = firstcol;
        }
        else if (secondcol.classList.contains(`rotation`)){
            column =secondcol;
        }
        else if (thirdcol.classList.contains(`rotation`)){
            column = thirdcol;
        }
        else if (forthcol.classList.contains(`rotation`)){
            column = forthcol;
        }
        else{
            column = null;
        }

         return column;
    }


};
