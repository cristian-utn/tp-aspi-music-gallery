//var audioCtx = new(window.AudioContext || window.webkitAudioContext)();
// [Deprecation] The ScriptProcessorNode is deprecated. 
// Use AudioWorkletNode instead. (https://bit.ly/audio-worklet)
var audioCtx = new AudioWorkletNode();
var overlay = document.querySelector('#overlay');

// creamos un analyzer
var analyser = audioCtx.createAnalyser();
analyser.smoothingTimeConstant = 0.3;
analyser.fftSize = 1024;

// creamos un audio processor
var processor = audioCtx.createScriptProcessor(2048, 1, 1);
// en el evento, verificamos si hay volumen o no 
processor.onaudioprocess = function(audio) {

  // tomar los datos del analyzer
  var array = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(array);

  // calcular el volumen promedio
  var prom = 0;
  for (var i = 0; i < array.length; i++) {
    prom += array[i];
  }

  prom = prom / array.length;

  // aqui ponemos la intensidad del volumen como opacidad del div
  overlay.style.opacity = prom/200;
  console.log(prom);

  // pasar los datos hacia el speaker
  var inputBuffer = audio.inputBuffer;
  var outputBuffer = audio.outputBuffer;

  for (var channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
    var inputData = inputBuffer.getChannelData(channel);
    var outputData = outputBuffer.getChannelData(channel);

    for (var sample = 0; sample < inputBuffer.length; sample++) {
      outputData[sample] = inputData[sample];
    }
  }
}

// conectar todo junto
var video = document.querySelector('audio');
var source = audioCtx.createMediaElementSource(video);
source.connect(analyser);
analyser.connect(processor);
processor.connect(audioCtx.destination);