let black = (0,0,0);

let repetitions = 10;

let score;
let score_value;

let temp;

let guess;

let Anger, Sadness, Fear, Surprise, Contempt, Disgust, Happyness;
let array_of_emotions = [];


function setup(){
  createCanvas(800,650);

  reset();

  Anger = createButton("Anger");
  Sadness = createButton("Sadness");
  Fear = createButton("Fear");
  Surprise = createButton("Surprise");
  Contempt = createButton("Contempt");
  Disgust = createButton("Disgust");
  Happyness = createButton("Happyness");
}

function reset(){
    array_of_emotions = [];
    createArrayOfEmotions();
    score_value = 0;
}

function createArrayOfEmotions(){
  for (let i = 0; i < repetitions; ++i){
    temp = new Emotion();
    array_of_emotions.push(temp);
  }
}

function draw() {
  background(black);
  // put drawing code here
}

function checkResult(guess){
  if (array_of_emotions.pop() == guess) return true;
  else return false;
}

function score_update(){
  if (checkResult) ++score_value;
  else --score_value;
}

function image_update(){

}
