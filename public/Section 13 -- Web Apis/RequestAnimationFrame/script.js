const img = document.querySelector('img');


let start; // undefined
let done = false; // initially set at false

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }
  const elasped = timestamp - start; // time minus from when we originally began

  if (elasped > 10000) {
    done = true;
  }

  if (done) { // sets to call the function to set it to end the repainting when true
    return;
  }
  img.style.transform = `
  translateX\(${elasped / 20}px) rotate(${elasped/10}deg)
translateY(${elasped  / 80}px) `;

  document.body.appendChild(img);

  requestAnimationFrame(step); // will cause it to repaint
}

requestAnimationFrame(step);


