const reviews = [
  {
    name: "May",
    sign: "♈︎ Aries",
    text: "Best service I’ve used. Highly recommend.",
    img: "./assets/images/about/may.png",
  },
  {
    name: "Newbee",
    sign: "♊︎ Gemini",
    text: "Geminiများသည် စိတ်ဂဏာမငြိမ်ဘူးဟုထင်ရသော်လည်း တကယ်တမ်းတွင် စိတ်တည်ငြိမ်သောသူများဖြစ်ကြပါသည်။",
    img: "./assets/images/about/newbee.png",
  },
  {
    name: "Hua",
    sign: "♈︎ Aries",
    text: "Made me feel confident at every milestone.",
    img: "./assets/images/about/hua.png",
  },
  {
    name: "Shoon",
    sign: "♉︎ Taurus",
    text: "Development went smoothly. Great experience.",
    img: "./assets/images/about/shoon.png",
  },
  {
    name: "Scarlett",
    sign: "♊︎ Gemini",
    text: "ဖော်ရွေတာဟာ မျက်နှာများတာမဟုတ် အားလုံးထဲချစ်စရာကောင်းနေခြင်းသာဖြစ်သည်။",
    img: "./assets/images/about/scarlett.png",
  },
  {
    name: "Myuu",
    sign: "♊︎ Gemini",
    text: "လူတိုင်းက ဖရဲသီးလေးလိုထင်နေကြပင်မဲ့ အမှန်က မြက်ခင်းစိမ်းလေးပါရှင်၊ ဂျိုထွက်တဲ့အထိချစ်တက်တာမို အချစ်ခံချင်ရင် ဂျင်မနိုင်းလေးတွေကိုရွေးချယ်သင့်ပါကြောင်း😉",
    img: "./assets/images/about/myuu.png",
  },
  {
    name: "Martin",
    sign: "♑︎ Capricorn",
    text: "Made me feel confident at every milestone.",
    img: "./assets/images/about/Martin.png",
  },
  {
    name: "Ei Ei",
    sign: "♉︎ Taurus",
    text: "Development went smoothly. Great experience.",
    img: "./assets/images/about/ei ei.png",
  },
  {
    name: "Ivy",
    sign: "♈︎ Aries",
    text: "Best service I’ve used. Highly recommend.",
    img: "./assets/images/about/ivy.png",
  },
  {
    name: "Shwe",
    sign: "♊︎ Gemini",
    text: "Overall pleasurable experience. Seamless and easy process.",
    img: "./assets/images/about/shwe.png",
  },
  {
    name: "Yun",
    sign: "♑︎ Capricorn",
    text: "Made me feel confident at every milestone.",
    img: "./assets/images/about/yun.png",
  },
  {
    name: "Kywe Kywe",
    sign: "♉︎ Taurus",
    text: "Development went smoothly. Great experience.",
    img: "./assets/images/about/kywe kywe.png",
  },
  {
    name: "Tun Tun",
    sign: "♉︎ Taurus",
    text: "Development went smoothly. Great experience.",
    img: "./assets/images/about/tun tun.png",
  },
  
];

const path = document.getElementById("orbitPath");
const avatarsEl = document.getElementById("avatars");
const nameEl = document.querySelector(".name");
const metaEl = document.querySelector(".meta");
const textEl = document.querySelector(".text");

let start = 0;

let tPositions = [0.22, 0.5, 0.78];
let verticalD = "M 170 24 Q 28 210 170 396";
let horizontalD = "M 20 170 Q 120 28 220 170";

function pointAtT(p, t) {
  const L = p.getTotalLength();
  return p.getPointAtLength(L * t);
}

function render() {
  avatarsEl.innerHTML = "";
  const visible = [
    reviews[start % reviews.length],
    reviews[(start + 1) % reviews.length],
    reviews[(start + 2) % reviews.length],
  ];

  visible.forEach((rev, i) => {
    const pt = pointAtT(path, tPositions[i]);
    const el = document.createElement("div");
    el.className = "avatar" + (i === 1 ? " active" : "");
    el.style.left =
      pt.x -
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue("--avatar")
      ) /
        2 +
      "px";
    el.style.top =
      pt.y -
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue("--avatar")
      ) /
        2 +
      "px";
    el.innerHTML = `<img src="${rev.img}" alt="${rev.name}">`;
    avatarsEl.appendChild(el);
  });

  const active = visible[1];
  nameEl.textContent = active.name;
  metaEl.textContent = active.sign;
  textEl.textContent = `“${active.text}”`;
}

// navigation
const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");

upBtn.addEventListener("click", () => {
  start = (start - 1 + reviews.length) % reviews.length;
  render();
});
downBtn.addEventListener("click", () => {
  start = (start + 1) % reviews.length;
  render();
});

// switch orbit for mobile
function updateOrbit() {
  if (window.innerWidth < 768) {
    path.setAttribute("d", horizontalD);
    tPositions = [0.2, 0.5, 0.8];
    upBtn.textContent = "←";
    downBtn.textContent = "→";
  } else {
    path.setAttribute("d", verticalD);
    tPositions = [0.22, 0.5, 0.78];
    upBtn.textContent = "↑";
    downBtn.textContent = "↓";
  }
  render();
}

window.addEventListener("resize", updateOrbit);
updateOrbit();
