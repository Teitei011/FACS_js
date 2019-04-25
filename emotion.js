function Emotion(){
  this._vector = ["Anger", "Sadness", "Fear", "Surprise", "Contempt", "Disgust", "Happyness"]

  this._emotion = random(this._vector)
  this._emotionImageFile = this.loadEmotionImage;
  this._guess = "None";

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


  this.show = function(){
    return this._emotion;
  }

  this.compareAnswer = function(){
    return (this._emotion == this._guess);
  }

  this.loadEmotionImage = function(){
    this._emotionImageFile = "../asserts/" + this.emotion + "/" str(random(this.Database[this.emotion])) + ".png";
     print("../asserts/" + this.emotion + str(random(this.Database[this.emotion])) + ".png")
  }

}
