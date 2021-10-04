const allButtonsNode = document.querySelectorAll('button');

const startButton = allButtonsNode[0];
const stopButton = allButtonsNode[1];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalRepeat = null;
startButton.addEventListener('click', () => {
  intervalRepeat = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButton.setAttribute('disabled', true);
});

stopButton.addEventListener('click', () => {
  clearInterval(intervalRepeat);
  startButton.removeAttribute('disabled');
});
