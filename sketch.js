let altura, largura;

let i;
let repetitions = 10;

let score, scoreValue;
let slider, sliderValue;
let resetButtom;


let imgFile;
let img;


let Anger, Sadness, Fear, Surprise, Contempt, Disgust, Happyness;
let arrayOfEmotions = [];
let guess;


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
  Anger.mousePressed(anger)

  Sadness = createButton("Sadness").size(larguraBotao, alturaBotao);
  Sadness.position(largura * 0.10, altura * .90);
  Sadness.mousePressed(sadness)

  Fear = createButton("Fear").size(larguraBotao, alturaBotao);
  Fear.position(largura * 0.18, altura * .90);
  Fear.mousePressed(fear)

  Surprise = createButton("Surprise").size(larguraBotao, alturaBotao);
  Surprise.position(largura * 0.26, altura * .90);
  Surprise.mousePressed(surprise)

  Contempt = createButton("Contempt").size(larguraBotao, alturaBotao);
  Contempt.position(largura * 0.34, altura * .90);
  Contempt.mousePressed(contempt)

  Disgust = createButton("Disgust").size(larguraBotao, alturaBotao);
  Disgust.position(largura * 0.42, altura * .90);
  Disgust.mousePressed(disgust)

  Happyness = createButton("Happyness").size(larguraBotao, alturaBotao);
  Happyness.position(largura * 0.50, altura * .90);
  Happyness.mousePressed(happyness)

  // Reset Buttom
  resetButtom = createButton("Reset").size(larguraBotao, alturaBotao*1.2);
  resetButtom.position(largura * .9, altura * .40);
  resetButtom.mousePressed(reset);


}

function draw() {
  background(0);
  writeText();
  update();
}

function reset(){
    console.log("Reseting the game...")
    arrayOfEmotions = [];  // Cleaning the array
    createArrayOfEmotions();
    scoreValue = 0;
    nextQuestion();
}

function createArrayOfEmotions(){
  let temp;
  for ( i = 0; i < repetitions; ++i){
    temp = new Emotion;
    arrayOfEmotions[i] =  temp;
  }
}

function afterButtomPressed(guess){
  console.log("Guess emotion: " + str(guess))
  scoreUpdate(checkResult(guess))
  nextQuestion();
}

function nextQuestion(){
  let temp = arrayOfEmotions[i];
  imgFile = temp.imageFile();
  console.log("ImageFile: " + imgFile);
}


function checkResult(guess){
  let temp = arrayOfEmotions[i].show()
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


   //  Image speed
   sliderValue = text("Time: " + slider.value() + " ms", largura * 0.80, altura * 0.2, largura * 0.25, altura * 0.1);
    // Score
    score = text("Score: " + str(scoreValue*100), largura * 0.8, altura * 0.1, largura * 0.25, altura * 0.1);
}

function update(){
  img = loadImage(imgFile);
  image(img, 0, 0);

  timeDelay(5)  // Seconds

  img.remove(); // Remove the image

}

// Function to each emotion buttom
function anger(){ afterButtomPressed("Anger");}
function sadness() {afterButtomPressed("Sadness");}
function fear() {afterButtomPressed("Fear");}
function surprise() {afterButtomPressed("Surprise");}
function contempt() {afterButtomPressed("Contempt");}
function disgust() {afterButtomPressed("Disgust");}
function happyness() {afterButtomPressed("Happyness");}
