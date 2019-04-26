var black = (0,0,0);

var i;
var repetitions = 10;
var score, score_value;
var guess;

var Anger, Sadness, Fear, Surprise, Contempt, Disgust, Happyness;
var emotion;
var array_of_emotions = [];

function preload(){
  score_value = 0;
  createArrayOfEmotions();
}

function setup(){
  createCanvas(800,650);
  Anger = createButton("Anger");
  // Anger.mouseReleased("Anger");

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
  for (i = 0; i < repetitions; ++i)
    array_of_emotions[i] = new Emotion();
  i = 0;
}

function checkResult(guess){
   return array_of_emotions[i].compareAnswer(guess);
}

function score_update(){
  if (checkResult) ++score_value;
  else --score_value;
}

function draw() {
  background(black);
}
