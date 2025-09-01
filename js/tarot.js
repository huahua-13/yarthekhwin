const cards = document.querySelectorAll(".card");
const overlay = document.getElementById("overlay");
const popupImg = document.getElementById("popupImg");
const popupTitle = document.getElementById("popupTitle");
const popupDates = document.getElementById("popupDates");
const popupText = document.getElementById("popupText");
const closeBtn = document.getElementById("closeBtn");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    popupImg.src = card.getAttribute("data-img");
    popupTitle.textContent = card.getAttribute("data-title");
    popupDates.textContent = card.getAttribute("data-dates") || "";
    popupText.textContent = card.getAttribute("data-text");
    overlay.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) overlay.classList.remove("active");
});

function toggleCards() {
  const extras = document.querySelectorAll(".extra-cards");
  const btn = document.querySelector(".toggle-btn");
  extras.forEach((card) => {
    card.style.display = card.style.display === "block" ? "none" : "block";
  });
  btn.textContent = btn.textContent.includes("see")
    ? "Hide signs ▲"
    : "Click to see other signs ▼";
}
// ---------------------------------------------------------------------------------------

// Sample tarot card data
const tarotDeck = [
  {
    name: "The Fool",
    image: "/assets/tarot/filename/the-fool.svg",
    meaning:
      "စိတ်လှုပ်ရှားဖွယ် ခရီးစတင်သည် ၊ ခရီးထွက်သည် ၊ လမ်းသစ် ၊ စပြီးကိစ္စအတွက်ဆိုလျှင်တော့ မအောင်မြင်ပါ။",
  },
  {
    name: "The Magician",
    image: "/assets/tarot/filename/the-magician.svg",
    meaning:
      "လိုအပ်သော ပစ္စည်းစုံလင်စွာ ရရှိနေသည် လုပ်ရန်အသင့်ဖြစ်ခြင်း ၊ လုပ်ဆောင်မည်အရာ အဆင့်သင့်အခြေအနေရောက်နေသည် စတင်လှုပ်ရှားပါ။",
  },
  {
    name: "The High Priestess",
    image: "/assets/tarot/filename/the-high-priestess.svg",
    meaning:
      " စိတ်ကိုတည်ငြိမ်စွာထားပြီ အဖြေရှာဖွေပါ ၊ တရားထိုင်ခြင်းဖြင့် မိမိလိုအပ်သော အနေအထား စည်းချက်ကျနမှုကို ရှာဖွေခြင်း။",
  },
  {
    name: "The Empress",
    image: "/assets/tarot/filename/the-empress.svg",
    meaning:
      "ပြုစုပျိုးထောင်ရန် ဖန်တီးရန် အင်အားပြည့်သည် ၊ အရာရာပြည့်စုံနေလို့ သက်တောင့်သက်သာဖြစ်သည်။",
  },
  {
    name: "The Emperor",
    image: "/assets/tarot/filename/the-emperor.svg",
    meaning:
      "ကိစ္စများ တရားဥပဒေကြောင်းအရ ဖြစ်သွားမည် ၊ နောက်လိုက်များအတွက် ဦးဆောင်ရမည့်အချိန်ဖြစ်သည် ၊ ကိစ္စတစ်ခုကိုဦးဆောင် ဆုံးဖြတ်ရမည်။",
  },
  {
    name: "The Hierophant",
    image: "/assets/tarot/filename/the-hierophant.svg",
    meaning:
      "အလှူအတန်း၊ ဘုရားဖူး၊ ရိပ်သာစသည့်ဓမ္မကိစ္စအောင်မြင် ၊ တိုးတက်မှုရရန် ဘာလုပ်သင့်သည်ကို သက်ဝင်ယုံကြည်မှုဖြင့် ဆုံးဖြတ်ပါ။",
  },
  {
    name: "The Lovers",
    image: "/assets/tarot/filename/the-lovers.svg",
    meaning:
      "အကျိုးတူပူးပေါင်းခြင်း စပ်တူလုပ်ခြင်း ၊  အချစ်ကိစ္စအတွက်ဆိုလျှင် လမ်းမှန်ပေါ်ရောက်နေသည် ၊ ကိုယ်ရွေးချယ်သည့်ကိစ္စအတွက် တာဝန်ယူရမည်။",
  },
  {
    name: "The Chariot",
    image: "/assets/tarot/filename/the-chariot.svg",
    meaning:
      "အတိုက်အခံများစွာကြားမှ တိုးတက်မှုရရှိမည်၊ အခက်အခဲကြားမှ မယိုင်းမယိုင်ဘဲ ထိန်းချုပ်နိုင်ခြင်း ၊ အရှုံးမပေးဘဲ အခဲအခက်ကြားမှ အေးဆေးတည်ငြိမ်စွာ စိတ်ရှည်စွာ ဆက်လုပ်ကိုင်နိုင်မည်။",
  },
  {
    name: "Strength",
    image: "/assets/tarot/filename/strength.svg",
    meaning:
      "တွေးခေါ် အယူအဆမြင့်မားလာရန် တစ်ခုခုတွေကြုံနိုင်သည် ၊ အရှုံပေးခြင်းမဟုတ်ပါ အချိန်ယူ ထိန်းကျောင်းပြီး ပိုမြင့်သော လမ်းကို ရှာနေခြင်းသာဖြစ်သည် ၊ သူတပါးစိတ်အခြေအနေကိုနားလည်ခြင်း။",
  },
  {
    name: "The Hermit",
    image: "/assets/tarot/filename/the-hermit.svg",
    meaning:
      "လမ်းပြနိုင်သည့် ဆရာကောင်းတွေမည် ၊ ပြည်ပ သင်တန်း၊ ပြည်ပပညာသင် ရတတ်သည်။",
  },
  {
    name: "Wheel of Fortune",
    image: "/assets/tarot/filename/wheel-of-fortune.svg",
    meaning:
      "ရည်မှန်းချက်ပန်းတိုင် ၊ ကိုယ့်ကိုကို အေးဆေးစွာ ဆုံးဖြတ်ချက်များချဖို့ လုပ်ဖို့လိုသည် ကံကတော့ အမျိုးမျိုးထိန်းလို့မရဘူးလို့ ထင်ရလောက်အောင် ပြောင်းလဲပြနေမှာပါ။",
  },
  {
    name: "Justice",
    image: "/assets/tarot/filename/justice.svg",
    meaning:
      "အမှန်အတိုင်းဝန်ခံခြင်း ၊ အမှန်ပြောသည် ၊ အမှန်အတိုင်းလုပ်မှ အောင်မြင်မည် ၊ ခံစားချက်ရှေ့တန်းမတင်ရ ၊ တရားဥပဒေရင်ဆိုင်ရတတ်သည်။",
  },
];

