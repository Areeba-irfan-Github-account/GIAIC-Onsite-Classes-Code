"use strict";
let personName = '';
personName = prompt('What is your name?') || '';
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (personName !== null && personName !== '') {
    alert(`Hello! ${personName} , Write your name:
    LowerCase ${lowercase}
    UpperCase ${uppercase}
    TitleCase ${titlecase}`);
}
else {
    alert(`Fill your name here`);
}
