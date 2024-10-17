const audio = document.querySelector('#audio');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const stop = document.querySelector('#stop');
const volume = document.querySelector('#volume');
const currentTime = document.querySelector('#current-time');




// for playing and pausing the audio
play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());


// for stopping the audio
stop.addEventListener('click', () => {
audio.pause();
audio.currentTime = 0;

});

// to get the current Time of the audio

audio.addEventListener('timeupdate', () =>{

    currentTime.innerHTML = `Current Time: ${audio.currentTime.toFixed(1)}.`
});


volume.addEventListener('change', () => {
audio.volume = volume.value
})



// My Audio 

// // Get DOM elements
// const audio = document.getElementById("audio");
// const playButton = document.getElementById("play");
// const pauseButton = document.getElementById("pause");
// const stopButton = document.getElementById("stop");
// const currentTimeDisplay = document.getElementById("current-time");
// const volumeControl = document.getElementById("volume");

// // Function to format time in minutes and seconds
// const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
// };

// // Update current time display
// const updateCurrentTime = () => {
//     currentTimeDisplay.textContent = `Current Time: ${formatTime(audio.currentTime)}`;
// };

// // Event listeners for buttons
// playButton.addEventListener("click", () => {
//     audio.play();
//     updateCurrentTime(); // Update time display when playing
//     setInterval(updateCurrentTime, 1000); // Update time every second
// });

// pauseButton.addEventListener("click", () => {
//     audio.pause();
// });

// stopButton.addEventListener("click", () => {
//     audio.pause();
//     audio.currentTime = 0; // Reset to the beginning
//     currentTimeDisplay.textContent = `Current Time: 0:00`; // Reset display
// });

// // Volume control event listener
// volumeControl.addEventListener("input", (event) => {
//     audio.volume = event.target.value; // Adjust volume based on input
// });

// // Update current time when the audio is playing
// audio.addEventListener("timeupdate", updateCurrentTime);
