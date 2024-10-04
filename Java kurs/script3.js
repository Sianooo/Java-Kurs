//DOCUMENT,WINDOW,DOM
//getElementById
// const test=document.getElementById('element');
// console.log(test);

// //getElementByTagName
// const test2=document.getElementsByTagName('li');
// console.log(test2);

// //getElementByClassName
// const test3=document.getElementsByClassName('test');
// console.log(test3);

// const ulList=document.querySelector('li');//on pobiera wszystko tak jak w css np: .test, #item
// console.log(ulList);
// const ulItem=document.querySelector('ul');//tu pobiera tag caly 
// console.log(ulItem);

// const liItems= document.querySelectorAll('li')//wypisuje wszytskie moje li jakie sa w html
// console.log(liItems);

// const zadanie= document.querySelector('h1');
// console.log(zadanie);
// const zadanie2=document.querySelectorAll('p');
// console.log(zadanie2);
// const zadanie3=document.querySelector('.test')
// console.log(zadanie3);
// const zadanie4=document.querySelector('#test');
// console.log(zadanie4);

//TWORZENIE ELEMENTOW NA STRONIE

// const ulList=document.createElement('ul');
// const liItem=document.createElement('li');//tworzenie li 
// liItem.textContent='czesc'
// console.log(liItem);
// document.body.appendChild(ulList);//tworzenie na stornie juz ul
// ulList.appendChild(liItem);//tworznie li w ul

// //zadanko
// const div=document.querySelector('div');
// const paragraf=document.createElement('p');
// paragraf.textContent="Jestem paragraf";
// div.appendChild(paragraf);

// const ul=document.querySelector('ul');
// const lu=document.createElement('lu');
// lu.textContent="jestem lu i lubie byc w ul xd";
// ul.appendChild(lu);

// const ul2=document.querySelector('ul');
// const lo=document.createElement('lo');
// lo.textContent="jestem lo i rowniez jestem w ul";
// ul.appendChild(lo);

//Append = dodaje wszytsko na raz w przeciwienstwie do appendChild!
// const div=document.querySelector('div'); 
// const p=document.createElement('p');
// const headingTwo=document.createElement('h2');
// div.append(p,headingTwo,"czesc");

//removeChild = usuwa elementy
// const div=document.querySelector('div');
// const p=document.querySelector('p');
// // div.removeChild(p);
// // document.body.removeChild(div);//usuwa calego diva

// //remove = usuwa cala rzecz
// p.remove();
// div.remove();

//INNERHTML, TEXTCONTENT
// const btn=document.querySelector('button');
// btn.innerHTML='<li>Pizzunia</li>';//innerhtml dodawanie/zamienianie rzeczy np: w button(i tutaj dziala css, pojawi sie kropka przed)
// console.log(btn.innerText);//wypisuje co znajduje sie w naszym przycisku
// btn.innerText='<li>Pizzunia</li>';// to i textContent nie zrobi zeby li dzialalo na stornie,wypisze je jako tekst
// btn.textContent='<li>Pizzunia</li>';

//ADDEVENTLISTENER://zawsze tworzyc na samym dole kodu

// const btn1=document.querySelector('.btn1');
// const btn2=document.querySelector('.btn2');
// const btn3=document.querySelector('.btn3');

// //target.addEventListener(type,listener)//sciaga!

// btn1.addEventListener('click', function () {
//     console.log('Kliknieto mnie!');
// })

// btn2.addEventListener('mouseover', ()=>console.log('Najechano na mnie!'));\

// const test = () => {
//     console.log('Double click');
// }

// btn3.addEventListener('dblclick', test);
// const btns = document.querySelectorAll('button'); 
// const smile = () => {
//     console.log(':)');
// }
// btns.forEach(btn => btn.addEventListener('click', smile));

//e:
// const test = (e) => {
//     console.log(e);
// }

//e.stopPropagation()//zadko uzywane ale warto wiedziec
//e.target// element w ktory wlasnie kliknelismy

//STYLOWANIE ELEMENTOW ZA POMOCA JS: //ale nie robimy tego za czesto do tego sluzy CSS!
// const div=document.querySelector('div');
// div.style.fontSize='48px';
// div.style.backgroundColor='toamto';
// div.style.borderRadius='8px';

//DODAWANIE USUWANIE KLAS :
// const addClass= () => {
//     text.classList.add('test');
// }
// const removeClass()=>{
 // text.classList.remove('test');
// }

//KONTYNUACJA:
// const add = document.querySelector('.add'); 
// const remove = document.querySelector('.remove');
// const toggle = document.querySelector('.toggle'); 
// const text = document.querySelector('p');    

// const addClass = () => {
//     text.classList.add('test');
// }
// const removeClass = () => {
//     text.classList.remove('test');
// }
// const toggleClass = () => {
//     text.classList.toggle('test');
// }

// toggle.addEventListener('click', toggleClass);
// remove.addEventListener('click', removeClass);
// add.addEventListener('click', addClass);

//ZADANIA:
// const ulList=document.createElement('div');
// for(let i=1;i<10;i++){
//     const liList=document.createElement('li');
//     liList.textContent=(i);
//     ulList.appendChild(liList)
// }
// document.body.appendChild(ulList);
// const lastLi=document.createElement('li');
// lastLi.textContent='Jestem ostatnim elementem';
// document.body.appendChild(lastLi);
// lastLi.style.backgroundColor='royalblue';
// lastLi.style.padding='20px 40px';


//ZADANIE 2:
// const p1=document.querySelector('.p1');
// const p2=document.querySelector('.p2');
// const btn1=document.querySelector('.btn1');
// const btn2=document.querySelector('.btn2');
// const div=document.querySelector('.square');

// btn1.addEventListener('click', function hallo() {
//     console.log('Czesc');
// })
// div.addEventListener('mouseenter',function color() {
//     div.style.backgroundColor = 'red'
// })
// div.addEventListener('mouseleave',function color() {
//     div.style.backgroundColor = 'blue'
// })
// btn2.addEventListener('click', function toggle() {
//     p1.classList.toggle('show');
//     p2.classList.toggle('show');
// })