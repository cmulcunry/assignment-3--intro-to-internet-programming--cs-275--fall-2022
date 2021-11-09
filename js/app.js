window.onload = () => {
    const letter = document.querySelectorAll(`td`);

    function animation() {
        this.classList.toggle(`animate`);
    }
    letter.forEach((letter) => letter.addEventListener(`click`, animation));

};

// // setTimeout(function() {
// //     letters.classList.add(`origin`);
// // }