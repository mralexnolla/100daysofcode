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
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont','Speed',116)
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  console.log(speed.getAverageRating());
  