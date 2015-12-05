//TRIVIA QUESTIONS
//For function I worked on this with Rob.
    function myfunction6(){
    var user = prompt('How tall are you in inches?');
    console.log(user);
    var ht = isNaN(user);
    while(ht == true) {
      user = prompt('How tall are you in inches');
      console.log(user);
      ht = isNaN(user);
    }
    parseInt(user);
      var feedVar = document.getElementById('feedback0');
    if(user == 81) {
      feedVar.textContent = "We're the same height.";
    } else if(user < 81) {
      feedVar.textContent = "You're shorter than me.";
    } else {
      feedVar.textContent = "You're taller than me.";
    }
  }
  myfunction6();
    var i = 0;
    function myfunction(){
    var user = prompt('Were you born in South Dakota? Please answer yes or no.');
    console.log(user);
       feedVar = document.getElementById('feedback1');
    if(user == 'yes'){
      i++;
      feedVar.textContent = "You're right.";
      feedVar.className = "Right";
    } else {
      feedVar.textContent = "You're wrong."
      feedVar.className = "Wrong";
    }
    console.log(i);
  }
  myfunction();

    function myfunction2(){
    var something = prompt('Did you grow up in South Dakota?');
    console.log(something);
      var feed2Var = document.getElementById('feedback2');
    if(something == 'no'){
      i++;
      console.log(i);
      feed2Var.textContent ="You're right.";
      feed2Var.className = "Right";
    } else {
      feed2Var.textContent = "You're wrong.";
      feed2Var.className = "Wrong";
    }
  }
  myfunction2();
//
    function myfunction3(){
    var notWeird = prompt('Do you like the Peking Opera?');
    console.log(notWeird);
    var feed3Var = document.getElementById('feedback3');
    if(notWeird == 'yes'){
      i++;
      console.log(i);
      feed3Var.textContent = "You're right.";
      feed3Var.className = "Right";
    } else {
      feed3Var.textContent = "You're wrong.";
      feed3Var.className = "Wrong";
    }
  }
myfunction3();
//WHILE LOOP NUMBER GUESSING GAME
    function myfunction4() {
    console.log(guess);
    var feed4Var = document.getElementById('feedback4');
    while(guess != 5) {
      var guess = parseInt(prompt('I am thinking of a number from 1-10 what is the number?'));
    if(guess > 5) {
    alert("Too high.");
    feed4Var.className = "Wrong";
  } else if (guess < 5){
      alert("Too low.");
      feed4Var.className = "Wrong";
    } else  {
    feed4Var.textContent = "The correct number is 5.";
    feed4Var.className = "Right";
  }
}
}
myfunction4();

// //FOR LOOP WITH VALIDATION GAME
    function myfunction5(){
    var pantheras = ['lion', 'tiger', 'leopard', 'jaguar'];
    var correct = false;
    while(correct !== true){
      var feed5Var = document.getElementById('feedback5');
      var animals = prompt('My favorite animals are that of the Panthera species can you name one?');
    animals = animals.toLowerCase();
    console.log(animals);
    for(var i = 0; i < pantheras.length; i++){
      console.log('counter value ' + i)
    if(animals === pantheras[i]) {
      correct = true;
      feed5Var.textContent = animals + " is a member of the Pantheras family.";
      feed5Var.className = "Right";
    } else {
      feed5Var.textContent = "You're wrong.";
      feed5Var.className = "Wrong";
    }
  }
}
}
myfunction5();
