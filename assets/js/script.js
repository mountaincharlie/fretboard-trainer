// bits of code that do things:
 
// (1) To add a zero infront of fret numbers which have 1 digit and convert the number to a string
// let fretNumberString = String(fretNumber);
// if (fretNumberString.length < 2){
    // fretNumberString = `0${fretNumberString}`;
// } 
// console.log(fretNumberString);

// (2) creating the string ID and getting the cell value (note) OR CAN WRITE NOTE TO IT
// let openString = 'eHigh'; // one of the 6 string values (eHigh, b, g, d, a, e) 
// let fret = '01';          // fret number as a string or number
// let stringId = openString + 'Str'; //creating the string ID (only need if you dont incl 'Str' in openString)
// let fretNumber = Number(fret)  //converting the fret number into a number (if not already)
// let cell = document.getElementById('eHighStr').children[fretNumber];   //retrieving the cell innerHTML (the note)
// console.log('the note is:', cell.innerHTML);
// cell.innerHTML = 'f';   // OR writing to the cell
// console.log('the note is:', cell.innerHTML);



// CODE FOR USING ARRAYS (FOR OPEN STRING NOTES AND ALL POSSIBLE NOTES IN ORDER) TO WRITE TO THE FRETBOARD

// array of the string names
// var stringsNamesArray = ['eStr', 'aStr', 'dStr', 'gStr', 'bStr', 'eHighStr']; 

// array of the notes in a full scale starting at 'a'
// var notesArray = ['a', 'a#/bb', 'b', 'c', 'c#/db', 'd', 'd#/eb', 'e', 'f', 'f#/gb', 'g', 'g#/ab'];

// finding the note for 6th string 4th fret
// let stringNumber = 3; // only in range 1-6
// let fretNumber = 0; // only in range 1-12

// let chosenString = stringsArray[(stringNumber-1)];  // getting the string from the stringsArray
// let openStringNote = chosenString.substring(0, 1); // just the note of the open string (e.g. 'e' instead of 'eHigh')
// console.log('open string:', chosenString);
// let openStringNoteIndex = notesArray.indexOf(openStringNote); // getting the index of the open note in the notesArray
// let chosenNoteIndex = openStringNoteIndex + fretNumber;
// if (chosenNoteIndex > notesArray.length){
    // chosenNoteIndex = chosenNoteIndex - notesArray.length;
// }
// let chosenNote = notesArray[chosenNoteIndex];

// console.log('chosen note:', chosenNote);

// function for writing the found note to the fretboard 
// function noteToFretboard(chosenString, fretNumber, chosenNote){
    // let cell = document.getElementById(chosenString).children[fretNumber];
    // cell.innerHTML = chosenNote;
    // cell.style.color = 'red';  //just to highlist the note for now
    // console.log('string:', chosenString, 'fret number: ', fretNumber, 'cell value', cell.innerHTML);
// }

// noteToFretboard(chosenString, fretNumber, chosenNote); // writing the note to the cell




// start of the offical JS

// Event listeners on DOM load
document.addEventListener('DOMContentLoaded', function(){

    // getting the reset button and putting an event listener on it
    let resetButton = document.getElementById('reset-btn');
    resetButton.addEventListener('click', function(){
        window.location.reload()
    });

    // getting the apply button and putting an event listener on it 
    let applyButton = document.getElementById('apply-btn');
    applyButton.addEventListener('click', applySettings);

    // start button event listener
    let startButton = document.getElementById('start-btn');
    startButton.addEventListener('click', function(){
        // updating the question counter for the first question
        document.getElementById('question-number').innerHTML = 1;

        // HIDE ALL NOTES FROM FRETBOARD ()? DEFAULT IS THEM SHOWN 

        // calling the function that runs the game if no settings are applied
        fretboardTrainer()
    });


    // EVENT LISTENER FOR A CHECKBOX WHICH HIDES/SHOWS THE NOTES ON THE FRETBOARD

});

/**
 * @name fretboardTrainer
 * @description Controls the generation and display of the multi-choice answers.
 * Generates array of answers by calling answerGenerator().
 * Writes the answers to the DOM by calling displayAnswers().
 * Contains the event listener for the check button which is created 
 * and calls checkAnswer() when clicked.
 */
