let letters = document.querySelectorAll(`td`);
let flippedLetter = 0;
let tempLetter = 0;
let rotationTimer;
let angle = 0;

letters.forEach(letter => {
    letter.addEventListener(`click`, () => {
        angle = 0;
        clearInterval(rotationTimer);
        rotationTimer = setInterval(rotate, 3);
        if(flippedLetter !== letter) {
            //letter.style.transform = `rotate(180deg)`;
            tempLetter = flippedLetter;
            letter.style.color = `blue`;
            flippedLetter = letter;
        }
        else {
            //letter.style.transform = `rotate(0deg)`;
            //letter.style.color = `black`;
            tempLetter = letter;
            flippedLetter = 0;
        }
        tempLetter.style.color = `black`;
    });
});

function rotate() {
    if(180 === angle){
        angle = 0;
        clearInterval(rotationTimer);
    }
    else {
        angle++;
        if(flippedLetter)
            flippedLetter.style.transform = `rotate(${angle}deg)`;
        if(tempLetter)
            tempLetter.style.transform = `rotate(${180 - angle}deg)`;
    }
}
