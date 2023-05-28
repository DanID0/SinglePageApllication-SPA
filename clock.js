function updateClock() {
  const now = new Date();
  const remainingSeconds =
    24 * 60 * 60 -
    (now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds());
  const hours = Math.floor(remainingSeconds / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = Math.floor(remainingSeconds % 60);
  const timeString = `<div class=Hours> ${hours
    .toString()
    .padStart(2, "0")}</div> : <div class=minutes>${minutes
    .toString()
    .padStart(2, "0")}</div>:<div class=seconds>${seconds
    .toString()
    .padStart(2, "0")}</div>`;

  document.getElementById("clock-timer").innerHTML = timeString;
}
setInterval(updateClock, 1000);
