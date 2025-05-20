const songs = [
    {
        id: 1,
        audioSrc: "mp3/song1.mp3",
        songName: "wrasdasd",
        songAutor: "asdasd",
        iconSrc: "img/song_iconka.png"
    },
    {
        id: 2,
        audioSrc: "mp3/song2.mp3",
        songName: "sigmaboy",
        songAutor: "я",
        iconSrc: "img/song.png"
    }
];
const player_icon = document.querySelector(".audio-icon");
const player_name = document.querySelector(".audio-name");
const player_autor = document.querySelector(".audio-autor");

const existingAudioPlayer = document.querySelector(".samaudio"); // Ищем по классу

const song_items = document.querySelectorAll(".sigma-item");

if (player_icon && song_items.length > 0 && existingAudioPlayer) { // Убедимся, что плеер найден
    song_items.forEach((song_item, index) => {
        song_item.addEventListener("click", () => {
            const song = songs[index];

            if (song) {
                player_icon.src = song.iconSrc;
                player_name.innerHTML = song.songName;
                    player_autor.innerHTML = song.songAutor;
                existingAudioPlayer.src = song.audioSrc; // Устанавливаем src EXISTING плеера
                existingAudioPlayer.load();
                existingAudioPlayer.play(); // Запускаем EXISTING плеер
            } else {
                console.error("Песня не найдена.");
            }
        });
    });
} else {
    console.error("Элемент с классом 'audio-icon', существующий плеер (samaudio) или элементы с классом 'sigma-item' не найдены.");
}