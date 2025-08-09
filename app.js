const sounds = {
    rain: {
        name: "Дождь",
        file: "../src/assets/sounds/rain.mp3",
        background: "../src/assets/rainy-bg.jpg",
    },
    summer: {
        name: "Лето",
        file: "../src/assets/sounds/summer.mp3",
        background: "../src/assets/summer-bg.jpg",
    },
    winter: {
        name: "Зима",
        file: "../src/assets/sounds/winter.mp3",
        background: "../src/assets/winter-bg.jpg",
    },
};
let currentAudio = null;
let currentSoundKey = null;
let isPaused = false;
const buttons = document.querySelectorAll("button[data-sound]");
const volumeSlider = document.getElementById("volume");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const soundKey = button.getAttribute("data-sound");
        if (!soundKey) return;
        if (currentSoundKey === soundKey) {
            if (currentAudio && !isPaused) {
                currentAudio.pause();
                isPaused = true;
            } else if (currentAudio && isPaused) {
                currentAudio.play();
                isPaused = false;
            }
        } else {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            const sound = sounds[soundKey];
            const audio = new Audio(
                sound === null || sound === void 0 ? void 0 : sound.file
            );
            audio.loop = true;
            audio.volume = parseFloat(volumeSlider.value);
            audio.play();
            currentAudio = audio;
            currentSoundKey = soundKey;
            isPaused = false;
            // const container = document.querySelector(
            //     ".container"
            // ) as HTMLElement;
            // container.style.backgroundImage = `url(${sound?.background})`;
            document.body.style.backgroundImage = `url(${
                sound === null || sound === void 0 ? void 0 : sound.background
            })`;
        }
    });
});
volumeSlider.addEventListener("input", () => {
    if (currentAudio) {
        currentAudio.volume = parseFloat(volumeSlider.value);
    }
});
export {};
//# sourceMappingURL=app.js.map
