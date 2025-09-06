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
    burmese: "မိဿရာသီ",
    href: "/signs/aries.html",
    icon: "/assets/images/home/signs/aries.svg",
    range: "Mar 21 – Apr 19",
  },
  {
    name: "Taurus",
    burmese: "ပြိဿရာသီ",
    href: "/signs/taurus.html",
    icon: "/assets/images/home/signs/taurus.svg",
    range: "Apr 20 – May 20",
  },
  {
    name: "Gemini",
    burmese: "မေထုန်ရာသီ",
    href: "/signs/gemini.html",
    icon: "/assets/images/home/signs/gemini.svg",
    range: "May 21 – Jun 20",
  },
  {
    name: "Cancer",
    burmese: "ကရကဋ်ရာသီ",
    href: "/signs/cancer.html",
    icon: "/assets/images/home/signs/cancer.svg",
    range: "Jun 21 – Jul 22",
  },
  {
    name: "Leo",
    burmese: "သိဟ်ရာသီ",
    href: "/signs/leo.html",
    icon: "/assets/images/home/signs/leo.svg",
    range: "Jul 23 – Aug 22",
  },
  {
    name: "Virgo",
    burmese: "ကန်ရာသီ",
    href: "/signs/virgo.html",
    icon: "/assets/images/home/signs/virgo.svg",
    range: "Aug 23 – Sep 22",
  },
  {
    name: "Libra",
    burmese: "တူရာသီ",
    href: "/signs/libra.html",
    icon: "/assets/images/home/signs/libra.svg",
    range: "Sep 23 – Oct 22",
  },
  {
    name: "Scorpio",
    burmese: "ဗြိစ္ဆာရာသီ",
    href: "/signs/scorpio.html",
    icon: "/assets/images/home/signs/scorpio.svg",
    range: "Oct 23 – Nov 21",
  },
  {
    name: "Sagittarius",
    burmese: "ဓနုရာသီ",
    href: "/signs/sagittarius.html",
    icon: "/assets/images/home/signs/sagittarius.svg",
    range: "Nov 22 – Dec 21",
  },
  {
    name: "Capricorn",
    burmese: "မကာရရာသီ",
    href: "/signs/capricorn.html",
    icon: "/assets/images/home/signs/capricorn.svg",
    range: "Dec 22 – Jan 19",
  },
  {
    name: "Aquarius",
    burmese: "ကုံရာသီ",
    href: "/signs/aquarius.html",
    icon: "/assets/images/home/signs/aquarius.svg",
    range: "Jan 20 – Feb 18",
  },
  {
    name: "Pisces",
    burmese: "မိန်ရာသီ",
    href: "/signs/pisces.html",
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
  const burmese = node.querySelector(".burmese");
  const range = node.querySelector(".range");
  a.href = s.href;
  img.src = s.icon;
  img.alt = s.name;
  name.textContent = s.name;
  burmese.textContent = s.burmese;
  range.textContent = s.range;
  node.querySelector(".col-6").style.setProperty("--d", i * 0.03 + "s");
  node.querySelector(".zodiac-card").classList.add("fade-up");
  grid.appendChild(node);
});
document.querySelectorAll("#z-grid .fade-up").forEach((el) => io.observe(el));

// Tarot draw
const TAROT = [
  "the-fool.svg",
  "the-magician.svg",
  "the-high-priestess.svg",
  "the-empress.svg",
  "the-emperor.svg",
  "the-hierophant.svg",
  "the-lovers.svg",
  "the-chariot.svg",
  "strength.svg",
  "the-hermit.svg",
  "wheel-of-fortune.svg",
  "justice.svg",
  "the-hanged-man.svg",
  "death.svg",
  "temperance.svg",
  "the-devil.svg",
  "the-tower.svg",
  "the-star.svg",
  "the-moon.svg",
  "the-sun.svg",
  "the-world.svg",
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
