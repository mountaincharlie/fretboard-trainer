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


// the fretboards notes object (global?)
// const allNotes = {}


// CODE FOR USING AN ARRAY OF OPEN STRING NOTES AND ONE FOR ALL THE POSSIBLE NOTES IN ORDER

// array of the string names (COULD even rmv high from last e)
var stringsArray = ['e', 'a', 'd', 'g', 'b', 'eHigh']; 
// array of the notes in a full scale starting at 'a'
var notesArray = ['a', 'a#/bb', 'b', 'c', 'c#/db', 'd', 'd#/eb', 'e', 'f', 'f#/gb', 'g', 'g#/ab',];

// finding the note for 6th string 4th fret
let stringNumber = 6; // must not exceed 6
let fretNumber = 9; // must note exceed 12

let chosenString = stringsArray[(stringNumber-1)];  // getting the string from the stringsArray
let openStringNote = chosenString.substring(0, 1); // just the note of the open string (e.g. 'e' instead of 'eHigh')
console.log('open string:', chosenString);
let openStringNoteIndex = notesArray.indexOf(openStringNote); // getting the index of the open note in the notesArray
let chosenNoteIndex = openStringNoteIndex + fretNumber;
if (chosenNoteIndex > notesArray.length){
    chosenNoteIndex = chosenNoteIndex - notesArray.length;
}
let chosenNote = notesArray[chosenNoteIndex];

console.log('chosen note:', chosenNote);




