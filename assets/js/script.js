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

// Event listeners

document.addEventListener('DOMContentLoaded', function(){

    // getting the reset button and putting an event listener on it
    let resetButton = document.getElementById('reset-btn');
    resetButton.addEventListener('click', function(){
        window.location.reload()
    });


    // getting the apply button and putting an event listener on it 
    let applyButton = document.getElementById('apply-btn');
    applyButton.addEventListener('click', applySettings);
    

    // check answer button event listener (inside the main game function?)

    // calling the function that runs the game 
    fretboardTrainer()
    

})


//  the function that runs the game (calls questionGenerator())
function fretboardTrainer(){

    // define open string notes array ONLY HERE IF CANT JUST BE IN THE HIGHLIGHT FUNCTION
    // let stringsNamesArray = ['eStr', 'aStr', 'dStr', 'gStr', 'bStr', 'eHighStr'];
    // define all notes array
    notesArray = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];

    // calling the function to highlight a random cell and return its element
    highlightRandomCell();


}

// function for getting the random cell and highlighting it (defines stringsNamesArray randomCell[] and returns randomNote)
function highlightRandomCell(){
    // define open string notes array
    let stringsNamesArray = ['eStr', 'aStr', 'dStr', 'gStr', 'bStr', 'eHighStr'];
    // define random cell array
    let randomCell = [];

    // randomly picking a cell in the html table
    // picking a guitar string
    randomCell.push(stringsNamesArray[randomNumber(6, 0)]); // no offset because any of strings can be chosen
    // picking a fret
    randomCell.push(randomNumber(12, 1));  // offset because we dont want the 0th fret to be an option (therefore highest is 12 and not 13)
    console.log(randomCell);

    // finding the cell to unhide and take the note from
    let randomString = document.getElementById(randomCell[0]).children;
    let randomNote = randomString[randomCell[1]];  // the note from the random cell
    // applying the class to style the highlighted table cell
    randomNote.classList.add('highlight-note');
    console.log(randomNote);

}

// function for choosing a random number between 0 and a maximum value (takes highest possible value and an offset of 0 or 1)
function randomNumber(highest, offset){
    return Math.floor(Math.random() * highest) + offset; // multiplies a random number between 0 and 1 by the highest possible value and then takes the highest integer from this value + 1
}



// apply settings function? finds all settings and sets the appropriate things (called by 'applyButton' event listener)
function applySettings(){

    // NEED: a rest settings to default option (event listener which resets each setting?)
    // WHAT: to return??

    // (1) total number of questions setting
    let totalQuestionsSelection = document.getElementById('total-questions').value;  // getting the value from the input datalist
    let numberOfQuestions = document.getElementById('number-of-questions');  // getting the container for the number of questions 
    let defaultNumberOfQuestions = 10;  // setting the default value to use later

    // calling the selectElementOptions function to reassign the value of totalQuestionsSelection
    totalQuestionsSelection = selectElementOptions(totalQuestionsSelection, numberOfQuestions, defaultNumberOfQuestions); 
    // writing the new number of questions to the document using the value from 
    numberOfQuestions.innerHTML = totalQuestionsSelection;


    // (2) total number of questions setting
    let totalMultiChoiceSelection = document.getElementById('total-multi-choices').value;  // getting the value from the input datalist
    let numberOfMultiChoices = document.getElementById('multi-choice-answers');  // getting the container for the multi-choice answers 
    let defaultnumberOfMultiChoices = 4;  // setting the default value to use later

    // calling the selectElementOptions function to reassign the value of totalMultiChoiceSelection
    totalMultiChoiceSelection = selectElementOptions(totalMultiChoiceSelection, numberOfMultiChoices, defaultnumberOfMultiChoices); 
    // writing the new number of questions to the document using the value from 
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