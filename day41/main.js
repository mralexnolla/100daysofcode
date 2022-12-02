 import {togleElmt, changeText, colorTogle} from './domFunction.js';

 const imgbtn = document.getElementById('btnimg');
 const imgelmnt = document.getElementById('imgtog');

 imgbtn.addEventListener('click', () => {
    togleElmt(imgelmnt);
 });

  const pbtn = document.getElementById('btnp');
  const pelemt = document.getElementById('ptog')

  pbtn.addEventListener('click', () => {
    togleElmt(pelemt);
  });


  const maintitle = document.getElementById('mainTitle');
  changeText(mainTitle, "ThankU4Ex16")

  setInterval(() => { colorTogle(maintitle)}, 200)
