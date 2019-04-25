class Emotion{

  constructor(){
    this._vector = ["Anger", "Sadness", "Fear", "Surprise", "Contempt", "Disgust", "Happyness"]

    this._emotion = random(this._vector)
    this._emotionImageFile ="None";
    this._guess = "None";

  // Number of images that I have for each emotions
  // TODO: Update database
    this.Database = {
      "Anger" : 10,
      "Sadness" : 10,
      "Fear" : 10,
      "Surprise" : 10,
      "Contempt" : 10,
      "Disgust" : 10,
      "Happyness" : 10
      }
    }

  loadEmotionImage(){
    // Tenho que descobrir uma forma de passar o this.emotion
    this._emotionImageFile = "../asserts/" + this._emotion + "/" str(int(random(this.Database[this._emotion]))) + ".png";
    // print("../asserts/" + this._emotion + str(random(this.Database[this._emotion])) + ".png")
  }

  show() {
    return this._emotion;
  }

  compareAnswer(){
    return (this._emotion == this._guess);
  }

}
