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
let errorMsg = document.querySelector(".msg");
let presentText= document.querySelector(".presentation")



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
    editArea.placeholder = `Deleted !`;
    errorMsg.innerHTML = `You deleted your content !`;
}

function appearMsg() {
    editArea.placeholder = `Describe yourself here...`;
    errorMsg.innerHTML = "";
}

function toggleArea() {
    editArea.classList.toggle("appear");
    if(editArea.classList.contains("appear")) {
presentText.style.display = "none";
    } else {
        presentText.style.display = " block";
    }
};

// Empty string function

function emptyString() {
    errorMsg.innerHTML = "";
}


// Save button
saveBtn.addEventListener("click", () => {
    let savedData = editArea.value;
    localStorage.setItem("myData", savedData);
    errorMsg.innerHTML = `We Saved your content !`
    setTimeout(emptyString,2000);
});


// Color Button

colorBtn.addEventListener("input", () => {
    let colored = colorBtn.value;
    editArea.style.color = colored;
    colorBtn.addEventListener("click", () => {
        errorMsg.innerHTML = `Choose a color!`;
        setTimeout(emptyString,2000);
    });

});

//Italic Btn
function italicTxt() {
    editArea.classList.toggle("italic-text");
    errorMsg.innerHTML = `Your text is italic !`;
        setTimeout(emptyString,2000);
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
    errorMsg.innerHTML = `Your text is bold !`;
    setTimeout(emptyString,2000);
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
        errorMsg.innerHTML = `Your text is bigger !`;
        setTimeout(emptyString,2000);
    })

    sizeDown.addEventListener("click", () => {
        currentSize--;
        sizeDownTxt();
        errorMsg.innerHTML = `Your text is smaller !`;
        setTimeout(emptyString,2000);
    });