function fretboardTrainer(){
    // removing any previously highlighted cell styling
    for (element of document.getElementsByTagName('td')){
        element.classList.remove('highlight-note');
    }

    // calling the answerGenerator function once and storing the returned array 
    let multiChoiceAnswers = answerGenerator();
    // calling the displayAnswers() function to write the answers to the DOM
    displayAnswers(multiChoiceAnswers);

    // 'Check Answer' button event listener to call checkAnswer() on 'click'
    let checkButton = document.getElementById('check-btn');
    checkButton.addEventListener('click', function(){
        checkAnswer(correctNote);
    })
}
 
/**
 * @name checkAnswer
 * @description Compares the user's choice to the correct answer, displays the appropriate feedback 
 * and if the last question has been answered it displays the score, else it displays the next question.
 * Called by the 'Check Answer' button's click event. 
 * Gets the user's choice from the radio button which is checked.
 * Compares the userChoice to correctNote to define the 'message' and 'outcome' variables.
 * Displays an alert message informing the user if they were right or not and the correct note.
 * Updates the game progress counters by calling countersUpdate(). 
 * Stores the first return value from countersUpdate() whic is true/false.
 * Checks if lastQuestionReached == true and if so, it creates and writes the score message to the DOM
 * else it calls fretboardTrainer() again.
 * @param correctNote The note which has been highlighted on the fretboard
 */
function checkAnswer(correctNote){
    // getting the users choice
    let userChoice = document.querySelector('input[name = "choice"]:checked').value;
    let message;
    let outcome;
    // assigning the appropriate messages depending on if the userChoice matches correctNote
    if (userChoice == correctNote){
        message = `Congratulations`;
        outcome = `correct`;
    } else {
        message = `Sorry`;
        outcome = `incorrect`;
    }
    // displays alert for the user to tell them if they were correct or not and the correct answer
    alert(`${message} thats ${outcome}. \nYou chose: ${userChoice}. \nThe correct note is: ${correctNote}`);
    // calling countersUpdate() to update the game progress counters 
    let countersUpdateReturn = countersUpdate(outcome);
    // the first return value 'lastQuestionReached' will be true or false
    let lastQuestionReached = countersUpdateReturn[0];

    // checks if the last question has been answered and if so; writes the results message, else it calls fretboard Trainer() again to display the next question
    if (lastQuestionReached){
        // defining the area in the DOM for the score to be written to
        let answersArea = document.getElementById('multi-choice-area');
        // defining the number of right answers achieved (which is returned as a number)
        let right = countersUpdateReturn[1];
        // defining the total number of questions from the game
        let totalQuestions = countersUpdateReturn[2];
        // defining the template literal for the user's score as a percentage
        let percentageScore = `<p>Percentage score: ${Math.round((right/totalQuestions)*100)}%</p>`;
        // writing the score message template literal to the DOM
        answersArea.innerHTML = `
        <p>You completed the game!</p>
        <p>You scored: ${right}/${totalQuestions}</p>
        ${percentageScore}
        <p>Click 'Apply' to replay with the same settings or 'Reset Game' to return to the start page</p>
        `;
    } else {
        fretboardTrainer();
    }
}

/**
 * @name countersUpdate
 * @description Checks the value of 'outcome' inorder to update the right or wrong counter, checks if the last 
 * question has been answered and if so sets lastQuestionReached as true, else updates the question counter by one.
 * Called by checkAnswer().
 * Gets the elements containing the right and wrong counters, from the DOM.
 * Gets the elements containing the current questions number and the total number of questions, from the DOM.
 * Sets the lastQuestionReached as undefined (falsy).
 * Updates the innerHTML of the right or wrong counter, in the DOM, depending on 'outcome'.
 * If the last question has been answered, lastQuestionReached = true, else the question number increases by one.
 * @param outcome String containing `correct` or `incorrect` 
 * @returns [lastQuestionReached, Number(right.innerHTML), numberOfQuestions.innerHTML] 
 */
