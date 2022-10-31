
function save() {
    const note = document.getElementById("note");
    // console.log(note);
    
    savedNote = document.createElement('p');
    const time = new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
    

    savedNote.innerHTML = note.value + "    " + time;
    
    console.log(savedNote);

    saved = document.getElementById("saved");
    saved.appendChild(savedNote);
    saaf();
}

function saaf() {
    let clr = document.getElementById("note");
    clr.value='';
    console.log(clr.value);
}