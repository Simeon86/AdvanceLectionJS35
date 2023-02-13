window.addEventListener('DOMContentLoaded', () => {
	
});	

const num = 5;
console.log(num)
// num = 6;
console.log(num)

const person = {
    name: 'Simeon',
}
console.log(person)

// person = 'Gosho'
console.log(person)
console.log(person.name)

// person = {brand: 'Mercedes'}
person.car = 'Mercedes'
console.log(person.car)

console.log(person)

delete person.name
console.log(person)

console.log('//////////////////////setTimeout')

setTimeout(() => {
    console.log(1);
}, 1000)

setTimeout(() => {
    console.log(2);
}, 2000)


console.log('Hello');
setTimeout(() => {console.log('Hello')}, 3000)
console.log('Bye')

setTimeout(() => {console.log('Simeon')}, 1000);
setTimeout(() => {console.log('Nikolov')}, 2000);

setTimeout(() => {console.log('Valeria')}, 4000);
setTimeout(() => {console.log('Nikolova')}, 3000);

let timeOutId = setTimeout(() => {console.log('Hi')}, 5000);
console.log(timeOutId)

// clearTimeout(timeOutId)

console.log('//////////////////////setInterval')

let a = setInterval(() => {
    console.log('Caloyan');
}, 4000)

clearInterval(a)

console.log('//////////////////////bind, call, apply')

function sayHello(firtsName, lastName) {
    console.log(`Hello ${firtsName} ${lastName}`);
}

console.log(sayHello('Simeon', 'Nikolov'))

let greetings = sayHello.bind(null);
console.log(greetings('Valeria', 'Nikolova'))


console.log('///////////////////////Bind////////////////////////////')

let user = {
    firtsName: 'Simeon',
}

function foo() {
    console.log(this.firtsName)
}

console.log(foo())

let sayName = foo.bind(user)
console.log(sayName())

console.log('////////////////////////////Call///////////////////////')

function foo1(lastName) {
    console.log(this.firtsName + ' ' + lastName)
}

foo1.call(null)

foo1.call(user)

let sayHello1 = foo1.bind(user)

console.log(sayHello1())
console.log(sayHello1('Nikolov'))

console.log(foo1.call(user, 'Nikolov1'))

console.log('////////////////////////////Apply///////////////////////')


function foo2(lastName) {
    console.log(this.firtsName + ' ' + lastName)
}

console.log(foo2.apply(user))
// console.log(foo2.apply(user, 'Nikolov2'))
console.log(foo2.apply(user, ['Nikolov2']))

