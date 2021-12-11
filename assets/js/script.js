// jshint esversion: 6

// defining the correctNote variable as a global variable
let correctNote;

// Event listeners on DOM load
document.addEventListener('DOMContentLoaded', function(){

    // getting the reset button and putting an event listener on it
    let resetButton = document.getElementById('reset-btn');
    resetButton.addEventListener('click', function(){
        window.location.reload();
    });

    // getting the apply button and putting an event listener on it 
    let applyButton = document.getElementById('apply-btn');
    applyButton.addEventListener('click', applySettings);

    // start button event listener
    let startButton = document.getElementById('start-btn');
    startButton.addEventListener('click', function(){
        // calling the game function with default settings
        fretboardTrainer();
    });
});

/**
 * @name fretboardTrainer
 * @description Removes the "highlight-note" class from the previous highlighted note and writes
 * the correctNote back into the table.
 * Generates array of answers with answerGenerator() and writes them to the DOM with
 * displayAnswers().
 * Contains the event listener for the check button which calls checkAnswer() on click.
 */
function fretboardTrainer(){

    // looping through the td elements to remove "highlight-note" class and write the correctNote back to the table
    for (let element of document.getElementsByTagName('td')){
        if (element.classList.contains("highlight-note")){
            element.classList.remove("highlight-note");
            element.innerHTML = correctNote;
        }
    }

    // updating question number
    let questionNumber = document.getElementById('question-number');
    questionNumber.innerHTML ++;

    // generating and displaying the multi-choice answers 
    let multiChoiceAnswers = answerGenerator();
    displayAnswers(multiChoiceAnswers);

    // 'Check Answer' button event listener to call checkAnswer() on 'click'
    let checkButton = document.getElementById('check-btn');
    checkButton.addEventListener('click', function(){
        checkAnswer(correctNote);
    });
}
 
/**
 * @name checkAnswer
 * @description Called by the 'Check Answer' button's click event. 
 * Compares user's chosen answer to correctNote.
 * Updates the game progress counters with countersUpdate(). 
 * Displays the result message and highlights multi-choices red/green.
 * Creates 'NEXT' button to replace 'CHECK ANSWER' and the event listener for the next button which 
 * calls nextQuestion() on click.
 * @param correctNote The note which has been highlighted on the fretboard
 */
function checkAnswer(correctNote){
    // getting the users choice
    let userChoice = document.querySelector('input[name = "choice"]:checked').value;
    let messageStart;
    let outcome;
    let messageEnd;

    // assigning the appropriate messages depending on the userChoice
    if (userChoice === correctNote){
        messageStart = `Congratulations`;
        outcome = `correct`;
        messageEnd = ``;
    } else {
        messageStart = `Sorry`;
        outcome = `incorrect`;
        messageEnd = ` You chose: ${userChoice}. The correct note is: ${correctNote}`;
    }

    // updating the game progress counters 
    let countersUpdateReturn = countersUpdate(outcome);

    // writing the user's result message to the game play section
    document.getElementById('question-and-result').innerHTML = `${messageStart} thats ${outcome}.${messageEnd}`;

    // highlighting the multi-choices red except the one that matches the value of correctNote
    for (let note of document.getElementById('game-play').getElementsByTagName('label')){
        if (note.innerHTML === correctNote){
            note.classList.add("right-highlight");
        } else {
            note.classList.add("wrong-highlight");
        }
    }

    // creating the 'next' button and replacing the check button with it
    let nextBtn = document.createElement('button');
    nextBtn.id = "next-btn";
    nextBtn.className = "btn";
    if (countersUpdateReturn[0]){
        nextBtn.innerHTML = 'Check Score';
    } else {
        nextBtn.innerHTML = 'Next Question';
    }
    document.getElementById('game-play').lastChild.replaceWith(nextBtn);

    // NEXT btn event listener to call nextQuestion() on 'click'
    let nextButton = document.getElementById('next-btn');
    nextButton.addEventListener('click', function(){
        nextQuestion(countersUpdateReturn);
    });
}

