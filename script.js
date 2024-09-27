// Funkcja do pokazania obrazka po kliknięciu przycisku
document.getElementById('showImageBtn').addEventListener('click', function() {
    const image = document.getElementById('dynamicImage');
    if (image.style.display === 'none' || image.style.display === '') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
});

// Funkcja do zarządzania odtwarzaczem muzyki
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
const songTitle = document.getElementById("songTitle");

// Ustaw tytuł utworu
const yourSongTitle = " - Travis Scott"; // Zmień tytuł utworu
songTitle.textContent = yourSongTitle; // Ustaw nowy tytuł

playPauseBtn.addEventListener
