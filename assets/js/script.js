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
// var stringsArray = ['eStr', 'aStr', 'dStr', 'gStr', 'bStr', 'eHighStr']; 

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

    // getting the apply button and putting an event listener on it 
    let applyButton = document.getElementById('apply-btn');
    applyButton.addEventListener('click', applySettings)
    

    // checking all the settings values (user or default)
    

})

// apply settings function? finds all settings and sets the appropriate things (called by 'applyButton' event listener)
function applySettings(){
    let opacity;  // defining a variable for the opacity value needed

    //  WORKOUT HOW TO DO THE DROP BOXES OR MAKE THEM RADIO BUTTONS
   
    // hide open string notes setting (use similar for the hide fret numbers)
    let hideOpenNotes = document.getElementById('hide-open-notes').checked;  // finding if the 'hide-open-notes' is checked (true) or not (false)
    let openNoteCells = document.getElementsByClassName('zeroth-fret');      // getting an object of all of the elements containing zeroth fret notes
    // setting the opacity value depending on if the check box is ticked or not
    if (hideOpenNotes){
        opacity = "0";
    } else {
        opacity = "1";
    }
    // calling the function to hide/unhide with 'openNoteCells' and the opacity value
    hideOrUnhide(openNoteCells, opacity)

    // hide fret numbers setting
    let hideFretNumbers = document.getElementById('hide-fret-numbers').checked;  // finding if the 'hide-fret-numbers' is checked (true) or not (false)
    let fretNumberCells = document.getElementsByTagName('th');      // getting an object of all of the elements containing fret numbers
    // setting the opacity value depending on if the check box is ticked or not
    if (hideFretNumbers){
        opacity = "0";
    } else {
        opacity = "1";
    }
    // calling the function to hide/unhide with 'openNoteCells' and the opacity value
    hideOrUnhide(fretNumberCells, opacity)
}

// function for the hide/unhide which takes parameters; openNoteCells HTMLCollection and opacity value
function hideOrUnhide(cells, opacity){
    for (let cell of cells){
        cell.style.opacity = opacity;
        // console.log('cell = ', cell.innerHTML);  // just for me to check the values being hidden
    }
}