import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const pronouns = ['the','our','my','them'];
  const adjs = ['great','big','best','perfect'];
  const nouns = ['jogger','racoon','team','website'];
  const extensions = ['.com','.net','.org','.es']

  for (const pronoun of pronouns){
    for (const adj of adjs) {
      for (const noun of nouns) {
        for (const extension of extensions) {
          console.log(`${pronoun}${adj}${noun}${extension}`);      
        }
      }
    }
  }

};

//Empecé usando un ciclo for declarando [i], pero vi que iba a ser más limpio usar directamente "for/of".