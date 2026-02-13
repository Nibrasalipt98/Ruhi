let messages = [
  "Really sure?",
  "Think again 🥺",
  "Don’t break my heart 💔",
  "Last chance 😳",
  "Okay okay… but still 💖"
];

let index = 0;

function handleNoClick() {
   const noBtn = document.querySelector('.no-button');
  const yesBtn = document.querySelector('.yes-button');

  noBtn.textContent = messages[index % messages.length];

  if (index >= messages.length - 1) {
    noBtn.disabled = true;
    noBtn.style.opacity = "0.5";
    noBtn.style.cursor = "not-allowed";
    noBtn.textContent = "No option 😜";
  }

  index++;

  let currentSize = window.getComputedStyle(yesBtn).fontSize;
  yesBtn.style.fontSize = (parseFloat(currentSize) + 4) + "px";
}

function handleYesClick() {
  window.location.href = "yes.html";
}
