Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(dat_uri){
        document.getElementById("result").innerHTML = '<img id-"capture_image" src="'+dat_uri+'"/>';
    });
}
console.log('m15 version:', m15.version);
classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function check()
{
    img= document.getElementById('captured_image')
    classifier.classy(img, gotResult);
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second predicition is "+ prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name1").innerHTML = result[0].label;
        document.getElementById("result_emotion_name2").innerHTML = result[0].label;
        prediction_1 = results[0].label
        prediction_2 = results[1].label
        speak()
        if(result[0].label == "happy")
        {
            document.getElementById("update_emoji").innerHTML = "&#128522";
        }

        if(result[0].label == "sad")
        {
            document.getElementById("update_emoji").innerHTML = "&#128532";
        }

        if(result[0].label == "angry")
        {
            document.getElementById("update_emoji").innerHTML = "&#128548";
        }


        if(result[1].label == "happy")
        {
            document.getElementById("update_emoji").innerHTML = "&#128522";
        }

        if(result[1].label == "sad")
        {
            document.getElementById("update_emoji").innerHTML = "&#128532";
        }

        if(result[1].label == "angry")
        {
            document.getElementById("update_emoji").innerHTML = "&#128548";
        }
    }
}