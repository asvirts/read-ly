let myReadlys = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const myReadlyList = document.getElementById("my-reads")

inputBtn.addEventListener("click", function() {
    let currentURL = window.location.href;
    myReadlys.push(currentURL)
    console.log(myReadlys)
})


// myReads

for (let i = 0; i < myReadlys.length; i++) {
    myReadlyList.textContent(myReadlys[i])
}