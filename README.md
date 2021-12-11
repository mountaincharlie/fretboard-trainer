# Fretboard Trainer

Fretboard Trainer is an interactive website which uses an adjustable multi-choice style quiz, to help those who want to improve their ability to recognise the notes on a 6-stringed guitar, in standard tuning. The rules and design are simple and intuative and since the Trainer is based on the layout of a real guitar fretboard, it has a real life application.

This site provides a quick and easy way for guitarists, with different levels of experience, to test and train their knowledge of the guitar fretboard. The Trainer can be used on mulitple screen sizes from a laptop to a phone and for as long or short a time as the user wishes. 

![Viewing my website on the Am I Responsive site](./assets/images/am-i-responsive-screenshot.jpg "Fretboard Trainer website on the Am I Responsive site")

[Image made using <a href = "http://ami.responsivedesign.is/">Am I Responsive Website</a>]

## Contents
---

* [Technologies Used](https://github.com/mountaincharlie/project-two-fretboard-trainer#technologies-used)
* [Game Instructions](https://github.com/mountaincharlie/project-two-fretboard-trainer#game-instructions)
* [Features](https://github.com/mountaincharlie/project-two-fretboard-trainer#features)
* [User Experience Design](https://github.com/mountaincharlie/project-two-fretboard-trainer#user-experience-design)
* [Accessability](https://github.com/mountaincharlie/project-two-fretboard-trainer#accessability)
* [Testing](https://github.com/mountaincharlie/project-two-fretboard-trainer#testing)
* [Deployment](https://github.com/mountaincharlie/project-two-fretboard-trainer#deployment)
* [Credits](https://github.com/mountaincharlie/project-two-fretboard-trainer#credits)
* [Site Expansion Ideas](https://github.com/mountaincharlie/project-two-fretboard-trainer#site-expansion-ideas)
 
## Technologies Used 
---

* HTML
* CSS
* JavaScript

## Game Instructions
---

* How to play:
    1. The game is started by clicking either the 'START GAME' button or 'APPLY & START' button.
    2. A note will be highlighted on the fretboard diagram and a list of muliple choice answers will be displayed in the Game Play section.
    3. Choose from the list which note you think is highlighted and click the 'CHECK ANSWER' button.
    4. A message will display if the correct note was chosen or not and the Right/Wrong counters in the Game Progress section will be updated.
    5. Once the final question has been answered, click the 'CHECK SCORE' button to find out your final result.
    6. From the Score screen you can replay with the same settings by clicking the 'APPLY & START' button or reset back to default settings and the Instructions screen by clicking the 'RESET GAME' button.

* How to adjust the game:
    * The controls in the Game Settings section can be adjusted to affect the difficult of the game.

## Features
---

### Favicon
![Fretboard Trainer site favicon](./assets/images/favicon.jpg "Fretboard Trainer site favicon screenshot")
* Using the same icon as the guitar in the site header.

### Header
![Fretboard Trainer site header](./assets/images/site-header.jpg "Fretboard Trainer site header screenshot")
* Containing the site name and guitar icon.

### The fretboard
![Fretboard Trainer site fretboard](./assets/images/fretboard.jpg "Fretboard Trainer site fretboard screenshot")
* The fret numbers are displayed along the fretboard.
* The open string notes are displayed in the 0th fret.

![Fretboard Trainer site fretboard with highlighted note](./assets/images/highlighted-note.jpg "Fretboard Trainer site fretboard with highlighted note screenshot")
* For each question, a random note will be highlighted along one of the strings as shown above.

### Game Settings section
![Fretboard Trainer game settings section](./assets/images/game-settings.jpg "Fretboard Trainer game settings section screenshot")
* Contain warning about applying the settings causing current game progress to be lost.
* None of the settings have to be used as there are set defaults so the user can start playing right away.

![Fretboard Trainer number of questions setting](./assets/images/questions-setting.jpg "Fretboard Trainer number of questions setting screenshot")
![Fretboard Trainer number of questions counter](./assets/images/question-counter-change.jpg "Fretboard Trainer number of questions counter screenshot")
* 'Number of questions' dropdown list, which affects the question counter in the Game Progress section.

![Fretboard Trainer number of answers setting](./assets/images/answers-setting.jpg "Fretboard Trainer number of answers setting screenshot")
![Fretboard Trainer number of answers displayed](./assets/images/answer-number-change.jpg "Fretboard Trainer number of answers displayed screenshot")
* 'Number of answers' dropdown list, which affects the number of multiple choice answers to choose from in the Game Play section.

![Fretboard Trainer checkbox settings](./assets/images/checkbox-settings.jpg "Fretboard Trainer checkbox settings screenshot")
![Fretboard Trainer hide open notes and fret numbers](./assets/images/checkboxes-change.jpg "Fretboard Trainer hide open notes and fret numbers screenshot")
* 'Hide open string notes' and 'Hide fret numbers' checkboxes, which hide the hide open notes and fret numbers respectively.

![Fretboard Trainer settings buttons](./assets/images/settings-buttons.jpg "Fretboard Trainer settings buttons screenshot")
* APPLY & START and RESET GAME buttons which apply settings and start the game, and reset the game to default settings and return to the instructions screen, respectively.
* On hover, the buttons highlight pale blue as shown.

### Game Play section
![Fretboard Trainer game play instructions screen](./assets/images/game-play.jpg "Fretboard Trainer game play instructions screen screenshot")
* Instructions screen, explaining how to play the game and adjust the settings.

![Fretboard Trainer game play question screen](./assets/images/question-screen.jpg "Fretboard Trainer game play question screen screenshot")
* Questions screen, asking the question, displaying the multi-choice answers and automatically checking the first radio input so that one radio input must be selected.

![Fretboard Trainer game play check wrong screen](./assets/images/wrong-answer.jpg "Fretboard Trainer game play check wrong screen screenshot")
![Fretboard Trainer game play check right screen](./assets/images/right-answer.jpg "Fretboard Trainer game play check screen right screenshot")
* Answer Check screen, informing the user if their selection was correct or not and highlighting the correct note in green, while the rest are highlighted red.

![Fretboard Trainer game play score screen green](./assets/images/score-screen-green.jpg "Fretboard Trainer game play score screen green screenshot")
![Fretboard Trainer game play score screen red](./assets/images/score-screen-red.jpg "Fretboard Trainer game play score screen red screenshot")
* Score Screen, displaying the user's score as a fraction and a percentage and highlighting it in green if they score 50% or more and red otherwise.
* Also includes instructions for how to pla the game again.

### Game Progress section
![Fretboard Trainer game progress section](./assets/images/game-progress.jpg "Fretboard Trainer game progress section screenshot")
* Question counter: 
    * is out of 10 by default
    * can be adjusted by Game Settings
    * updates everytime a new question is displayed
    * is used to trigger the Score screen
* Right/wrong counters:
    * initially set to 0 
    * update when the Answer Check Screen is displayed 


## User Experience Design
---

### Styling 
The styling and layout of the game remains consistent throughout the sections, making it more intuative for the user to interact with and understand the purpose of each section.
* Colour scheme: I chose a dark teal (#2f6168) for the main colour of the game, an pale blue (#a9dce4) accent colour throughout the different sections and kept a white background behind the sections and fretboard diagram and white text for the instructional messages, for good contrast.
* Fonts: 
    * Google Font's 'Titillium Web' for all the headings (h1, h2 and h3 elements).
    * Google Font's 'Dosis' for all of the other text on the screen (Instructions, scores, settings, questions and counters).
* Icons:
    * Icon8's 'Guitar icon in Pastel Glyph Style' as an icon with the Fretboard Trainer logo next in the game heading.
    * Favicon made from the same 'Guitar icon in Pastel Glyph Style', for continuity.
* Continuity throughout the game: 
    * The styling and layout of the game remains consistent throughout the sections.
    * Game feedback and instructions are always presented in the central Game Play section making it more intuative for the user.

### Content and Interactivity
* The fretboard diagram:
    * remains at the top of the screen throughout the game so that the user is always aware of where to find it if they are viewing it on a mobile device and have to scroll.
* Layout on smaller screens:
    * when viewed on screen with a width of 830px or less, CSS Media Queries have been used to organise the three game sections ontop of one another. 
    * in order to reduce the user needing to scroll while playing the game, the Game Play section is positioned immediately below the fretboard diagram, with the Game Progress directly below this and the Game Settings at the bottom since they are not required while the game is being played.    
* The central Game Play section:
    * contains clear instructions for the game and the other two sections (Game Settings and Game Progress) to ensure the user understands the purpose of the site and the functions of each section as soon as they land on the page. 
    * this section displays the Instructions screen, Check Answer screen and Score screen each with clear feedback for the user and buttons labelled specific to their function (e.g. the 'CHECK ANSWER' button to check if the right answer was selected or the 'NEXT QUESTION' button to generate and display the next question).
    * default values are applied so that the user doesn't have to adjust any settings and can get started with the game straight away.
* The Game Settings section:
    * remains unchanged during the game, but can be accessed by the user at any point. 
    * dropdown boxes and checkboxes have been used instead of free typing inputs for the user. This is to both make it simpler and quicker for the user to adjust settings and also prevents the user inputting values which would break the game.
* The Game Progress section:
    * the counters are updated as neccessary during the game, as part of the feedback to the user and are reset/adjusted any time the game is refreshed or new settings are applied. 
    * they are also styled to fit with the rest of the site, but differently enough from the buttons so that the user doesn't confuse them as something that can be clicked.


## Accessability
---

### Semantic elements
* Header:
    * containing site logo; the guitar icon and site name.
* Headings:
    * applied in the appropriate order (h1, h2 ...).
* Main element:
    * wrapped around the three games sections, which make up the main content of the page. 
* Section elements:
    * for the three game sections, which each have their own h2 headings at the start of their content.
* Button elements:
    * for the buttons used across the sections, which also have descriptive text content.
* Checkbox and Select elements:
    * for the settings instead of creating any custom controls which may have unclear meaning.

### Aria-labels
* To make their purpose clearer and for better accessability, these were addded to:
    * the three game sections
    * the settings buttons

### Attributes
* Added the alt attribute to the logo image incase the image failed to loads and to increase screen reader accessability.


## Testing
---

### HTML Validation in Offical W3C Validator

* No errors or warnings
* <a href = "https://validator.w3.org/nu/?doc=https%3A%2F%2Fmountaincharlie.github.io%2Fproject-two-fretboard-trainer%2F">Link to validator results</a>

### CSS Validation in Offical Jigsaw Validator

* No errors or warnings
* <a href = "https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmountaincharlie.github.io%2Fproject-two-fretboard-trainer%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en">Link to validator results</a>

### JS Check in JSHint
* No errors or warnings
* Metrics avaliable:
    * There are 16 functions in this file
    * Function with the largest signature take 2 arguments, while the median is 0
    * Largest function has 26 statements in it, while the median is 6.5
    * The most complex function has a cyclomatic complexity value of 5 while the median is 1.5

### Lighthouse Accessability score

![Screenshot of Google Dev Tool's Lighthouse Score for my website](./assets/images/lighthouse-score.jpg "Google Dev Tool's Lighthouse Score for my website") 

### Bugs and Fixes
* The datalist element that I was using in the Game Settings section allowed the user to enter their own values, which could have caused values to be entered which would break the game.
    * So I used the 'select' element for the 'Number of questions' and 'Number of Answers' settings to limit the user's options to the most reasonable ones so that the user doesn't have to type in their own value and can't choose a value which would cause an error.
* Lighthouse in Google's Dev Tools, highlighted a contrast issue with the orange that was being used as an accent colour and the background of the section.
    * So I changed this orange colour for a pale blue (#a9dce4) which had a much better contrast ratio with the dark teal and increased my Lighthouse accessability score.

### Unfixed bugs
* No unfixed bugs


## Deployment
---

### Deployment Process on GitHub
* I selected the Settings tab from within the project-two-fretboard-trainer repository 
* Then selected the Pages tab within Settings
* Then chose Main from the Branch dropdown menu
* Finally, the page then provided the live link to my website and after a few minutes it was ready to be viewed

### Live website link
* <a href = "https://mountaincharlie.github.io/project-two-fretboard-trainer/">Fretboard Trainer</a>


## Credits
---

### Page styling
* To apply Border-box box sizing to the whole document: 
    * <a href="https://css-tricks.com/box-sizing/#universal-box-sizing">'Universal Box Sizing with Inheritance'</a> 
* Google fonts:
    * <a href="https://fonts.google.com/specimen/Titillium+Web?query=Titillium+Web">Titillium Web</a> for all the headings (h1, h2 and h3 elements).
    * <a href="https://fonts.google.com/specimen/Dosis?query=dosis">Dosis</a> for all other text on the site.
    * Pairing reccommended by Lou Levit in <a href="https://www.reliablepsd.com/ultimate-google-font-pairings/">The Ultimate Collection of Google Font Pairings</a> (number 31).
    
### Icons
* <a href="https://icons8.com/icon/110433/guitar">'Guitar icon in Pastel Glyph Style' by Icons8</a> used as an icon in the header and made into a Favicon.
* <a href="https://favicon.io/favicon-converter/">Favicon Converter</a> used to create the favicon from the Icons8 guitar icon.


## Site Expansion Ideas
---

Features that could be added to expand and improve the game in the future.

### Alternate Tuning
* Having set options for the guitar's tuning, different to the standard, or allow the user to select which note each string should be tuned to.
* A JavaScript function could then be used to write the notes to the rest of the fretboard using the allNotes array, which contains all the notes in order.  

### Different Guitars
* The option to apply the game to a bass guitar or ukulele fretboard.
* The html table could be created by template literals in JavaScript and the cells populated by inserting the notes from the allNotes array.

### Show Relative Notes option
* To make the game a bit easier there could be an option to show a note relative to the main highlighted note on the fretboard.
* The user could choose the relationship (e.g. the 3rd, 5th or octave of the highlighted note) and these notes would be highlighted in a different colour or with a label relevant to their relationship.

### Highlight Triad Chords
* Instead of highlighting a note on the fretboard a triad chord could be highlighted and the multi-choice answers would be chords rather than notes.
* A JavaScript object could be used to contain the traid chords, where the 'key' is the chord name (e.g. A) and the 'value' is the three table cells containing the notes for the chord.

### Plotting Progress
* Allowing the user to create some kind of a profile and to save their results from games (based also on the difficulty settings they had applied), then using Google Charts, or similar, for the user to plot their progress over a number of attempts.

### Share on Social Media
* Giving the user the option to share their score on social media to increase interactivity with the game and encouraging users to challenge one another with the game.

### Question Timer
* Either with a time limit for each question or the full game (set by the user).
* Or to time how fast the user answers each question or the full game.
* Could be used with the Plotting Progress adn Social Media Sharing features.

### Feedback Form
* For users to give feedback on any improvements or new features they would like to see added.