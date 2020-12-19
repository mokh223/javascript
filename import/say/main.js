// 📁 main.js
import {sayHi, sayBye} from './say.js';
import * as say from './say.js';
import {sayHi as hi, sayBye as bye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

say.sayHi("Whats up"); //Wasap!!

hi('Hi!!'); //Hi!!