// Values

let myReads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const clearAllBtn = document.getElementById("clear-all")
const ulEl = document.getElementById("ul-el")
const readsFromLocalStorage = JSON.parse( localStorage.getItem("myReads") )


chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
});

if (readsFromLocalStorage) {
    myReads = readsFromLocalStorage
    renderItems()
}


// Function

function renderItems() {
    let listItems = ""
    for (let i = 0; i < myReads.length; i++) {
    listItems += `<li><a href="${myReads[i]}" target="_blank">${myReads[i]}</a></li>`;
    ulEl.innerHTML = listItems;
}
}

// Buttons

inputBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myReads.push(tabs[0].url)
        localStorage.setItem("myReads", JSON.stringify(myReads) )
        renderItems(myReads)
    })

})

clearAllBtn.addEventListener("click", function() {
    localStorage.clear()
    myReads = []
    renderItems()
})