const canvas = document.querySelector('#my-canvas');
const ctx = canvas.getContext('2d');

// Draw rectangle
ctx.fillStyle = 'blue'; // Set fill color to blue
ctx.fillRect(10, 10, 160, 160); // Draw a rectangle at (x: 10, y: 10), width 160, height 160

// Draw circle
ctx.beginPath(); // Begin a new path for the circle
ctx.fillStyle = 'gold'; // Set fill color to gold
ctx.arc(300, 300, 100, 0, Math.PI * 2); 
// Draw a circle with center at (300, 300), radius 100, starting angle 0, and ending angle Math.PI * 2 (which is a full circle)
ctx.fill(); // Fill the circle with the set color

// Draw lines
ctx.beginPath(); // Begin a new path for the line
ctx.strokeStyle = 'black'; // Set line color to black
ctx.moveTo(10, 10); // Start the line from point (x: 10, y: 10)
ctx.lineTo(300, 300); // Draw the line to point (x: 300, y: 300)
ctx.lineWidth = 3; // Set the line width to 3 pixels
ctx.stroke(); // Actually draw the line

// Draw text
ctx.font = '22px sans-serif'; // Set the font size and style (22px, sans-serif)
ctx.fillStyle = 'brown'; // Set fill color for the text to brown
ctx.fillText('Hello World', 200, 100, 300); 
// Draw filled text starting at (x: 200, y: 100), with a maximum allowed width of 300 pixels for the text

ctx.lineWidth = 1; // Set line width for the outlined text
ctx.strokeStyle = 'red'; // Set the stroke color for text to red
ctx.strokeText('Hello World', 200, 100, 300); 
// Draw outlined text starting at (x: 200, y: 100), with a maximum width of 300 pixels

// Handle image
const img = document.querySelector('img');
img.style.display = 'none'; // Hide the image element

img.addEventListener('load', () => {
  ctx.drawImage(img, 250, 250, 100, 100); 
  // Draw the image at (x: 250, y: 250), with a width of 100 pixels and a height of 100 pixels
});
