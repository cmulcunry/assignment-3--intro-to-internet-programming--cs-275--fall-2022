let letters = document.querySelectorAll(`td`);

letters.forEach(letter => {
    letter.addEventListener(`click`, () => {
        letter.style.transform = `rotate(180deg)`;
        letter.style.color = `blue`;
    });
});
