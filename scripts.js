const getPrompt = () => {
  const prompts = ["Write down three things that made your day a little better.",
    "Write about someone you're incredibly grateful for today and why",
    "What are some things in your life that you look forward to?",
    "Write down 5 of the personality traits that you're most grateful for.",
    "What is a space that brings you peace, contentment, or joy?",
    "What is a memory you have that always makes you smile?",
    "Write about a book that has taught you something interesting or inspiring.",
    "Write about someone you admire (this could be anyone from a " +
    "historical figure to a family member to a literary figure).",
    "Write about the foods you are most grateful for and why.",
    "What physical item in your household are you most grateful" +
    " for, and what memory or quality makes you cherish that item?",
    "List 3 people you hope you'll see soon and why you enjoy being around them.",
    "List 3 challenging people for you to be around and name at" +
    " least 1 quality of theirs that you admire.",
    "When was the last time you laughed without being able to stop?",
    "What is your favorite part of the day and why?",
    "When was the last time you happy cried, and what made you cry?",
    "What is your favorite time of year, and why do you love it so much?",
    "Write down what you love about where you live.",
    "Who has done something kind for you recently, and how did it make you feel?",
    "Name ten things in nature that make you smile.",
    "Write about a random act of kindness that someone else did for you or you did for someone else.",
    "Write about something challenging in your life, and then find 3 things you are grateful for in the midst of this challenge.",
    "What are your favorite hobbies right now, and what about them do you enjoy?",
    "What do you love about your current job or career?",
    "Who is someone you regularly interact with who is difficult for you? What are 3 character traits of theirs that you admire?",
    "What is a struggle you have overcome, and how did you become a better or more resilient person through it?",
    "Describe your perfect day, and then think about what you can do to incorporate elements of that into every day.",
    "What 5 things improve your quality of life (technologies, life hacks, tools…)?",
    "Write about a smell you love and why you love it.",
    "What professor, mentor, or teacher taught you a valuable lesson you regularly think about?",
    "What day of the week is your favorite, and why do you enjoy it so much?",
    "Write a paragraph about your favorite holiday tradition.",
    "What was the last thing you purchased for yourself that brought you a lot of enjoyment",
    "What's the last thing that you got excited about?",
    "List 5 things you are looking forward to this month.",
    "List 5 unexpected joys you experienced last week."];
  return prompts[Math.floor(Math.random()*prompts.length)];
}

//query selectors
let addEntryBtn = document.querySelector(".add-prompt-button");
let submitBtn = document.querySelector(".submit-button");
let textBox = document.querySelector("#entry");
let prompt = document.querySelector("#prompt");
let changePromptBtn = document.querySelector("#change-prompt");
changePromptBtn.addEventListener("click", () => {
  prompt.innerHTML = getPrompt();
});
//event listeners
window.addEventListener("load", () => {
  prompt.innerHTML = getPrompt();
  textBox.value = "";
  //localStorage.clear();
  document.querySelector(".entries").innerHTML = localStorage.getItem("page");
  let edit = document.querySelectorAll(".edit");
  edit.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("edit button clicked");
      button.parentElement.parentElement.querySelector(
        ".answer"
      ).readOnly = false;
      button.parentElement.parentElement
        .querySelector(".answer")
        .addEventListener("blur", () => {
          button.parentElement.parentElement.querySelector(
            ".answer"
          ).readOnly = true;
          button.parentElement.parentElement.querySelector(
            ".answer"
          ).innerHTML =
            button.parentElement.parentElement.querySelector(".answer").value;
          console.log("saving edit");
          localStorage.clear();
          localStorage.setItem(
            "page",
            document.querySelector(".entries").innerHTML.toString()
          );
          console.log(localStorage.getItem("page"));
        });
    });
  });
  let deleteBtnArr = document.querySelectorAll(".delete");
  deleteBtnArr.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("delete button clicked");
      button.parentElement.parentElement.style.animation = "deleteTransition 0.5s";
      setTimeout(() => {
        button.parentElement.parentElement.remove();
        localStorage.clear();
        localStorage.setItem("page", document.querySelector(".entries").innerHTML.toString());
      },300);
    });
  });
});
addEntryBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
submitBtn.addEventListener("click", () => {
  console.log("submit button clicked");
  if (textBox.value == "") {
    console.log("nothing to sumbit");
    return;
  }
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

  let answer = document.createElement("textarea");
  answer.className = "answer";
  answer.textContent = textBox.value;
  answer.readOnly = true;
  answer.rows = 8;
  answer.cols = 50;
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
  document.querySelector(".entries").appendChild(itemEntry);
  textBox.value = "";
  let edit = document.querySelectorAll(".edit");
  edit.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("edit button clicked");
      button.parentElement.parentElement.querySelector(
        ".answer"
      ).readOnly = false;
      button.parentElement.parentElement
        .querySelector(".answer")
        .addEventListener("blur", () => {
          button.parentElement.parentElement.querySelector(
            ".answer"
          ).readOnly = true;
          button.parentElement.parentElement.querySelector(
            ".answer"
          ).innerHTML =
            button.parentElement.parentElement.querySelector(".answer").value;
          console.log("saving edit");
          localStorage.clear();
          localStorage.setItem(
            "page",
            document.querySelector(".entries").innerHTML.toString()
          );
          console.log(localStorage.getItem("page"));
        });
    });
  });
  console.log("saving submission");
  localStorage.setItem(
    "page",
    document.querySelector(".entries").innerHTML.toString()
  );
  console.log(localStorage.getItem("page"));
  let deleteBtnArr = document.querySelectorAll(".delete");
  deleteBtnArr.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("delete button clicked");
      button.parentElement.parentElement.style.animation = "deleteTransition 0.5s";
      setTimeout(() => {
        button.parentElement.parentElement.remove();
        localStorage.clear();
        localStorage.setItem("page", document.querySelector(".entries").innerHTML.toString());
      },300);
    });
  });
});
