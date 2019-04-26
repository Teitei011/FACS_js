function Emotion(){
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

  this.show = function(){
    return this._emotion;
  }

  this.ImageFile = function(){
    return this.loadEmotionImage;
  }

  this.loadEmotionImage = function(){
    return "/asserts/" + this.emotion + "/" + str(int(random(this.Database[this.emotion]))) + ".png";
  }

}
