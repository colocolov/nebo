document.querySelectorAll(".player").forEach((player) => {
  const audio = player.querySelector(".player__audio");
  const playBtn = player.querySelector(".player__play-src");
  const title = player.querySelector(".player__title");
  const progressBar = player.querySelector(".player__progress-bar");
  const muteBtn = player.querySelector(".player__sound-muteicon");
  const volumeSlider = player.querySelector(".player__sound-volume");
  const maxVolumeBtn = player.querySelector(".player__sound-laughticon");

  // Play/Pause
  function togglePlayPause() {
    const isPlaying = player.classList.contains("play");
    if (isPlaying) {
      audio.pause();
      player.classList.remove("play");
      playBtn.src = "./images/icons/sprite.svg#play";
    } else {
      stopAllPlayers();
      audio.play();
      player.classList.add("play");
      playBtn.src = "./images/icons/sprite.svg#pause";
    }
  }

  // Остановка других плееров
  function stopAllPlayers() {
    document.querySelectorAll(".player").forEach((otherPlayer) => {
      if (otherPlayer !== player) {
        otherPlayer.classList.remove("play");
        const otherAudio = otherPlayer.querySelector(".player__audio");
        const otherPlayBtn = otherPlayer.querySelector(".player__play-src");
        otherAudio.pause();
        otherAudio.currentTime = 0;
        otherPlayBtn.src = "./images/icons/sprite.svg#play";
      }
    });
  }

  // Mute
  function toggleMute() {
    audio.volume = 0;
    volumeSlider.value = 0;
    muteBtn.src = "./images/icons/sprite.svg#mute-full";
    maxVolumeBtn.src = "./images/icons/sprite.svg#laught";
  }

  // Max Volume
  function setMaxVolume() {
    audio.volume = 1;
    volumeSlider.value = 100;
    muteBtn.src = "./images/icons/sprite.svg#mute";
    maxVolumeBtn.src = "./images/icons/sprite.svg#laught-full";
  }

  // Volume Control
  function updateVolume() {
    audio.volume = volumeSlider.value / 100;
    if (audio.volume === 0) {
      muteBtn.src = "./images/icons/sprite.svg#mute-full";
      maxVolumeBtn.src = "./images/icons/sprite.svg#laught";
    } else if (audio.volume > 0.75) {
      maxVolumeBtn.src = "./images/icons/sprite.svg#laught-full";
    } else {
      muteBtn.src = "./images/icons/sprite.svg#mute";
      maxVolumeBtn.src = "./images/icons/sprite.svg#laught";
    }
  }

  // Update Progress Bar
  function updateProgress() {
    if (progressBar) { // Проверка, что progressBar существует
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${progressPercent}%`;
    }
  }

  // Event listeners
  player.querySelector(".player__play").addEventListener("click", togglePlayPause);
  player.querySelector(".player__sound-mute").addEventListener("click", toggleMute);
  player.querySelector(".player__sound-laught").addEventListener("click", setMaxVolume);
  volumeSlider.addEventListener("input", updateVolume);

  // Update progress bar as audio plays
  audio.addEventListener("timeupdate", updateProgress);

  // Reset play icon and progress bar when audio ends
  audio.addEventListener("ended", () => {
    playBtn.src = "./images/icons/sprite.svg#play";
    player.classList.remove("play");
    if (progressBar) {
      progressBar.style.width = "0%";
    }
  });
});
