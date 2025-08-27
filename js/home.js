const opts = { year: "numeric", month: "long", day: "numeric" };
const todayStr = new Date().toLocaleDateString(undefined, opts);
document.getElementById("current-date")?.replaceChildren(document.createTextNode(todayStr));
document.getElementById("ticker-date")?.replaceChildren(document.createTextNode(todayStr));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("revealed");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".fade-up").forEach((el) => io.observe(el));

const SIGNS = [
  {
    name: "Aries",
    href: "/signs/aries",
    icon: "/assets/images/home/signs/aries.svg",
    range: "Mar 21 – Apr 19",
  },
  {
    name: "Taurus",
    href: "/signs/taurus",
    icon: "/assets/images/home/signs/taurus.svg",
    range: "Apr 20 – May 20",
  },
  {
    name: "Gemini",
    href: "/signs/gemini",
    icon: "/assets/images/home/signs/gemini.svg",
    range: "May 21 – Jun 20",
  },
  {
    name: "Cancer",
    href: "/signs/cancer",
    icon: "/assets/images/home/signs/cancer.svg",
    range: "Jun 21 – Jul 22",
  },
  {
    name: "Leo",
    href: "/signs/leo",
    icon: "/assets/images/home/signs/leo.svg",
    range: "Jul 23 – Aug 22",
  },
  {
    name: "Virgo",
    href: "/signs/virgo",
    icon: "/assets/images/home/signs/virgo.svg",
    range: "Aug 23 – Sep 22",
  },
  {
    name: "Libra",
    href: "/signs/libra",
    icon: "/assets/images/home/signs/libra.svg",
    range: "Sep 23 – Oct 22",
  },
  {
    name: "Scorpio",
    href: "/signs/scorpio",
    icon: "/assets/images/home/signs/scorpio.svg",
    range: "Oct 23 – Nov 21",
  },
  {
    name: "Sagittarius",
    href: "/signs/sagittarius",
    icon: "/assets/images/home/signs/sagittarius.svg",
    range: "Nov 22 – Dec 21",
  },
  {
    name: "Capricorn",
    href: "/signs/capricorn",
    icon: "/assets/images/home/signs/capricorn.svg",
    range: "Dec 22 – Jan 19",
  },
  {
    name: "Aquarius",
    href: "/signs/aquarius",
    icon: "/assets/images/home/signs/aquarius.svg",
    range: "Jan 20 – Feb 18",
  },
  {
    name: "Pisces",
    href: "/signs/pisces",
    icon: "/assets/images/home/signs/pisces.svg",
    range: "Feb 19 – Mar 20",
  },
];
const grid = document.getElementById("z-grid");
const tpl = document.getElementById("z-card");
SIGNS.forEach((s, i) => {
  const node = tpl.content.cloneNode(true);
  const a = node.querySelector("a");
  const img = node.querySelector("img");
  const name = node.querySelector(".name");
  const range = node.querySelector(".range");
  a.href = s.href;
  img.src = s.icon;
  img.alt = s.name;
  name.textContent = s.name;
  range.textContent = s.range;
  node.querySelector(".col-6").style.setProperty("--d", i * 0.03 + "s");
  node.querySelector(".zodiac-card").classList.add("fade-up");
  grid.appendChild(node);
});
document.querySelectorAll("#z-grid .fade-up").forEach((el) => io.observe(el));

// Tarot draw
const TAROT = [
  // "the-fool.png",
  // "the-magician.png",
  // "the-high-priestess.png",
  // "the-empress.png",
  // "the-emperor.png",
  // "the-hierophant.png",
  // "the-lovers.png",
  // "the-chariot.png",
  // "strength.png",
  "the-hermit.svg",
  // "wheel-of-fortune.png",
  // "justice.png",
  // "the-hanged-man.png",
  // "death.png",
  // "temperance.png",
  // "the-devil.png",
  // "the-tower.png",
  // "the-star.png",
  // "the-moon.png",
  // "the-sun.png",
  // "judgement.png",
  // "the-world.png",
];
const tarotBtn = document.getElementById("draw-card");
const tarotStack = document.getElementById("tarot-stack");
const tarotImg = document.getElementById("tarot-img");

tarotBtn?.addEventListener("click", () => {
  const file = TAROT[Math.floor(Math.random() * TAROT.length)];
  tarotImg.src = `/assets/images/tarot/${file}`;
  tarotStack.classList.remove("flipped");
  setTimeout(() => tarotStack.classList.add("flipped"), 60);
});
