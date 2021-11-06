let letters = document.querySelectorAll(`td`);

letters.forEach(letter => {
    letter.addEventListener(`click`, () => {
        alert(`hello`);
    });
});
