/*const amount = 9

if (amount < 10) {
    console.log("small number");
}
else {
    console.log("large number");
}

console.log(`hey it's my first node app!!!`)*/

/*console.log(__dirname);
setInterval(() => {
    console.log("hello")
}, 1000);*/
const names = require('./names')
const sayHi = require('./utils')
const data = require('./6-altern-flavour')
require('./7-mind-grenade')

console.log(data);

sayHi(names.john);
sayHi(names.peter);

