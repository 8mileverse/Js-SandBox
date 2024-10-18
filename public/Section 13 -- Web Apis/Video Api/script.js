const video = document.querySelector('#video')
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const stop = document.querySelector('#stop');
const currentTimeDisp = document.querySelector('#current-time');


play.addEventListener('click', () => video.play());
pause.addEventListener('click', () => video.pause());

stop.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0
    
})

video.addEventListener('timeupdate', () => {
    currentTimeDisp.textContent = `Current time: ${Math.floor(video.currentTime)} seconds`;
    // const durationDisp = document.querySelector('#duration');
})