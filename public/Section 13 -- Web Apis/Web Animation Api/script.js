const ball = document.querySelector("#ball");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const speedUp = document.querySelector("#speed-up");
const speedDown = document.querySelector("#speed-down");
const reverse = document.querySelector("#reverse");

const rollAnimation = [
  {
    transform: "rotate(0) translate3D(-50%, -50%, 0)",
    color: "white",
  },
  {
    color: "darkRed",
    offset: 0.5,
  },
  {
    transform: "rotate(360deg) translate3D(-50%, -50%, 0)",
    color: "white",
  },
];

const rollOptions = {
  duration: 3000,
  iterations: Infinity,
//   easing: "ease-in-out",
};

const roll = ball.animate(rollAnimation, rollOptions);

play.addEventListener("click", () => {
  roll.playbackRate = 1;
  roll.play();
});

pause.addEventListener("click", () => {
  roll.pause();
});

reverse.addEventListener("click", () => {
  roll.reverse();
});

speedUp.addEventListener("click", () => {
  roll.playbackRate *= 2.5;
});

speedDown.addEventListener("click", () => {
  roll.playbackRate /= 1.5;
});