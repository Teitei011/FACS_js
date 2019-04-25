function Emotion(){

  this._vector = ["Anger", "Sadness", "Fear", "Surprise", "Contempt", "Disgust", "Happyness"]

  this._emotion = random(this._vector);
  this._guess = "None";

  this.show = function(){
    return this._emotion;
  }

  this.compareAnswer = function(){
    return (this._emotion == this._guess)
  }


  this.Anger = function(){

  }

  this.Sadness = function(){

  }

  this.Fear = function(){

  }

  this.Surprise = function(){

  }
  this.Contempt = function(){

  }

  this.Disgust = function(){

  }

  this.Happyness = function(){

  }



}
