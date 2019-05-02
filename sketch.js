let repetitions = 10;
let score;
let score_value = "Score: Testando";

let temp;
let img_file;
let img;

let timer;

let guess;

let Anger, Sadness, Fear, Surprise, Contempt, Disgust, Happyness;
let array_of_emotions;


function setup(){
  let largura = windowWidth;
  let altura = windowHeight;

  let larguraBotao = largura * 0.0625
  let alturaBotao = altura * 0.05

  // let size  = fullScreen();
  createCanvas(windowWidth, windowHeight);

  reset();

  textAlign(CENTER);
  textSize(40);
  fill(255, 255, 255);
  stroke(255, 255, 255);
  text("Score: 0", largura * 0.5, altura * 0.1, largura * 0.25, altura * 0.1);

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
  background(0,0,0);
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
  img_file = array_of_emotions.top().imageFile();
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
