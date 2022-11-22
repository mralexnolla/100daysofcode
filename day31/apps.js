let userName = '';

userName ? console.log(`Hello ${userName}`) : console.log('Hello');

let userQuestion = 'Will i make it the magic programm ?';

userQuestion ? console.log(userQuestion) : console.log('No question')

randomNumber = Math.floor(Math.random() * 8);

eightBall = '';

switch(randomNumber){
  case randomNumber = 0:
    eightBall = 'It is certain';
    console.log(eightBall);
    break;
  case randomNumber = 1:
    eightBall = 'It is decidedly so';
    console.log(eightBall);
    break;
  case randomNumber = 2:
    eightBall = 'Reply hazy try again';
    console.log(eightBall);
    break;
  case randomNumber = 3:
    eightBall = 'Reply hazy try again';
    console.log(eightBall);
    break;
  case randomNumber = 4:
    eightBall = 'Do not count on it';
    console.log(eightBall);
    break;
  case randomNumber = 5:
    eightBall = 'My sources say no';
    console.log(eightBall);
    break;
  case randomNumber = 6:
    eightBall = 'Outlook not so good';
    console.log(eightBall);
    break;
  case randomNumber = 7:
    eightBall = 'Signs point to yes';
    console.log(eightBall);
    break;
  default:
    console.log('nothing for you');
    break
}