var black = (0,0,0);

var i;
var repetitions = 10;
var score;


var Anger, Sadness, Fear, Surprise, Contempt, Disgust, Happyness;
var emotion;
var array_of_emotions = [];


function setup(){
  createCanvas(800,650);

  score = 0;
  createArrayOfEmotions();

  Anger = createButton("Anger");
  // Anger.mouseReleased();

  Sadness = createButton("Sadness");
  // Sadness.mouseReleased();

  Fear = createButton("Fear");
  // Fear.mouseReleased();

  Surprise = createButton("Surprise");
  // Surprise.mouseReleased();

  Contempt = createButton("Contempt");
  // Contempt.mouseReleased();

  Disgust = createButton("Disgust");
  // Disgust.mouseReleased();

  Happyness = createButton("Happyness");
  // Happyness.mouseReleased();

}

function createArrayOfEmotions(){
  for (i = 0;i < repetitions; ++i){
    array_of_emotions[i] = new Emotion();
  }
  i = 0;
}

function checkResult(){
  return array_of_emotions[i].compareAnswer();
}

function score_update(){
  if (checkResult) ++score;
  else --score;
}

function draw() {
  background(black);
}
