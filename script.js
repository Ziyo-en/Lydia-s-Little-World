// ======================================
// LYDIA'S ENCHANTED WORLD - WORKING JS
// ======================================

document.addEventListener("DOMContentLoaded", () => {

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  // TOAST NOTIFICATION
  let toastTimer;
  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }

  // FIREWORKS (SALUTE)
  function launchFireworks() {
    const emojis = ["✨", "💖", "🌸", "🎆", "⭐", "🎀", "🦄", "🎉"];
    for (let burst = 0; burst < 3; burst++) {
      setTimeout(() => {
        const startX = 20 + Math.random() * 60;
        const startY = 20 + Math.random() * 40;
        for (let i = 0; i < 24; i++) {
          const particle = document.createElement("div");
          particle.className = "firework-particle";
          particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
          particle.style.left = startX + "vw";
          particle.style.top = startY + "vh";
          const angle = (Math.PI * 2 * i) / 24;
          const velocity = 90 + Math.random() * 150;
          particle.style.setProperty("--tx", Math.cos(angle) * velocity + "px");
          particle.style.setProperty("--ty", Math.sin(angle) * velocity + "px");
          document.body.appendChild(particle);
          setTimeout(() => particle.remove(), 1400);
        }
      }, burst * 300);
    }
  }

  // HERO FIREWORK BUTTON
  const heroBtn = $("#heroFireworkBtn");
  if (heroBtn) {
    heroBtn.addEventListener("click", () => {
      launchFireworks();
      showToast("Fireworks for Lydia! ✨🎆");
    });
  }

  // MOBILE NAVIGATION
  const menuToggle = $("#menuToggle");
  const navigation = $("#navigation");
  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });
    navigation.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuToggle.textContent = "☰";
      });
    });
  }

  // DINOSAUR BUTTON
  const dinoMessages = [
    "Why don't dinosaurs use computers? Their arms are too short! 😂",
    "Lydia, I have scientifically concluded that you need more cake. 🧁",
    "Rawr! That means 'You are awesome' in dinosaur language! 🦖",
    "I tried to become a scientist, but I ate my homework.",
    "Breaking news: A tiny dinosaur thinks you're amazing!",
    "My brain is 99% dinosaurs and 1% pink glitter. ✨"
  ];
  let dinoIndex = 0;
  const dinoBtn = $("#dinoButton");
  if (dinoBtn) {
    dinoBtn.addEventListener("click", () => {
      $("#dinoSpeech").textContent = dinoMessages[dinoIndex % dinoMessages.length];
      dinoIndex++;
      $("#dinoCharacter").textContent = dinoIndex % 2 === 0 ? "🦖" : "🦕";
      launchFireworks();
    });
  }

  // BUNNY GAME
  const bunnyTarget = $("#bunnyTarget");
  const bunnyStage = $("#bunnyStage");
  const bunnyMessage = $("#bunnyMessage");
  let bunnyClicks = 0;
  let bunnyCaught = false;

  if (bunnyTarget && bunnyStage) {
    bunnyTarget.addEventListener("click", () => {
      if (bunnyCaught) return;
      bunnyClicks++;
      if (bunnyClicks >= 5) {
        bunnyCaught = true;
        bunnyTarget.textContent = "🥰";
        bunnyTarget.style.left = "43%";
        bunnyTarget.style.top = "35%";
        bunnyMessage.textContent = "YOU CAUGHT ME! You're officially my favorite human! 🐰💗";
        launchFireworks();
        showToast("Bunny caught! 🎉");
      } else {
        bunnyMessage.textContent = `Hehe! Too fast! (${bunnyClicks}/5)`;
        const maxX = Math.max(0, bunnyStage.clientWidth - 60);
        const maxY = Math.max(0, bunnyStage.clientHeight - 60);
        bunnyTarget.style.left = (Math.random() * maxX) + "px";
        bunnyTarget.style.top = (Math.random() * maxY) + "px";
      }
    });
  }

  const resetBunny = $("#resetBunny");
  if (resetBunny) {
    resetBunny.addEventListener("click", () => {
      bunnyClicks = 0;
      bunnyCaught = false;
      bunnyTarget.textContent = "🐰";
      bunnyTarget.style.left = "45%";
      bunnyTarget.style.top = "38%";
      bunnyMessage.textContent = "Psst... catch me if you can! (0/5)";
      showToast("Bunny is ready! 🐰");
    });
  }

  // KITTY CORNER
  const kittyMessages = [
    "Purr... Your hands are so warm! 🐾",
    "Meow! Did someone say snacks? 🐟",
    "I was sleeping, but for you, I'll wake up. 😺",
    "You have officially been adopted by Professor Whiskers! 💖",
    "Soft paws, big heart! 😻"
  ];
  let kittyIndex = 0;
  const kittyBtn = $("#kittyButton");
  if (kittyBtn) {
    kittyBtn.addEventListener("click", () => {
      $("#kittySpeech").textContent = kittyMessages[kittyIndex % kittyMessages.length];
      kittyIndex++;
      $("#kittyCharacter").textContent = kittyIndex % 2 === 0 ? "😻" : "😽";
      showToast("Purrfect! 🐾");
    });
  }

  // CUTE JOKES GENERATOR
  const cuteJokes = [
    "Why don't stars fall? Because they don't want to miss your smile! ⭐",
    "Scientific fact: You are 100% made of charm and sweet cupcakes. 🧁💗",
    "What's the difference between you and a unicorn? None, you're both magical! 🦄",
    "Even the grumliest dinosaur smiles when you visit this website. 🦖✨",
    "If cuteness was a crime, you'd be locked up for life! 🏅🎀",
    "Are you a magician? Because whenever you're around, everything turns magical! ✨"
  ];
  let jokeIndex = 0;
  const newJokeBtn = $("#newJokeBtn");
  if (newJokeBtn) {
    newJokeBtn.addEventListener("click", () => {
      jokeIndex++;
      $("#jokeDisplay").textContent = cuteJokes[jokeIndex % cuteJokes.length];
      const emojis = ["😂", "🥰", "🧁", "🦄", "💖", "✨"];
      $("#jokeEmoji").textContent = emojis[jokeIndex % emojis.length];
      launchFireworks();
    });
  }

  // SURPRISE BOXES & MODAL
  const giftsData = {
    kitty: { emoji: "🐱", title: "Purr-prise!", text: "This little kitty brought you an endless supply of good vibes. Meow! 🐾" },
    fireworks: { emoji: "🎆", title: "Magic Fireworks!", text: "May every day of yours be as bright as these stars! Make a wish ✨" },
    joke: { emoji: "🧁", title: "Sweet Compliment!", text: "You have the brightest smile in the entire universe! 💗" },
    dino: { emoji: "🦖", title: "Dino Hug!", text: "RAWR! You have been attacked by a giant warm hug from Sir Pickles! 💗" }
  };

  const giftModal = $("#giftModal");
  $$(".gift-box").forEach(box => {
    box.addEventListener("click", () => {
      const type = box.dataset.gift;
      const gift = giftsData[type];
      if (!gift) return;
      $("#giftAnimation").textContent = gift.emoji;
      $("#giftTitle").textContent = gift.title;
      $("#giftMessage").textContent = gift.text;
      giftModal.classList.remove("hidden");
      launchFireworks();
    });
  });

  if ($("#closeGift")) {
    $("#closeGift").addEventListener("click", () => giftModal.classList.add("hidden"));
  }
  if ($("#giftAgain")) {
    $("#giftAgain").addEventListener("click", () => launchFireworks());
  }

  // SECRET CODE LOCK
  const secretCodes = ["MAGIC", "LYDIA", "2026", "LOVE", "DINO", "KITTY"];
  const checkCodeBtn = $("#checkCodeBtn");
  if (checkCodeBtn) {
    checkCodeBtn.addEventListener("click", () => {
      const input = $("#secretCodeInput").value.trim().toUpperCase();
      if (secretCodes.includes(input)) {
        $("#unlockedSecret").classList.remove("hidden");
        launchFireworks();
        showToast("Secret unlocked! 🎉");
      } else {
        showToast("Wrong code! Try typing MAGIC 😉");
      }
    });
  }

  // DIARY
  let diaryEntries = [];
  try {
    diaryEntries = JSON.parse(localStorage.getItem("lydiaDiary")) || [];
  } catch (e) { diaryEntries = []; }

  function renderDiary() {
    const container = $("#diaryEntries");
    if (!container) return;
    container.innerHTML = "";
    diaryEntries.forEach((entry, index) => {
      const card = document.createElement("div");
      card.className = "diary-entry";
      card.innerHTML = `<small>${entry.date}</small><p>${entry.text}</p>`;
      const del = document.createElement("button");
      del.className = "diary-delete";
      del.textContent = "Delete memory";
      del.addEventListener("click", () => {
        diaryEntries.splice(index, 1);
        localStorage.setItem("lydiaDiary", JSON.stringify(diaryEntries));
        renderDiary();
      });
      card.appendChild(del);
      container.appendChild(card);
    });
  }

  const saveDiaryBtn = $("#saveDiary");
  if (saveDiaryBtn) {
    saveDiaryBtn.addEventListener("click", () => {
      const input = $("#diaryInput");
      const text = input.value.trim();
      if (!text) {
        showToast("Write something first! 💗");
        return;
      }
      diaryEntries.unshift({ text, date: new Date().toLocaleString() });
      localStorage.setItem("lydiaDiary", JSON.stringify(diaryEntries));
      input.value = "";
      $("#diaryStatus").textContent = "Saved! 🌷";
      renderDiary();
      launchFireworks();
    });
  }
  renderDiary();

  // BACK TO TOP
  if ($("#backToTop")) {
    $("#backToTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // BACKGROUND SPARKLES
  const sparkleContainer = $("#sparkles");
  if (sparkleContainer) {
    const symbols = ["✦", "✧", "⋆", "·"];
    for (let i = 0; i < 30; i++) {
      const sparkle = document.createElement("span");
      sparkle.className = "sparkle";
      sparkle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      sparkle.style.left = Math.random() * 100 + "%";
      sparkle.style.top = Math.random() * 100 + "%";
      sparkle.style.fontSize = (8 + Math.random() * 15) + "px";
      sparkle.style.animationDelay = Math.random() * 3 + "s";
      sparkleContainer.appendChild(sparkle);
    }
  }

  showToast("Welcome to Lydia's Enchanted World! 💗");
});