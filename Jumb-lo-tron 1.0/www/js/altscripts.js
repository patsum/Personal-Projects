// console.log("altscripts running")
var app = {
    initialize: function() { },    
    bindEvents: function() { } ,   

    onDeviceReady: function() {

// console.log("onDeviceReady firing")
var audio, audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, playbtn, playbtn1, playbtn2,
playbtn3, playbtn4, playbtn5, playbtn6, playbtn7, playbtn8, playbtn9, mutebtn, mutebtn1,mutebtn2,mutebtn3,mutebtn4,
mutebtn5,mutebtn6,mutebtn7,mutebtn8,mutebtn9, dir, ext, mylist, stopbtn;
dir = "./media/";
    ext = ".mp3";

function initAudioPlayer() {
    // console.log("initAudio working")
    audio = new Audio();
    audio.src = dir+"sonarchord"+ext;
    // audio.src = e.target.result;
    audio.loop = true;
    
    audio.play();
    // set object references
    playbtn = document.getElementById("playpausebtn");
    mutebtn = document.getElementById("mutebtn");
    //Event Listeners
    playbtn.addEventListener("click", playPause);
    mutebtn.addEventListener("click", mute);
    var speedlist = document.getElementById('speedlist');
    speedlist.addEventListener("change", changeSpeed);
    function changeSpeed(evt) {
        audio.playbackRate = evt.target.value;
        audio.play();
    }
    mylist = document.getElementById("mylist");
    mylist.addEventListener("change", changeSample);
    
    //functions
    function changeSample(event){
        audio.src = dir+event.target.value+ext;
        audio.play();
    }
    function playPause() {
        if (audio.paused) {
            audio.play();
            playbtn.style.background = "url(./media/pause.jpeg)";
            playbtn.style.backgroundSize = "2.7em";
            playbtn.style.backgroundColor = "forestgreen";
        } else {
            audio.pause();
            playbtn.style.background = "url(./media/play.png) no-repeat";
            playbtn.style.backgroundSize = "3em";
            playbtn.style.backgroundColor = "#777";
        }
    }
    function mute() {
        if (audio.muted) {
            audio.muted = false;
            mutebtn.style.background = "url(./media/speaker.jpg) no-repeat";
            mutebtn.style.backgroundSize = "2.7em";
            mutebtn.style.backgroundColor = "#f1229f";
        } else {
            audio.muted = true;
            mutebtn.style.background = "url(./media/speakermute.png) no-repeat";
            mutebtn.style.backgroundSize = "2.5em";
            mutebtn.style.backgroundColor = "#777";
        }
    }
};
function initAudioPlayer1() {
    audio1 = new Audio();
    audio1.src = dir+"sonarchordhigh"+ext;
    audio1.loop = true;
    audio1.play();
    // set object references
    playbtn1 = document.getElementById("playpausebtn1");
    mutebtn1 = document.getElementById("mutebtn1");
    //Event Listeners
    playbtn1.addEventListener("click", playPause);
    mutebtn1.addEventListener("click", mute);
    var speedlist = document.getElementById('speedlist1');
    speedlist.addEventListener("change", changeSpeed);
    function changeSpeed(evt) {
        audio1.playbackRate = evt.target.value;
        audio1.play();
    }
    // Select functionality
    mylist = document.getElementById("mylist1");
    mylist.addEventListener("change", changeSample);
    function changeSample(event){
        audio1.src = dir+event.target.value+ext;
        audio1.play();
    }
    //functions
    function playPause() {
        if (audio1.paused) {
            audio1.play();
            playbtn1.style.background = "url(./media/pause.jpeg) no-repeat";
            playbtn1.style.backgroundSize = "2.7em";
            playbtn1.style.backgroundColor = "forestgreen";
        } else {
            audio1.pause();
            playbtn1.style.background = "url(./media/play.png) no-repeat";
            playbtn1.style.backgroundSize = "3em";
            playbtn1.style.backgroundColor = "#777";
        }
    }
    function mute() {
        if (audio1.muted) {
            audio1.muted = false;
            mutebtn1.style.background = "url(./media/speaker.jpg) no-repeat";
            mutebtn1.style.backgroundSize = "2.7em";
            mutebtn1.style.backgroundColor = "#f1229f"
        } else {
            audio1.muted = true;
            mutebtn1.style.background = "url(./media/speakermute.png) no-repeat";
            mutebtn1.style.backgroundSize = "2.5em";
            mutebtn1.style.backgroundColor = "#777";
        }
    }
};
function initAudioPlayer2() {
    audio2 = new Audio();
    audio2.src = "./media/sonarchordhigh2.mp3";
    audio2.loop = true;
    audio2.play();
    // set object references
    playbtn2 = document.getElementById("playpausebtn2");
    mutebtn2 = document.getElementById("mutebtn2");
    //Event Listeners
    playbtn2.addEventListener("click", playPause);
    mutebtn2.addEventListener("click", mute);
    var speedlist = document.getElementById('speedlist2');
    speedlist.addEventListener("change", changeSpeed);
    function changeSpeed(evt) {
        audio2.playbackRate = evt.target.value;
        audio2.play();
    }
   //Select Functionality 
    mylist = document.getElementById("mylist2");
    mylist.addEventListener("change", changeSample);
    function changeSample(event){
        audio2.src = dir+event.target.value+ext;
        audio2.play();
    }
    //functions
    function playPause() {
        if (audio2.paused) {
            audio2.play();
            playbtn2.style.background = "url(./media/pause.jpeg) no-repeat";
            playbtn2.style.backgroundSize = "2.7em";
            playbtn2.style.backgroundColor = "forestgreen";
        } else {
            audio2.pause();
            playbtn2.style.background = "url(./media/play.png) no-repeat";
            playbtn2.style.backgroundSize = "3em";
            playbtn2.style.backgroundColor = "#777";
        }
    }
    function mute() {
        if (audio2.muted) {
            audio2.muted = false;
            mutebtn2.style.background = "url(./media/speaker.jpg) no-repeat";
            mutebtn2.style.backgroundSize = "2.7em";
            mutebtn2.style.backgroundColor = "#f1229f"
        } else {
            audio2.muted = true;
            mutebtn2.style.background = "url(./media/speakermute.png) no-repeat";
            mutebtn2.style.backgroundSize = "2.5em";
            mutebtn2.style.backgroundColor = "#777";
        }
    }
};
function initAudioPlayer3() {
    audio3 = new Audio();
    audio3.src = "./media/sonarnote.mp3";
    audio3.loop = true;
    audio3.play();
    // set object references
    playbtn3 = document.getElementById("playpausebtn3");
    mutebtn3 = document.getElementById("mutebtn3");
    //Event Listeners
    playbtn3.addEventListener("click", playPause);
    mutebtn3.addEventListener("click", mute);
var speedlist = document.getElementById('speedlist3');
    speedlist.addEventListener("change", changeSpeed);
    function changeSpeed(evt) {
        audio3.playbackRate = evt.target.value;
        audio3.play();
    }
    //Select Functionality 
    mylist = document.getElementById("mylist3");
    mylist.addEventListener("change", changeSample);
    function changeSample(event){
        audio3.src = dir+event.target.value+ext;
        audio3.play();
    }
    //functions
    function playPause() {
        if (audio3.paused) {
            audio3.play();
            playbtn3.style.background = "url(./media/pause.jpeg) no-repeat";
            playbtn3.style.backgroundSize = "2.7em";
            playbtn3.style.backgroundColor = "forestgreen";
        } else {
            audio3.pause();
            playbtn3.style.background = "url(./media/play.png) no-repeat";
            playbtn3.style.backgroundSize = "3em";
            playbtn3.style.backgroundColor = "#777";
        }
    }
    function mute() {
        if (audio3.muted) {
            audio3.muted = false;
            mutebtn3.style.background = "url(./media/speaker.jpg) no-repeat";
            mutebtn3.style.backgroundSize = "2.7em";
            mutebtn3.style.backgroundColor = "#f1229f";
        } else {
            audio3.muted = true;
            mutebtn3.style.background = "url(./media/speakermute.png) no-repeat";
            mutebtn3.style.backgroundSize = "2.5em";
            mutebtn3.style.backgroundColor = "#777";
        }
    }
};
function initAudioPlayer4() {
    audio4 = new Audio();
    audio4.src = "./media/sonarnote2.mp3";
    audio4.loop = true;
    audio4.play();
    // set object references
    playbtn4 = document.getElementById("playpausebtn4");
    mutebtn4 = document.getElementById("mutebtn4");
    //Event Listeners
    playbtn4.addEventListener("click", playPause);
    mutebtn4.addEventListener("click", mute);
    var speedlist = document.getElementById('speedlist4');
    speedlist.addEventListener("change", changeSpeed);
    function changeSpeed(evt) {
        audio4.playbackRate = evt.target.value;
        audio4.play();
    }
//Select Functionality 
    mylist = document.getElementById("mylist4");
    mylist.addEventListener("change", changeSample);
    function changeSample(event){
        audio4.src = dir+event.target.value+ext;
        audio4.play();
    }
    //functions
    function playPause() {
        if (audio4.paused) {
            audio4.play();
            playbtn4.style.background = "url(./media/pause.jpeg) no-repeat";
            playbtn4.style.backgroundSize = "2.7em";
            playbtn4.style.backgroundColor = "forestgreen";
        } else {
            audio4.pause();
            playbtn4.style.background = "url(./media/play.png) no-repeat";
            playbtn4.style.backgroundSize = "3em";
            playbtn4.style.backgroundColor = "#777";
        }
    }
    function mute() {
        if (audio4.muted) {
            audio4.muted = false;
            mutebtn4.style.background = "url(./media/speaker.jpg) no-repeat";
            mutebtn4.style.backgroundSize = "2.7em";
            mutebtn4.style.backgroundColor = "#f1229f";
        } else {
            audio4.muted = true;
            mutebtn4.style.background = "url(./media/speakermute.png) no-repeat";
            mutebtn4.style.backgroundSize = "2.5em";
            mutebtn4.style.backgroundColor = "#777";
        }
    }
};
function initAudioPlayer5() {
    audio5 = new Audio();
    audio5.src = "./media/sonarnote3.mp3";
    audio5.loop = true;
    audio5.play();
    // set object references
    playbtn5 = document.getElementById("playpausebtn5");
    mutebtn5 = document.getElementById("mutebtn5");
    //Event Listeners
    playbtn5.addEventListener("click", playPause);
    mutebtn5.addEventListener("click", mute);
    //speed change
    var speedlist = document.getElementById('speedlist5');
    speedlist.addEventListener("change", changeSpeed);
    function changeSpeed(evt) {
        audio5.playbackRate = evt.target.value;
        audio5.play();
    }
    //Select Functionality 
    mylist = document.getElementById("mylist5");
    mylist.addEventListener("change", changeSample);
    function changeSample(event){
        audio5.src = dir+event.target.value+ext;
        audio5.play();
    }
    //functions
    function playPause() {
        if (audio5.paused) {
            audio5.play();
            playbtn5.style.background = "url(./media/pause.jpeg) no-repeat";
            playbtn5.style.backgroundSize = "2.7em";
            playbtn5.style.backgroundColor = "forestgreen";
        } else {
            audio5.pause();
            playbtn5.style.background = "url(./media/play.png) no-repeat";
            playbtn5.style.backgroundSize = "3em";
            playbtn5.style.backgroundColor = "#777";
        }
    }
    function mute() {
        if (audio5.muted) {
            audio5.muted = false;
            mutebtn5.style.background = "url(./media/speaker.jpg) no-repeat";
            mutebtn5.style.backgroundSize = "2.7em";
            mutebtn5.style.backgroundColor = "#f1229f";
        } else {
            audio5.muted = true;
            mutebtn5.style.background = "url(./media/speakermute.png) no-repeat";
            mutebtn5.style.backgroundSize = "2.5em";
            mutebtn5.style.backgroundColor = "#777";
        }
    }
};
function initAudioPlayer6() {
    audio6 = new Audio();
    audio6.src = "./media/sonarnote4.mp3";
    audio6.loop = true;
    audio6.play();
    // set object references
    playbtn6 = document.getElementById("playpausebtn6");
    mutebtn6 = document.getElementById("mutebtn6");
    //Event Listeners
    playbtn6.addEventListener("click", playPause);
    mutebtn6.addEventListener("click", mute);
    //speed change
    var speedlist = document.getElementById('speedlist6');
    speedlist.addEventListener("change", changeSpeed);
    function changeSpeed(evt) {
        audio6.playbackRate = evt.target.value;
        audio6.play();
    }
    //Select Functionality 
    mylist = document.getElementById("mylist6");
    mylist.addEventListener("change", changeSample);
    function changeSample(event){
        audio6.src = dir+event.target.value+ext;
        audio6.play();
    }
    //functions
    function playPause() {
        if (audio6.paused) {
            audio6.play();
            playbtn6.style.background = "url(./media/pause.jpeg) no-repeat";
            playbtn6.style.backgroundSize = "2.7em";
            playbtn6.style.backgroundColor = "forestgreen";
        } else {
            audio6.pause();
            playbtn6.style.background = "url(./media/play.png) no-repeat";
            playbtn6.style.backgroundSize = "3em";
            playbtn6.style.backgroundColor = "#777";
        }
    }
    function mute() {
        if (audio6.muted) {
            audio6.muted = false;
            mutebtn6.style.background = "url(./media/speaker.jpg) no-repeat";
            mutebtn6.style.backgroundSize = "2.7em";
            mutebtn6.style.backgroundColor = "#f1229f";
        } else {
            audio6.muted = true;
            mutebtn6.style.background = "url(.media/speakermute.png) no-repeat";
            mutebtn6.style.backgroundSize = "2.5em";
            mutebtn6.style.backgroundColor = "#777";
        }
    }
};
function initAudioPlayer7() {
    audio7 = new Audio();
    audio7.src = "./media/sonarnotehi.mp3";
    audio7.loop = true;
    audio7.play();
    // set object references
    playbtn7 = document.getElementById("playpausebtn7");
    mutebtn7 = document.getElementById("mutebtn7");
    //Event Listeners
    playbtn7.addEventListener("click", playPause);
    mutebtn7.addEventListener("click", mute);
    //changespeed
    var speedlist = document.getElementById('speedlist7');
    speedlist.addEventListener("change", changeSpeed);
    function changeSpeed(evt) {
        audio7.playbackRate = evt.target.value;
        audio7.play();
    }
    //Select Functionality 
    mylist = document.getElementById("mylist7");
    mylist.addEventListener("change", changeSample);
    function changeSample(event){
        audio7.src = dir+event.target.value+ext;
        audio7.play();
    }
    //functions
    function playPause() {
        if (audio7.paused) {
            audio7.play();
            playbtn7.style.background = "url(./media/pause.jpeg) no-repeat";
            playbtn7.style.backgroundSize = "2.7em";
            playbtn7.style.backgroundColor = "forestgreen";
        } else {
            audio7.pause();
            playbtn7.style.background = "url(./media/play.png) no-repeat";
            playbtn7.style.backgroundSize = "3em";
            playbtn7.style.backgroundColor = "#777";
        }
    }
    function mute() {
        if (audio7.muted) {
            audio7.muted = false;
            mutebtn7.style.background = "url(./media/speaker.jpg) no-repeat";
            mutebtn7.style.backgroundSize = "2.7em";
            mutebtn7.style.backgroundColor = "#f1229f";
        } else {
            audio7.muted = true;
            mutebtn7.style.background = "url(./media/speakermute.png) no-repeat";
            mutebtn7.style.backgroundSize = "2.5em";
            mutebtn7.style.backgroundColor = "#777";
        }
    }
};
function initAudioPlayer8() {
    audio8 = new Audio();
    audio8.src = "./media/sonar1.mp3";
    audio8.loop = true;
    audio8.play();
    // set object references
    playbtn8 = document.getElementById("playpausebtn8");
    mutebtn8 = document.getElementById("mutebtn8");
    //Event Listeners
    playbtn8.addEventListener("click", playPause);
    mutebtn8.addEventListener("click", mute);
    var speedlist = document.getElementById('speedlist8');
    speedlist.addEventListener("change", changeSpeed);
    function changeSpeed(evt) {
        audio8.playbackRate = evt.target.value;
        audio8.play();
    }
    //Select Functionality 
    mylist = document.getElementById("mylist8");
    mylist.addEventListener("change", changeSample);
    function changeSample(event){
        audio8.src = dir+event.target.value+ext;
        audio8.play();
    }
    //functions
    function playPause() {
        if (audio8.paused) {
            audio8.play();
            playbtn8.style.background = "url(./media/pause.jpeg) no-repeat";
            playbtn8.style.backgroundSize = "2.7em";
            playbtn8.style.backgroundColor = "forestgreen";
        } else {
            audio8.pause();
            playbtn8.style.background = "url(./media/play.png) no-repeat";
            playbtn8.style.backgroundSize = "3em";
            playbtn8.style.backgroundColor = "#777";
        }
    }
    function mute() {
        if (audio8.muted) {
            audio8.muted = false;
            mutebtn8.style.background = "url(./media/speaker.jpg) no-repeat";
            mutebtn8.style.backgroundSize = "2.7em";
            mutebtn8.style.backgroundColor = "#f1229f";
        } else {
            audio8.muted = true;
            mutebtn8.style.background = "url(./media/speakermute.png) no-repeat";
            mutebtn8.style.backgroundSize = "2.5em";
            mutebtn8.style.backgroundColor = "#777";
        }
    }
};
function initAudioPlayer9() {
    audio9 = new Audio();
    audio9.src = "./media/sonar2.mp3";
    audio9.loop = true;
    audio9.play();
    // set object references
    playbtn9 = document.getElementById("playpausebtn9");
    mutebtn9 = document.getElementById("mutebtn9");
    //Event Listeners
    playbtn9.addEventListener("click", playPause);
    mutebtn9.addEventListener("click", mute);
    // speed change
    var speedlist = document.getElementById('speedlist9');
    speedlist.addEventListener("change", changeSpeed);
    function changeSpeed(evt) {
        audio9.playbackRate = evt.target.value;
        audio9.play();
    }
    //Select Functionality 
    mylist = document.getElementById("mylist9");
    mylist.addEventListener("change", changeSample);
    function changeSample(event){
        audio9.src = dir+event.target.value+ext;
        audio9.play();
    }
    //functions
    function playPause() {
        if (audio9.paused) {
            audio9.play();
            playbtn9.style.background = "url(./media/pause.jpeg) no-repeat";
            playbtn9.style.backgroundSize = "2.7em";
            playbtn9.style.backgroundColor = "forestgreen";
        } else {
            audio9.pause();
            playbtn9.style.background = "url(./media/play.png) no-repeat";
            playbtn9.style.backgroundSize = "3em";
            playbtn9.style.backgroundColor = "#777";
        }
    }
    function mute() {
        if (audio9.muted) {
            audio9.muted = false;
            mutebtn9.style.background = "url(./media/speaker.jpg) no-repeat";
            mutebtn9.style.backgroundSize = "2.7em";
            mutebtn9.style.backgroundColor = "#f1229f";
        } else {
            audio9.muted = true;
            mutebtn9.style.background = "url(./media/speakermute.png) no-repeat";
            mutebtn9.style.backgroundSize = "2.5em";
            mutebtn9.style.backgroundColor = "#777";
        }
    }
};
// stop
    window.onload=function(){
   stopbtn = document.getElementById("stopbtn");
    stopbtn.addEventListener("click", allPause);
    function allPause(){
        if(audio.paused, audio2.paused,audio3.paused,audio4.paused,audio5.paused,
        audio6.paused,audio7.paused,audio8.paused,audio9.paused){
            audio.play(), playbtn.style.background = "url(./media/pause.jpeg)";
            playbtn.style.backgroundSize = "2.7em";
            playbtn.style.backgroundColor = "forestgreen";
            audio1.play(), playbtn1.style.background = "url(./media/pause.jpeg)";
            playbtn1.style.backgroundSize = "2.7em";
            playbtn1.style.backgroundColor = "forestgreen";
            audio2.play(), playbtn2.style.background = "url(./media/pause.jpeg)";
            playbtn2.style.backgroundSize = "2.7em";
            playbtn2.style.backgroundColor = "forestgreen";
            audio3.play(), playbtn3.style.background = "url(./media/pause.jpeg)";
            playbtn3.style.backgroundSize = "2.7em";
            playbtn3.style.backgroundColor = "forestgreen";
            audio4.play(), playbtn4.style.background = "url(./media/pause.jpeg)";
            playbtn4.style.backgroundSize = "2.7em";
            playbtn4.style.backgroundColor = "forestgreen";
         audio5.play(), playbtn5.style.background = "url(./media/pause.jpeg)";
            playbtn5.style.backgroundSize = "2.7em";
            playbtn5.style.backgroundColor = "forestgreen";
         audio6.play(), playbtn6.style.background = "url(./media/pause.jpeg)";
            playbtn6.style.backgroundSize = "2.7em";
            playbtn6.style.backgroundColor = "forestgreen";
         audio7.play(), playbtn7.style.background = "url(./media/pause.jpeg)";
            playbtn7.style.backgroundSize = "2.7em";
            playbtn7.style.backgroundColor = "forestgreen";
         audio8.play(), playbtn8.style.background = "url(./media/pause.jpeg)";
            playbtn8.style.backgroundSize = "2.7em";
            playbtn8.style.backgroundColor = "forestgreen";
         audio9.play(), playbtn9.style.background = "url(./media/pause.jpeg)";
            playbtn9.style.backgroundSize = "2.7em";
            playbtn9.style.backgroundColor = "forestgreen";
        }else{audio.pause(),playbtn.style.background = "url(./media/play.png)";
            playbtn.style.backgroundSize = "3em";
            playbtn.style.backgroundColor = "#777";
        audio1.pause(),playbtn1.style.background = "url(./media/play.png)";
            playbtn1.style.backgroundSize = "3em";
            playbtn1.style.backgroundColor = "#777";
        audio2.pause(),playbtn2.style.background = "url(./media/play.png)";
            playbtn2.style.backgroundSize = "3em";
            playbtn2.style.backgroundColor = "#777";
        audio3.pause(),playbtn3.style.background = "url(./media/play.png)";
            playbtn3.style.backgroundSize = "3em";
            playbtn3.style.backgroundColor = "#777";
        audio4.pause(),playbtn4.style.background = "url(./media/play.png)";
            playbtn4.style.backgroundSize = "3em";
            playbtn4.style.backgroundColor = "#777";
        audio5.pause(),playbtn5.style.background = "url(./media/play.png)";
            playbtn5.style.backgroundSize = "3em";
            playbtn5.style.backgroundColor = "#777";
        audio6.pause(),playbtn6.style.background = "url(./media/play.png)";
            playbtn6.style.backgroundSize = "3em";
            playbtn6.style.backgroundColor = "#777";
        audio7.pause(),playbtn7.style.background = "url(./media/play.png)";
            playbtn7.style.backgroundSize = "3em";
            playbtn7.style.backgroundColor = "#777";
        audio8.pause(),playbtn8.style.background = "url(./media/play.png)";
            playbtn8.style.backgroundSize = "3em";
            playbtn8.style.backgroundColor = "#777";
        audio9.pause(),playbtn9.style.background = "url(./media/play.png)";
            playbtn9.style.backgroundSize = "3em";
            playbtn9.style.backgroundColor = "#777";
        };
    }

// var volumeBars = {
//     mono : document.getElementById("monoFill")
// };

// document.getElementById("open-file").onchange = function (evt) {
//     var file = evt.target.files[0];
//     var reader = new FileReader();
//     reader.onload = function(e) {
//         playSound(e.target.result);
        
//     }
//     reader.readAsArrayBuffer(file);
// }

// var context = new AudioContext();

// function playSound(arraybuffer) {
//     context.close();
//     context	= new AudioContext();

//     var source = context.createBufferSource();
//     context.decodeAudioData(arraybuffer, function (buffer) {
//         source.buffer = buffer;
//     });

//     var analyser = context.createAnalyser();
//     analyser.smoothingTimeConstant = 0.3;
//     analyser.fftSize = 1024;

//     jsNode = context.createScriptProcessor(2048, 1, 1);
//     jsNode.onaudioprocess = function() {
//         var array = new Uint8Array(analyser.frequencyBinCount);
//         analyser.getByteFrequencyData(array);
//         volumeBars.mono.style.height = Math.average(array) * 2 + "px";
//         volumeBars.mono.innerHTML = Math.floor(Math.average(array));
//     }

//     source.connect(analyser);
//     source.connect(context.destination);
//     jsNode.connect(context.destination);
//     analyser.connect(jsNode);

//     source.start();
// }

// Math.average = function(arguments) {
//     var numbers;
//     if (arguments[0] instanceof Array) {
//         numbers = arguments[0];
//     }
//     else if (typeof arguments[0] == "number") {
//         numbers = arguments;
//     }
//     var sum		= 0;
//     var average	= 0;
//     for (var i = 0; i < numbers.length; i++){
//         sum += numbers[i];
//     }
//     average = sum / numbers.length;
//     return average;
// }

}
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

}
};

app.initialize();
app.bindEvents();
app.onDeviceReady();