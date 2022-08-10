// Values

let myReads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const clearAllBtn = document.getElementById("clear-all-btn")
const ulEl = document.getElementById("ul-el")


// Function

function renderItems() {
    let listItems = ""
    for (let i = 0; i < myReads.length; i++) {
    listItems += `<li><a href="${myReads[i]}" target="_blank">${myReads[i]}</a></li>`;
    ulEl.innerHTML = listItems;
}
}


// Buttons

inputBtn.addEventListener("click", function() {
    let currentURL = window.location.href;
    myReads.push(currentURL)
    renderItems()
    console.log(myReads)
})

clearAllBtn.addEventListener("click", function() {
    localStorage.clear()
    console.log(myReads)
})