function countersUpdate(outcome){
    // getting the elements containing the right and wrong counters, from the DOM
    let right = document.getElementById('right-ans');
    let wrong = document.getElementById('wrong-ans');

    // getting the elements containing the current questions number and the total number of questions, from the DOM
    let questionNumber = document.getElementById('question-number');
    let numberOfQuestions = document.getElementById('number-of-questions');
    // the lastQuestionReached variable is falsy until the last question is completed and it is give a value of 'true'
    let lastQuestionReached;

    // updating the innerHTML of the right or wrong counter in the DOM
    if (outcome === `correct`){
        right.innerHTML ++;
    } else {
        wrong.innerHTML ++;
    }

    // checking if the user has answered the last question and if so, letting lastQuestionReached = true
    if (questionNumber.innerHTML === numberOfQuestions.innerHTML){
        lastQuestionReached = true;
    } else {
        // updating the question counter
        questionNumber.innerHTML ++;
    } 

    //returning lastQuestionReached (true/false), how many right answers, total number of questions
    return [lastQuestionReached, Number(right.innerHTML), numberOfQuestions.innerHTML];  
}

/**
 * @name displayAnswers
 * @description Creates a template literal with the question, randomised answers with radio buttons and the 'check'
 * button which is then written to the 'multi-choice-area' in the DOM.
 * Called by fretboardTrainer().
 * Creates the first part of the template literal with the question and first answer option with checked radio button.
 * Create a variable to store each note from the multiChoiceAnswers array, in the loop.
 * Looping through the length of multiChoiceAnswers to create the template litetral for each answer and add it to the 
 * variable continaing the template literal.
 * Adds the 'check' button in a template literal to the end of the variable.
 * Writes the template literal to the 'multi-choice-area' in the DOM.
 * @param multiChoiceAnswers array of randomly generated answers containing the correct answer.
 */
function displayAnswers(multiChoiceAnswers){
    // defining the first part of the template literal with the question and first answer option with checked radio button  
    let allMultiChoices = `
    <h4>Which note is highlighted on the fretboard?</h4>
    <div>
        <label for = "choice${1}">${multiChoiceAnswers[0]}</label>
        <input type = "radio" name = "choice" id = "choice${1}" value = "${multiChoiceAnswers[0]}" checked>
    </div>
    `;
    // the note variable, for holding each note to be written into the template literal
    let note;

    // creating each answer option template literal for the length of multiChoiceAnswers (minus the 0th index)
    for (let i = 1; i < multiChoiceAnswers.length; i++){
        // taking the note from the multiChoiceAnswers array (which is in a random order)
        note = multiChoiceAnswers[i];

        // creating a template literal for the answer and adding it to the variable containing them all
        allMultiChoices += `
        <div>
            <label for = "choice${i}">${note}</label>
            <input type = "radio" name = "choice" id = "choice${i}" value = "${note}">
        </div>
        `;
    }

    // adding the check button to the end of the template literal
    allMultiChoices += `<button id = "check-btn" class = "btn">Check Answer</button>`;

    // writing everything to 'multi-choice-area' in the DOM
    document.getElementById('multi-choice-area').innerHTML = allMultiChoices;
}

/**
 * @name answerGenerator
 * @description 
 * Called by fretboardTrainer().
 * Defines an array contining all the notes, in order, from 'A'.
 * Creates an empty array, to contain all the answers in a random order.
 * Calls highlightRandomCell() to choose and highlight a random cell and return its innerHTML into correctNote.
 * Removes correctNote from allNotes[] to be added in at a random place later.
 * Gets the total number of answers required from the 'total-multi-choices' select element.
 * Checks if totalMultiChoiceAnswers is false (NaN) when converted by the Number method, in which case it 
 * extracts the first character '4' from '4 default'.
 * Converts totalMultiChoiceAnswers into a number.
 * The for loop: takes random notes from the allNotes array and adds them to the list of answers 
 * (1 less since correctNote needs to be inserted later). Within the loop; a variable is definied to contain 
 * a 'note' at a random index (number between 0 and totalNumberOfQuestions) in allNotes[], then this note is 
 * added to multiChoiceAnswers[] and removed from allNotes[] to avoid duplicated answers.
 * The final length of multiChoiceAnswers[] is used to generate a random index to insert the correctNote, 
 * without removing anything, using the splice method.
 * @returns multiChoiceAnswers array of randomly generated answers containing the correct answer.
 */
