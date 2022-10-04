const player = document.querySelectorAll(".player__track"),
  playBtn = document.querySelectorAll(".player__play"),
  soundLaught = document.querySelectorAll(".player__sound-laught"),
  soundVolume = document.querySelectorAll(".player__sound input"),
  soundMute = document.querySelectorAll(".player__sound-mute");
// soundLaughtIcon = document.querySelector(".player__sound-laughticon"),
// soundVolume = document.querySelector(".player__sound-volume"),
// soundMuteIcon = document.querySelector(".player__sound-muteicon");

// Play
function playSong(song) {
  let audio = song.parentNode.children[2];
  let icon = song.children[0];
  isPlaying();
  song.parentNode.classList.add("play");
  icon.src = "./images/icons/sprite.svg#pause";
  audio.play();
  audio.volume = 0.25;
}
// Pause
function pauseSong(song) {
  let audio = song.parentNode.children[2];
  let icon = song.children[0];
  isPlaying();
  song.parentNode.classList.remove("play");
  icon.src = "./images/icons/sprite.svg#play";
  audio.pause();
}
// Delete class play if other sonf is playing
function isPlaying() {
  player.forEach((el) => {
    const isPlaying = el.classList.contains("play");
    const iconPlay = el.childNodes[1].children[0];
    iconPlay.src = "./images/icons/sprite.svg#play";
    if (isPlaying) {
      const elem = el.childNodes;
      elem[5].currentTime = 0;
      elem[5].pause();
      el.classList.remove("play");
    }
  });
}

playBtn.forEach((song) => {
  song.addEventListener("click", (e) => {
    const isPlaying = song.parentNode.classList.contains("play");
    if (isPlaying) {
      pauseSong(song);
    } else {
      playSong(song);
    }
  });
});

// Mute and Laught
soundMute.forEach((item) => {
  item.addEventListener("click", () => {
    let audio = item.parentNode.parentNode.children[2];
    let mute = item.children[0];
    let volume = item.parentNode.children[1];
    let laught = item.parentNode.children[2].children[0];
    mute.src = "./images/icons/sprite.svg#mute-full";
    volume.value = 0;
    laught.src = "./images/icons/sprite.svg#laught";
    audio.volume = 0;
  });
});

soundLaught.forEach((item) => {
  item.addEventListener("click", () => {
    let audio = item.parentNode.parentNode.children[2];
    let mute = item.parentNode.children[0].children[0];
    let volume = item.parentNode.children[1];
    let laught = item.children[0];
    mute.src = "./images/icons/sprite.svg#mute";
    volume.value = 100;
    laught.src = "./images/icons/sprite.svg#laught-full";
    audio.volume = 1;
  });
});

// Set volume
soundVolume.forEach((item) => {
  item.addEventListener("input", () => {
    let audio = item.parentNode.parentNode.children[2];
    let mute = item.parentNode.children[0].children[0];
    let laught = item.parentNode.children[2].children[0];
    audio.volume = item.value / 100;
    if (audio.volume == 0) {
      mute.src = "./images/icons/sprite.svg#mute-full";
      laught.src = "./images/icons/sprite.svg#laught";
    } else if (audio.volume > 0.75) {
      laught.src = "/images/icons/sprite.svg#laught-full";
    } else {
      mute.src = "./images/icons/sprite.svg#mute";
      laught.src = "./images/icons/sprite.svg#laught";
    }
  });
});
