window.onload = () => {
    const letter = document.querySelectorAll(`td`);

    function animation() {
        this.classList.toggle(`animate`);
    }

    function restore() {
        this.classList.toggle(`origin`);
    }

    letter.forEach((letter) => letter.addEventListener(`click`, animation));

    // function state() {
    //     letter.forEach((letter) => letter.addEventListener(`click`, animation));
    //     letter.forEach((letter) => letter.addEventListener(`click`, restore));


    // }

};

// // setTimeout(function() {
// //     letters.classList.add(`origin`);
// // }