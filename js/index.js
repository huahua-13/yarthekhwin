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
  const shootingStar = document.createElement("div");
  shootingStar.className = "shooting-star";

  // direction
  const angle = 45;
  const distance = 1000;

  const radians = (angle * Math.PI) / 180;
  const translateX = Math.cos(radians) * distance + "px";
  const translateY = Math.sin(radians) * distance + "px";

  // starting position
  const startX = Math.random() * 100;
  const startY = Math.random() * 30;
  shootingStar.style.left = startX + "%";
  shootingStar.style.top = startY + "%";

  // size
  const length = Math.random() * 80 + 200;
  shootingStar.style.width = length + "px";

  // color
  const colors = ["#cba6f7", "#f38ba8", "#a6e3a1", "#f9e2af", "#89b4fa", "#ffffff"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  shootingStar.style.background = `linear-gradient(to right, transparent, ${color})`;

  // duration
  const duration = Math.random() * 10 + 10;

  shootingStar.style.setProperty("--angle", angle + "deg");
  shootingStar.style.setProperty("--translateX", translateX);
  shootingStar.style.setProperty("--translateY", translateY);

  shootingStar.style.animation = `shootingStar ${duration}s ease-out forwards`;

  container.appendChild(shootingStar);

  setTimeout(() => {
    if (shootingStar.parentNode) {
      shootingStar.parentNode.removeChild(shootingStar);
    }
  }, duration * 1000);
}

function createInitialStarShower() {
  for (let i = 0; i < 10; i++) {
    createShootingStar();
  }
}

createInitialStarShower();

setInterval(() => {
  const count = Math.floor(Math.random() * 5) + 2;
  for (let i = 0; i < count; i++) {
    setTimeout(createShootingStar, i * 300);
  }
}, 3000);