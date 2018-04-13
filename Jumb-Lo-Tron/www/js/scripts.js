window.onload = function() {
    // window.onload = function () {
        var volumeBars = {
            mono: document.getElementById("monoFill"),
            mono1: document.getElementById("monoFill1"),
            mono2: document.getElementById("monoFill2"),
            mono3: document.getElementById("monoFill3"),
            mono4: document.getElementById("monoFill4"),
        };
    
        document.getElementById("open-file").onchange = function (evt) {
            var file = evt.target.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                playSound(e.target.result);
            }
            reader.readAsArrayBuffer(file);
        }
        document.getElementById("open-file1").onchange = function (evt) {
            var file = evt.target.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                playSound1(e.target.result);
            }
            reader.readAsArrayBuffer(file);
        }
        document.getElementById("open-file2").onchange = function (evt) {
            var file = evt.target.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                playSound2(e.target.result);
            }
            reader.readAsArrayBuffer(file);
        }
        document.getElementById("open-file3").onchange = function (evt) {
            var file = evt.target.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                playSound3(e.target.result);
            }
            reader.readAsArrayBuffer(file);
        }
        document.getElementById("open-file4").onchange = function (evt) {
            var file = evt.target.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                playSound4(e.target.result);
            }
            reader.readAsArrayBuffer(file);
        }
        
    
        var context = new AudioContext();
        var context1 = new AudioContext();
        var context2 = new AudioContext();
        var context3 = new AudioContext();
        var context4 = new AudioContext();
        
       
        
    
        var playbackControl = document.querySelector('.playback-rate-control');
        var playbackValue = document.querySelector('.playback-rate-value');
        var panControl = document.querySelector('.panning-control')
        var panValue = document.querySelector('.panning-value');
        var mute = document.querySelector('.mute');
        var gainSlider = document.getElementById("gainSlider");
        var filtControl = document.querySelector(".filter-control");
        var filtValue = document.querySelector(".filter-value");
        var filtType = document.querySelector(".filter-type");
    
        var playbackControl1 = document.querySelector('.playback-rate-control1');
        var playbackValue1 = document.querySelector('.playback-rate-value1');
        var panControl1 = document.querySelector('.panning-control1')
        var panValue1 = document.querySelector('.panning-value1');
        var mute1 = document.querySelector('.mute1');
        var gainSlider1 = document.getElementById("gainSlider1");
        var filtControl1 = document.querySelector(".filter-control1");
        var filtValue1 = document.querySelector(".filter-value1");
        var filtType1 = document.querySelector(".filter-type1");
    
        var playbackControl2 = document.querySelector('.playback-rate-control2');
        var playbackValue2 = document.querySelector('.playback-rate-value2');
        var panControl2 = document.querySelector('.panning-control2')
        var panValue2 = document.querySelector('.panning-value2');
        var mute2 = document.querySelector('.mute2');
        var gainSlider2 = document.getElementById("gainSlider2");
        var filtControl2 = document.querySelector(".filter-control2");
        var filtValue2 = document.querySelector(".filter-value2");
        var filtType2 = document.querySelector(".filter-type2");
    
        var playbackControl3 = document.querySelector('.playback-rate-control3');
        var playbackValue3 = document.querySelector('.playback-rate-value3');
        var panControl3 = document.querySelector('.panning-control3')
        var panValue3 = document.querySelector('.panning-value3');
        var mute3 = document.querySelector('.mute3');
        var gainSlider3 = document.getElementById("gainSlider3");
        var filtControl3 = document.querySelector(".filter-control3");
        var filtValue3 = document.querySelector(".filter-value3");
        var filtType3 = document.querySelector(".filter-type3");
    
        var playbackControl4 = document.querySelector('.playback-rate-control4');
        var playbackValue4 = document.querySelector('.playback-rate-value4');
        var panControl4 = document.querySelector('.panning-control4')
        var panValue4 = document.querySelector('.panning-value4');
        var mute4 = document.querySelector('.mute4');
        var gainSlider4 = document.getElementById("gainSlider4");
        var filtControl4 = document.querySelector(".filter-control4");
        var filtValue4 = document.querySelector(".filter-value4");
        var filtType4 = document.querySelector(".filter-type4");
    
        function playSound(arraybuffer) {
            context.close();
            context = new AudioContext();
    
            var source = context.createBufferSource();
            var gainNode = context.createGain();
            var panNode = context.createStereoPanner();
            var filter = context.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 15000;
            // if (filtType.value = "lowpass"){
            //     filter.type = 'lowpass';
            // } else if(filtType.value = 'bandpass'){
            //     filter.type = 'bandpass';
            // } else if(filtType.value = 'bandpass'){
            //     filter.type = 'highpass';
            // };
    
    
    
    
            // source.connect(panNode);
            panNode.connect(gainNode);
            context.decodeAudioData(arraybuffer, function (buffer) {
                source.buffer = buffer;
                source.loop = true;
                source.playbackRate.value = playbackControl1.value;
    
                source.connect(filter);
                // source.connect(gainNode);
    
                gainNode.connect(context.destination);
                // source.connect(filter);
                filter.connect(panNode);
    
                var pause = function () {
                    source.disconnect();
                };
                // and to play
                var play = function () {
                    source.connect(filter);
                    source.connect(analyser);
                };
                mute.onclick = nodeMute;
    
                function nodeMute() {
                    if (mute.id == "") {
                        pause();
                        mute.id = "activated";
                        mute.innerHTML = "Goe";
                        mute.style.background = "green";
                        // mute.style.height = "45px";
                        // mute.style.width = "45px";
                    } else {
                        play();
                        mute.id = "";
                        mute.innerHTML = "Stahp";
                        mute.style.background = "red";
                        
                        // mute.style.height = "45px";
                        // mute.style.width = "45px";
                    }
                }
    
                //speed slider
                playbackControl.oninput = function () {
                    source.playbackRate.value = playbackControl.value;
                    playbackValue.innerHTML = playbackControl.value;
                }
                //pan slider
                panControl.oninput = function () {
                    panNode.pan.value = panControl.value;
                    //   panValue.innerHTML = panControl.value;
                }
                //filter slider
                filtControl.oninput = function () {
                    filter.frequency.value = filtControl.value;
                    filtValue.innerHTML = filtControl.value;
                }
    
                // gainSlider.oninput = function () {
                //     gainNode.gain = gainSlider.value;
                // };
    
                //     mute.onclick = voiceMute;
    
                //     function voiceMute() {
                //         if (mute.id == "") {
                //             gainNode.gain.value = 0;
                //             mute.id = "activated";
                //             mute.innerHTML = "Unmute";
                //         } else {
                //             gainNode.gain.value = 1;
                //             mute.id = "";
                //             mute.innerHTML = "Mute";
                //         }
                //     }
    
    
    
    
                var analyser = context.createAnalyser();
                analyser.smoothingTimeConstant = 0.3;
                analyser.fftSize = 1024;
    
                jsNode = context.createScriptProcessor(2048, 1, 1);
                jsNode.onaudioprocess = function () {
                    var array = new Uint8Array(analyser.frequencyBinCount);
                    analyser.getByteFrequencyData(array);
                    volumeBars.mono.style.height = Math.average(array) * 2 + "px";
                    volumeBars.mono.innerHTML = Math.floor(Math.average(array));
                }
    
                // var source = context.createBufferSource();
                source.connect(analyser);
                // source.connect(gainNode);
                jsNode.connect(context.destination);
                analyser.connect(jsNode);
    
                source.start();
            });
            //  document.getElementById("stop").onclick=
            //  function stopSound(){
            //     console.log("stopping?");
            //     source.stop();
            // }
    
        }
        function playSound1(arraybuffer) {
            context1.close();
            context1 = new AudioContext();
    
            var source = context1.createBufferSource();
            var gainNode = context1.createGain();
            var panNode = context1.createStereoPanner();
            var filter = context1.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 15000;
    
            // source.connect(panNode);
            panNode.connect(gainNode);
            context1.decodeAudioData(arraybuffer, function (buffer) {
                source.buffer = buffer;
                source.loop = true;
                source.playbackRate.value = playbackControl1.value;
    
                source.connect(filter);
                // source.connect(gainNode);
    
                gainNode.connect(context1.destination);
                // source.connect(filter);
                filter.connect(panNode);
            });
            var pause1 = function () {
                source.disconnect();
            }
            // and to play
            var play = function () {
                source.connect(filter);
                source.connect(analyser);
            };
            mute1.onclick = nodeMute;
    
            function nodeMute() {
                if (mute1.id == "") {
                    pause1();
                    mute1.id = "activated";
                    mute1.innerHTML = "Goe";
                    mute1.style.background = "green";
                } else {
                    play();
                    mute1.id = "";
                    mute1.innerHTML = "Stahp";
                    mute1.style.background = "red";
                }
            }
    
            //speed slider
            playbackControl1.oninput = function () {
                source.playbackRate.value = playbackControl1.value;
                playbackValue1.innerHTML = playbackControl1.value;
            }
            //pan slider
            panControl1.oninput = function () {
                panNode.pan.value = panControl1.value;
                //   panValue.innerHTML = panControl.value;
            }
            //filter slider
            filtControl1.oninput = function () {
                filter.frequency.value = filtControl1.value;
                filtValue1.innerHTML = filtControl1.value;
            }
    
    
    
            var analyser = context1.createAnalyser();
            analyser.smoothingTimeConstant = 0.3;
            analyser.fftSize = 1024;
    
            jsNode = context1.createScriptProcessor(2048, 1, 1);
            jsNode.onaudioprocess = function () {
                var array = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(array);
                volumeBars.mono1.style.height = Math.average(array) * 2 + "px";
                volumeBars.mono1.innerHTML = Math.floor(Math.average(array));
            }
    
            // var source = context.createBufferSource();
            source.connect(analyser);
            // source.connect(gainNode);
            jsNode.connect(context1.destination);
            analyser.connect(jsNode);
    
            source.start();
    
       
        }
        function playSound2(arraybuffer) {
            context2.close();
            context2 = new AudioContext();
    
            var source = context2.createBufferSource();
            var gainNode = context2.createGain();
            var panNode = context2.createStereoPanner();
            var filter = context2.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 15000;
    
           
            panNode.connect(gainNode);
            context2.decodeAudioData(arraybuffer, function (buffer) {
                source.buffer = buffer;
                source.loop = true;
                source.playbackRate.value = playbackControl2.value;
    
                source.connect(filter);
                
    
                gainNode.connect(context2.destination);
                
                filter.connect(panNode);
            });
            var pause = function () {
                source.disconnect();
            }
            // and to play
            var play = function () {
                source.connect(filter);
                source.connect(analyser);
            };
            mute2.onclick = nodeMute;
    
            function nodeMute() {
                if (mute2.id == "") {
                    pause();
                    mute2.id = "activated";
                    mute2.innerHTML = "Goe";
                    mute2.style.background = "green";
                } else {
                    play();
                    mute2.id = "";
                    mute2.innerHTML = "Stahp";
                    mute2.style.background = "red";
                }
            }
    
            //speed slider
            playbackControl2.oninput = function () {
                source.playbackRate.value = playbackControl2.value;
                playbackValue2.innerHTML = playbackControl2.value;
            }
            //pan slider
            panControl2.oninput = function () {
                panNode.pan.value = panControl2.value;
               
            }
            //filter slider
            filtControl2.oninput = function () {
                filter.frequency.value = filtControl2.value;
                filtValue2.innerHTML = filtControl2.value;
            }
    
    
    
            var analyser = context2.createAnalyser();
            analyser.smoothingTimeConstant = 0.3;
            analyser.fftSize = 1024;
    
            jsNode = context2.createScriptProcessor(2048, 1, 1);
            jsNode.onaudioprocess = function () {
                var array = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(array);
                volumeBars.mono2.style.height = Math.average(array) * 2 + "px";
                volumeBars.mono2.innerHTML = Math.floor(Math.average(array));
            }
    
            source.connect(analyser);
            jsNode.connect(context2.destination);
            analyser.connect(jsNode);
    
            source.start();
    
       
        }
        function playSound3(arraybuffer) {
            context3.close();
            context3 = new AudioContext();
    
            var source = context3.createBufferSource();
            var gainNode = context3.createGain();
            var panNode = context3.createStereoPanner();
            var filter = context3.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 15000;
    
           
            panNode.connect(gainNode);
            context3.decodeAudioData(arraybuffer, function (buffer) {
                source.buffer = buffer;
                source.loop = true;
                source.playbackRate.value = playbackControl3.value;
    
                source.connect(filter);
                
    
                gainNode.connect(context3.destination);
                
                filter.connect(panNode);
            });
            var pause = function () {
                source.disconnect();
            }
            // and to play
            var play = function () {
                source.connect(filter);
                source.connect(analyser);
            };
            mute3.onclick = nodeMute;
    
            function nodeMute() {
                if (mute3.id == "") {
                    pause();
                    mute3.id = "activated";
                    mute3.innerHTML = "Goe";
                    mute3.style.background = "green";
                } else {
                    play();
                    mute3.id = "";
                    mute3.innerHTML = "Stahp";
                    mute3.style.background = "red";
                }
            }
    
            //speed slider
            playbackControl3.oninput = function () {
                source.playbackRate.value = playbackControl3.value;
                playbackValue3.innerHTML = playbackControl3.value;
            }
            //pan slider
            panControl3.oninput = function () {
                panNode.pan.value = panControl3.value;
               
            }
            //filter slider
            filtControl3.oninput = function () {
                filter.frequency.value = filtControl3.value;
                filtValue3.innerHTML = filtControl3.value;
            }
    
    
    
            var analyser = context3.createAnalyser();
            analyser.smoothingTimeConstant = 0.3;
            analyser.fftSize = 1024;
    
            jsNode = context3.createScriptProcessor(2048, 1, 1);
            jsNode.onaudioprocess = function () {
                var array = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(array);
                volumeBars.mono3.style.height = Math.average(array) * 2 + "px";
                volumeBars.mono3.innerHTML = Math.floor(Math.average(array));
            }
    
            source.connect(analyser);
            jsNode.connect(context3.destination);
            analyser.connect(jsNode);
    
            source.start();
    
       
        }
        function playSound4(arraybuffer) {
            context4.close();
            context4 = new AudioContext();
    
            var source = context4.createBufferSource();
            var gainNode = context4.createGain();
            var panNode = context4.createStereoPanner();
            var filter = context4.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = 15000;
    
           
            panNode.connect(gainNode);
            context4.decodeAudioData(arraybuffer, function (buffer) {
                source.buffer = buffer;
                source.loop = true;
                source.playbackRate.value = playbackControl4.value;
    
                source.connect(filter);
                
    
                gainNode.connect(context4.destination);
                
                filter.connect(panNode);
            });
            var pause = function () {
                source.disconnect();
            }
            // and to play
            var play = function () {
                source.connect(filter);
                source.connect(analyser);
            };
            mute4.onclick = nodeMute;
    
            function nodeMute() {
                if (mute4.id == "") {
                    pause();
                    mute4.id = "activated";
                    mute4.innerHTML = "Goe";
                    mute4.style.background = "green";
                } else {
                    play();
                    mute4.id = "";
                    mute4.innerHTML = "Stahp";
                    mute4.style.background = "red";
                }
            }
    
            //speed slider
            playbackControl4.oninput = function () {
                source.playbackRate.value = playbackControl4.value;
                playbackValue4.innerHTML = playbackControl4.value;
            }
            //pan slider
            panControl4.oninput = function () {
                panNode.pan.value = panControl4.value;
               
            }
            //filter slider
            filtControl4.oninput = function () {
                filter.frequency.value = filtControl4.value;
                filtValue4.innerHTML = filtControl4.value;
            }
    
    
    
            var analyser = context4.createAnalyser();
            analyser.smoothingTimeConstant = 0.3;
            analyser.fftSize = 1024;
    
            jsNode = context4.createScriptProcessor(2048, 1, 1);
            jsNode.onaudioprocess = function () {
                var array = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(array);
                volumeBars.mono4.style.height = Math.average(array) * 2 + "px";
                volumeBars.mono4.innerHTML = Math.floor(Math.average(array));
            }
    
            source.connect(analyser);
            jsNode.connect(context4.destination);
            analyser.connect(jsNode);
    
            source.start();
    
       
        }
    // }
    // window.onload = function(){
    //     var volumeBars = {
    //          mono5: document.getElementById("monoFill5"),
    //         mono6: document.getElementById("monoFill6"),
    //         mono7: document.getElementById("monoFill7"),
    //         mono8: document.getElementById("monoFill8"),
    //         mono9: document.getElementById("monoFill9"),
    //     };
    //     document.getElementById("open-file5").onchange = function (evt) {
    //         var file = evt.target.files[0];
    //         var reader = new FileReader();
    //         reader.onload = function (e) {
    //             playSound5(e.target.result);
    //         }
    //         reader.readAsArrayBuffer(file);
    //     }
    //     document.getElementById("open-file6").onchange = function (evt) {
    //         var file = evt.target.files[0];
    //         var reader = new FileReader();
    //         reader.onload = function (e) {
    //             playSound6(e.target.result);
    //         }
    //         reader.readAsArrayBuffer(file);
    //     }
    //     document.getElementById("open-file7").onchange = function (evt) {
    //         var file = evt.target.files[0];
    //         var reader = new FileReader();
    //         reader.onload = function (e) {
    //             playSound7(e.target.result);
    //         }
    //         reader.readAsArrayBuffer(file);
    //     }
    //     document.getElementById("open-file8").onchange = function (evt) {
    //         var file = evt.target.files[0];
    //         var reader = new FileReader();
    //         reader.onload = function (e) {
    //             playSound8(e.target.result);
    //         }
    //         reader.readAsArrayBuffer(file);
    //     }
    //     document.getElementById("open-file9").onchange = function (evt) {
    //         var file = evt.target.files[0];
    //         var reader = new FileReader();
    //         reader.onload = function (e) {
    //             playSound9(e.target.result);
    //         }
    //         reader.readAsArrayBuffer(file);
    //     }
    
    //      var context5 = new AudioContext();
    //     var context6 = new AudioContext();
    //     var context7 = new AudioContext();
    //     var context8 = new AudioContext();
    //     var context9 = new AudioContext();
    
    //     var playbackControl5 = document.querySelector('.playback-rate-control5');
    //     var playbackValue5 = document.querySelector('.playback-rate-value5');
    //     var panControl5 = document.querySelector('.panning-control5')
    //     var panValue5 = document.querySelector('.panning-value5');
    //     var mute5 = document.querySelector('.mute5');
    //     var gainSlider5 = document.getElementById("gainSlider5");
    //     var filtControl5 = document.querySelector(".filter-control5");
    //     var filtValue5 = document.querySelector(".filter-value5");
    //     var filtType5 = document.querySelector(".filter-type5");
    
    //     var playbackControl6 = document.querySelector('.playback-rate-control6');
    //     var playbackValue6 = document.querySelector('.playback-rate-value6');
    //     var panControl6 = document.querySelector('.panning-control6')
    //     var panValue6 = document.querySelector('.panning-value6');
    //     var mute6 = document.querySelector('.mute6');
    //     var gainSlider6 = document.getElementById("gainSlider6");
    //     var filtControl6 = document.querySelector(".filter-control6");
    //     var filtValue6 = document.querySelector(".filter-value6");
    //     var filtType6 = document.querySelector(".filter-type6");
    
    //     var playbackControl7 = document.querySelector('.playback-rate-control7');
    //     var playbackValue7 = document.querySelector('.playback-rate-value7');
    //     var panControl7 = document.querySelector('.panning-control7')
    //     var panValue7 = document.querySelector('.panning-value7');
    //     var mute7 = document.querySelector('.mute7');
    //     var gainSlider7 = document.getElementById("gainSlider7");
    //     var filtControl7 = document.querySelector(".filter-control7");
    //     var filtValue7 = document.querySelector(".filter-value7");
    //     var filtType7 = document.querySelector(".filter-type7");
    
    //     var playbackControl8 = document.querySelector('.playback-rate-control8');
    //     var playbackValue8 = document.querySelector('.playback-rate-value8');
    //     var panControl8 = document.querySelector('.panning-control8')
    //     var panValue8 = document.querySelector('.panning-value8');
    //     var mute8 = document.querySelector('.mute8');
    //     var gainSlider8 = document.getElementById("gainSlider8");
    //     var filtControl8 = document.querySelector(".filter-control8");
    //     var filtValue8 = document.querySelector(".filter-value8");
    //     var filtType8 = document.querySelector(".filter-type8");
    
    //     var playbackControl9 = document.querySelector('.playback-rate-control9');
    //     var playbackValue9 = document.querySelector('.playback-rate-value9');
    //     var panControl9 = document.querySelector('.panning-control9')
    //     var panValue9 = document.querySelector('.panning-value9');
    //     var mute9 = document.querySelector('.mute9');
    //     var gainSlider9 = document.getElementById("gainSlider9");
    //     var filtControl9 = document.querySelector(".filter-control9");
    //     var filtValue9 = document.querySelector(".filter-value9");
    //     var filtType9 = document.querySelector(".filter-type9");
    
    
        
    //     function playSound5(arraybuffer) {
    //         context5.close();
    //         context5 = new AudioContext();
    
    //         var source = context5.createBufferSource();
    //         var gainNode = context5.createGain();
    //         var panNode = context5.createStereoPanner();
    //         var filter = context5.createBiquadFilter();
    //         filter.type = 'lowpass';
    //         filter.frequency.value = 15000;
    
           
    //         panNode.connect(gainNode);
    //         context5.decodeAudioData(arraybuffer, function (buffer) {
    //             source.buffer = buffer;
    //             source.loop = true;
    //             source.playbackRate.value = playbackControl5.value;
    
    //             source.connect(filter);
                
    
    //             gainNode.connect(context5.destination);
                
    //             filter.connect(panNode);
    //         });
    //         var pause = function () {
    //             source.disconnect();
    //         }
    //         // and to play
    //         var play = function () {
    //             source.connect(filter);
    //             source.connect(analyser);
    //         };
    //         mute5.onclick = nodeMute;
    
    //         function nodeMute() {
    //             if (mute5.id == "") {
    //                 pause();
    //                 mute5.id = "activated";
    //                 mute5.innerHTML = "Goe";
    //                 mute5.style.background = "green";
    //             } else {
    //                 play();
    //                 mute5.id = "";
    //                 mute5.innerHTML = "Stahp";
    //                 mute5.style.background = "red";
    //             }
    //         }
    
    //         //speed slider
    //         playbackControl5.oninput = function () {
    //             source.playbackRate.value = playbackControl5.value;
    //             playbackValue5.innerHTML = playbackControl5.value;
    //         }
    //         //pan slider
    //         panControl5.oninput = function () {
    //             panNode.pan.value = panControl5.value;
               
    //         }
    //         //filter slider
    //         filtControl5.oninput = function () {
    //             filter.frequency.value = filtControl5.value;
    //             filtValue5.innerHTML = filtControl5.value;
    //         }
    
    
    
    //         var analyser = context5.createAnalyser();
    //         analyser.smoothingTimeConstant = 0.3;
    //         analyser.fftSize = 1024;
    
    //         jsNode = context5.createScriptProcessor(2048, 1, 1);
    //         jsNode.onaudioprocess = function () {
    //             var array = new Uint8Array(analyser.frequencyBinCount);
    //             analyser.getByteFrequencyData(array);
    //             volumeBars.mono5.style.height = Math.average(array) * 2 + "px";
    //             volumeBars.mono5.innerHTML = Math.floor(Math.average(array));
    //         }
    
    //         source.connect(analyser);
    //         jsNode.connect(context5.destination);
    //         analyser.connect(jsNode);
    
    //         source.start();
    
       
    //     }
    //     function playSound6(arraybuffer) {
    //         context6.close();
    //         context6 = new AudioContext();
    
    //         var source = context6.createBufferSource();
    //         var gainNode = context6.createGain();
    //         var panNode = context6.createStereoPanner();
    //         var filter = context6.createBiquadFilter();
    //         filter.type = 'lowpass';
    //         filter.frequency.value = 15000;
    
           
    //         panNode.connect(gainNode);
    //         context6.decodeAudioData(arraybuffer, function (buffer) {
    //             source.buffer = buffer;
    //             source.loop = true;
    //             source.playbackRate.value = playbackControl6.value;
    
    //             source.connect(filter);
                
    
    //             gainNode.connect(context6.destination);
                
    //             filter.connect(panNode);
    //         });
    //         var pause = function () {
    //             source.disconnect();
    //         }
    //         // and to play
    //         var play = function () {
    //             source.connect(filter);
    //             source.connect(analyser);
    //         };
    //         mute6.onclick = nodeMute;
    
    //         function nodeMute() {
    //             if (mute6.id == "") {
    //                 pause();
    //                 mute6.id = "activated";
    //                 mute6.innerHTML = "Goe";
    //                 mute6.style.background = "green";
    //             } else {
    //                 play();
    //                 mute6.id = "";
    //                 mute6.innerHTML = "Stahp";
    //                 mute6.style.background = "red";
    //             }
    //         }
    
    //         //speed slider
    //         playbackControl6.oninput = function () {
    //             source.playbackRate.value = playbackControl6.value;
    //             playbackValue6.innerHTML = playbackControl6.value;
    //         }
    //         //pan slider
    //         panControl6.oninput = function () {
    //             panNode.pan.value = panControl6.value;
               
    //         }
    //         //filter slider
    //         filtControl6.oninput = function () {
    //             filter.frequency.value = filtControl6.value;
    //             filtValue6.innerHTML = filtControl6.value;
    //         }
    
    
    
    //         var analyser = context6.createAnalyser();
    //         analyser.smoothingTimeConstant = 0.3;
    //         analyser.fftSize = 1024;
    
    //         jsNode = context6.createScriptProcessor(2048, 1, 1);
    //         jsNode.onaudioprocess = function () {
    //             var array = new Uint8Array(analyser.frequencyBinCount);
    //             analyser.getByteFrequencyData(array);
    //             volumeBars.mono6.style.height = Math.average(array) * 2 + "px";
    //             volumeBars.mono6.innerHTML = Math.floor(Math.average(array));
    //         }
    
    //         source.connect(analyser);
    //         jsNode.connect(context6.destination);
    //         analyser.connect(jsNode);
    
    //         source.start();
    
       
    //     }
    //     function playSound7(arraybuffer) {
    //         context7.close();
    //         context7 = new AudioContext();
    
    //         var source = context7.createBufferSource();
    //         var gainNode = context7.createGain();
    //         var panNode = context7.createStereoPanner();
    //         var filter = context7.createBiquadFilter();
    //         filter.type = 'lowpass';
    //         filter.frequency.value = 15000;
    
           
    //         panNode.connect(gainNode);
    //         context7.decodeAudioData(arraybuffer, function (buffer) {
    //             source.buffer = buffer;
    //             source.loop = true;
    //             source.playbackRate.value = playbackControl7.value;
    
    //             source.connect(filter);
                
    
    //             gainNode.connect(context7.destination);
                
    //             filter.connect(panNode);
    //         });
    //         var pause = function () {
    //             source.disconnect();
    //         }
    //         // and to play
    //         var play = function () {
    //             source.connect(filter);
    //             source.connect(analyser);
    //         };
    //         mute7.onclick = nodeMute;
    
    //         function nodeMute() {
    //             if (mute7.id == "") {
    //                 pause();
    //                 mute7.id = "activated";
    //                 mute7.innerHTML = "Goe";
    //                 mute7.style.background = "green";
    //             } else {
    //                 play();
    //                 mute7.id = "";
    //                 mute7.innerHTML = "Stahp";
    //                 mute7.style.background = "red";
    //             }
    //         }
    
    //         //speed slider
    //         playbackControl7.oninput = function () {
    //             source.playbackRate.value = playbackControl7.value;
    //             playbackValue7.innerHTML = playbackControl7.value;
    //         }
    //         //pan slider
    //         panControl7.oninput = function () {
    //             panNode.pan.value = panControl7.value;
               
    //         }
    //         //filter slider
    //         filtControl7.oninput = function () {
    //             filter.frequency.value = filtControl7.value;
    //             filtValue7.innerHTML = filtControl7.value;
    //         }
    
    
    
    //         var analyser = context7.createAnalyser();
    //         analyser.smoothingTimeConstant = 0.3;
    //         analyser.fftSize = 1024;
    
    //         jsNode = context7.createScriptProcessor(2048, 1, 1);
    //         jsNode.onaudioprocess = function () {
    //             var array = new Uint8Array(analyser.frequencyBinCount);
    //             analyser.getByteFrequencyData(array);
    //             volumeBars.mono7.style.height = Math.average(array) * 2 + "px";
    //             volumeBars.mono7.innerHTML = Math.floor(Math.average(array));
    //         }
    
    //         source.connect(analyser);
    //         jsNode.connect(context7.destination);
    //         analyser.connect(jsNode);
    
    //         source.start();
    
       
    //     }
    //     function playSound8(arraybuffer) {
    //         context8.close();
    //         context8 = new AudioContext();
    
    //         var source = context8.createBufferSource();
    //         var gainNode = context8.createGain();
    //         var panNode = context8.createStereoPanner();
    //         var filter = context8.createBiquadFilter();
    //         filter.type = 'lowpass';
    //         filter.frequency.value = 15000;
    
           
    //         panNode.connect(gainNode);
    //         context8.decodeAudioData(arraybuffer, function (buffer) {
    //             source.buffer = buffer;
    //             source.loop = true;
    //             source.playbackRate.value = playbackControl8.value;
    
    //             source.connect(filter);
                
    
    //             gainNode.connect(context8.destination);
                
    //             filter.connect(panNode);
    //         });
    //         var pause = function () {
    //             source.disconnect();
    //         }
    //         // and to play
    //         var play = function () {
    //             source.connect(filter);
    //             source.connect(analyser);
    //         };
    //         mute8.onclick = nodeMute;
    
    //         function nodeMute() {
    //             if (mute8.id == "") {
    //                 pause();
    //                 mute8.id = "activated";
    //                 mute8.innerHTML = "Goe";
    //                 mute8.style.background = "green";
    //             } else {
    //                 play();
    //                 mute8.id = "";
    //                 mute8.innerHTML = "Stahp";
    //                 mute8.style.background = "red";
    //             }
    //         }
    
    //         //speed slider
    //         playbackControl8.oninput = function () {
    //             source.playbackRate.value = playbackControl8.value;
    //             playbackValue8.innerHTML = playbackControl8.value;
    //         }
    //         //pan slider
    //         panControl8.oninput = function () {
    //             panNode.pan.value = panControl8.value;
               
    //         }
    //         //filter slider
    //         filtControl8.oninput = function () {
    //             filter.frequency.value = filtControl8.value;
    //             filtValue8.innerHTML = filtControl8.value;
    //         }
    
    
    
    //         var analyser = context8.createAnalyser();
    //         analyser.smoothingTimeConstant = 0.3;
    //         analyser.fftSize = 1024;
    
    //         jsNode = context8.createScriptProcessor(2048, 1, 1);
    //         jsNode.onaudioprocess = function () {
    //             var array = new Uint8Array(analyser.frequencyBinCount);
    //             analyser.getByteFrequencyData(array);
    //             volumeBars.mono8.style.height = Math.average(array) * 2 + "px";
    //             volumeBars.mono8.innerHTML = Math.floor(Math.average(array));
    //         }
    
    //         source.connect(analyser);
    //         jsNode.connect(context8.destination);
    //         analyser.connect(jsNode);
    
    //         source.start();
    
       
    //     }
    //     function playSound9(arraybuffer) {
    //         context9.close();
    //         context9 = new AudioContext();
    
    //         var source = context9.createBufferSource();
    //         var gainNode = context9.createGain();
    //         var panNode = context9.createStereoPanner();
    //         var filter = context9.createBiquadFilter();
    //         filter.type = 'lowpass';
    //         filter.frequency.value = 15000;
    
           
    //         panNode.connect(gainNode);
    //         context9.decodeAudioData(arraybuffer, function (buffer) {
    //             source.buffer = buffer;
    //             source.loop = true;
    //             source.playbackRate.value = playbackControl9.value;
    
    //             source.connect(filter);
                
    
    //             gainNode.connect(context9.destination);
                
    //             filter.connect(panNode);
    //         });
    //         var pause = function () {
    //             source.disconnect();
    //         }
    //         // and to play
    //         var play = function () {
    //             source.connect(filter);
    //             source.connect(analyser);
    //         };
    //         mute9.onclick = nodeMute;
    
    //         function nodeMute() {
    //             if (mute9.id == "") {
    //                 pause();
    //                 mute9.id = "activated";
    //                 mute9.innerHTML = "Goe";
    //                 mute9.style.background = "green";
    //             } else {
    //                 play();
    //                 mute9.id = "";
    //                 mute9.innerHTML = "Stahp";
    //                 mute9.style.background = "red";
    //             }
    //         }
    
    //         //speed slider
    //         playbackControl9.oninput = function () {
    //             source.playbackRate.value = playbackControl9.value;
    //             playbackValue9.innerHTML = playbackControl9.value;
    //         }
    //         //pan slider
    //         panControl9.oninput = function () {
    //             panNode.pan.value = panControl9.value;
               
    //         }
    //         //filter slider
    //         filtControl9.oninput = function () {
    //             filter.frequency.value = filtControl9.value;
    //             filtValue9.innerHTML = filtControl9.value;
    //         }
    
    
    
    //         var analyser = context9.createAnalyser();
    //         analyser.smoothingTimeConstant = 0.3;
    //         analyser.fftSize = 1024;
    
    //         jsNode = context9.createScriptProcessor(2048, 1, 1);
    //         jsNode.onaudioprocess = function () {
    //             var array = new Uint8Array(analyser.frequencyBinCount);
    //             analyser.getByteFrequencyData(array);
    //             volumeBars.mono9.style.height = Math.average(array) * 2 + "px";
    //             volumeBars.mono9.innerHTML = Math.floor(Math.average(array));
    //         }
    
    //         source.connect(analyser);
    //         jsNode.connect(context9.destination);
    //         analyser.connect(jsNode);
    
    //         source.start();
    
       
    //     }
     Math.average = function (arguments) {
            var numbers;
            if (arguments[0] instanceof Array) {
                numbers = arguments[0];
            }
            else if (typeof arguments[0] == "number") {
                numbers = arguments;
            }
            var sum = 0;
            var average = 0;
            for (var i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }
            average = sum / numbers.length;
            return average;
        };
    // }
    }