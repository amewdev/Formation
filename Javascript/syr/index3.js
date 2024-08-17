const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const octaves = [1, 2, 3, 4, 5, 6];

const div = document.getElementById("a");
let p;
div.textContent = "";

for (let i = 0; i < octaves.length; i++) {
    for (let j = 0; j < notes.length; j++) {
        p = document.createElement("p");

        if (j === 1 || j === 3 || j === 6 || j === 8 || j === 10) {
            p.textContent = "." + notes[j][0] + "\\" + notes[j][1] + octaves[i] + "{background-color: transparent}";
        } else {
            p.textContent = "." + notes[j] + octaves[i] + "{background-color: transparent}";
        }
        div.appendChild(p);
    }
}
