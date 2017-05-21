var audio, playbtn, mutebtn, seek_bar;
function initAudioPlayer() {
    audio = new Audio();
    audio.src = "media/sonarchord.mp3";
    // audio.loop = true;
    audio.play();
    // set object references
    playbtn = document.getElementById("playpausebtn");
    mutebtn = document.getElementById("mutebtn");
    //Event Listeners
    playbtn.addEventListener("click", playPause);
    mutebtn.addEventListener("click", mute);
    //functions
    function playPause() {
        if (audio.paused) {
            audio.play();
            playbtn.style.background = "url(media/pause.jpeg) no-repeat";
            playbtn.style.backgroundSize = "60px";
        } else {
            audio.pause();
            playbtn.style.background = "url(media/play.png) no-repeat";
            playbtn.style.backgroundSize = "60px";
        }
    }
    function mute() {
        if (audio.muted) {
            audio.muted = false;
            mutebtn.style.background = "url(media/speaker.jpg) no-repeat";
            mutebtn.style.backgroundSize = "60px";
        } else {
            audio.muted = true;
            mutebtn.style.background = "url(media/speakermute.png) no-repeat";
            mutebtn.style.backgroundSize = "60px";
        }
    }
};
window.addEventListener("load", initAudioPlayer);
