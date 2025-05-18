const moves_chosen = document.querySelector('.js-moves-chosen');
const js_result = document.querySelector('.js-result');
const img_rock = "https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png";
const img_paper = "https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png";
const img_scissors = "https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png";
console.log(typeof true);
console.log(typeof false);
console.log(4 < 6)
// Comparison Operators
//  > greater than
//  < less than
// >= greater than or equal to
//  <= less than or equal to
// === equal to
// !== not equal to

if(true ){
  console.log('hello');
}else{
  console.log('else');
}

if(15 >= 16 ){
  console.log("You can drive");
}else{
  console.log("you can not drive");
}
//  Rock Paper Scissors Code
const Result = JSON.parse(localStorage.getItem('Result')) || {
  wins:0,
  losses:0,
  ties:0
}
function reset(){
  Result.wins = 0;
  Result.losses = 0;
  Result.ties = 0;
  document.getElementById('result').innerHTML = `Wins: ${Result.wins}, Losses: ${Result.losses}, Ties: ${Result.ties}`;
  localStorage.removeItem('Result');
  moves_chosen.innerHTML = "";
  js_result.innerHTML = "";
}
document.getElementById('result').innerHTML = `Wins: ${Result.wins}, Losses: ${Result.losses}, Ties: ${Result.ties}`;
function updata(text1,img1,img2,i){
  js_result.innerHTML = text1;
      moves_chosen.innerHTML = ` 
       You 
      <img class="move-icon" src="${img1}">
      <img class="move-icon" src="${img2}">
       Computer 
      `;
      // alert(`You picked ${  result}, Computer picked ${Result.rend}. Tie`);
      if(i === 1){Result.wins++;}else if(i === 2){Result.losses++;}else{Result.ties++;}
      console.log(i);
      console.log(Result);
}
function game(result){
  let mylist = ['Rock','Paper','Scissors'];
  console.log(result);
  let rend = mylist[(Math.random() * mylist.length) | 0] 
  if( result === 'Rock'){
    if(rend === 'Rock'){
      updata("Tie.",img_rock,img_rock,3);
    }else if(rend === 'Paper'){
      updata("You lose.",img_rock,img_paper,2);
    }else{
      updata("You win.",img_rock,img_scissors,1);
    }
  }else if(result ==='Paper'){
    if(rend === 'Rock'){
      updata("You win.",img_paper,img_rock,1);
    }else if(rend === 'Paper'){
      updata("Tie.",img_paper,img_paper,3);
    }else{
      updata("You lose.",img_paper,img_scissors,2);
    }
  }else{
    if(rend === 'Rock'){
      updata("You lose.",img_scissors,img_rock,2);
  }else if(rend === 'Paper'){
    updata("You win.",img_scissors,img_paper,1);
  }else{
    updata("Tie.",img_scissors,img_scissors,3);
  }}
  document.getElementById('result').innerHTML = `Wins: ${Result.wins}, Losses: ${Result.losses}, Ties: ${Result.ties}`
  localStorage.setItem('Result',JSON.stringify(Result));
}

// if(result){result= "truthy"}else{result = "falsy"} Shortcut :
let result = true ? 'truthy' : 'falsy';
result = false;
console.log('result :' + result);
// if(conditon){console.log('hello')} Shortcut :
false && console.log("hello")
// if(condition){message= 'hello'} Shortcut:
let message = 5 && 'hello message';
console.log(message);
// if(!condition){result = 5;} Shortcut
result = false || 5;
console.log('or operation result :'+ result);
