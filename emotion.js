class Emotion{
  constructor(){
    this._vector = ["Anger", "Sadness", "Fear", "Surprise", "Contempt", "Disgust", "Happyness"]

    this._emotion = random(this._vector)

    // Number of images that I have for each emotions
    this.Database = {
      "Anger" : 5,
      "Sadness" : 4,
      "Fear" : 7,
      "Surprise" : 6,
      "Contempt" : 7,
      "Disgust" : 12,
      "Happyness" : 15
    }
  }

  show(){
    return this._emotion;
  }

  ImageFile(){
    return this.loadEmotionImage;
  }

  loadEmotionImage(){
    return "/asserts/" + this.emotion + "/" + str(floor(random(this.Database[this.emotion]))) + ".png";
  }

}
