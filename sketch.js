var black = (0,0,0);

var repetitions = 10;

var score;
var score_value;

var temp;

var guess;

var Anger, Sadness, Fear, Surprise, Contempt, Disgust, Happyness;
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
  for (var i = 0; i < repetitions; ++i){
    array_of_emotions[i] = new Emotion();
  }
}

function draw() {
  background(black);
  // put drawing code here
}

function checkResult(guess){
  temp = array_of_emotions.pop();
  if (temp == guess) return true;
  else return false;
}

function score_update(){
  if (checkResult) ++score_value;
  else --score_value;
}

function image_update(){

}
