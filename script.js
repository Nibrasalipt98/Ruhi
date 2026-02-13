let messages = [
  "Really sure?",
  "Think again 🥺",
  "Don’t break my heart 💔",
  "Last chance 😳",
  "Okay okay… but still 💖"
];

let index = 0;
const noBtn = document.querySelector('.no-button');
const yesBtn = document.querySelector('.yes-button');

// Initially disable Yes button
yesBtn.disabled = true;
yesBtn.style.opacity = "0.5";
yesBtn.style.cursor = "not-allowed";
function handleNoClick() {
  // Change No button text
  noBtn.textContent = messages[index % messages.length];

  index++;

  // Make Yes button bigger
  let currentSize = window.getComputedStyle(yesBtn).fontSize;
  yesBtn.style.fontSize = (parseFloat(currentSize) + 4) + "px";

  // If last message reached, enable Yes button and disable No
  if (index >= messages.length) {
    yesBtn.disabled = false;
    yesBtn.style.opacity = "1";
    yesBtn.style.cursor = "pointer";

    noBtn.disabled = true;
    noBtn.style.opacity = "0.5";
    noBtn.style.cursor = "not-allowed";
    noBtn.textContent = "No option 😜";
  }
}

function handleYesClick() {
  if (!yesBtn.disabled) {
    window.location.href = "yes.html";
  }
}

function handleYesClick() {
  window.location.href = "yes.html";
}
