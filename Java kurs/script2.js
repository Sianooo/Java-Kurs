//UNSHIFT - dodaje elementy na poczatku tablicy
//SHIFT - usuwa  element z indeksem 0
//PUSH - dodaje elementy na koncu tablicy 
//POP - usuwa ostatni element w tablicy 

// const numbers=[];
// console.log(numbers);
// numbers.unshift(1,2);
// console.log(numbers);
// numbers.shift();
// console.log(numbers);
// numbers.push("ala");
// console.log(numbers);
// numbers.pop();
// console.log(numbers);


// const drinks=['pepsi','cola','fanta'];
// const meal=['schabowy','spagetti','pizza'];
// const menu=[...drinks,...meal];
// console.log(menu);

// const menu2=drinks.concat(meal);
// console.log(menu2);

//ZADANIE:(slice,splice):

// const numbers = [0, 0, 1, 1, 2, 2, 2]
// const colors = ['red', 'green', 'blue', true, 123]
// const cars = [123, true,'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

// const numbers2=numbers.slice(0,2);
// console.log(numbers2);
// const numbers3=numbers.slice(4);
// console.log(numbers3);
// const rundomStuff=colors.splice(3);
// console.log(colors);
// console.log(rundomStuff);
// const newCars=cars.splice(2,4,'test');
// console.log(cars);
// console.log(newCars);

//callback- funkcja ktorą przekazujemy jako argument do innej funckcji
//indexOf() - metoda zwraca na jakim indeksie znajduje sie dana liczba

// const numbers=[0,23,177,28,2,24,11];
// numbers.forEach(number => console.log(number *2));

//ZADANIA 
// const letters=['c','d'];
// letters.unshift("a",'b');
// letters.push('e','f')
// console.log(letters);
// console.log(letters.includes('c'));

// const numbers=[2,18,21,];
// const meal=['schabowy','pizza','spagetti'];
// const mix=[...numbers,...meal];
// console.log(mix);

// const numbers=[1,5,13,26,48];
// const tab=numbers.map(number => console.log(number *5));
// for(const number of numbers)
// {
// if(number%2==0){
//     console.log(`Liczba jest parzysta ${number}`);
// }else{
//     console.log(`Liczba jest nie parzysta ${number}`);
// }
// }

// let color=['blue'];
// color.unshift('green');
// color.push('yellow');
// console.log(color);
// for(let i=0;i<color.length;i++)
// {
//     console.log(`Moj ulubiony kolor to : ${color[i].charAt(0).toLocaleUpperCase()+color[i].slice(1)}`);
// }

// const car='Audi,Mercedes,BMW,Nissan,Dodge'
// const newCar=car.split(",");
// console.log(car);
// if(newCar.length>3){
//     console.log('Jest OK');
// }else{
//     console.log('Nie jest OK');
// }

// if(newCar.includes("Audi"))
// {
//     newCar.push("Toyota");
// }else{
//     newCar.pop();
// }


//FUNKCJE!!!

// function test() {
//     console.log('Hej');
// }
// test();

//Hoisting - przeczy w js czytania z gory na dol kodu

// function nameAge(name,age) {
//     console.log(`Czesc mam na imie ${name} i mam ${age} lat`);
// }
// nameAge('Patryk',17);

//FUNKCJA STRZALKOWA:

// const test = (name) =>{
//     console.log(`Mam na imie ${name}`);
// }
// test('Klaudia');

// const test=(name,age)=>{
//     console.log('hejaaa');
//     return console.log(`Mam na imie ${name} i mam ${age} lat`);
// }
// test('Patryk',17)

// const test2= age=>console.log(age);
// test2(16);

// const test3=['poniedzialek','wtorek','sroda']
// const test4=test3.forEach((miesiac)=>console.log(miesiac));

// const multiplay=(x,y)=>{
//     return x*y;
// }

// const multiplay=(x,y)=>{
//    console.log(x*y);
// }
// multiplay(5,6);

//  DOMYSLNE PARAMETRY FUNKCJI:

// const hello = (name='drogi uzytkowniku') => {
//     console.log(`Czesc ${name}, jak sie masz?`);
// }
// hello();
// hello('Patryk');


//REST: tworzy tablice z argumentów
// const numbers = (x,y,...z) => {
//     console.log(x,y,z);
//     console.log(z.map(numbers=>numbers *2));
//     console.log(x+y);
// }
// numbers(12,23,45,6,765,5656,565);

// let score;
// function add(x,y) {
//     score=x+y;
//     if(score%2==0)
//         {
//             parzysta(score);
//         }else{
//             nieParzysta(score);
//         }
// }
// function parzysta(score) {
//         console.log(`Liczba ${score} jest parzysta`);
// }
// function nieParzysta(score) {
//         console.log(`Liczba ${score} jest nie parzysta`);
// }
// // add(1,15)

// let celcius;
// let temp;
// function farenheit(x)
// {
//     celcius=x;
//     temp=x*1.8+32;
// }
// farenheit(10);
// console.log(`celcius : ${celcius} = farenheit : ${temp}`);

let num = 10;
let numbers=[];
for(let i=0;i<num;i++)
{
    numbers.push(i);
}
function funkcja(x)
{
    if( x%3==0 && x!=0){
        console.log(`${x} jest podzielne przez 3`);
    }else{
        console.log(`${x} nie jest podzielne przez 3`);
    }
}
numbers.forEach(funkcja);