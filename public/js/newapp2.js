var startt_btn = document.getElementById('startt');
  var stopp_btn = document.getElementById('stopp');
  
  var mediaRecorder = null,
    chunks = [],
    max_duration2 = 30000; // in milliseconds.
  
  startt_btn.onclick = function() {
    mediaRecorder.start(); // we don't even need timeslice
    // now we'll get similar max duration in every browsers
    setTimeout(stopRecording, max_duration2);
    this.disabled = !(stopp_btn.disabled = false);
  };
  
  stopp_btn.onclick = stopRecording;
  
  function stopRecording() {
    if (mediaRecorder.state === "recording")
      mediaRecorder.stop();
      startt_btn.disabled = false; 
      stopp_btn.disabled = true;
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