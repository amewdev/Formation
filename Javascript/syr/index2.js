const notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
const octaves = [1,2,3,4,5,6];

const fretUp = document.getElementById("fretUp");
const fretDown = document.getElementById("fretDown");

//colors//
function getRandomColor() {
  let chars = "0123456789ABCDEF";
  let colorOut = "#";

  for (let i=0; i<6; i++) {colorOut += chars[Math.floor(Math.random() * chars.length)]}
  return colorOut;
};

function color(no,oc) { //no(note)   oc(octave)
  let c = document.styleSheets[1].cssRules[parseInt(oc)*12+parseInt(no)]; //c : class - the class to be modified
  console.log(c);

  if (c.style.backgroundColor === "transparent") {c.style.backgroundColor = getRandomColor()}
  else {c.style.backgroundColor = "transparent"};
};
//end//

//Makes index and frets//
function makeFretboards(side) {
  let string; let fret; let builtFret;
  let noteIndex; let octaveIndex;
  
  if (side==="u") {builtFret=fretUp} else {builtFret=fretDown};
  //makes indexes//
  string = document.createElement("div");
  string.classList.add("index");
  for (let j=0; j<=21; j++) {
    fret = document.createElement("div");
    fret.textContent = j;
    if (j===0) {fret.style.width = "9px"}
    string.appendChild(fret);
  };
  builtFret.appendChild(string);
  //makes frets//
  for (let i=1; i<=6 ; i++) {
    switch (i) {
        case 1:
          octaveIndex=3; noteIndex=4;
          break;
        case 2:
          octaveIndex=2; noteIndex=11;
          break;
        case 3:
          octaveIndex=2; noteIndex=7;
          break;
        case 4:
          octaveIndex=2; noteIndex=2;
          break;
        case 5:
          octaveIndex=1; noteIndex=9;
          break;
        case 6:
          octaveIndex=1; noteIndex=4;
          break;
    };  
    string = document.createElement("div");
    string.classList.add("string");

    for (let j=0; j<=21; j++) {
        fret = document.createElement("div");
        fret.classList.add(notes[noteIndex]+octaves[octaveIndex]);
        fret.setAttribute("place",i+side);
        fret.setAttribute("noteIndex",noteIndex); fret.setAttribute("octaveIndex",octaveIndex);

        if (j===0) {fret.style.width = "9px"; fret.id="0"+i+side} else {fret.textContent = notes[noteIndex]+octaves[octaveIndex];};
        
        if (noteIndex!=11) {noteIndex+=1} else {noteIndex=0; octaveIndex+=1};
        
        if (side==="u") {
          (function (currentFret) {
            currentFret.onclick = function () {color(currentFret.getAttribute("noteIndex"),currentFret.getAttribute("octaveIndex"))};
        })(fret);
        };
        string.appendChild(fret);
    };
    builtFret.appendChild(string);
    let noteIndicator = document.getElementById(i+side); let firstFret = document.getElementById("0"+i+side);
    noteIndicator.textContent = firstFret.getAttribute("class");
  };
};

function tuneOneLower(str,side) {
  //str(string)  :  1, 2, 3, 4, 5, 6
  //side  :  u(up), d(down)
  let noteIndicator = document.getElementById(str+side);
  let firstFret = document.getElementById("0"+str+side);

  if ((firstFret.getAttribute("octaveIndex") != 0) || (firstFret.getAttribute("noteIndex") != 0)) {
    let modString=document.querySelectorAll('[place="'+str+side+'"]'); //it says string, each fret of that certain string will be modified
    
    modString.forEach(function(element,cont) {
      if (element.getAttribute("noteIndex")>0) {
        element.setAttribute("noteIndex",parseInt(element.getAttribute("noteIndex"))-1);     
      } else {
        element.setAttribute("octaveIndex",parseInt(element.getAttribute("octaveIndex"))-1);
        element.setAttribute("noteIndex",11);
      };
      element.setAttribute("class",notes[element.getAttribute("noteIndex")]+octaves[element.getAttribute("octaveIndex")]);
      if (cont>0) {element.textContent = notes[element.getAttribute("noteIndex")]+octaves[element.getAttribute("octaveIndex")]};
    });
    noteIndicator.textContent = firstFret.getAttribute("class");
  }
};

function tuneOneHigher(str,side) {
  //str(string)  :  1, 2, 3, 4, 5, 6
  //side  :  u(up), d(down)
  let noteIndicator = document.getElementById(str+side);
  let firstFret = document.getElementById("0"+str+side);

  if ((firstFret.getAttribute("octaveIndex") != 4) || (firstFret.getAttribute("noteIndex") != 2)) {
    let modString=document.querySelectorAll('[place="'+str+side+'"]'); //it says string, each fret of that certain string will be modified
    
    modString.forEach(function(element,cont) {
      if (element.getAttribute("noteIndex")<11) {
        element.setAttribute("noteIndex",parseInt(element.getAttribute("noteIndex"))+1);
      } else {
        element.setAttribute("octaveIndex",parseInt(element.getAttribute("octaveIndex"))+1);
        element.setAttribute("noteIndex",0);
      };
      element.setAttribute("class",notes[element.getAttribute("noteIndex")]+octaves[element.getAttribute("octaveIndex")]);
      if (cont>0) {element.textContent = notes[element.getAttribute("noteIndex")]+octaves[element.getAttribute("octaveIndex")]};
    });
  };
  noteIndicator.textContent = firstFret.getAttribute("class");
};

makeFretboards("u"); makeFretboards("d");
//end//