# Fall 2021 Intro to Internet Programming — Assignment 3

* **Do not start this project until you have read these instructions carefully.**  
* **Read these instructions repeatedly until you understand, then begin your project. If something is not clear, ask.**  

## ❖・Introduction・❖
Create a *single* web page consisting of HTML, CSS, and JavaScript that provides a user the ability to rotate the items in a table cell by clicking on it. Each cell’s state is mutually exclusive: Clicking any cell rotates any previously-clicked cell, then rotates the contents of the current cell. A short, 11-second video of what’s required for this project is available from [http://vanegas.cs.hartford.edu/uploads/videos/cs-275/mutual-exclusion-toggle.mp4](http://vanegas.cs.hartford.edu/uploads/videos/cs-275/mutual-exclusion-toggle.mp4).

The HTML for this project is already in place. **Do not edit it**.

The `style.css` is already in the `css` folder, and `app.js` is already in the `js` folder. **Edit only these two files**.

You will need to implement from scratch development and production Gulp tracks for this project. Running `gulp` should invoke the development track; running `gulp build` should invoke the production track.

_You may **only** work within the confines of the included scaffold._

## ❖・Rules・❖
### General
* Do not alter the scaffold of this project.
* Do not add images.
* Ensure your syntax and files comply with the included `.editorconfig` rules.

### HTML
* Ensure your HTML code is W3C-compliant.

### CSS
* Ensure the table shares borders.
* Set a redish border around the table/cells. (You can decide what color “redish” is.)
* Place the table in the middle of the page.
* Rotations should take half a second and turn 180 degrees.
* Ensure your CSS validates against the included `.stylelintrc.json` file.

### JavaScript
* Look at [compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition), which will help you as you do this project.
* Ensure your JavaScript validates against the included `.eslintrc.json` file.

### Git
* You’re free to alter any of the `.gitignore` files for your needs.

### Libraries
* No CSS or JavaScript libraries may be used.

## ❖・Due・❖
Tuesday, 2 November 2021, at 2:00 PM.

## ❖・Grading・❖
| Item                                                          | Points |
| ------------------------------------------------------------- | :----: |
| *Logical Gulp scaffolding*                                    |  `20`  |
| *Gulp development track*                                      |  `20`  |
| *Gulp production track*                                       |  `20`  |
| *Fully-implemented JavaScript code according to directions*   |  `30`  |
| *Overall code quality across Gulp, JavaScript, HTML, and CSS* |  `10`  |

## ❖・Submission・❖
You will need to issue a pull request back into the original repo, the one from which your fork was created for this project. See the **Issuing Pull Requests** section of [this site](http://code-warrior.github.io/tutorials/git/github/index.html) for help on how to submit your assignment.

**Note**: This assignment may *only* be submitted via GitHub. **No other form of submission will be accepted**.
