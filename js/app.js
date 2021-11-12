window.onload = () => {
    const letters = document.getElementsByTagName(`td`);
    const flipAll = () => {
        for (let i = 0; i < letters.length; i++) {
            letters[i].classList.remove(`rotate`);
        }
    };
    for (let i = 0; i < letters.length; i++) {
        letters[i].onclick = function () {
            if(letters[i].classList.contains(`rotate`)){
                letters[i].classList.remove(`rotate`);
            }
            else {
                flipAll();
                letters[i].classList.add(`rotate`);
            }
        };
    }
};

// rotate if not rotated
// if rotated, revert back 180deg

// if click on another letter, revert previous letter
// letter that is clicked on should rotate 180
