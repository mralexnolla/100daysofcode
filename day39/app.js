// Media class is the master class

class Media{
    constructor(tittle){
      this._tittle = tittle;
      this._isCheckedOut = false;
      this._ratings = []
    }
    get tittle(){
      return this._tittle;
    }
  
    get isCheckedOut(){
      return this._isCheckedOut;
  
    }
  
    get ratings(){
      return this._rating;
    }
  
     set isCheckedOut(newval){
      this._isCheckedOut = newval;
    }
  
    
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating(){
      let ratingSum = this._ratings.reduce((acc, curVal) => acc + curVal, 0);
      return ratingSum;
    }
  
    addRating(addRate){
      this._ratings.push(addRate);
    }
  
  }
  
  // The Book Class
  
  class Book extends Media{
    constructor(author, tittle, pages){
      super(tittle);
      this._author = author;
      this._pages = pages;
      this._isCheckOut = false;
      this._ratings = []
    }
  
    get author(){
      return this._author;
    }
  
    get pages(){
      this._pages;
    }
  
  }
  
  // The Movie Class
  
  class Movie extends Media{
    constructor(director, tittle, runTime){
      super(tittle);
      this._director = director;
      this._runTime = runTime;
    }
  
    get diretor(){
      return this._director;
    }
  
    get runtime(){
      return this._runTime ;
    }
  }
  
  // calling  the Book instance 
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  //if the value of isCheckedOut method is true this toggle will set it to false and vice versal
  
  historyOfEverything.toggleCheckOutStatus();
  
  //using the new instance to check the value of isCheckedOut method. This outputs to true on the screen
  console.log(historyOfEverything.isCheckedOut);
  
  //calling the addRating method with the new instance to get and sum the different ratings 
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  //calling the getAverageRating method to sum the rattings using a reducer. This out puts to 14
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont','Speed',116)
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  console.log(speed.getAverageRating());
  