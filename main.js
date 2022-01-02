function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('MobileNet',modelLoaded);
  }
  
  function modelLoaded() {
       console.log('Model Loaded!');  
  }
  
  function draw() {
    image(video, 0, 0, 300, 300,);
    classifier.classify(video, gotResult);
  }
  var presvious_result = '';
  
  function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      if((results[0].confidence > 0.5) && (presvious_results != results[0].
      label)){
        console.log(results);
        previous_result = results[0].label;
        var synth = widow.speechSynthesis;
        speak_data = 'Object dectected is - '+results[0].label;
        var utterThis = new SpeechSynthesisUtterance(speak_data)
        synth.speak(utterThis);
  
        document.getElementById("reult_object_GoogleLens").innerHTML = results[0].
        label;
        document.getElementById("result_object_MobileNet").innerHTML = results
        [0].confidence.toFixed(3);
      }
    }
  }