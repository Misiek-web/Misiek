// Funkcja do pokazania obrazka po kliknięciu przycisku
document.getElementById('showImageBtn').addEventListener('click', function() {
    const image = document.getElementById('dynamicImage');
    if (image.style.display === 'none' || image.style.display === '') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
});

// Funkcja do obsługi odtwarzacza muzyki
document.getElementById('playPauseBtn').addEventListener('click', function() {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');

    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = `
            <svg id="pauseIcon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <circle cx="15" cy="15" r="15" fill="white" />
                <rect x="10" y="10" width="4" height="10" fill="black" />
                <rect x="16" y="10" width="4" height="10" fill="black" />
            </svg>
        `;
    } else {
        audio.pause();
        playPauseBtn.innerHTML = `
            <svg id="playIcon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <circle cx="15" cy="15" r="15" fill="white" />
                <polygon points="12,10 12,20 20,15" fill="black" />
            </svg>
        `;
    }
});

// Funkcja do wysuwania i chowania panelu z odtwarzaczem muzyki
document.getElementById('toggleButton').addEventListener('click', function() {
    const musicPlayer = document.getElementById('musicPlayer');
    const toggleButton = document.getElementById('toggleButton');

    if (musicPlayer.style.display === 'none' || musicPlayer.style.display === '') {
        musicPlayer.style.display = 'block'; // Pokazuje panel
        toggleButton.innerHTML = '&#9664;'; // Zmienia przycisk na strzałkę w lewo
    } else {
        musicPlayer.style.display = 'none'; // Chowa panel
        toggleButton.innerHTML = '&#9654;'; // Zmienia przycisk na strzałkę w prawo
    }
});

// Opcjonalnie: Funkcja, która automatycznie chowa odtwarzacz po zjechaniu kursorem
document.getElementById('musicPlayerContainer').addEventListener('mouseleave', function() {
    const musicPlayer = document.getElementById('musicPlayer');
    const toggleButton = document.getElementById('toggleButton');

    if (musicPlayer.style.display === 'block') {
        musicPlayer.style.display = 'none'; // Chowa panel
        toggleButton.innerHTML = '&#9654;'; // Zmienia przycisk na strzałkę w prawo
    }
});
