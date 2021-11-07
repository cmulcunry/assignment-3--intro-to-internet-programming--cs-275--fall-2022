window.onload = () => {
const table = document.getElementsByTagName('td');

let flip = (letter) => {
    letter.classList.remove(`flipped`);
    letter.classList.add('default');
    }

for (const letter of table) {
    letter.addEventListener(`click`, flip);
    }
}
