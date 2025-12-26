
//The card rotation effect
if (window.matchMedia("(pointer: fine)").matches) {
  const card = document.querySelector(".card")
  
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
  
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
  
    const strength = 15; // Edit this for the ammount of rotation, this is in degrees.

    const rotY= (e.clientX - centerX) /(rect.width / 2) * strength;
    const rotX = (e.clientY - centerY) /(rect.height / 2) * -strength;
  
  
    
    card.style.transform = `perspective(55vw) rotateY(${ rotY}deg) rotateX(${ rotX}deg)`;
  });

  card.addEventListener('mouseleave', () => {
  card.style.transform = `perspective(55vw)`; // Reset rotation
});
}


const toastBox = document.getElementById("toast-box")

function showToast(message) {
  const toast = document.createElement('div');
  toast.classList.add('toast-msg');
  toast.innerText = message;
  
  toastBox.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

discordbtn = document.getElementById("discord")

discordbtn.addEventListener('click', () => {
  navigator.clipboard.writeText("DISCORD").then(() => {
    showToast("Discord ID copied to your clipboard.");
  }).catch(err => {
    showToast("Error, Failed to copy!"); // Fallback just in case
  });
});




const audio = document.getElementById('audio-track');
const playBtn = document.getElementById('play-pause-btn');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const timeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');


//Play/Pause Functionality
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = "||";
  } else {
    audio.pause();
    playBtn.innerHTML = "▶";
  }
});

//Updating the progress bar and time
audio.addEventListener('timeupdate', () => {
  const { duration, currentTime } = audio;
  const progressPercent = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
  
  timeDisplay.textContent = formatTime(currentTime);
});

//Set Duration when metadata loads
audio.addEventListener('loadedmetadata', () => {
  durationDisplay.textContent = formatTime(audio.duration);
});

//Skipping the song
progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  
  audio.currentTime = (clickX / width) * duration;
});

// Helper function to format seconds into MM:SS
function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}