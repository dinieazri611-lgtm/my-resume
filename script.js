function updateDateTime() {
  const now = new Date();

  const options = {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };

  document.getElementById("datetime").innerHTML =
    now.toLocaleString('en-GB', options);
}

setInterval(updateDateTime, 1000);
updateDateTime();

 const music = document.getElementById("bgm");
  const btn = document.getElementById("audioBtn");

  let isPlaying = false;

  btn.addEventListener("click", () => {
    if (!isPlaying) {
      music.play();
      btn.textContent = "⏸";
      btn.classList.add("playing");
    } else {
      music.pause();
      btn.textContent = "▶";
      btn.classList.remove("playing");
    }
    isPlaying = !isPlaying;
  });
