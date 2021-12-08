const tables = document.getElementsByTagName(`td`);
function animate() {
    for (const index of tables) {
        index.addEventListener(`click`, () => {
            for (const letter of tables) {
                if (index === letter) {
                    if (letter.classList.contains(`animate`))
                        letter.classList.add(`origin`);
                    else
                        letter.classList.add(`animate`);
                } else if (letter.classList.contains(`animate`))
                    letter.classList.add(`origin`);
            }
        });
    }
}

window.onload = animate();