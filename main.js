const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Add event listener to move the "No" button on mouseover
btnNo.addEventListener("mouseover", (event) => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";
});

// Add event listener to handle "Yes" button click
btnYes.addEventListener("click", (e) => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
  
  // Play the new audio
  const bgMusic = document.getElementById('background-music');
  const newAudio = document.getElementById('new-audio');

  bgMusic.pause(); // Pause the background music
  newAudio.play(); // Play the new audio
});

// Add event listener to handle "No" button click
btnNo.addEventListener("click", (e) => {
  btnYes.classList.add("hide");
  btnNo.classList.add("hide"); // Hide the "No" button
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");

  // Display the GIF
  const gifElement = document.createElement('img');
  gifElement.src = "assets/6821fef95215e01b875144bc8cada9cc.gif";
  container.appendChild(gifElement);

  // Hide the GIF after a delay (in milliseconds)
  setTimeout(() => {
    gifElement.classList.add("hide");
  }, 3000); // Adjust the delay as needed
});

let audioPlayed = false;

// Function to play the background music
const playAudio = () => {
  if (!audioPlayed) {
    const bgMusic = document.getElementById('background-music');
    bgMusic.play().catch(e => console.error("Auto-play was prevented: " + e.message));
    audioPlayed = true; // Prevents multiple play attempts
  }
};

// Play audio on page load or visibility change
document.addEventListener('DOMContentLoaded', playAudio);
document.addEventListener('visibilitychange', playAudio);

// JavaScript to open and close the modal
const modal = document.getElementById("modal");
const btn = document.getElementById("yourButtonId"); // Replace with your button's ID
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
