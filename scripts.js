//query selectors
let addEntryBtn = document.querySelector('.add-prompt-button');
let submitBtn = document.querySelector('.submit-button');
let textBox = document.querySelector('#entry');
let prompt = document.querySelector('#prompt');
console.log(submitBtn.innerHTML);
//event listeners
window.addEventListener("load", () => {
    document.querySelector('.entries').innerHTML = localStorage.getItem("page-state");
});
addEntryBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
});
submitBtn.addEventListener("click", () => {
    console.log("submit button clicked");
    console.log(textBox.value);
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    let editBtn = document.createElement("button");
    editBtn.className = "edit";
    editBtn.textContent = "edit";
    let actions = document.createElement("div");
    actions.className = "actions";
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    let answer = document.createElement("div");
    answer.className = "answer";
    answer.textContent = textBox.value;
    let promptTitle = document.createElement("h3");
    promptTitle.className = "prompt-title";
    promptTitle.textContent = prompt.textContent;
    let entryBox = document.createElement("div");
    entryBox.className = "entry-box";
    entryBox.appendChild(promptTitle);
    entryBox.appendChild(answer);

    let date = document.createElement("h4");
    date.className = "date";
    date.textContent = "Tue, May 24";
    
    let entryCard = document.createElement("div");
    entryCard.className = "entry-card";
    entryCard.appendChild(date);
    entryCard.appendChild(entryBox);
   

    let itemEntry = document.createElement("div");
    itemEntry.className = "item-entry";
    itemEntry.appendChild(entryCard);
    itemEntry.appendChild(actions);
    document.querySelector('.entries').appendChild(itemEntry);
    localStorage.setItem('page-state', document.querySelector('.entries').innerHTML.toString());
    textBox.value = '';
});
