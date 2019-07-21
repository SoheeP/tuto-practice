const a = 10;

'use strict';
const sentence =[
  {
    subject : 'JavaScript',
    verb : 'is',
    object: 'great'
  },
  {
    subject: 'Elephants',
    verb: 'are',
    object: 'large'
  }
];

function say({subject, verb, object}){
  console.log(`${subject} ${verb} ${object}`);
}

for(let s of sentence){
  say(s)
}

