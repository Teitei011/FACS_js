let altura, largura;

let repetitions = 10;
let i;

let score, scoreValue;
let slider, sliderValue;


let img_file;
let img;



let guess;

let Anger, Sadness, Fear, Surprise, Contempt, Disgust, Happyness;
let array_of_emotions;


function setup(){
  largura = windowWidth;
  altura = windowHeight;

  let larguraBotao = largura * 0.0625
  let alturaBotao = altura * 0.05

  createCanvas(windowWidth, windowHeight);

  reset();

  slider = createSlider(200, 1000, 500);
  slider.position(largura * 0.85, altura * 0.3)


  Anger = createButton("Anger").size(larguraBotao, alturaBotao);
  Anger.position(largura * 0.02, altura * .90);

  Sadness = createButton("Sadness").size(larguraBotao, alturaBotao);
  Sadness.position(largura * 0.10, altura * .90);

  Fear = createButton("Fear").size(larguraBotao, alturaBotao);
  Fear.position(largura * 0.18, altura * .90);

  Surprise = createButton("Surprise").size(larguraBotao, alturaBotao);
  Surprise.position(largura * 0.26, altura * .90);

  Contempt = createButton("Contempt").size(larguraBotao, alturaBotao);
  Contempt.position(largura * 0.34, altura * .90);

  Disgust = createButton("Disgust").size(larguraBotao, alturaBotao);
  Disgust.position(largura * 0.42, altura * .90);

  Happyness = createButton("Happyness").size(larguraBotao, alturaBotao);
  Happyness.position(largura * 0.50, altura * .90);
}

function draw() {
  writeText();
  update();
}

function reset(){
    array_of_emotions = [];
    array_of_emotions = createArrayOfEmotions();
    scoreValue = 0;
    // nextQuestion();
}

function createArrayOfEmotions(){
  let bufferArray = [];
  for ( i = 0; i < repetitions; ++i){
    bufferArray[i] = new Emotion;
  }
  return bufferArray;
}


function afterButtomPressed(guess){
  scoreUpdate(checkResult(guess))
  nextQuestion();
}

function nextQuestion(){
  img_file = array_of_emotions[i].imageFile();
}


function checkResult(guess){
  let temp = array_of_emotions[i].show()
  --i;
  return (temp == guess);

}

// TODO: Preciso declarar verify ?
function scoreUpdate(verify){
  if (verify) ++scoreValue;
  else --scoreValue;
}

function writeText(){
  background(0,0,0);
  textAlign(CENTER);
  textSize(20);
  fill(255, 255, 255);

  // Variables
  sliderValue = slider.value()

   //  Image speed
   text("Time: " + slider.value() + " ms", largura * 0.80, altura * 0.2, largura * 0.25, altura * 0.1);
    // Score
    score = text("Score: " + str(scoreValue*100), largura * 0.8, altura * 0.1, largura * 0.25, altura * 0.1);
}

function update(){
  img = loadImage(img_file);
  image(img, 0, 0);

  timeDelay(5)  // Seconds

  img.remove(); // Remove the image

}
