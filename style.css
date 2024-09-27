/* Ciemny motyw */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #1a1a1a;  /* Ciemne tło */
    color: #f1f1f1;  /* Jasny tekst */
    min-height: 100vh;
}

/* Nagłówek */
header {
    display: flex;
    justify-content: space-between; /* Rozdziela logo i nawigację */
    align-items: center;
    padding: 20px;
    background: linear-gradient(to right, #f97316, #f43f5e);
}

h1 {
    margin-left: 20px; /* Margines od lewej strony */
    font-size: 24px;
    color: white;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 15px;
}

nav ul li a.active {
    background-color: rgba(0, 255, 255, 0.5); /* Aqua z 50% przezroczystością */
    color: black; /* Kolor tekstu dla aktywnej zakładki */
    font-weight: bold; /* Pogrubienie tekstu */
    border-radius: 5px; /* Zaokrąglenie rogów */
    padding: 5px 10px; /* Wewnętrzny odstęp */
}

nav ul li a {
    color: white;
    text-decoration: none;
    padding: 10px;
    transition: background-color 0.3s, color 0.3s; /* Animacja przejścia */
}

nav ul li a:hover {
    background-color: rgba(255, 255, 255, 0.2); /* Kolor tła na hover */
    color: #f97316; /* Zmiana koloru tekstu na hover */
}

/* Główna zawartość */
main {
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px; /* Odstęp od stopki */
}

section {
    margin-bottom: 20px;
}

/* Stylizacja widgetów */
.widgets-container {
    display: flex; /* Flexbox do ułożenia widgetów obok siebie */
    flex-wrap: wrap; /* Pozwala na przełamywanie wierszy */
    justify-content: space-between; /* Rozdziela widgety */
    gap: 20px; /* Odstęp między widgetami */
    margin: 20px; /* Margines dla całego kontenera */
}

.widget {
    position: relative; /* Umożliwia pozycjonowanie elementów wewnętrznych */
    border-radius: 10px; /* Zaokrąglenie */
    width: calc(50% - 10px); /* Ustal szerokość na 50% z uwzględnieniem marginesów */
    overflow: hidden; /* Ukrywa nadmiarowe elementy */
    text-align: center; /* Wyśrodkowanie tekstu */
    color: white; /* Kolor tekstu */
    transition: transform 0.3s ease; /* Dodano efekt powiększenia przy najechaniu */
    cursor: pointer; /* Kursor wskazuje, że widget jest klikalny */
}

.widget img {
    width: 100%; /* Obrazek rozciąga się na szerokość widgetu */
    height: auto; /* Automatyczna wysokość */
    display: block; /* Usunięcie domyślnego marginesu */
    transition: opacity 0.3s ease; /* Animacja na zmianę przezroczystości */
}

.widget:hover img {
    opacity: 0.5; /* Przyciemnienie zdjęcia na 50% przy najechaniu */
}

/* Efekty najechania */
.widget:hover {
    transform: scale(1.05); /* Powiększa widget przy najechaniu */
}

.widget-content {
    position: absolute; /* Pozycjonowanie tekstu */
    top: 50%; /* Wyrównanie do środka */
    left: 50%; /* Wyrównanie do środka */
    transform: translate(-50%, -50%); /* Wyśrodkowanie */
    opacity: 0; /* Początkowo niewidoczne */
    transition: opacity 0.3s ease; /* Animacja na zmianę przezroczystości */
    text-align: center; /* Wyśrodkowanie tekstu */
    color: white; /* Kolor tekstu na biały */
}

.widget:hover .widget-content {
    opacity: 1; /* Widoczność tekstu przy najechaniu */
}

.widget h3 {
    margin: 0 0 10px; /* Odstęp od tytułu */
    color: white; /* Kolor tytułu na biały */
}

.widget p {
    margin: 0; /* Usunięcie domyślnego marginesu */
}

/* Stopka */
footer {
    background-color: #333;
    color: white;
    padding: 10px;
    text-align: center;
    position: relative;
    bottom: 0;
    width: 100%;
}

/* Stylizacja linków */
footer a {
    color: #f97316;
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}

/* Stylizacja przycisku Play/Pause */
#playPauseBtn {
    background-color: transparent; /* Bez tła */
    border: none; /* Bez ramki */
    border-radius: 50%; /* Okrągły przycisk */
    width: 40px; /* Szerokość przycisku */
    height: 40px; /* Wysokość przycisku */
    display: flex; /* Użycie flexbox */
    align-items: center; /* Wyśrodkowanie */
    justify-content: center; /* Wyśrodkowanie */
    transition: background-color 0.3s; /* Płynne przejście */
}

#playPauseBtn:hover {
    background-color: rgba(0, 0, 0, 0.2); /* Efekt najechania */
}

/* Wysuwany panel z odtwarzaczem */
#musicPlayerContainer {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
}

#toggleButton {
    background-color: #f97316;
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px 0 0 5px;
    transition: background-color 0.3s;
}

#toggleButton:hover {
    background-color: #f43f5e;
}

#musicPlayer {
    display: none; /* Domyślnie ukryty */
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    color: white;
    border-radius: 10px;
    margin-left: -200px; /* Panel będzie wysunięty na lewo od ekranu */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Wysunięty panel */
#musicPlayer.open {
    display: block;
}
