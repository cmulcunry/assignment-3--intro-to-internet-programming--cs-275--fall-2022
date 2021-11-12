window.onload = () => {
    let count = -1;
    const table = document.getElementsByTagName(`td`);


    function onClick(){
        count += 1;

        if(count%2 == 0){
            table.classList.add(`animate`);
        } else {
            table.classList.add(`origin`);
        }
    }
    window.onclick = element => {
        let letter = element.target;
        if(letter.tagName === `td`) {
            onClick(letter);
        }
    };
};