const messages = [
  "EID-UL-ADHA MUBARAK 🌙",
  "Ek aur baat...",
  "I LOVE YOU ❤️"
];

const gifs = [
  "assets/gif1.gif",
  "assets/gif2.gif",
  "assets/gif3.gif"
];

let index = 0;
const messageDiv = document.getElementById('message');
const gifImg = document.getElementById('gif');
const nextBtn = document.getElementById('nextBtn');

function showMessage() {
  if (index < messages.length) {
    messageDiv.textContent = messages[index];
    gifImg.src = gifs[index];
    index++;
  } else {
    messageDiv.textContent = "Bas itna hi tha 😊";
    gifImg.style.display = 'none';
    nextBtn.style.display = 'none';
  }
}

nextBtn.addEventListener('click', showMessage);
showMessage();