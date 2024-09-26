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
    songTitle.textContent = yourSongTitle; // Ustaw nowy tytuł

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
    <script>
    async function fetchWeather() {
        const apiKey = '50630805fd0a9133d80857b6d339217a'; // Twój klucz API
        const location = 'Warsaw'; // Zmień na swoją lokalizację, jeśli chcesz
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            document.getElementById('location').textContent = data.name;
            document.getElementById('temperature').textContent = `Temperatura: ${data.main.temp}°C`;
            document.getElementById('condition').textContent = `Stan: ${data.weather[0].description}`;
        } else {
            console.error('Błąd pobierania pogody:', data.message);
        }
    }

    // Wywołaj funkcję na załadowanie strony
    window.onload = fetchWeather;
</script>

});