/**
 * @name nextQuestion
 * @description Called by the 'Next Question' button's click event.
 * If the last question has been answered, the scoreScreen template literal is 
 * created and displayed and the highlighted cell is cleared.
 * Else fretboardTrainer() is called for the next question.
 * @param countersUpdateReturn containing; lastQuestionReached (true/false), 
 * Number(right.innerHTML) (how many answers were right) and numberOfQuestions.innerHTML 
 * (the total number of questions)
 */
function nextQuestion(countersUpdateReturn){
    
    // true if last question has been checked
    let lastQuestionReached = countersUpdateReturn[0];

    // writes the score message if last question reached, else it calls fretboardTrainer() again for next question
    if (lastQuestionReached){
        // number of right answers achieved
        let right = countersUpdateReturn[1];
        let totalQuestions = countersUpdateReturn[2];
        let scoreScreen = document.getElementById('game-play');
        
        // calculating the user's percentage score and setting the class name to style it 
        let percentageScore = Math.round((right/totalQuestions)*100);
        let resultsClass = "right-highlight";

        // changing resultsClass if the user scores less than 50%
        if (percentageScore < 50){
            resultsClass = "wrong-highlight";
        }

        // writing the score message to the DOM
        scoreScreen.innerHTML = `
        <h3>You completed the game!</h3>
        <p class = ${resultsClass}>You scored: ${right}/${totalQuestions}</p>
        <p class = ${resultsClass}>Percentage score: ${percentageScore}%</p>
        <p>In the settings section click 'RESET GAME' to return to the start screen or 'APPLY & START' to replay with the same settings</p>
        `;

        // removing the "highlight-note" class and writing correctNote back into the highlighted cell
        for (let element of document.getElementsByTagName('td')){
            if (element.classList.contains("highlight-note")){
                element.classList.remove("highlight-note");
                element.innerHTML = correctNote;
            }
        }
    } else {
        fretboardTrainer();
    }
}

/**
 * @name countersUpdate
 * @description Called by checkAnswer().
 * Checks the value of 'outcome' to update the right or wrong counter.
 * Sets lastQuestionReached as true if the last question has been reached.
 * Else adds 1 to the question counter.
 * @param outcome String containing `correct` or `incorrect` 
 * @returns [lastQuestionReached, Number(right.innerHTML), numberOfQuestions.innerHTML] 
 */
function countersUpdate(outcome){
    // getting the elements containing the right and wrong counters
    let right = document.getElementById('right-ans');
    let wrong = document.getElementById('wrong-ans');

    // getting the elements containing the current questions number and the total number of questions
    let questionNumber = document.getElementById('question-number');
    let numberOfQuestions = document.getElementById('number-of-questions');
    // lastQuestionReached is falsy until the last question is completed and it is give a value of 'true'
    let lastQuestionReached;

    // updating right or wrong counter in the Game Progress section
    if (outcome === `correct`){
        right.innerHTML ++;
    } else {
        wrong.innerHTML ++;
    }

    // checking if the user has answered the last question and if so, letting lastQuestionReached = true
    if (questionNumber.innerHTML === numberOfQuestions.innerHTML){
        lastQuestionReached = true;
    }

    //returning lastQuestionReached (true/false), how many right answers, total number of questions
    return [lastQuestionReached, Number(right.innerHTML), numberOfQuestions.innerHTML];  
}

/**
 * @name displayAnswers
 * @description Called by fretboardTrainer().
 * Creates a template literal with the question, randomised answers with radio buttons and 
 * the 'check' button which is then written to the 'game-play' in the DOM.
 * @param multiChoiceAnswers array of randomly generated answers containing the correct answer.
 */
