// School calls 

class School{
    constructor(name,level,numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name(){
      return this._name;
    }
  
    get level(){
      return this._level;
    }
  
    get numberOfStudents(){
      return this._numberOfStudents;
    }
  
    set numberOfStudents(newVal){
      if(typeof(newVal) === 'number'){
        this._numberOfStudents = newVal;
      }else{
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
  
    quickFacts(){
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
  
    static pickSubstituteTeacher(substituteTeachers){
      let randomNo = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randomNo]
    }
   
  }
  
  // Primary school class
  
  class PrimarySchool extends School{
    constructor(name,numberOfStudents,pickupPolicy){
      super(name);
      this._level = 'primary';
      this._numberOfStudents = numberOfStudents;
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy(){
      return this._pickupPolicy;
    }  
    
  }
  
  // HightSchool Class
  
  class HighSchool extends School{
    constructor(name,numberOfStudents,sportsTeams){
      super(name);
      this._level = 'high';
      this._numberOfStudents = numberOfStudents;
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams(){
      return this._sportsTeams;
    }
  }
  
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  
  //call the quickFacts method
  lorraineHansbury.quickFacts();
  
  // calling the pickSubstituteTeacher
  
  let arr = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
  
  console.log(School.pickSubstituteTeacher(arr));
  
  // Hight school instance 
  
  const sport = ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']
  const alSmith = new HighSchool('Al E. Smith',415,sport);
  
  // calling the sport team getter 
  console.log(alSmith.sportsTeams);