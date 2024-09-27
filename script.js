// Funkcja do pokazania obrazka po kliknięciu przycisku
document.getElementById('showImageBtn').addEventListener('click', function() {
    const image = document.getElementById('dynamicImage');
    if (image.style.display === 'none' || image.style.display === '') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
});
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const songTitle = document.getElementById('songTitle');
const toggleButton = document.getElementById('toggleButton');
const musicPlayer = document.getElementById('musicPlayer');
const musicPlayerContainer = document.getElementById('musicPlayerContainer');
const hideButton = document.getElementById('hideButton');

// Initialize music player visibility
musicPlayer.style.display = "none";

// Play/Pause Button Event Listener
playPauseBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playIcon.innerHTML = '<polygon points="10,10 10,20 20,15" fill="black" />'; // Change to pause icon
        songTitle.innerHTML = " - Travis Scott"; // Show song title
    } else {
        audio.pause();
        playIcon.innerHTML = '<polygon points="12,10 12,20 20,15" fill="black" />'; // Change to play icon
        songTitle.innerHTML = ""; // Hide song title
    }
});

// Toggle Music Player Display
toggleButton.addEventListener('click', function() {
    if (musicPlayer.style.display === "none" || musicPlayer.style.display === "") {
        musicPlayer.style.display = "block"; // Show player
        musicPlayer.classList.add('show');
        musicPlayer.classList.remove('hide'); // Ensure hide class is removed
    } else {
        musicPlayer.classList.remove('show');
        musicPlayer.classList.add('hide');
        setTimeout(() => {
            musicPlayer.style.display = "none"; // Hide player after animation
        }, 300); // Wait for animation to complete
    }
});

// Hide Button Event Listener
hideButton.addEventListener('click', function() {
    musicPlayer.classList.remove('show');
    musicPlayer.classList.add('hide');
    setTimeout(() => {
        musicPlayer.style.display = "none"; // Hide player after animation
    }, 300); // Wait for animation to complete
});
