var audio, audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, playbtn, playbtn1, playbtn2,
playbtn3, playbtn4, playbtn5, playbtn6, playbtn7, playbtn8, playbtn9, mutebtn, mutebtn1,mutebtn2,mutebtn3,mutebtn4,
mutebtn5,mutebtn6,mutebtn7,mutebtn8,mutebtn9;
function initAudioPlayer() {
    audio = new Audio();
    audio.src = "media/sonarchord.mp3";
    audio.loop = true;
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
function initAudioPlayer1() {
    audio1 = new Audio();
    audio1.src = "media/sonarchordhigh.mp3";
    audio1.loop = true;
    audio1.play();
    // set object references
    playbtn1 = document.getElementById("playpausebtn1");
    mutebtn1 = document.getElementById("mutebtn1");
    //Event Listeners
    playbtn1.addEventListener("click", playPause);
    mutebtn1.addEventListener("click", mute);
    //functions
    function playPause() {
        if (audio1.paused) {
            audio1.play();
            playbtn1.style.background = "url(media/pause.jpeg) no-repeat";
            playbtn1.style.backgroundSize = "60px";
        } else {
            audio1.pause();
            playbtn1.style.background = "url(media/play.png) no-repeat";
            playbtn1.style.backgroundSize = "60px";
        }
    }
    function mute() {
        if (audio1.muted) {
            audio1.muted = false;
            mutebtn1.style.background = "url(media/speaker.jpg) no-repeat";
            mutebtn1.style.backgroundSize = "60px";
        } else {
            audio1.muted = true;
            mutebtn1.style.background = "url(media/speakermute.png) no-repeat";
            mutebtn1.style.backgroundSize = "60px";
        }
    }
};
function initAudioPlayer2() {
    audio2 = new Audio();
    audio2.src = "media/sonarchordhigh2.mp3";
    audio2.loop = true;
    audio2.play();
    // set object references
    playbtn2 = document.getElementById("playpausebtn2");
    mutebtn2 = document.getElementById("mutebtn2");
    //Event Listeners
    playbtn2.addEventListener("click", playPause);
    mutebtn2.addEventListener("click", mute);
    //functions
    function playPause() {
        if (audio2.paused) {
            audio2.play();
            playbtn2.style.background = "url(media/pause.jpeg) no-repeat";
            playbtn2.style.backgroundSize = "60px";
        } else {
            audio2.pause();
            playbtn2.style.background = "url(media/play.png) no-repeat";
            playbtn2.style.backgroundSize = "60px";
        }
    }
    function mute() {
        if (audio2.muted) {
            audio2.muted = false;
            mutebtn2.style.background = "url(media/speaker.jpg) no-repeat";
            mutebtn2.style.backgroundSize = "60px";
        } else {
            audio2.muted = true;
            mutebtn2.style.background = "url(media/speakermute.png) no-repeat";
            mutebtn2.style.backgroundSize = "60px";
        }
    }
};
function initAudioPlayer3() {
    audio3 = new Audio();
    audio3.src = "media/sonarnote.mp3";
    audio3.loop = true;
    audio3.play();
    // set object references
    playbtn3 = document.getElementById("playpausebtn3");
    mutebtn3 = document.getElementById("mutebtn3");
    //Event Listeners
    playbtn3.addEventListener("click", playPause);
    mutebtn3.addEventListener("click", mute);
    //functions
    function playPause() {
        if (audio3.paused) {
            audio3.play();
            playbtn3.style.background = "url(media/pause.jpeg) no-repeat";
            playbtn3.style.backgroundSize = "60px";
        } else {
            audio3.pause();
            playbtn3.style.background = "url(media/play.png) no-repeat";
            playbtn3.style.backgroundSize = "60px";
        }
    }
    function mute() {
        if (audio3.muted) {
            audio3.muted = false;
            mutebtn3.style.background = "url(media/speaker.jpg) no-repeat";
            mutebtn3.style.backgroundSize = "60px";
        } else {
            audio3.muted = true;
            mutebtn3.style.background = "url(media/speakermute.png) no-repeat";
            mutebtn3.style.backgroundSize = "60px";
        }
    }
};
function initAudioPlayer4() {
    audio4 = new Audio();
    audio4.src = "media/sonarnote2.mp3";
    audio4.loop = true;
    audio4.play();
    // set object references
    playbtn4 = document.getElementById("playpausebtn4");
    mutebtn4 = document.getElementById("mutebtn4");
    //Event Listeners
    playbtn4.addEventListener("click", playPause);
    mutebtn4.addEventListener("click", mute);
    //functions
    function playPause() {
        if (audio4.paused) {
            audio4.play();
            playbtn4.style.background = "url(media/pause.jpeg) no-repeat";
            playbtn4.style.backgroundSize = "60px";
        } else {
            audio4.pause();
            playbtn4.style.background = "url(media/play.png) no-repeat";
            playbtn4.style.backgroundSize = "60px";
        }
    }
    function mute() {
        if (audio4.muted) {
            audio4.muted = false;
            mutebtn4.style.background = "url(media/speaker.jpg) no-repeat";
            mutebtn4.style.backgroundSize = "60px";
        } else {
            audio4.muted = true;
            mutebtn4.style.background = "url(media/speakermute.png) no-repeat";
            mutebtn4.style.backgroundSize = "60px";
        }
    }
};
function initAudioPlayer5() {
    audio5 = new Audio();
    audio5.src = "media/sonarnote3.mp3";
    audio5.loop = true;
    audio5.play();
    // set object references
    playbtn5 = document.getElementById("playpausebtn5");
    mutebtn5 = document.getElementById("mutebtn5");
    //Event Listeners
    playbtn5.addEventListener("click", playPause);
    mutebtn5.addEventListener("click", mute);
    //functions
    function playPause() {
        if (audio5.paused) {
            audio5.play();
            playbtn5.style.background = "url(media/pause.jpeg) no-repeat";
            playbtn5.style.backgroundSize = "60px";
        } else {
            audio5.pause();
            playbtn5.style.background = "url(media/play.png) no-repeat";
            playbtn5.style.backgroundSize = "60px";
        }
    }
    function mute() {
        if (audio5.muted) {
            audio5.muted = false;
            mutebtn5.style.background = "url(media/speaker.jpg) no-repeat";
            mutebtn5.style.backgroundSize = "60px";
        } else {
            audio5.muted = true;
            mutebtn5.style.background = "url(media/speakermute.png) no-repeat";
            mutebtn5.style.backgroundSize = "60px";
        }
    }
};
function initAudioPlayer6() {
    audio6 = new Audio();
    audio6.src = "media/sonarnote4.mp3";
    audio6.loop = true;
    audio6.play();
    // set object references
    playbtn6 = document.getElementById("playpausebtn6");
    mutebtn6 = document.getElementById("mutebtn6");
    //Event Listeners
    playbtn6.addEventListener("click", playPause);
    mutebtn6.addEventListener("click", mute);
    //functions
    function playPause() {
        if (audio6.paused) {
            audio6.play();
            playbtn6.style.background = "url(media/pause.jpeg) no-repeat";
            playbtn6.style.backgroundSize = "60px";
        } else {
            audio6.pause();
            playbtn6.style.background = "url(media/play.png) no-repeat";
            playbtn6.style.backgroundSize = "60px";
        }
    }
    function mute() {
        if (audio6.muted) {
            audio6.muted = false;
            mutebtn6.style.background = "url(media/speaker.jpg) no-repeat";
            mutebtn6.style.backgroundSize = "60px";
        } else {
            audio6.muted = true;
            mutebtn6.style.background = "url(media/speakermute.png) no-repeat";
            mutebtn6.style.backgroundSize = "60px";
        }
    }
};
function initAudioPlayer7() {
    audio7 = new Audio();
    audio7.src = "media/sonarnotehi.mp3";
    audio7.loop = true;
    audio7.play();
    // set object references
    playbtn7 = document.getElementById("playpausebtn7");
    mutebtn7 = document.getElementById("mutebtn7");
    //Event Listeners
    playbtn7.addEventListener("click", playPause);
    mutebtn7.addEventListener("click", mute);
    //functions
    function playPause() {
        if (audio7.paused) {
            audio7.play();
            playbtn7.style.background = "url(media/pause.jpeg) no-repeat";
            playbtn7.style.backgroundSize = "60px";
        } else {
            audio7.pause();
            playbtn7.style.background = "url(media/play.png) no-repeat";
            playbtn7.style.backgroundSize = "60px";
        }
    }
    function mute() {
        if (audio7.muted) {
            audio7.muted = false;
            mutebtn7.style.background = "url(media/speaker.jpg) no-repeat";
            mutebtn7.style.backgroundSize = "60px";
        } else {
            audio7.muted = true;
            mutebtn7.style.background = "url(media/speakermute.png) no-repeat";
            mutebtn7.style.backgroundSize = "60px";
        }
    }
};
function initAudioPlayer8() {
    audio8 = new Audio();
    audio8.src = "media/sonar1.mp3";
    audio8.loop = true;
    audio8.play();
    // set object references
    playbtn8 = document.getElementById("playpausebtn8");
    mutebtn8 = document.getElementById("mutebtn8");
    //Event Listeners
    playbtn8.addEventListener("click", playPause);
    mutebtn8.addEventListener("click", mute);
    //functions
    function playPause() {
        if (audio8.paused) {
            audio8.play();
            playbtn8.style.background = "url(media/pause.jpeg) no-repeat";
            playbtn8.style.backgroundSize = "60px";
        } else {
            audio8.pause();
            playbtn8.style.background = "url(media/play.png) no-repeat";
            playbtn8.style.backgroundSize = "60px";
        }
    }
    function mute() {
        if (audio8.muted) {
            audio8.muted = false;
            mutebtn8.style.background = "url(media/speaker.jpg) no-repeat";
            mutebtn8.style.backgroundSize = "60px";
        } else {
            audio8.muted = true;
            mutebtn8.style.background = "url(media/speakermute.png) no-repeat";
            mutebtn8.style.backgroundSize = "60px";
        }
    }
};
function initAudioPlayer9() {
    audio9 = new Audio();
    audio9.src = "media/sonar2.mp3";
    audio9.loop = true;
    audio9.play();
    // set object references
    playbtn9 = document.getElementById("playpausebtn9");
    mutebtn9 = document.getElementById("mutebtn9");
    //Event Listeners
    playbtn9.addEventListener("click", playPause);
    mutebtn9.addEventListener("click", mute);
    //functions
    function playPause() {
        if (audio9.paused) {
            audio9.play();
            playbtn9.style.background = "url(media/pause.jpeg) no-repeat";
            playbtn9.style.backgroundSize = "60px";
        } else {
            audio9.pause();
            playbtn9.style.background = "url(media/play.png) no-repeat";
            playbtn9.style.backgroundSize = "60px";
        }
    }
    function mute() {
        if (audio9.muted) {
            audio9.muted = false;
            mutebtn9.style.background = "url(media/speaker.jpg) no-repeat";
            mutebtn9.style.backgroundSize = "60px";
        } else {
            audio9.muted = true;
            mutebtn9.style.background = "url(media/speakermute.png) no-repeat";
            mutebtn9.style.backgroundSize = "60px";
        }
    }
};
window.addEventListener("load", initAudioPlayer)
window.addEventListener("load", initAudioPlayer1)
window.addEventListener("load", initAudioPlayer2)
window.addEventListener("load", initAudioPlayer3)
window.addEventListener("load", initAudioPlayer4)
window.addEventListener("load", initAudioPlayer5)
window.addEventListener("load", initAudioPlayer6)
window.addEventListener("load", initAudioPlayer7)
window.addEventListener("load", initAudioPlayer8)
window.addEventListener("load", initAudioPlayer9);
