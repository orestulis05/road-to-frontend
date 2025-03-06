const countText = document.getElementById("count")
const welcomeEl = document.getElementById("welcome-el")
const previousEntriesEl = document.getElementById("entries-el")

const personName = "Orestas"
welcomeEl.textContent = "Welcome, " + personName + "!"

let count = 0

function increment(){
    count += 1;
    countText.textContent = count;
}

function decrement(){
    if (count - 1 < 0)
        return
    
    count -= 1;
    countText.textContent = count;
}

function save(){
    if (previousEntriesEl.textContent === "-"){
        previousEntriesEl.textContent = count
    } else {
        previousEntriesEl.textContent += " - " + count
    }

    count = 0
    countText.textContent = count
}