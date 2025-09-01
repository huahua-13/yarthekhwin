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
  btn.textContent = btn.textContent.includes("see") ? "Hide signs ▲" : "Click to see other signs ▼";
}
// ---------------------------------------------------------------------------------------

// Sample tarot card data
const tarotDeck = [
  {
    name: "The Fool",
    image: "/assets/images/tarot/the-fool.svg",
    meaning:
      "သင့်ရဲ့ စိတ်အားထက်သန်မှုဟာ ခရီးလမ်းသစ်ဆီ ဦးတည်နေပြီ။ စွန့်စားခန်းအသစ်တစ်ခုကို စတင်ဖို့ မကြောက်ပါနဲ့။ ယုံကြည်မှုနဲ့ ရှေ့ဆက်လိုက်ပါ။ အတွေ့အကြုံသစ်တွေက သင့်ကို အများကြီး သင်ပေးလိမ့်မယ်။",
  },
  {
    name: "The Magician",
    image: "/assets/images/tarot/the-magician.svg",
    meaning:
      "သင့်လက်ထဲမှာ အရာရာ အဆင်သင့်ဖြစ်နေပြီ။ သင့်ရဲ့အရည်အချင်းတွေ၊ ကိရိယာတွေအားလုံးကို ပေါင်းစပ်ပြီး စိတ်ကူးတွေကို လက်တွေ့အဖြစ် ဖန်တီးလိုက်ပါ။ စတင်လုပ်ဆောင်ဖို့ အချိန်တန်ပြီ။",
  },
  {
    name: "The High Priestess",
    image: "/assets/images/tarot/the-high-priestess.svg",
    meaning:
      "ဆုံးဖြတ်ချက်မချခင် ခဏလောက် ရပ်နားပြီး အတွင်းစိတ်ကို နားထောင်ကြည့်ပါ။ တိတ်ဆိတ်တဲ့အချိန်ယူပြီး သင့်ရဲ့ အလိုလိုသိစိတ်က ဘာပြောနေလဲဆိုတာကို ရှာဖွေပါ။ လျှို့ဝှက်အသိပညာတွေက သင့်ကို လမ်းပြလိမ့်မယ်။",
  },
  {
    name: "The Empress",
    image: "/assets/images/tarot/the-empress.svg",
    meaning:
      "ကြွယ်ဝမှု၊ ပေါကြွယ်မှုနဲ့ ပျော်ရွှင်မှုတွေက သင့်ဆီကို စီးဝင်နေပြီ။ ကိုယ့်ပတ်ဝန်းကျင်ကို ပြုစုပျိုးထောင်ရင်း အေးချမ်းသာယာမှုကို ခံစားလိုက်ပါ။ ဖန်တီးမှုအသစ်တွေ ပေါ်ထွက်လာဖို့လည်း အချိန်ကောင်းပဲ။",
  },
  {
    name: "The Emperor",
    image: "/assets/images/tarot/the-emperor.svg",
    meaning:
      "သင့်ရဲ့ ခေါင်းဆောင်နိုင်စွမ်းကို ပြသရမယ့်အချိန် ရောက်ပြီ။ ခိုင်မာတဲ့ ဆုံးဖြတ်ချက်တွေ ချမှတ်ပြီး ကိစ္စတွေကို စနစ်တကျ ထိန်းချုပ်လိုက်ပါ။ တည်ငြိမ်မှုနဲ့ စည်းကမ်းတွေက သင့်ကို အောင်မြင်မှုဆီ ပို့ဆောင်ပေးပါလိမ့်မယ်။",
  },
  {
    name: "The Hierophant",
    image: "/assets/images/tarot/the-hierophant.svg",
    meaning:
      "ရိုးရာဓလေ့တွေ၊ ဘာသာရေးအယူဝါဒတွေ ဒါမှမဟုတ် သင့်ရဲ့ဆရာသမားတွေဆီက လမ်းညွှန်မှု ရယူပါ။ မှန်ကန်တဲ့လမ်းကြောင်းပေါ် ရောက်ရှိဖို့အတွက် ယုံကြည်မှုရှိရှိနဲ့ လေ့လာလိုက်ပါ။",
  },
  {
    name: "The Lovers",
    image: "/assets/images/tarot/the-lovers.svg",
    meaning:
      "ဒီကတ်က ဆက်ဆံရေးတွေနဲ့ ပူးပေါင်းဆောင်ရွက်မှုတွေကို ပြနေတယ်။ သင့်ရဲ့နှလုံးသားက ဘာကိုရွေးချယ်ချင်လဲဆိုတာ သေချာစဉ်းစားပါ။ ရွေးချယ်မှုတိုင်းအတွက် တာဝန်ယူရမှာ ဖြစ်လို့ သတိထားဆုံးဖြတ်ပါ။",
  },
  {
    name: "The Chariot",
    image: "/assets/images/tarot/the-chariot.svg",
    meaning:
      "သင့်ရဲ့ ရည်မှန်းချက်တွေကို အရောက်လှမ်းဖို့ အတိုက်အခံတွေ ရှိနေပေမဲ့ စိတ်အားမလျှော့ပါနဲ့။ အခက်အခဲတွေကို အေးအေးဆေးဆေး ထိန်းချုပ်ပြီး သင့်ရဲ့ စိတ်ဆန္ဒအင်အားနဲ့ ရှေ့ဆက်သွားပါ။ အောင်မြင်မှုက သင့်ကို စောင့်ကြိုနေတယ်။",
  },
  {
    name: "Strength",
    image: "/assets/images/tarot/strength.svg",
    meaning:
      "ရုပ်ပိုင်းဆိုင်ရာ ခွန်အားတင်မကဘဲ စိတ်ပိုင်းဆိုင်ရာ ခွန်အားကလည်း အရေးကြီးတယ်။ သင့်ရဲ့စိတ်ခံစားမှုတွေကို ထိန်းချုပ်နိုင်စွမ်းနဲ့ စိတ်ရှည်သည်းခံမှုက ပြဿနာတွေကို ဖြေရှင်းဖို့ အကောင်းဆုံး အထောက်အကူ ဖြစ်ပါလိမ့်မယ်။",
  },
  {
    name: "The Hermit",
    image: "/assets/images/tarot/the-hermit.svg",
    meaning:
      "အချိန်ယူပြီး တစ်ယောက်တည်း ဆန်းစစ်သုံးသပ်ဖို့ လိုအပ်တယ်။ လောကဓံကနေ ခဏရှောင်ပြီး ကိုယ့်ရဲ့ အတွင်းစိတ်ကို လေ့လာပါ။ သင့်ရဲ့ဉာဏ်ပညာနဲ့ အသိတရားအသစ်တွေ ရရှိပါလိမ့်မယ်။",
  },
  {
    name: "Wheel of Fortune",
    image: "/assets/images/tarot/wheel-of-fortune.svg",
    meaning:
      "ကံတရားက မကြာခင် အလှည့်အပြောင်းတွေ ဖြစ်လာတော့မယ်။ အကောင်းအဆိုး ပြောင်းလဲမှုတွေ ကြုံနိုင်ပေမဲ့ အဲဒီအခြေအနေတွေကို လက်ခံပြီး စီးမြောလိုက်ပါ။ ကံကြမ္မာရဲ့ လှည့်ကွက်တွေကို အကောင်းဆုံး အသုံးချလိုက်ပါ။",
  },
  {
    name: "Justice",
    image: "/assets/images/tarot/justice.svg",
    meaning:
      "မျှတမှုနဲ့ မှန်ကန်တဲ့ ဆုံးဖြတ်ချက်တွေ ချမှတ်ရမယ့်အချိန် ဖြစ်တယ်။ သင့်ရဲ့ လုပ်ရပ်တိုင်းအတွက် ရလဒ်တွေက ပေါ်ထွက်လာလိမ့်မယ်။ ဘယ်လိုအခြေအနေမျိုးမှာမဆို မှန်ကန်တဲ့လမ်းကြောင်းကို ရွေးချယ်ဖို့မမေ့ပါနဲ့။",
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
  document.getElementById("card1-name").innerHTML = `<span>Past</span> <br/> ${cards[0].name}`;
  document.getElementById("card1-desc").innerHTML = cards[0].meaning;

  document.getElementById("card2-name").innerHTML = `<span>Present</span> <br/> ${cards[1].name}`;
  document.getElementById("card2-desc").innerHTML = cards[1].meaning;

  document.getElementById("card3-name").innerHTML = `<span>Future</span> <br/> ${cards[2].name}`;
  document.getElementById("card3-desc").innerHTML = cards[2].meaning;

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
