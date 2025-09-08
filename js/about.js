const reviews = [
  {
    name: "Ei Ei",
    sign: "♓︎ Pisces",
    text: "Pisces ဆိုတာ စိတ်နူးညံ့ပြီး သနားတတ်သူကြီးပါ😌 အချစ်ရေးမှာတော့ Drama ထက်ပိုပြီး romantic ဖြစ်နေတတ်သူပေါ့ တစ်ခါတစ်လေ Seen တစ်ခုကြောင့်ပဲ စိတ်ထဲထောင်ချီအတွေးဆင်နေသူလေးပါ 🤭🐟",
    img: "./assets/images/about/ei ei.png",
  },
  {
    name: "Newbee",
    sign: "♊︎ Gemini",
    text: "Gemini များသည် စိတ်ဂဏာမငြိမ်ဘူးဟုထင်ရသော်လည်း တကယ်တမ်းတွင် စိတ်တည်ငြိမ်သောသူများဖြစ်ကြပါသည်။",
    img: "./assets/images/about/newbee.png",
  },
  {
    name: "Shoon",
    sign: "♉︎ Taurus",
    text: "Taurus တွေကို ဂျိုနဲ့လို့မပြောပါနဲ့။ ပလေးခံရတာမဟုတ်ဘူး ချစ်တတ်တာ သစ္စာရှိတာ အလံနီဆန်တာတွေထုတ်ပြလိုက်ရင်အကုန်ငိုသွားမယ်",
    img: "./assets/images/about/shoon.png",
  },
  {
    name: "Hua",
    sign: "♈︎ Aries",
    text: "စိတ်တိုလာရင် အလုပ်တစ်ခုကို မစဉ်းစားပဲ အရင်လုပ်ပြီးမှ ငါလုပ်လိုက်တာမှန်ရဲ့လား ပြန်စဉ်းစားပါတယ်၊ အဲ့ခါကျလဲ မှန်ပါတယ်။😉",
    img: "./assets/images/about/hua.png",
  },
  {
    name: "Scarlett",
    sign: "♊︎ Gemini",
    text: "ဖော်ရွေတာဟာ မျက်နှာများတာမဟုတ် အားလုံးထဲချစ်စရာကောင်းနေခြင်းသာဖြစ်သည်။",
    img: "./assets/images/about/scarlett.png",
  },
  {
    name: "May",
    sign: "♈︎ Aries",
    text: "တခါတလေဆို တစ်ယောက်ယောက်ကိုဖြစ်ဖြစ်၊ ဂရုထဲမှာဖြစ်ဖြစ် စာပို့ပြီးရင် ကိုယ်ပို့လိုက်တဲ့စာကို ကိုယ့်ဘာသာဖတ်ပြီး တစ်မျိုးကြီးဖြစ်နေရင် ပို့ပြီးချက်ချင်းဖြစ်ဖြစ်၊ ခဏနေမှဖြစ်ဖြစ် ပြန်ဖျက်ပါတယ်။ စိတ်အပြောင်းအလဲမြန်ပါတယ်။",
    img: "./assets/images/about/may.png",
  },
  {
    name: "Myuu",
    sign: "♊︎ Gemini",
    text: "လူတိုင်းက ဖရဲသီးလေးလို့ထင်နေကြပင်မဲ့ အမှန်က မြက်ခင်းစိမ်းလေးပါရှင်၊ ဂျိုထွက်တဲ့အထိချစ်တတ်တာမို့ အချစ်ခံချင်ရင် ဂျင်မနိုင်းလေးတွေကိုရွေးချယ်သင့်ပါကြောင်း😉",
    img: "./assets/images/about/myuu.png",
  },
  {
    name: "Ivy",
    sign: "♑︎ Capricorn",
    text: "Capricorn ‌တွေကိုနှလုံးသားမရှိဘူး၊ အေးတိအေးစက်ဖြစ်တယ်ပြောကြပေမယ့်တကယ်တမ်းလူတိုင်းကိုနှလုံးသားနုနုနယ်နယ်လေးနဲ့အချစ်တွေပေးတတ်ပါတယ်နော်🥰 p.s ကိုယ်နဲ့အကြောမတည့်သူများမပါ🤨",
    img: "./assets/images/about/ivy.png",
  },
  {
    name: "Martin",
    sign: "♊︎ Gemini",
    text: "Gemini တွေ မျက်နှာများတယ် play တယ်လို့ မပြောပါနဲ့ တကယ်playခံရမှ ခုနစ်ရက် ခုနစ်လ ထမင်းမစားနိုင်ဘဲနေမယ်နော် ချစ်လို့သတိပေးတာပါ😘",
    img: "./assets/images/about/Martin.png",
  },
  {
    name: "Shwe",
    sign: "♎︎︎ Libra",
    text: "ခွင့်လွှတ်တတ်ပေမယ့် မမေ့တတ်လို့ ရန်လာမစဖို့အကြံပေးချင်ပါတယ်။ လှတာမြင်ရင်ကောက်ကောက်ပါသွားလို့ အလှနဲ့လာပြီးမဆွဲဆောင်ကြပါနဲ့။ စိတ်ဝင်စားမှုကခဏလေးပဲကြာလို့။",
    img: "./assets/images/about/shwe.png",
  },
  {
    name: "Yun",
    sign: "♍︎ Virgo",
    text: "Virgo တွေဆိုတာ စာအုပ်တောင် ကတ္ထူမှဆိုတဲ့ တကယ့်စာအုပ်ကြီးသမားတွေဖြစ်ပြီး တအားဇီဇာကြောင်ကာ အတွေးများပါတယ်🥲",
    img: "./assets/images/about/yun.png",
  },
  {
    name: "Kywe Kywe",
    sign: "♏︎ Scorpio",
    text: "မချစ်တတ်ဘူးလို့မထင်ပါနဲ့ အစွဲအလမ်းကြီးပြီး အချစ်ကြီးပါတယ်။ မုန်းပြီလည်းဆိုလည်းလှည့်မကြည့်တော့ပါ",
    img: "./assets/images/about/kywe kywe.png",
  },
  {
    name: "Tun Tun",
    sign: "♑︎ Capricorn",
    text: "Capricorn တွေဟာ အောင်မြင်ချင်စိတ်အလွန်ပြင်းထန်ပြီး အခက်အခဲတွေကိုအနိုင်ရအောင်ကြိုးစားတတ်ပါတယ်",
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
      parseInt(getComputedStyle(document.documentElement).getPropertyValue("--avatar")) / 2 +
      "px";
    el.style.top =
      pt.y -
      parseInt(getComputedStyle(document.documentElement).getPropertyValue("--avatar")) / 2 +
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
  if (window.innerWidth < 900) {
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
