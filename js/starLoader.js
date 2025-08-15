function createStars() {
  const container = document.createElement("div");
  container.className = "stars-container";
  document.body.appendChild(container);

  const starCount = 100;
  const starTypes = ["normal", "glowing", "colored", "shooting"];

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    const starType =
      i % 15 === 0
        ? starTypes[3]
        : i % 5 === 0
        ? starTypes[2]
        : i % 3 === 0
        ? starTypes[1]
        : starTypes[0];

    star.className = `star star-${starType}`;

    const size = Math.random() * (starType === "shooting" ? 1 : 2) + 0.5;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const opacity = Math.random() * 0.7 + 0.3;
    const duration = Math.random() * 5 + 3 + "s";
    const delay = Math.random() * 10 + "s";

    star.style.setProperty("--opacity", opacity);
    star.style.setProperty("--duration", duration);
    star.style.animationDelay = delay;

    if (starType === "shooting") {
      star.style.width = `${size * 4}px`;
      star.style.height = `${size}px`;
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.borderRadius = "50%";
      star.style.setProperty("--rotation", `${Math.random() * 45 - 22.5}deg`);
      star.style.animation = `shooting ${Math.random() * 2 + 1.5}s infinite`;
      star.style.animationDelay = `${Math.random() * 20}s`;
      star.style.background = `linear-gradient(
        to right,
        transparent 0%,
        rgba(255,255,255,0.8) 30%,
        rgba(255,255,255,0.9) 50%,
        rgba(255,255,255,0.8) 70%,
        transparent 100%
      )`;
    } else {
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.borderRadius = "50%";

      if (starType === "colored") {
        const hue = Math.random() * 60 + 200;
        star.style.backgroundColor = `hsla(${hue}, 80%, 70%, ${opacity})`;
      } else if (starType === "glowing") {
        star.style.boxShadow = `0 0 ${size * 3}px ${size / 2}px rgba(255, 255, 255, 0.5)`;
      }
    }

    container.appendChild(star);
  }
}

document.addEventListener("DOMContentLoaded", createStars);
