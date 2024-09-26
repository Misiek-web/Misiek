// Funkcja do pokazania obrazka po kliknięciu przycisku
document.getElementById('showImageBtn').addEventListener('click', function() {
    const image = document.getElementById('dynamicImage');
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
  <script>
    const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const songTitle = document.getElementById("songTitle");

    // Ustaw tytuł utworu
    const yourSongTitle = " - Travis Scott"; // Zmień tytuł utworu
    songTitle.textContent = Travis Scott; // Ustaw nowy tytuł

    playPauseBtn.addEventListener("click", function() {
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
</script>
});
