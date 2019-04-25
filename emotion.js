function Emotion(){
  this._vector = ["Anger", "Sadness", "Fear", "Surprise", "Contempt", "Disgust", "Happyness"]

  this._emotion = random(this._vector)
  this._emotionImageFile = this.loadEmotionImage;
  this._guess = "None";

// Number of images that I have for each emotions
  this.Database = {
    "Anger" : 10,
    "Sadness" : 10,
    "Fear" : 10,
    "Surprise" : 10,
    "Contempt" : 10,
    "Disgust" : 10,
    "Happyness" : 10
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
