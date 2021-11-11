let letter =null;

function rotate(element){
    while(letter==null){
        element.classList.remove( `spin`);

        letter=element;
    }
    if( element===letter){
        if(letter.classList.contains( `spin`)){
            letter.classList.remove(`spin`);

        }
        else{

            letter.classList.add(`spin`);
        }
        letter=element;
    }
    else{
        if(!element.classList.contains(`spin`)){

            element.classList.add(`spin`);
        }
        else if (element.classList.contains(`spin`)){
            element.classList.remove(`spin`);

        }
        if (letter.classList.contains(`spin`)){
            letter.classList.remove(`spin`);

        }
        letter=element;
    }
}

window.onclick=element =>{
    let charClick = element.target;
    if (charClick.tagName===`td`){
        rotate(charClick);
    }
};
