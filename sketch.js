let repetitions = 10;

let score;
let score_value;

let temp;
let img_file;
let img;

let timer;

let guess;

let Anger, Sadness, Fear, Surprise, Contempt, Disgust, Happyness;
let array_of_emotions;


function setup(){
  createCanvas(800,650);

  // reset();
  fill(255,255,255);
  textAlign(CENTER);
  textSize(40);
  text(score_value, 200, 100)

  Anger = createButton("Anger");
  Sadness = createButton("Sadness");
  Fear = createButton("Fear");
  Surprise = createButton("Surprise");
  Contempt = createButton("Contempt");
  Disgust = createButton("Disgust");
  Happyness = createButton("Happyness");
}

function draw() {
  background(255,255,255);
  update();
}
function reset(){
    array_of_emotions = [];
    createArrayOfEmotions();
    score_value = 0;
    nextQuestion();
}

function createArrayOfEmotions(){
  for (let i = 0; i < repetitions; ++i){
    temp = new Emotion();
    array_of_emotions.push(temp);
  }
}


function afterButtomPressed(guess){
  score_update(checkResult(guess))
  nextQuestion();
}

function nextQuestion(){
  img_file = array_of_emotions[array_of_emotions.length].imageFile();
}


function checkResult(guess){
  return (array_of_emotions.pop().show() == guess);
}

// TODO: Preciso declarar verify ?
function score_update(verify){
  if (verify) ++score_value;
  else --score_value;
}


function update(){
  img = loadImage(img_file);
  image(img, 0, 0);

  timeDelay(5)  // Seconds

  img.remove(); // Remove the image

}