// DOM elements
const tarotDeckEl = document.getElementById("tarot-deck");
const tarotCardsEl = document.getElementById("tarot-cards");
const drawCardsBtn = document.getElementById("draw-cards");
const resetReadingBtn = document.getElementById("reset-reading");
const tarotResultsEl = document.getElementById("tarot-results");

// Track if cards have been drawn
let cardsDrawn = false;

// Draw three random cards
function drawCards() {
  // If cards have already been drawn, reset first
  if (cardsDrawn) {
    resetReading();
  }

  // Create a copy of the deck to avoid duplicates
  const availableCards = [...tarotDeck];
  const drawnCards = [];

  // Draw three unique cards
  for (let i = 0; i < 3; i++) {
    if (availableCards.length === 0) break;

    const randomIndex = Math.floor(Math.random() * availableCards.length);
    drawnCards.push(availableCards[randomIndex]);
    availableCards.splice(randomIndex, 1);
  }

  // Clear existing placeholders
  tarotCardsEl.innerHTML = "";

  // Create and add new cards
  drawnCards.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.className = "tarot-card";
    cardElement.innerHTML = `
                    <div class="tarot-card-inner">
                        <div class="tarot-card-front">
                            <i class="bi bi-question-lg"></i>
                        </div>
                        <div class="tarot-card-back" style="background-image: url('${card.image}')">
                        </div>
                    </div>
                `;

    tarotCardsEl.appendChild(cardElement);

    // Apply spread effect after a short delay
    setTimeout(() => {
      cardElement.classList.add(`spread-${index}`);

      // Animate the card drawing after a short delay
      setTimeout(() => {
        cardElement.classList.add("draw-animation");

        // Flip the card after animation completes
        setTimeout(() => {
          cardElement.classList.add("flipped");
          cardElement.classList.add("card-glow");

          // Show results after the last card is flipped
          if (index === 2) {
            setTimeout(() => {
              displayResults(drawnCards);
              cardsDrawn = true;
            }, 800);
          }
        }, 500);
      }, 300);
    }, 100);
  });

  // Disable the draw button
  drawCardsBtn.disabled = true;
}

// Display the reading results
function displayResults(cards) {
  document.getElementById("card1-name").textContent = `Past: ${cards[0].name}`;
  document.getElementById("card1-desc").textContent = cards[0].meaning;

  document.getElementById(
    "card2-name"
  ).textContent = `Present: ${cards[1].name}`;
  document.getElementById("card2-desc").textContent = cards[1].meaning;

  document.getElementById(
    "card3-name"
  ).textContent = `Future: ${cards[2].name}`;
  document.getElementById("card3-desc").textContent = cards[2].meaning;

  tarotResultsEl.classList.add("show");
}

// Reset the reading
function resetReading() {
  // Clear all cards
  tarotCardsEl.innerHTML = "";

  // Add back placeholders
  for (let i = 0; i < 3; i++) {
    const placeholder = document.createElement("div");
    placeholder.className = "tarot-card-placeholder";
    placeholder.innerHTML = "<span>?</span>";
    tarotCardsEl.appendChild(placeholder);
  }

  // Hide results
  tarotResultsEl.classList.remove("show");

  // Enable the draw button
  drawCardsBtn.disabled = false;

  // Reset the cards drawn flag
  cardsDrawn = false;
}

// Event listeners
tarotDeckEl.addEventListener("click", drawCards);
drawCardsBtn.addEventListener("click", drawCards);
resetReadingBtn.addEventListener("click", resetReading);

// Stars background animation
function createStars() {
  const starsContainer = document.getElementById("stars-container");
  const starCount = 150;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Randomize star properties
    const size = Math.random() * 3;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const duration = 3 + Math.random() * 10;
    const delay = Math.random() * 5;
    const opacity = 0.2 + Math.random() * 0.8;

    // Apply random properties
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${posX}%`;
    star.style.top = `${posY}%`;
    star.style.animationDelay = `${delay}s`;
    star.style.setProperty("--duration", `${duration}s`);
    star.style.setProperty("--opacity", opacity);

    // Randomly assign star types
    const starType = Math.random();
    if (starType < 0.7) {
      star.classList.add("star-normal");
    } else if (starType < 0.9) {
      star.classList.add("star-glowing");
    } else {
      star.classList.add("star-colored");
      const hue = Math.random() * 360;
      star.style.color = `hsl(${hue}, 100%, 80%)`;
    }

    starsContainer.appendChild(star);
  }
}

// Initialize
window.addEventListener("DOMContentLoaded", () => {
  createStars();
});
