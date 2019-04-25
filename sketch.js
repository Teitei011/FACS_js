var black = (0,0,0);

var repetitions = 10;
var score;

var answer;

var Anger, Sadness, Fear, Surprise, Contempt, Disgust, Happyness;
var emotion;
var array_of_emotions = [];

function setup(){
  createCanvas(800,650);

  score = 0;
  createArrayOfEmotions();

  Anger = createButton("Anger");
  Sadness = createButton("Sadness");
  Fear = createButton("Fear");
  Surprise = createButton("Surprise");
  Contempt = createButton("Contempt");
  Disgust = createButton("Disgust");
  Happyness = createButton("Happyness");


}

function createArrayOfEmotions(){
  for (var i = 0;i < repetitions; ++i){
    array_of_emotions[i] = new Emotion();
  }

  for (var i = 0;i < repetitions; ++i){
    array_of_emotions[i].loadEmotionImage();
  }
}


function draw() {
  background(black);
  // put drawing code here
}



function image_update(){

}
