let editBtn = document.querySelector(".edit");
let deleteBtn = document.querySelector(".delete");
let saveBtn = document.querySelector(".save");
let editArea = document.querySelector(".main");


//Get data
function getData() {
    let getTextData = localStorage.getItem("myData");
    editArea.value = getTextData;
  //  if(!getTextData === null) {
        editArea.style.display = "block";
            }
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
