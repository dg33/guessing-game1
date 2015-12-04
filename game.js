//TRIVIA QUESTIONS

    var user = prompt('How tall are you?');
    var something = prompt('Is that tall?');
      console.log('The user variable contains' + user);
      console.log('The something variable contains' + something);
    alert( user + ' is ' + something + ' .');

    var i = 0;
    var user = prompt('Were you born in South Dakota? Please answer yes or no.');
    console.log(user);
    if(user == 'yes'){
      alert('Your answer was ' + user + ' that is correct.');
      i++;
    } else {
      alert('Your answer was ' + user + ' that is wrong.');
    }
    console.log(i);

    var something = prompt('Did you grow up in South Dakota?');
    console.log(something);
    if(something == 'no'){
      alert('Your answer was ' + something + ' that is correct.');
      i++;
    } else {
      alert('Your answer was ' + something + ' that is wrong.');
    }

    var notWeird = prompt('Do you like the Peking Opera?');
    console.log(notWeird)
    if(notWeird == 'yes'){
      alert('Your answer was ' + notWeird + ' that is correct I like it a lot.');
      i++;
    } else {
      alert('Your answer was ' + notWeird + ' that is wrong.');
    }
    alert('You answered ' + i + ' questions right.');

//WHILE LOOP NUMBER GUESSING GAME
    var guess = prompt('I am thinking of a number from 1-10 what is the number?')
    while (guess != 5) {
    if(guess > 5){
      alert('Your answer ' + guess + ' the number is lower try again.');
          guess = prompt('Lets guess again.');
    } else {
      alert('Your answer ' + guess + ' the number is higher try again.');
          guess = prompt('Lets guess again.');
    }
    }
    alert('Hey you got it right.');

//FOR LOOP WITH VALIDATION GAME
    var pantheras = ['lion', 'tiger', 'leopard', 'jaguar'];
    var correct = false;
    while(correct !== true){
      var animals = prompt('My favorite animals are that of the Panthera species can you name one?');
    animals = animals.toLowerCase();
    for(var i = 0; i < pantheras.length; i++){
      console.log('counter value ' + i)
    if(animals === pantheras[i]) {
      correct = true;
    } else {
    }
  }
}
  alert('Hey you got it right.');
