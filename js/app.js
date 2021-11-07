let letters = document.querySelectorAll(`td`);
let flippedLetter;
let tempLetter;
let rotationTimer;
let angle = 0;

letters.forEach(letter => {
    letter.addEventListener(`click`, () => {
        angle = 0;
        clearInterval(rotationTimer);
        tempLetter = flippedLetter;
        rotationTimer = setInterval(rotate, 3);
        if(flippedLetter !== letter) {
            //letter.style.transform = `rotate(180deg)`;
            letter.style.color = `blue`;
            flippedLetter = letter;
        }
        else {
            //letter.style.transform = `rotate(0deg)`;
            //letter.style.color = `black`;
            flippedLetter = null;
        }
    });
});

function rotate() {
    angle++;
    flippedLetter.style.transform = `rotate(${angle}deg)`;
    tempLetter.style.transform = `rotate(${180 - angle}deg)`;
    tempLetter.style.color = `black`;
    if(180 === angle)
        clearInterval(rotationTimer);
}
