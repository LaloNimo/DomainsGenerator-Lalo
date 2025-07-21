import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

let pronouns = ['the','our','my','them'];
let adjs = ['great','big','best','perfect'];
let nouns = ['jogger','racoon','team','website'];
let extensions = ['.com','.net','.org','.es']

for (let pronoun of pronouns){
  for (let adj of adjs) {
    for (let noun of nouns) {
      for (let extension of extensions) {
        console.log(`${pronoun}${adj}${noun}${extension}`);      
      }
    }
  }
}

};

//Empecé usando un ciclo for declarando [i], pero vi que iba a ser más limpio usar directamente "for/of".