const video = document.querySelector("#video");
const play = document.querySelector("#play");
const progress = document.querySelector("#progress");
const stop = document.querySelector("#stop");
const currentTime = document.querySelector("#timestamp");

function togglePlayPause() {
  if (video.paused) {
    video.play();
    
  } else {
    video.pause();
    
  }
}

function updateIcons() {
    if (video.paused) {
      play.innerHTML = '<i class="fa fa-play fa-2x">';
    } else {
      pause.innerHTML = '<i class="fa fa-pause fa-2x';
    }
}

function stopVideo() {
  video.pause();
  video.currentTime = 0;
}

function videoProgress() {

    progress.value = (video.currentTime / video.duration) * 100;
    const minutes = Math.floor(video.currentTime / 60);
    // if(minutes < 0){
    //     minutes =  '0' + String(minutes)
    // }
    const seconds = Math.floor(video.currentTime % 60);
    currentTime.textContent = `${minutes}:${seconds < 10? '0' : ''}${seconds}`;

    

//   remainingTime = video.duration - video.currentTime
//   const mins = Math.floor(remainingTime / 60)
//   const secs = Math.floor(remainingTime % 60)
//   currentTime.textContent = `${mins}:${secs < 10? '0' : ''}${secs}`
}

function updateProgress(e) {
  
  video.currentTime = (+progress.value * video.duration) / 100 ;
}

video.addEventListener("click", togglePlayPause);
video.addEventListener("pause", updateIcons);
video.addEventListener('play', updateIcons);
video.addEventListener('timeupdate', videoProgress)

play.addEventListener("click", togglePlayPause);
stop.addEventListener("click", stopVideo);
progress.addEventListener('click', updateProgress);