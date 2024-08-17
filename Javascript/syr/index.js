const notes=['c ','c#','d ','d#','e ','f ','f#','g ','g#','a ','a#','b '];

let zero=false; /*appears a note in octave 0*/

/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------BUTTONS--------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
//#region 
const otherButtonsAbove = document.getElementById('otherButtonsAbove');
const otherButtonsDown = document.getElementById('otherButtonsDown');

/*creating left column*/
//#region 
const tuneDownOneColumnAbove = document.createElement('div'); tuneDownOneColumnAbove.classList.add('tuneOneColumn');

const tuneDownOneColumnDown = document.createElement('div'); tuneDownOneColumnDown.classList.add('tuneOneColumn');

otherButtonsAbove.appendChild(tuneDownOneColumnAbove); otherButtonsDown.appendChild(tuneDownOneColumnDown);

for (let i=1;i<6+1;i++) {
    const tuneDownOneAbove = document.createElement('div');
    tuneDownOneAbove.textContent="◄";
    tuneDownOneAbove.style.display = "flex";
    tuneDownOneAbove.style.alignItems = "center"; tuneDownOneAbove.style.justifyContent = "center";
    tuneDownOneAbove.classList.add('tuneDownOne');
    tuneDownOneAbove.setAttribute('string',i+'a');
    tuneDownOneColumnAbove.appendChild(tuneDownOneAbove);
    
    const tuneDownOneDown = document.createElement('div');
    tuneDownOneDown.textContent="◄";
    tuneDownOneDown.style.display = "flex";
    tuneDownOneDown.style.alignItems = "center"; tuneDownOneDown.style.justifyContent = "center";
    tuneDownOneDown.classList.add('tuneDownOne');
    tuneDownOneAbove.setAttribute('string',i+'b');
    tuneDownOneColumnDown.appendChild(tuneDownOneDown);
};
//#endregion

/*creating middle left button*/
//#region 
const tuneDownAllAbove = document.createElement('div');
tuneDownAllAbove.classList.add('tuneDownAll');
tuneDownAllAbove.textContent="◄";
tuneDownAllAbove.style.display = "flex";
tuneDownAllAbove.style.alignItems = "center"; tuneDownAllAbove.style.justifyContent = "center";

const tuneDownAllDown = document.createElement('div');
tuneDownAllDown.classList.add('tuneDownAll');
tuneDownAllDown.textContent="◄";
tuneDownAllDown.style.display = "flex";
tuneDownAllDown.style.alignItems = "center"; tuneDownAllDown.style.justifyContent = "center";

otherButtonsAbove.appendChild(tuneDownAllAbove);
otherButtonsDown.appendChild(tuneDownAllDown);
//#endregion

/*create middle buttons*/
//#region 
const notesColumnAbove = document.createElement('div'); notesColumnAbove.classList.add('notes');
const notesColumnDown = document.createElement('div'); notesColumnDown.classList.add('notes');

otherButtonsAbove.appendChild(notesColumnAbove); otherButtonsDown.appendChild(notesColumnDown);

for (let i=1;i<6+1;i++) {
    const noteAbove = document.createElement('div'); noteAbove.classList.add('note');
    const noteDown = document.createElement('div'); noteDown.classList.add('note');

    notesColumnAbove.appendChild(noteAbove);
    notesColumnDown.appendChild(noteDown);
};
//#endregion

/*creating middle far-right button*/
//#region 
const tuneUpAllAbove = document.createElement('div');
tuneUpAllAbove.classList.add('tuneUpAll');
tuneUpAllAbove.textContent="►";
tuneUpAllAbove.style.display = "flex";
tuneUpAllAbove.style.alignItems = "center"; tuneUpAllAbove.style.justifyContent = "center";

const tuneUpAllDown = document.createElement('div');
tuneUpAllDown.classList.add('tuneUpAll');
tuneUpAllDown.textContent="►";
tuneUpAllDown.style.display = "flex";
tuneUpAllDown.style.alignItems = "center"; tuneUpAllDown.style.justifyContent = "center";

otherButtonsAbove.appendChild(tuneUpAllAbove);
otherButtonsDown.appendChild(tuneUpAllDown);
//#endregion

/*creating far-right column*/
//#region 
const tuneUpOneColumnAbove = document.createElement('div');
tuneUpOneColumnAbove.classList.add('tuneOneColumn');
const tuneUpOneColumnDown = document.createElement('div');
tuneUpOneColumnDown.classList.add('tuneOneColumn');

otherButtonsAbove.appendChild(tuneUpOneColumnAbove);
otherButtonsDown.appendChild(tuneUpOneColumnDown);

for (let i=1;i<6+1;i++) {
    const tuneUpOneAbove = document.createElement('div');
    tuneUpOneAbove.classList.add('tuneUpOne');
    tuneUpOneAbove.textContent="►";
    tuneUpOneAbove.style.display = "flex";
    tuneUpOneAbove.style.alignItems = "center"; tuneUpOneAbove.style.justifyContent = "center";
    tuneUpOneAbove.setAttribute('string',i+'a');
    tuneUpOneColumnAbove.appendChild(tuneUpOneAbove);
    
    const tuneUpOneDown = document.createElement('div');
    tuneUpOneDown.classList.add('tuneUpOne');
    tuneUpOneDown.textContent="►";
    tuneUpOneDown.style.display = "flex";
    tuneUpOneDown.style.alignItems = "center"; tuneUpOneDown.style.justifyContent = "center";
    tuneUpOneAbove.setAttribute('string',i+'b');
    tuneUpOneColumnDown.appendChild(tuneUpOneDown);
};
//#endregion
//#endregion

/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------FRETBOARD-------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
const fretboardAbove=document.getElementById('fretboardAbove'); const fretboardDown=document.getElementById('fretboardDown');

const markerAbove=document.createElement('div'); markerAbove.classList.add('marker');
const markerDown=document.createElement('div'); markerDown.classList.add('marker');

fretboardAbove.appendChild(markerAbove); fretboardDown.appendChild(markerDown);
for (let i=0;i<23;i++) {
    const markA=document.createElement('div'); markA.classList.add('mark'); 
    const markB=document.createElement('div'); markB.classList.add('mark');

    markerAbove.appendChild(markA); markerDown.appendChild(markB);
    markA.textContent = markB.textContent = i;
};

for (let i=1;i<7;i++) {
    const stringA=document.createElement('div'); stringA.classList.add('string');
    const stringB=document.createElement('div'); stringB.classList.add('string');

    fretboardAbove.appendChild(stringA);fretboardDown.appendChild(stringB);

    for (let j=0;j<23;j++) {
        const fretA=document.createElement('div'); fretA.classList.add('fret'); fretA.classList.add('colmo');
        const fretB=document.createElement('div'); fretB.classList.add('fret'); fretB.classList.add(`${i}b`);

        stringA.appendChild(fretA);stringB.appendChild(fretB);
    }

};
