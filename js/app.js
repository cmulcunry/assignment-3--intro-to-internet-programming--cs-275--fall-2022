let letters = document.querySelectorAll(`td`);
let flippedLetter;
let rotationTimer;
let angle = 0;

letters.forEach(letter => {
    letter.addEventListener(`click`, () => {
        if(flippedLetter !== letter) {
            //letter.style.transform = `rotate(180deg)`;
            letter.style.color = `blue`;
            flippedLetter = letter;
            rotationTimer = setInterval(rotate, 3);
        }
        else {
            letter.style.transform = `rotate(0deg)`;
            letter.style.color = `black`;
            flippedLetter = null;
        }
    });
});

function rotate() {
    angle++;
    flippedLetter.style.transform = `rotate(${angle}deg)`;
    if(180 === angle)
        clearInterval(rotationTimer);
}
