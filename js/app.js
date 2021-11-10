window.onload = () => {
    const letter = document.querySelectorAll(`td`);

    function animation() {
        if (letter[0].classList.contains(`animation`)) {
            letter[0].classList.add(`animate`);
            letter[1].classList.add(`origin`);
            letter[2].classList.add(`origin`);
            letter[3].classList.add(`origin`);
        }
        if (letter[1].classList.contains(`animation`)) {
            this.classList.toggle(`animate`);
            letter[0].classList.add(`origin`);
            letter[2].classList.add(`origin`);
            letter[3].classList.add(`origin`);
        }

        if (letter[2].classList.contains(`animation`)) {
            this.classList.toggle(`animate`);
            letter[0].classList.add(`origin`);
            letter[1].classList.add(`origin`);
            letter[3].classList.add(`origin`);
        }

        if (letter[3].classList.contains(`animation`)) {
            this.classList.toggle(`animate`);
            letter[0].classList.add(`origin`);
            letter[1].classList.add(`origin`);
            letter[2].classList.add(`origin`);
        }
        // this.classList.toggle(`animate`);
    }

    // function restore() {
    //     this.classList.toggle(`origin`);
    // }

    // if (letter.classList.contains(`animation`)) 
    // {
    //     letter.restore();


    // }

    letter.forEach((letter) => letter.addEventListener(`click`, animation));

    // function state() {
    //     letter.forEach((letter) => letter.addEventListener(`click`, animation));
    //     letter.forEach((letter) => letter.addEventListener(`click`, restore));


    // }

};

// // setTimeout(function() {
// //     letters.classList.add(`origin`);
// // }