function answerGenerator(){
    // defining an array contining all the notes, in order, from 'A'
    allNotes = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
    // creating an empty array, to contain all the answers in a random order
    multiChoiceAnswers = [];
    // calling highlightRandomCell() to choose and highlight a random cell and return its innerHTML into correctNote
    correctNote = highlightRandomCell().innerHTML;

    // removing correctNote from allNotes[] to be added in at a random place later
    allNotes.splice(allNotes.indexOf(correctNote), 1);

    // getting the total number of answers required from the 'total-multi-choices' select element
    let totalMultiChoiceAnswers = document.getElementById('total-multi-choices').value;

    // if totalMultiChoiceAnswers is false (NaN) when converted by the Number method then the first character '4' from '4 default' is extracted
    if (Number(totalMultiChoiceAnswers) !== true){
        totalMultiChoiceAnswers = totalMultiChoiceAnswers.substring(0,1);
    }
    // converting totalMultiChoiceAnswers into a number
    totalMultiChoiceAnswers = Number(totalMultiChoiceAnswers);

    // taking random notes from the allNotes array and adding them to the list of answers (1 less since correctNote needs to be inserted later)
    for (let i = 0; i < (totalMultiChoiceAnswers - 1); i ++){
        // defining a 'note' at a random index (number between 0 and totalNumberOfQuestions) in allNotes[]
        let note = allNotes[randomNumber(allNotes.length, 0)]; 

        // adding note to multiChoiceAnswers[] (the answers array) and removing it from allNotes[] to avoid duplicated answers
        multiChoiceAnswers.push(note);
        allNotes.splice(allNotes.indexOf(note), 1);
    }

    // using the final length of multiChoiceAnswers[] to generate a random index to insert the correctNote, without removing anything, using the splice method
    multiChoiceAnswers.splice(randomNumber((multiChoiceAnswers.length + 1), 0), 0, correctNote);

    // returns multiChoiceAnswers[] back into fretboardTrainer()
    return multiChoiceAnswers;
}

/**
 * @name highlightRandomCell
 * @description Selects a random table cell by selecting a random guitar string and a fret number along that string and 
 * adds the css 'highlight-note' class inorder to highlight the cell.
 * Called by answerGenerator().
 * Defines an array contining HTML ids of the tr elements which represent the open string notes on the guitar.
 * Creates an empty array, to store the data for finding the random table cell.
 * Calls randomNumber() to pick a random string from stringsNamesArray[].
 * Calls randomNumber() to pick a random fret number.
 * Defines a variable to hold the HTMLCollection which represents the random guitar string chosen.
 * Defines a variable with the container of the random note, found by using the fret number as an index for the random guitar string.
 * Adds the 'highlight-note' class to the note's container element, to highlight the random table cell with css.
 * @returns randomNoteContainer Is used to assign its note to the correctNote variable in answerGenerator().
 */
function highlightRandomCell(){
    // defining an array contining HTML ids of the tr elements which represent the open string notes on the guitar
    let stringsNamesArray = ['eStr', 'aStr', 'dStr', 'gStr', 'bStr', 'eHighStr'];
    // creating an empty array, to store the data for finding the random table cell
    let randomCell = [];

    // calling randomNumber() to pick a random string from stringsNamesArray[] 
    randomCell.push(stringsNamesArray[randomNumber(6, 0)]);
    // calling randomNumber() to pick a random fret number (from 1 to 12 incl, therefore needs an offset value of 1)
    randomCell.push(randomNumber(12, 1));

    // defining a variable to hold the HTMLCollection which represents the random guitar string chosen
    let randomString = document.getElementById(randomCell[0]).children;
    // defining a variable with the container of the random note, found by using the fret number as an index for the random guitar string
    let randomNoteContainer = randomString[randomCell[1]];
    // adding the 'highlight-note' class to the note's container element, to highlight the random table cell with css
    randomNoteContainer.classList.add('highlight-note');  

    // returns randomNoteContainer, inorder to extract the correct note from it in answerGenerator()
    return randomNoteContainer
}




// [IMPORT] function for choosing a random number between 0 and a maximum value (takes highest possible value and an offset of 0 or 1)
/**
 * @name randomNumber
 * @description multiplies a random number between 0 and 1 by the highest possible value and then takes the highest integer 
 * from this value + an offset value.
 * Called by answerGenerator() and highlightRandomCell().
 * @returns a random number (considering the highest value to find a random number between and the offset value)
 */
