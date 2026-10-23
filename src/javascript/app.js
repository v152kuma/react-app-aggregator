import {name} from './utils.js';
import user from './user.js';
import Dhruv from './dhruv.js';

//console.log(name);
//user.greet();

const dhruv = new Dhruv("Viansh Yadav", 4 , "Mount Olympus", "Nursery Masters");
dhruv.greet();

function add(a, b) {
    return a + b;
    }

function greet(name, greeting) {
    return `${greeting}, ${name}!`;
    }

//console.log(add(2, 3));
const greeting = greet("Alice", "Hi");
//console.log(greeting);      