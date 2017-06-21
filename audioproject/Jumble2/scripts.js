window.onload = function(){
var volumeBars = {
    mono : document.getElementById("monoFill")
};

document.getElementById("open-file").onchange = function (evt) {
    var file = evt.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        playSound(e.target.result);
    }
    reader.readAsArrayBuffer(file);
}
document.getElementById("open-file1").onchange = function (evt) {
    var file = evt.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        playSound1(e.target.result);
    }
    reader.readAsArrayBuffer(file);
}

var context = new AudioContext();
var context1 = new AudioContext();



function playSound(arraybuffer) {
    context.close();
    context	= new AudioContext();

    var source = context.createBufferSource();
    context.decodeAudioData(arraybuffer, function (buffer) {
        source.buffer = buffer;
        source.loop = true;
        var gainNode = context.createGain();
var mute = document.querySelector('.mute');
      
      source.connect(gainNode);
gainNode.connect(context.destination);


mute.onclick = voiceMute;

function voiceMute() {
  if(mute.id == "") {
    gainNode.gain.value = 10;
    mute.id = "activated";
    mute.innerHTML = "Unmute";
  } else {
    gainNode.gain.value = 1;
    mute.id = "";
    mute.innerHTML = "Mute";
  }
}
    });
     

    var analyser = context.createAnalyser();
    analyser.smoothingTimeConstant = 0.3;
    analyser.fftSize = 1024;

    jsNode = context.createScriptProcessor(2048, 1, 1);
    jsNode.onaudioprocess = function() {
        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        volumeBars.mono.style.height = Math.average(array) * 2 + "px";
        volumeBars.mono.innerHTML = Math.floor(Math.average(array));
    }

    source.connect(analyser);
    source.connect(context.destination);
    jsNode.connect(context.destination);
    analyser.connect(jsNode);

    source.start();
    
     document.getElementById("stop").onclick=
     function stopSound(){
        console.log("stopping?");
        source.stop();
    }
     
}
//    document.getElementById("play").onclick = function(){
//         console.log("goeing");
//         // source.start(0);
//         playSound();
//         var source = context.createBufferSource();
//     // context.decodeAudioData(arraybuffer, function (buffer) {
//     //     source.buffer = buffer;
//     //     source.loop = true;
//       source.start();
//     };
//         // playSound();
// }
}
// window.onload = function(){

// }
function playSound1(arraybuffer) {
    context1.close();
    context1 = new AudioContext();

    var source = context1.createBufferSource();
    context1.decodeAudioData(arraybuffer, function (buffer) {
        source.buffer = buffer;
        source.loop = true;
    });


     var analyser = context1.createAnalyser();
    analyser.smoothingTimeConstant = 0.3;
    analyser.fftSize = 1024;

    jsNode = context1.createScriptProcessor(2048, 1, 1);
    jsNode.onaudioprocess = function() {
        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        volumeBars.mono.style.height = Math.average(array) * 2 + "px";
        volumeBars.mono.innerHTML = Math.floor(Math.average(array));
    }

    source.connect(analyser);
    source.connect(context1.destination);
    jsNode.connect(context1.destination);
    analyser.connect(jsNode);

    source.start();
}

Math.average = function(arguments) {
    var numbers;
    if (arguments[0] instanceof Array) {
        numbers = arguments[0];
    }
    else if (typeof arguments[0] == "number") {
        numbers = arguments;
    }
    var sum		= 0;
    var average	= 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    average = sum / numbers.length;
    return average;
}
