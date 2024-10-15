const canvas = document.getElementById('canvas');
const faceColor = document.querySelector('#face-color');
const borderColor = document.querySelector('#border-color');
const lineColor = document.querySelector('#line-color');
const largeColor = document.querySelector('#large-color');
const secondColor = document.querySelector('#second-color');

// Load saved colors from localStorage
function loadColorsFromLocalStorage() {
  faceColor.value = localStorage.getItem('faceColor') || '#f4f4f4';
  borderColor.value = localStorage.getItem('borderColor') || '#800000';
  lineColor.value = localStorage.getItem('lineColor') || '#000000';
  largeColor.value = localStorage.getItem('largeColor') || '#800000';
  secondColor.value = localStorage.getItem('secondColor') || '#FF7F50';
}

// Save colors to localStorage
function saveColorsToLocalStorage() {
  localStorage.setItem('faceColor', faceColor.value);
  localStorage.setItem('borderColor', borderColor.value);
  localStorage.setItem('lineColor', lineColor.value);
  localStorage.setItem('largeColor', largeColor.value);
  localStorage.setItem('secondColor', secondColor.value);
}

// Update colors in localStorage when changed
faceColor.addEventListener('input', saveColorsToLocalStorage);
borderColor.addEventListener('input', saveColorsToLocalStorage);
lineColor.addEventListener('input', saveColorsToLocalStorage);
largeColor.addEventListener('input', saveColorsToLocalStorage);
secondColor.addEventListener('input', saveColorsToLocalStorage);

// Load saved colors when page loads
window.addEventListener('DOMContentLoaded', loadColorsFromLocalStorage);

function clock() {
  const now = new Date();
  const ctx = canvas.getContext("2d");

  // Setting Up Canvas
  ctx.save();
  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(250, 250);
  ctx.rotate(-Math.PI / 2);

  // Draw Clock Face/Border
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = borderColor.value;
  ctx.fillStyle = faceColor.value;
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  // Draw Hour Marks
  ctx.save();
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // Draw Minute Marks
  ctx.save();
  ctx.lineWidth = 3;
  ctx.strokeStyle = lineColor.value;
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  // Get Current Time
  const hrs = now.getHours();
  const mins = now.getMinutes();
  const secs = now.getSeconds();

  // Draw Hours Hand
  ctx.save();
  ctx.rotate(
    (Math.PI / 6) * hrs +
    Math.PI / 360 * mins +
    Math.PI / 21600 * secs
  );
  ctx.strokeStyle = largeColor.value;
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-10, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // Draw Minutes Hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * mins + (Math.PI / 1800) * secs);
  ctx.strokeStyle = largeColor.value;
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(-10, 0);
  ctx.lineTo(110, 0);
  ctx.stroke();
  ctx.restore();

  // Draw Seconds Hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * secs);
  ctx.strokeStyle = secondColor.value;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(-10, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 5, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.restore();
  requestAnimationFrame(clock);
}

requestAnimationFrame(clock);

// Save clock as an image
document.querySelector('#save-btn').addEventListener('click', () => {
  const dataURL = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = 'clock.png';
  link.href = dataURL;
  link.click();
});
