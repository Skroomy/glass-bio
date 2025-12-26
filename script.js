
const card = document.querySelector(".card")

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;


  const rotY= (e.clientX - centerX) /(rect.width / 2) * 15;
  const rotX = (e.clientY - centerY) /(rect.height / 2) * -15;


  
  card.style.transform = `perspective(55vw) rotateY(${ rotY}deg) rotateX(${ rotX}deg)`;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = `perspective(55vw)`;
});

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
  navigator.clipboard.writeText("Gejus").then(() => {
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


// 1. Play/Pause Functionality
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = "||"; // Change icon to Pause
  } else {
    audio.pause();
    playBtn.innerHTML = "▶"; // Change icon to Play
  }
});

// 2. Update Progress Bar & Time
audio.addEventListener('timeupdate', () => {
  const { duration, currentTime } = audio;
  const progressPercent = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
  
  // Update time display
  timeDisplay.textContent = formatTime(currentTime);
});

// 3. Set Duration when metadata loads
audio.addEventListener('loadedmetadata', () => {
  durationDisplay.textContent = formatTime(audio.duration);
});

// 4. Scrubbing (Click on progress bar to seek)
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

const sky = document.querySelector('.effects');

function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  
  
  star.style.left = `${Math.random() * window.innerWidth}px`;
  star.style.top = `${Math.random() * window.innerHeight}px`;
  
  const width = Math.random() * 100 + 50 + 'px';
  star.style.width = width;

  sky.appendChild(star);
  
  setTimeout(() => {
    star.remove();
  }, 6000); 
}

// Spawn a star every 100ms
setInterval(createStar, 100);