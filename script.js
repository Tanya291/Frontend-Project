let audio = document.getElementById("radio-player");
let nowPlaying = document.getElementById("now-playing");
let volumeSlider = document.getElementById("volume");
let themeToggle = document.getElementById("themeToggle");

function playStation(name, url, logo) {
  audio.src = url;
  audio.play();
  nowPlaying.innerHTML = `
    <img src="${logo}" alt="${name}" style="height: 30px; vertical-align: middle; margin-right: 10px;">
    Now Playing: <strong>${name}</strong>`;
}

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeToggle.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
});
