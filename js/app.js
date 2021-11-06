let letters = document.querySelectorAll(`td`);
let flippedLetter;

letters.forEach(letter => {
    letter.addEventListener(`click`, () => {
        if(flippedLetter !== letter) {
            letter.style.transform = `rotate(180deg)`;
            letter.style.color = `blue`;
            flippedLetter = letter;
        }
        else {
            letter.style.transform = `rotate(0deg)`;
            letter.style.color = `black`;
            flippedLetter = null;
        }
    });
});
