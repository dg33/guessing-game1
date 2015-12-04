var user = prompt('How tall are you?');
var something = prompt('Is that tall?');
  console.log('The user variable contains' + user);
  console.log('The something variable contains' + something);
alert( user + ' is ' + something);
var i = 0;
var user = prompt('Were you born in South Dakota? Please answer yes or no.');
console.log(user);
if(user == 'yes'||user == 'Y'||user == 'Yes'){
  alert('Your answer was ' + user + ' that is correct. I was born in Sioux Falls, SD.');
  i++;
} else {
  alert('Your answer was ' + user + ' that is wrong.');
}
console.log(i);
var something = prompt('Did you grow up in South Dakota?');
console.log(something);
if(something == 'no'||user == 'N'||user == 'No'){
  alert('Your answer was ' + something + ' that is correct. I grew up in Seattle.');
  i++;
} else {
  alert('Your answer was ' + something + ' that is wrong.');
}
var notWeird = prompt('Do you like the Peking Opera?');
console.log(notWeird)
if(notWeird == 'yes'||user == 'Y'||user == 'Yes'){
  alert('Your answer was ' + notWeird + ' that is correct I like it a lot.');
  i++;
} else {
  alert('Your answer was ' + notWeird + ' that is wrong.');
}
alert('You answered ' + i + ' questions right.');
var music = prompt('Do you like hip hop?');
console.log(music)
if(music == 'yes'||user == 'Y'||user == 'Yes'){
  alert('Your answer was ' + music + 'that is correct I love hip hop.');
  i++;
} else {
  alert('Your answer was' + music + ' that is wrong.');
}
