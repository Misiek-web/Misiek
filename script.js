// Funkcja do pokazania obrazka po kliknięciu przycisku
document.getElementById('showImageBtn').addEventListener('click', function() {
    const image = document.getElementById('dynamicImage');
    // Przełącz widoczność obrazka
    image.style.display = (image.style.display === 'none' || image.style.display === '') ? 'block' : 'none';
});

const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const songTitle = document.getElementById('songTitle');
const toggleButton = document.getElementById('toggleButton');
const musicPlayer = document.getElementById('musicPlayer');
const hideButton = document.getElementById('hideButton');

// Ustawienie widoczności odtwarzacza na 'none'
musicPlayer.style.display = "none";

// Funkcja do odtwarzania/pauzowania
playPauseBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playIcon.innerHTML = '<polygon points="10,10 10,20 20,15" fill="black" />'; // Ikona pauzy
        songTitle.innerHTML = " - Travis Scott"; // Tytuł utworu
    } else {
        audio.pause();
        playIcon.innerHTML = '<polygon points="12,10 12,20 20,15" fill="black" />'; // Ikona odtwarzania
        songTitle.innerHTML = ""; // Ukryj tytuł utworu
    }
});

// Funkcja do rozwijania/zwijania odtwarzacza
toggleButton.addEventListener('click', function() {
    musicPlayer.style.display = (musicPlayer.style.display === "none" || musicPlayer.style.display === "") ? "block" : "none"; // Przełącz widoczność odtwarzacza
    if (musicPlayer.style.display === "block") {
        songTitle.innerHTML = " - Travis Scott"; // Przywróć tytuł utworu
    }
});

// Funkcja do ukrywania odtwarzacza
hideButton.addEventListener('click', function() {
    musicPlayer.style.display = "none"; // Ukryj odtwarzacz po naciśnięciu przycisku
});
