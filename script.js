const items = [
  { name: "Bitcoin", value: 60525596, image: "images/Bitcoin.jpg" },
  { name: "Ethereum", value: 2164365, image: "images/Ethereum.png" },
  { name: "Tether", value: 540.6, image: "images/Tether.png" },
  { name: "Kaspi", value: 40326, image: "images/Kaspi.png" },
  { name: "Tesla", value: 229009, image: "images/Tesla.png" },
  { name: "Microsoft", value: 275466, image: "images/microsoft.jpg" },
  { name: "Meta", value: 383151, image: "images/meta.png" },
  { name: "Google", value: 132334, image: "images/Google.jpg" },
  { name: "Intel", value: 19198, image: "images/intel.png" },
  { name: "Apple", value: 133414, image: "images/apple.png" },
  { name: "Samsung", value: 86500, image: "images/samsung.png" },
  { name: "Halyk Bank", value: 750, image: "images/Halyk.jpg" },
  { name: "Binance Coin", value: 647673, image: "images/Binance Coin.png" },
  { name: "Toncoin", value: 1238.18, image: "images/Toncoin.png" },
  { name: "XRP", value: 292, image: "images/XRP.png" },
  { name: "Dogecoin", value: 108.67, image: "images/Dogecoin.png" },
  { name: "Euro", value: 624.04, image: "images/Euro.jpg" },
  { name: "Dollar", value: 540.21, image: "images/Dollar.jpg" },
  { name: "Ruble", value: 6.77, image: "images/ruble.jpg" },
  { name: "Tenge", value: 1, image: "images/tenge.png" },
  { name: "Pound Sterling", value: 672.81, image: "images/PoundSterling.png" },
  { name: "Yuan", value: 75.93, image: "images/Yuan.jpg" },
  { name: "Yen", value: 3.56, image: "images/Yen.jpg" },
  { name: "Swiss Franc", value: 672.81, image: "images/SwFr.jpg" },
  { name: "KazMunaiGas", value: 12999, image: "images/KzMnGs.png" },
  { name: "Air Astana", value: 1578, image: "images/airAstana.jpg" },
  { name: "TrumpCoin", value: 3349, image: "images/Trump.jpg" },
  { name: "FPI Bank", value: 0.98, image: "images/FPI Bank.png" },
  { name: "Coca-Cola", value: 36318, image: "images/cocacola.png" },
  { name: "Kyrgyz Som", value: 6.18, image: "images/InRu.jpg" },
  { name: "Turkish Lira", value: 12.91, image: "images/KT.jpg" },
];

let availableItems = [...items];
let leftItem, rightItem, score = 0;

const leftImage = document.getElementById("left-image");
const rightImage = document.getElementById("right-image");
const leftName = document.getElementById("left-name");
const rightName = document.getElementById("right-name");
const leftValue = document.getElementById("left-value");
const scoreText = document.getElementById("score");

const higherBtn = document.getElementById("higher-btn");
const lowerBtn = document.getElementById("lower-btn");

function formatTenge(num) {
  return num.toLocaleString("ru-RU") + " ₸";
}

function getRandomItem() {
  if (availableItems.length === 0) return null;
  const index = Math.floor(Math.random() * availableItems.length);
  const item = availableItems[index];
  availableItems.splice(index, 1); // убираем, чтобы не повторялось
  return item;
}

function startGame() {
  score = 0;
  availableItems = [...items];
  leftItem = getRandomItem();
  rightItem = getRandomItem();
  updateCards();
}

function updateCards() {
  if (!rightItem) {
    alert(`🎉 Поздравляю! Ты сравнил все активы!\nФинальный счёт: ${score}`);
    return startGame();
  }

  leftImage.src = leftItem.image;
  leftName.textContent = leftItem.name;
  leftValue.textContent = formatTenge(leftItem.value);

  rightImage.src = rightItem.image;
  rightName.textContent = rightItem.name;

  leftImage.parentElement.classList.add("fade");
  rightImage.parentElement.classList.add("fade");
  setTimeout(() => {
    leftImage.parentElement.classList.remove("fade");
    rightImage.parentElement.classList.remove("fade");
  }, 600);
}

function guess(isHigher) {
  const correct = isHigher
    ? rightItem.value > leftItem.value
    : rightItem.value < leftItem.value;

  if (correct) {
    score++;
    scoreText.textContent = score;
    leftItem = rightItem;
    rightItem = getRandomItem();
    updateCards();
  } else {
    alert(`❌ Неверно! Финальный счёт: ${score}`);
    startGame();
  }
}

higherBtn.addEventListener("click", () => guess(true));
lowerBtn.addEventListener("click", () => guess(false));

startGame();
