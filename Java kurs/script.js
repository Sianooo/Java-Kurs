//template string:

// const name= 'Patryk'
// const myPet='Delana'
// const agePet=2
// console.log(`Czesc, jestem ${name}, a to jest ${myPet} moj pies`);
// console.log(myPet+" ma juz "+agePet+" lata !");

// //Kod do naprawy 

// const firstName = 'Tomek'
// let age = 12
// age = 18

// const favColor = 'niebieski'
// const favMeal = 'schabowy'

// let currentCar
// currentCar = 'Audi'

// let firstName2 = 'Ania'
// let age2 = 24
// let favColor2 = 'czerwony'

//Stringi

// const username ='Maciej'
// const username2=username.charAt(5).toLocaleUpperCase()
// console.log(username2);

// const username = 'maciej'
// const uname=username.charAt(0).toLocaleUpperCase() +username.slice(1)
// console.log(typeof username);
// console.log(uname);


//Zadanie z metodami
/*
const text1 = 'powiększ mnie!'
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
const text4 = 'sprawdź, czy zawieram słowo "czy"'
const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
const text7 = 'podziel, ten, string, od, przecinków'

const zad=text1.toLocaleUpperCase()
console.log(zad);
const zad1 =text2.toLocaleLowerCase()
console.log(zad1);
const zad2=text3.slice(6)//wycinanie znaków
console.log(zad2);
const zad3=text4.includes('czy')//sprawdzanie czy posiada dana rzecz
console.log(zad3);
const zad4 =text5.charAt(2)
console.log(zad4);
const zad5=text6.replace(/pies/g,'kot')
console.log(zad5);
//moze tez byc replaceAll
const zad6 =text7.split(" ")
console.log(zad6);
*/

//CSS w javie 
// console.log('%cJava','color:red');


// const number= '123'
// console.log(parseInt(number));//zamiana Stringa na typ Number
// const numberr=1234.897
// console.log(numberr.toFixed(2));//funkja zaokraglajaca

// === porównuje zawartosc ORAZ typ
// && zwraca TRUE tylko jako oba warunki sa prawdziwe
// || zwraca FALSE tylko o jak wszytskie warunki sa falszywe


//ZADANIE Z LEKCJI

// const pass="2u7eu098309"
// if (pass.lenght>10 && pass.includes('!'))
// {
//     console.log('Masz rewelacyjne haslo');
// }
// else if(pass.length >10)
// {
//     console.log('Masz dobre haslo');
// }
// else{
//     console.log('Masz za krotkie haslo');
// }

//Switch

// const day='wtorek'
// switch (day){
//     case 'poniedzialek':
//         console.log('dzis jest poniedzialek');
//         break;
//     case 'wtorek':
//         console.log('dzis jest wtorek');
//         break;
//     case 'sroda':
//         console.log('dzis jest sroda');
//         break;
//     case 'czwartek':
//         console.log('dzis jest czwartek');
//         break;
//     case 'piatek':
//         console.log('dzis jest piatek');
//         break;
// }

//WAROTSC ? TRUE : FALSE

// const x=100
// if(x>20)
// {
//     console.log(`${x} >20`);
// }
// else
// {
//     console.log(`${x} <20`);
// }

// const newX= (x >20) ? ` ${x} >20` : `${x} <20`
// console.log(newX);


//ZADANIA Z IF,ELSE, ELSE IF, SWITCH

// const x=50
// const y=30
// if(x>y)
// {
//     console.log(`${x} > ${y}`);
// }

// const color='blue' 
// const newColor='green'
// if(color===newColor)
// {
//    console.log('Kolory sie zgadzaja'); 
// }
// else
// {
//     console.log('Kolory sie nie zgadzaja'); 
// }


// const X=100
// const Y=50
// if(X>Y)
// {
//     console.log('X>Y');
// }
// else if(X==Y)
// {
//     console.log('X=Y');
// }
// else
// {
//     console.log('X<Y');
// }


// const promo='20%'
// switch (promo) {
//     case '10%':
//         console.log('Dzisiaj mamy 10% znizki');
//         break
//     case '20%':
//         console.log('Dzisiaj mamy 20% znizki');
//         break
//     case '30%':
//         console.log('Dzisiaj mamy 30% znizki');
//         break
//     default:
//     console.log(`Nie ma takiej znizki dzis mamy ${promo}`);
// }

// const x=10
// if(x% 2==0){
//    console.log('Jest to liczba parzysta'); 
// }
// else{
//     console.log('Jest to liczba nie parzysta'); 
// }
// const check=(x%2==0) ? `X jest liczba parzytsa` : `X jest liczba nie parzysta`
// console.log(check);

// const x=50
// if(x>=100){
// console.log(`X > 100`.toLocaleUpperCase());
// }
// else if(x<100 && x>30){
// console.log(`X jest sredniakiem`.toLocaleUpperCase());
// }
// else{
// console.log('X jest maly'.toLocaleUpperCase());
// }

//FOR
// const meal=['pizza','spagetti','burger','schabowy']
// for(let i=0;i<=3;i++)
// {
//     console.log(meal[i]);
// }

//FOR OF
// const numbers=[2,4,6,8,10]
// for(const number of numbers)
// {
//     console.log(number*2);
// }

//ZADANIA Z PETLI
// const miasta=['krakow','rzeszow','warszawa','katowice']
// for(let i=0;i<miasta.length;i++)
// {
//     console.log(`To miasto nazywa sie : ${miasta[i].toUpperCase()}`);
// }
// let X=0;
// while(X<10)
// {
//     X+=2;
//     console.log(X);
// }

// let x=20;
// do{
//     x-=3;
// }while(x>0);
// console.log(x);

// let tab=[5,8,10,23,48,60];
// for(let tabs of tab)
// {
//     tabs/=5;
//     console.log(tabs);
// }
// console.log('------');
// for(let tabs of tab)
// {
//     if(tabs%2==0){
//         console.log(`%cLiczba ${tabs} jest parzysta`,'background-color:red');
//     }else{
//         console.log(`%cLiczba ${tabs} jest nie parzysta`,'background-color:yellow');
//     }
// }