function displayAnswers(multiChoiceAnswers){
    // the question and first answer option with checked radio button  
    let allMultiChoices = `
    <h3 id = "question-and-result">Which note is highlighted on the fretboard?</h3>
    <div>
        <label for = "choice${1}">${multiChoiceAnswers[0]}</label>
        <input type = "radio" name = "choice" id = "choice${1}" value = "${multiChoiceAnswers[0]}" checked>
    </div>
    `;
    // holds each note to be written into the template literal
    let note;

    // creating each answer option template literal for the length of multiChoiceAnswers (minus the 0th index)
    for (let i = 1; i < multiChoiceAnswers.length; i++){
        
        note = multiChoiceAnswers[i];

        // template literal for the answer and adding it to the variable containing them all
        allMultiChoices += `
        <div>
            <label for = "choice${i}">${note}</label>
            <input type = "radio" name = "choice" id = "choice${i}" value = "${note}">
        </div>
        `;
    }

    // adding the check button to the end of the template literal
    allMultiChoices += `<button id = "check-btn" class = "btn">Check Answer</button>`;

    // writing everything to 'game-play' in the DOM
    document.getElementById('game-play').innerHTML = allMultiChoices;
}

/**
 * @name answerGenerator
 * @description Called by fretboardTrainer().
 * Defines an array contining all the notes, in order, from 'A'.
 * Picks a random cell to highlight and removes it's note from allNotes[] to avoid duplication.
 * Finds how many answers are required and generates an array of that many random notes, minus 
 * one space for the correctNote, which is inserted ata random index.
 * @returns multiChoiceAnswers array of randomly generated answers containing the correct answer.
 */
function answerGenerator(){
    // array contining all the notes, in order, from 'A'
    let allNotes = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
    let multiChoiceAnswers = [];

    // choosing and highlighting a random cell and return its innerHTML (the correct note)
    correctNote = highlightRandomCell();

    // removing correctNote from allNotes[] to prevent duplication
    allNotes.splice(allNotes.indexOf(correctNote), 1);

    // finding total number of answers required from 'total-multi-choices'
    let totalMultiChoiceAnswers = document.getElementById('total-multi-choices').value;

    // if Number(totalMultiChoiceAnswers) is false (NaN), the first character '4' from '4 default' is extracted
    if (Number(totalMultiChoiceAnswers)){
    } else {
        totalMultiChoiceAnswers = totalMultiChoiceAnswers.substring(0,1);
    }
    totalMultiChoiceAnswers = Number(totalMultiChoiceAnswers);

    // removing random notes from allNotes[] to add them into an answers array (1 less since correctNote needs to be inserted later)
    for (let i = 0; i < (totalMultiChoiceAnswers - 1); i ++){

        let note = allNotes[randomNumber(allNotes.length, 0)]; 

        multiChoiceAnswers.push(note);
        allNotes.splice(allNotes.indexOf(note), 1);
    }

    // generating a random index to insert the correctNote, without removing anything
    multiChoiceAnswers.splice(randomNumber((multiChoiceAnswers.length + 1), 0), 0, correctNote);

    // returns multiChoiceAnswers[] back into fretboardTrainer()
    return multiChoiceAnswers;
}

/**
 * @name highlightRandomCell
 * @description Called by answerGenerator().
 * Defines an array contining HTML ids of the tr elements which represent the open string notes on the guitar.
 * Uses randomNumber() to get a random string and fret number and adds the 'highlight-note' class to highlight
 * the random cell.
 * Stores the cell's note value in correctNote and replaces it with an empty string since the cell is now visible
 * (the note is written back in when the highlight is removed).
 * @returns correctNote Which is the note the user is trying to guess and is being highlighted on teh fretboard
 */
