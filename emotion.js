class Emotion{
  constructor(){
    this._vector = ["Anger", "Sadness", "Fear", "Surprise", "Contempt", "Disgust", "Happyness"]

    this._emotion = random(this._vector)

    // Number of images that I have for each emotions

    //  The problem is in  here, I cant acess the numbers of the database

    // Sequence of emotion like the this._vector. Example: Anger = 5
    this._Database = [5, 4, 7, 6, 7, 12, 15];
  }

   // Por enquanto toda vez que
    imageFile(){
      let temp  = "/asserts/" + this._emotion + "/";
      let number;

      if (this._emotion == "Anger"){ number = this._Database[0]; }
      if (this._emotion == "Sadness"){ number = this._Database[1]; }
      if (this._emotion == "Fear"){ number = this._Database[2]; }
      if (this._emotion == "Surprise"){ number = this._Database[3]; }
      if (this._emotion == "Contempt"){ number = this._Database[4]; }
      if (this._emotion == "Disgust"){ number = this._Database[5]; }
      if (this._emotion == "Happyness"){ number = this._Database[6]; }

      temp += str(floor(random(1, number + 1))) + ".png"
      return temp
    }

  show(){
    return this._emotion;
  }

  database(){
    return this._Database;
  }
}