function randomNumber(highest, offset){
    // multiplies a random number between 0 and 1 by the highest possible value and then takes the highest integer from this value + an offset value
    return Math.floor(Math.random() * highest) + offset; 
}





// apply settings function? finds all settings and sets the appropriate things (called by 'applyButton' event listener)
function applySettings(){

    // NEED: a rest settings to default option (event listener which resets each setting?)
    // WHAT: to return??

    // resetting the counter values for question number, right answers and wrong answers
    document.getElementById('question-number').innerHTML = 1;
    document.getElementById('right-ans').innerHTML = 0;
    document.getElementById('wrong-ans').innerHTML = 0;

    // (1) total number of questions setting
    let totalQuestionsSelection = document.getElementById('total-questions').value;  // getting the value from the select element
    let numberOfQuestions = document.getElementById('number-of-questions');  // getting the container for the number of questions 
    let defaultNumberOfQuestions = 10;  // setting the default value to use later

    // calling the selectElementOptions function to reassign the value of totalQuestionsSelection
    totalQuestionsSelection = selectElementOptions(totalQuestionsSelection, numberOfQuestions, defaultNumberOfQuestions); 
    // writing the new number of questions to the document using the value from 
    numberOfQuestions.innerHTML = totalQuestionsSelection;


    // (2) total number of answers setting
    let totalMultiChoiceSelection = document.getElementById('total-multi-choices').value;  // getting the value from the select element
    let numberOfMultiChoices = document.getElementById('multi-choice-area');  // getting the container for the multi-choice answers (NEEDED HERE NOW?)
    let defaultnumberOfMultiChoices = 4;  // setting the default value to use later

    // calling the selectElementOptions function to reassign the value of totalMultiChoiceSelection
    totalMultiChoiceSelection = selectElementOptions(totalMultiChoiceSelection, numberOfMultiChoices, defaultnumberOfMultiChoices); 

    // writing the new number of questions to the document using the value from totalMultiChoiceSelection
    numberOfMultiChoices.innerHTML = totalMultiChoiceSelection;

   
    // (3) hide open string notes setting (use similar for the hide fret numbers)
    let hideOpenNotes = document.getElementById('hide-open-notes').checked;  // finding if the 'hide-open-notes' is checked (true) or not (false)
    let openNoteCells = document.getElementsByClassName('zeroth-fret');      // getting an object of all of the elements containing zeroth fret notes
    
    // calling the function to hide/unhide with 'openNoteCells' and the opacity value
    hideOrUnhide(hideOpenNotes, openNoteCells)

    // (4) hide fret numbers setting
    let hideFretNumbers = document.getElementById('hide-fret-numbers').checked;  // finding if the 'hide-fret-numbers' is checked (true) or not (false)
    let fretNumberCells = document.getElementsByTagName('th');      // getting an object of all of the elements containing fret numbers
    
    // calling the function to hide/unhide with 'openNoteCells' and the opacity value
    hideOrUnhide(hideFretNumbers, fretNumberCells)

    // calls the fretboardTrainer function once the settings have been applied 
    fretboardTrainer()

}


// function for dealing with the value from the select. takes parameters; total, container, default. returns total
function selectElementOptions(total, container, defaultValue){

    // if the value of the total questions/multi-choice answers is true (so not if the value is; NaN, null, 0, undefined, empty string) 
    if (total){

        // cutting out the '(default)' string
        if (total.length > 2){
            total = total.substring(0, 2);
        }
        // console.log('totals value: ', total);  // just for me to saee if it is working correctly

        total = Number(total)  // converting the total into a number

    } else {
        container.innerHTML = defaultValue;  // ensuring that the number of questions is set to the default if somehow the if statement is untrue
    }

    return total;  // returning the new total value to be displayed to the document or used to generate a number of questions
}


// function for the hide/unhide which takes parameters; openNoteCells HTMLCollection and opacity value
function hideOrUnhide(hide, cells){
    let opacity; // defining an opacity variable to be assigned to

    // setting the opacity value depending on if the check box is ticked or not
    if (hide){
        opacity = "0";
    } else {
        opacity = "1";
    }

    for (let cell of cells){
        cell.style.opacity = opacity;
        // console.log('cell = ', cell.innerHTML);  // just for me to check the values being hidden
    }
}