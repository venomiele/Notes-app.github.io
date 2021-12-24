let editBtn = document.querySelector(".edit");
let deleteBtn = document.querySelector(".delete");
let saveBtn = document.querySelector(".save");
let editArea = document.querySelector(".main");
let colorBtn = document.getElementById("create-color");
let italicBtn = document.querySelector(".italic");
let boldBtn = document.querySelector(".bold");
let sizeUp = document.querySelector(".size-up");
let sizeDown = document.querySelector(".size-down");
let coloredTitle = document.querySelector(".colored");

let currentSize = 1.25;

//Get data
function getData() {
    let getTextData = localStorage.getItem("myData");
    editArea.value = getTextData;
}

window.addEventListener("DOMContentLoaded", () => {
    getData();
})

// Delete button

editBtn.addEventListener("click", () => {
    toggleArea();
});

// Delete button

deleteBtn.addEventListener("click", () => {
deleteArea();
});

function deleteArea() {
    editArea.value = null;
    localStorage.clear();
    deleteMsg();
    setTimeout(appearMsg,2000);
}

function deleteMsg() {
    editArea.placeholder = `Deleted !`
}

function appearMsg() {
    editArea.placeholder = `Describe yourself here...`;
}

function toggleArea() {
    editArea.classList.toggle("appear");
};


// Save button
saveBtn.addEventListener("click", () => {
    let savedData = editArea.value;
    localStorage.setItem("myData", savedData);
});


// Color Button

colorBtn.addEventListener("input", () => {
    let colored = colorBtn.value;
    editArea.style.color = colored;
})

//Italic Btn
function italicTxt() {
    editArea.classList.toggle("italic-text");
}

italicBtn.addEventListener("click", () => {
italicTxt();
})

// Bold Btn 
function boldTxt() {
    editArea.classList.toggle("bold-text");
}

boldBtn.addEventListener("click", () => {
    boldTxt();
    })

    // Sizes buttons 



function sizeUpTxt() {
    editArea.style.fontSize = `${currentSize}rem`
}

function sizeDownTxt() {
    editArea.style.fontSize = `${currentSize}rem`
}

    sizeUp.addEventListener("click", () => {
        currentSize++;
        sizeUpTxt();
    })

    sizeDown.addEventListener("click", () => {
        currentSize--;
        sizeDownTxt();
    });

    // Title live edit

function coloredTitle() {

}