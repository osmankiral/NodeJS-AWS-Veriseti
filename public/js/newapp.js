var start_btn = document.getElementById('start');
  var stop_btn = document.getElementById('stop');
  
  var mediaRecorder = null,
    chunks = [],
    max_duration = 30000; // in milliseconds.
  
  start_btn.onclick = function() {
    mediaRecorder.start(); // we don't even need timeslice
    // now we'll get similar max duration in every browsers
    setTimeout(stopRecording, max_duration);
    this.disabled = !(stop_btn.disabled = false);
  };
  
  stop_btn.onclick = stopRecording;
  
  function stopRecording() {
    if (mediaRecorder.state === "recording")
      mediaRecorder.stop();
      start_btn.disabled = false; 
    stop_btn.disabled = true;
  };
  
  function onSuccess(stream) {
  
    mediaRecorder = new MediaRecorder(stream);
  
    mediaRecorder.ondataavailable = function(event) {
      // simply always push here, the stop will be controlled by setTimeout
      chunks.push(event.data);
    }
  
    mediaRecorder.onstop = function() {
      var audio_blob = new Blob(chunks, {
        'type': 'audio/wav'
      });
      var audio = new Audio(URL.createObjectURL(audio_blob));
      audio.controls = 'controls';
      document.body.appendChild(audio);
      // workaround https://crbug.com/642012
      audio.currentTime = 1e12;
      audio.onseeked = function() {
        audio.onseeked = null;
        console.log(audio.duration);
        audio.currentTime = 0;
        audio.play();
      }
    };
    //start_btn.disabled = false;
  
  }
  
  var onError = function(err) {
    console.log('Error: ' + err);
  }
  
  navigator.mediaDevices.getUserMedia({
    audio: true
  }).then(onSuccess, onError)