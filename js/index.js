const container = document.getElementById("stars");
for (let i = 0; i < 150; i++) {
  const star = document.createElement("div");

  const starType = Math.random();
  if (starType < 0.6) {
    star.className = "star star-normal";
  } else if (starType < 0.8) {
    star.className = "star star-glowing";
  } else if (starType < 0.95) {
    star.className = "star star-colored";

    const colors = ["#cba6f7", "#f38ba8", "#a6e3a1", "#f9e2af", "#89b4fa"];
    star.style.color = colors[Math.floor(Math.random() * colors.length)];
  } else {
    star.className = "star star-pulsing";
  }

  const size = Math.random() * 3 + 1 + "px";
  star.style.width = size;
  star.style.height = size;
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";
  star.style.setProperty("--duration", Math.random() * 5 + 3 + "s");
  star.style.setProperty("--opacity", Math.random() * 0.7 + 0.3);
  star.style.setProperty("--delay", Math.random() * 5 + "s");
  container.appendChild(star);
}

function createShootingStar() {
  const shooting = document.createElement("div");
  shooting.className = "star star-shooting";

  const fromTop = Math.random() > 0.5;
  if (fromTop) {
    shooting.style.top = "0%";
    shooting.style.left = Math.random() * 100 + "%";
  } else {
    shooting.style.top = Math.random() * 100 + "%";
    shooting.style.left = "100%";
  }

  const angle = Math.random() * 60 + 15;
  shooting.style.setProperty("--rotation", angle + "deg");

  const length = Math.random() * 220 + 80;
  shooting.style.width = length + "px";

  const duration = Math.random() * 1.7 + 0.8;
  shooting.style.animation = `shooting ${duration}s ease-out forwards`;

  const colors = ["#cba6f7", "#f38ba8", "#a6e3a1", "#f9e2af", "#89b4fa", "#ffffff"];
  shooting.style.background = `linear-gradient(to right, transparent, ${
    colors[Math.floor(Math.random() * colors.length)]
  })`;

  container.appendChild(shooting);
  setTimeout(() => shooting.remove(), duration * 1000);
}

for (let i = 0; i < 10; i++) {
  setTimeout(createShootingStar, i * 600);
}

setInterval(() => {
  const count = Math.floor(Math.random() * 5) + 1;
  for (let i = 0; i < count; i++) {
    setTimeout(createShootingStar, i * 200);
  }
}, 1000);