function highlightRandomCell(){
    // array contining HTML ids of the tr elements which represent the open string notes on the guitar
    let stringsNamesArray = ['eStr', 'aStr', 'dStr', 'gStr', 'bStr', 'eHighStr'];
    let randomCell = [];

    // picking a random string from stringsNamesArray[] with randomNumber()
    randomCell.push(stringsNamesArray[randomNumber(6, 0)]);
    // picking a random fret number (from 1 to 12 incl, therefore needs an offset value of 1)
    randomCell.push(randomNumber(12, 1));

    // random guitar string chosen
    let randomString = document.getElementById(randomCell[0]).children;
    // container of the random note
    let randomNoteContainer = randomString[randomCell[1]];
    // adding the 'highlight-note' class to the note's container element
    randomNoteContainer.classList.add('highlight-note'); 
    
    correctNote = randomNoteContainer.innerHTML;
    // replacing the note with an empty string now that the cell is visible (the note is written back in when the highlight is removed)
    randomNoteContainer.innerHTML = '';
    
    // returns correctNote to answerGenerator()
    return correctNote;
}

/**
 * @name randomNumber
 * @description multiplies a random number between 0 and 1 by the highest possible value and then takes the highest integer 
 * from this value + an offset value if required.
 * Called by answerGenerator() and highlightRandomCell().
 * @returns a random number (considering the highest value to find a random number between and the offset value)
 */
function randomNumber(highest, offset){
    return Math.floor(Math.random() * highest) + offset; 
}

/**
 * @name applySettings
 * @description Called by the Event Listener on the applyButton. 
 * Resets the counter values, applies the settings (user's or default) and calls the first question.
 * For the necessary settings, it extracts the value and uses it to write to or affect elements in 
 * the DOM before calling fretboardTrainer() to display the first question.
 */
function applySettings(){
    // resetting the counter values for; question number, right answers and wrong answers
    document.getElementById('question-number').innerHTML = 0;
    document.getElementById('right-ans').innerHTML = 0;
    document.getElementById('wrong-ans').innerHTML = 0;

    // --- total number of questions setting ---
    let totalQuestionsSelection = document.getElementById('total-questions').value; 
    let numberOfQuestions = document.getElementById('number-of-questions');
    // ensuring totalQuestionsSelection is a number and writing the number of questions to the DOM
    totalQuestionsSelection = selectElementOptions(totalQuestionsSelection); 
    numberOfQuestions.innerHTML = totalQuestionsSelection;

    // --- hide open string notes setting ---
    // if checkbox is checked (true) if not (false)
    let hideOpenNotes = document.getElementById('hide-open-notes').checked;
    let openNoteCells = document.getElementsByClassName('zeroth-fret');
        
    // hide/unhide the open guitar string notes by changing their opacity with hideOrUnhide() 
    hideOrUnhide(hideOpenNotes, openNoteCells);

    // --- hide fret numbers setting ---
    // if checkbox is checked (true) if not (false)
    let hideFretNumbers = document.getElementById('hide-fret-numbers').checked;
    // all of the elements containing fret numbers
    let fretNumberCells = document.getElementsByTagName('th');
    
    // hide/unhide fret numbers by changing their opacity with hideOrUnhide()
    hideOrUnhide(hideFretNumbers, fretNumberCells);

    // calling fretboardTrainer() to display the first question 
    fretboardTrainer();
}

/**
 * @name selectElementOptions
 * @description Cuts the '(default)' string from the chekbox option which is the default.
 * Called by applySettings().
 * @param total
 * @returns total Converted into a number
 */
function selectElementOptions(total){

    if (total.length > 2){
        total = total.substring(0, 2);
    }

    return Number(total);  
}

/**
 * @name hideOrUnhide
 * @description Called by applySettings().
 * Sets opacity a value of '0' or '1' depending on if the checkbox is ticked (true) or not (false).
 * Loops through the HTMLCollection to apply the opacity value to the opacity style for each element.
 * @param hide true/false value used to determine the opacity value
 * @param cells HTMLCollection whose items have their opacity style changed
 */
function hideOrUnhide(hide, cells){

    // defining an opacity variable to be assigned to
    let opacity; 

    // setting opacity a value of '0' or '1' depending on if the checkbox is ticked (true) or not (false)
    if (hide){
        opacity = "0";
    } else {
        opacity = "1";
    }

    // looping through the HTMLCollection to apply the opacity value to the opacity style for each element
    for (let cell of cells){
        cell.style.opacity = opacity;
    }
}