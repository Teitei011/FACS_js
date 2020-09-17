// Screen dimensions
let altura, largura;

let i;
let repetitions;

let score;
let slider;

let playButtom, stopButtom, resetButtom, iterations;

let imgFile;
let img;

let timer;

let Anger, Sadness, Fear, Surprise, Contempt, Disgust, Happyness;
let arrayOfEmotions = [];
let guess;


function setup(){
  largura = windowWidth;
  altura = windowHeight;

  let larguraBotao = largura * 0.0625
  let alturaBotao = altura * 0.05

  createCanvas(windowWidth, windowHeight);

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


  // Play
  playButtom = createButton("Play").size(larguraBotao, alturaBotao*1.2);
  playButtom.position(largura * .9, altura * .50);
  playButtom.mousePressed(play);

 // Stop
  stopButtom = createButton("Stop").size(larguraBotao, alturaBotao * 1.2);
  stopButtom.position(largura * .9, altura * .60);
  stopButtom.mousePressed(stop);

  // Reset Buttom
  resetButtom = createButton("Reset").size(larguraBotao, alturaBotao * 1.2);
  resetButtom.position(largura * .9, altura * .70);
  resetButtom.mousePressed(reset);

  // Score Slider
  score = 0;
  slider = createSlider(200, 1000, 500, 100);
  slider.position(largura * 0.85, altura * 0.3)

  // Repetitions Slider
  iterations = createSlider(10, 100, 30, 10);
  iterations.position(largura * 0.85, altura *.40)
}



function play(){
  reset();

}

function stop(){

}


function draw() {
  background(0);

  writeText();
}

function reset(){
    console.log("Restarting the game...")
    arrayOfEmotions = [];  // Cleaning the array
    console.log(arrayOfEmotions)
    createArrayOfEmotions();
    score = 0;
    nextQuestion();
}

function createArrayOfEmotions(){
  let temp;
  for ( i = 0; i < iterations.value(); ++i){
    temp = new Emotion;
    arrayOfEmotions[i] =  temp;
  }
  --i;
}

function afterButtomPressed(guess){
  console.log("Guess emotion: " + str(guess))
  scoreUpdate(checkResult(guess))
  nextQuestion();
}

function nextQuestion(){
  // Caso ainda há informacao no array
  if(i != -1){
    imgFile  = arrayOfEmotions[i].imageFile();
    imgUpdate();
  }else{
    console.log("End of the game")
    reset();
  }
}

function checkResult(guess){
  let temp = arrayOfEmotions[i].show()
  i--;
  // console.log("Valor de i: " + str(i))
  return (temp == guess);

}

function scoreUpdate(verify){
  if (verify) score++;
  else score--;
  console.log("Score Value: " + str(score))
}

function writeText(){
  background(0,0,0);
  textAlign(CENTER);
  textSize(20);
  fill(255, 255, 255);

// Score text
  text("Score: " + score *100, largura * 0.80, altura * 0.10, largura * 0.25, altura * 0.1);

  // Slider Timer
  text("Time: " + str(slider.value()) + " ms", largura * 0.925, altura * 0.25);

  // Number of itinerations
  text("Iterations: " + str(iterations.value()), largura * 0.925, altura * 0.37 )
}


function imgUpdate(){
  img = loadImage(imgFile);
  image(img, 0, 0);
  setInterval(unloadImage, slider.value()); // Call unload image after a time that exist in slider
}

function unloadImage(){
  img.remove();
}

// Function to each emotion buttom
function anger(){ afterButtomPressed("Anger");}
function sadness() {afterButtomPressed("Sadness");}
function fear() {afterButtomPressed("Fear");}
function surprise() {afterButtomPressed("Surprise");}
function contempt() {afterButtomPressed("Contempt");}
function disgust() {afterButtomPressed("Disgust");}
function happyness() {afterButtomPressed("Happyness");}
