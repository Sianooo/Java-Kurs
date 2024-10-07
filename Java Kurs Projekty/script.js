//Projekt 1:
// const arroBtn=document.querySelector('.arrow')
// const arrowIcon=document.querySelector('.fas');
// const img= document.querySelector('.item1');

// const showImg = () => {
//     img.classList.toggle('hide');
//     if(img.classList.contains('hide')){
//         arrowIcon.style.transform='rotate(180deg)'
//     }else{
//         arrowIcon.style.transform='rotate(0deg)'
//     }
// }
// arroBtn.addEventListener('click',showImg)

//Projekt 2:
// const btn1=document.querySelector('.sizeUp')
// const btn2=document.querySelector('.sizeDown')
// const btn3=document.querySelector('.color')
// const p=document.querySelector('p')

// let fontSize=36
// const sizeUp = () => {
//     // p.textContent=p.textContent.toUpperCase()
//     p.style.fontSize=fontSize+'px'
//     fontSize+=5;
// }
// const sizeDown = () => {
//     // if(fontSize<=21) return
//     p.style.fontSize=fontSize +'px'
//     fontSize-=5;
// }
// const changeColor = () => {
//     let r=Math.floor(Math.random()*255)
//     let g=Math.floor(Math.random()*255)
//     let b=Math.floor(Math.random()*255)
//     p.style.color=`rgb(${r},${g},${b})`
// }

// btn1.addEventListener("click",sizeUp)
// btn2.addEventListener("click",sizeDown)
// btn3.addEventListener("click",changeColor)

//PROJEKT 3:
//RegExp=> wyrazenia regularne 
// const pass = document.querySelector('#password');
// const p = document.querySelector('.passinfo');
// const letters = /[a-z]/i;
// const numbers = /[0-9]/;
// const special = /[!@#$%^&*()]/;
// const minValue = 10;
// //match->metoda sluzy do porownywania wartosci
// const showMsg = (params) => {
//     if(pass.value.length>minValue && pass.value.match(letters) &&pass.value.match(numbers)
//     &&pass.value.match(special))
//     {
//         p.textContent='Masz bardzo dobre haslo'
//         p.style.color='lime'
//     }else if(pass.value.length>minValue && pass.value.match(letters) &&pass.value.match(numbers))
//     {
//         p.textContent='Masz dobre haslo'
//         p.style.color='gold'
//     }else{
//         p.textContent='Masz slabe haslo'
//         p.style.color='red'
//     }
// }

// const checkPass = (params) => {
//     if(pass.value !==''){
//         showMsg()
//     }else{
//         p.textContent='Nie podales hasla'
//         p.style.color=""
//     }
// }
// pass.addEventListener('keyup',checkPass)

// Projekt 4:
// const converter=document.querySelector('#converter')
// const result=document.querySelector('.result')
// const convBtn=document.querySelector('.conv')
// const resteBtn=document.querySelector('.reset')
// const changeBtn=document.querySelector('.change')
// const one=document.querySelector('.one')
// const two=document.querySelector('.two')

// let fahrenheit
// let celcius

// const swap = () => {
//     if(one.textContent=='°C'){
//         one.textContent="°F "
//         two.textContent="°C"
//         result.textContent=''
//     }else{
//         one.textContent="°C "
//         two.textContent="°F"
//         result.textContent=''
//     }
// }

// const changeToCelcius = () => {
//     fahrenheit=converter.value*1.8+32;
//     result.textContent=`${converter.value} C na F wynosi ${fahrenheit.toFixed(2)}`
//     converter.value=''
// }
// const changeToFahrengeit = () => {
//     celcius=(converter.value-32)/1.8
//     result.textContent=`${converter.value} F na C wynosi ${celcius.toFixed(2)}`
//     converter.value=''
// }

// const changeValue = () => {
//     if(converter.value!==''){
//     if(one.textContent==='°C'){
//         changeToCelcius();
//     }else{
//         changeToFahrengeit();
//     }}
//     else{
//         result.textContent="Musisz podac jakas wartosc"
//     }
// }

// const deleteAll = () => {
//     converter.value=''
//     result.textContent=''
// }

// changeBtn.addEventListener('click',swap)
// convBtn.addEventListener('click',changeValue)
// resteBtn.addEventListener('click',deleteAll)

// Projekt 5:
// const burgerBtn=document.querySelector('.burger')
// const barsIco=document.querySelector('.fa-bars')
// const xIco=document.querySelector('.fa-times')
// const nav=document.querySelector('nav ul')

// const menu = () => {
//     nav.classList.toggle('active')
//     burgerBtn.classList.toggle('active')
//     barsIco.classList.toggle('hide')
//     xIco.classList.toggle('hide')
// }
// burgerBtn.addEventListener('click',menu)

// Projekt 6:
// const currentDay = document.querySelector('.current-day')
// const funFact = document.querySelector('.fun-fact')

// const facts = [
// 	'Krokodyl nie potrafi wystawić języka.',
// 	'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
// 	'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
// 	'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
// 	'Goryle śpią nawet czternaście godzin dziennie.',
// 	'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
// 	'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
// 	'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.'
// ]

// const day= new Date();
// // console.log(day);
// currentDay.textContent=day.toLocaleDateString('pl',{weekday:'long'});

// const randomFacts = (params) => {
//     const number=Math.floor(Math.random()* facts.length)
//     console.log(number);
//     funFact.textContent=facts[number]
// }
// randomFacts()

//Projekt 7
// let todoInput
// let errorInfo
// let addBtn
// let ulList
// let newTodos
// let todoToEdit
// let popup
// let popupInfo
// let popupToEdit
// let popupInput
// let popupAddBtn
// let popupCloseBtn



// const main = (params) => {
//     //wywolujemy funkcje
//     prepareDOMEElements()
//     preprareDOMEEvents()
// }

// const prepareDOMEElements = (params) => {
//     //pobieranie elementow
//     todoInput=document.querySelector('.todo-input')
//     errorInfo=document.querySelector('.error-info')
//     addBtn=document.querySelector('.btn-add')
//     ulList=document.querySelector('.todolist ul')

//     popup=document.querySelector('.popup')
//     popupInfo=document.querySelector('.popup-info')
//     popupInput=document.querySelector('.popup-input')
//     popupToEdit=document.querySelector('.popup-input')
//     popupAddBtn=document.querySelector('.accept')
//     popupCloseBtn=document.querySelector('.cancel')

// }

// const preprareDOMEEvents = (params) => {
//     //nadajaemy nasluchiwanie
//     addBtn.addEventListener('click',addNewTodo)
//     ulList.addEventListener('click',checkClick)
//     popupCloseBtn.addEventListener('click',closePopup)
//     popupAddBtn.addEventListener('click',changeTodoText)
//     todoInput.addEventListener('keyup',enterKeyCheck)
// }

// const addNewTodo = (params) => {
//     if(todoInput.value!=''){
//         newTodos=document.createElement('li')
//         newTodos.textContent=todoInput.value
//         ulList.append(newTodos)

//         createToolsArea()

//         // ulList.append(newTodos)
//         todoInput.value=''
//         errorInfo.textContent=''
//     }else{
//         errorInfo.textContent='Wpisz tresc zadania!'
//     }
// }

// const createToolsArea = () => {
//     const toolsPanel=document.createElement('div')
//     toolsPanel.classList.add('tools')
//     newTodos.append(toolsPanel)

//     const btnComplete=document.createElement('button')
//     btnComplete.classList.add('complete')
//     btnComplete.innerHTML='<i class="fas fa-check"></i>'

//     const btnEdit=document.createElement('button')
//     btnEdit.classList.add('edit')
//     btnEdit.textContent='EDIT'

//     const btnDelete=document.createElement('button')
//     btnDelete.classList.add('delete')
//     btnDelete.innerHTML='<i class="fas fa-times"></i>'

//     toolsPanel.append(btnComplete,btnEdit,btnDelete)
// }

// const checkClick = (e) => {
//     if(e.target.matches('.complete')){
//         e.target.closest('li').classList.toggle('completed')//closest odwolanie z dziecka do rodzica
//         e.target.classList.toggle('completed')
//     }else if(e.target.matches('.edit')){
//         editTodo(e)
//     }else if(e.target.matches('.delete')){
//         deleteTodo(e)
//     }
// }

// const editTodo = e => {
//     todoToEdit=e.target.closest('li')
//     popupInput.value=todoToEdit.firstChild.textContent
//     console.log(todoToEdit.firstChild);
//     popup.style.display='flex';
// }


// const closePopup = () => {
//     popup.style.display='none';
//     popupInfo.textContent=''
// }


// const changeTodoText = () => {
//     if(popupInput.value!==""){
//     todoToEdit.firstChild.textContent=popupInput.value
//     popup.style.display='none'
//     popupInfo.textContent=''
//     }else{
//     popupInfo.textContent='Musisz podac jakas tresc!'
//     }
// }

// const deleteTodo = (e) => {
//     e.target.closest('li').remove()
//     const allTodo=document.querySelectorAll('li')
//     if(allTodo.length===0){
//         errorInfo.textContent='Brak zadan na liscie!'
//     }
// }

// const enterKeyCheck = (e) => {
//     if(e.key==='Enter'){
//         addNewTodo()
//     }
// }

// document.addEventListener('DOMContentLoaded',main)//funkcja zabezpieczajaca strone najpierw DOM a pozniej main

//Objekty :
// const newUser={
//     name:'Kasia',
//     age:50,
//     car:{
//         brand:'citroen',
//         color:'niebieski',
//         model:'C4',
//         sound(){//metodyw funkcjach
//             console.log("brum brum");
//         },
//         test:123
//     }
// }
// newUser.car.sound()
// // console.log(newUser);
// // console.log(newUser.name);
// // console.log(newUser.car.brand);

// const user={
//     name:'Klaudia',
//     age:17
// }
// user.country='Polska'//dodawanie rzeczy do obiektow poza obiektem
// user['fav-color']='Niebieski'
// console.log(user);

// const dogName='Drops'
// const dogAge=5
// const dog={
//     //klucz:wartosc
//     // name:dogName,
//     // age:dogAge,
//     dogName,//jezeli klucz i wartosc jest ta sama mozna to tak zapisac
//     dogAge
// }
// console.log(dog);

//PETLA FOR IN
// const user={
//     name:'Klaudia',
//     age:20,
//     sex:'Female',
//     'hair-color':'blonde'
// }
// for(const data in user){//zmienna data przechowuje nazwy kluczy np:name,age itp...
//     // console.log(user[data]);//wypisywanie wartosci z klucza
//     console.log(data+ ': '+user[data]);//wypisanie wszystkiego
// }

//THIS:

// const user={
//     name:"Daria",
//     showName(){
//         console.log(this.name);//this kod uniwersalny
//         console.log(user.name);
//     }
// }
// user.showName()

//KONSTRUKTOR: zawsze piszemy nazwe z duzej litery

// function User(name,age){
//     this.name=name;
//     this.age=age;

//     this.hello=function(){
//         console.log(`Czesc ${this.name}`);
//     }
// }

// const newUser=new User('Daria',16)
// const newUser2=new User('Patryk',17)
// // console.log(newUser,newUser2);

// newUser2.hello()

//PROTOTYP:

// function User(name,age){
//     this.name=name;
//     this.age=age;
// }

// const newUser=new User('Daria',16)
// const newUser2=new User('Patryk',17)
// console.log(newUser,newUser2);

// User.prototype.hello=function(){
//     console.log(`Czesc ${this.name}`);
// }
// User.prototype.contry='Polska'
// console.log(newUser.contry);
// newUser.hello()

//ZADANIE:

// const btn1=document.querySelector('.btn-1')
// const btn2=document.querySelector('.btn-2')
// const btn3=document.querySelector('.btn-3')
// const p=document.querySelector('p')

// function Meal(nazwaPosilku,canaPosilku){
//     this.nazwaPosilku=nazwaPosilku;
//     this.canaPosilku=canaPosilku;
// }

// const meal1=new Meal('schabowy',29)
// const meal2=new Meal('pierogi',19)
// const meal3=new Meal('spagetti',39)

// Meal.prototype.showMeal=function(){
//     console.log(`${this.nazwaPosilku} kosztuje ${this.canaPosilku}`);
// }

// // btn1.addEventListener('click',meal1.showMeal)
// // btn2.addEventListener('click',meal2.showMeal)
// // btn3.addEventListener('click',meal3.showMeal)

// btn1.addEventListener('click',() => {
//     meal1.showMeal()
// })

// btn2.addEventListener('click',() => {
//     meal2.showMeal()
// })

// btn3.addEventListener('click',() => {
//     meal3.showMeal()
// })

//THIS CZ:2//this wspazuje na obiekt globalny

// function test(){
//     console.log(this);
// }
// test()

//this w zwyklej funkcji wskazuje na obiekt, ktory jest na lewo od kropki
// const person={
//     name:'Lisa',
//     'fav-meal':'schabowy',
//     // showInfo(){
//     //     console.log(this);
//     //     console.log(this['fav-meal']);
//     // }
//     adress:{
//         city:'Krakow',
//         'zip-code':'31-326',
//         showCity(){
//             console.log(this);
//         }
//     }
// }
// person.adress.showCity()
// // person.showInfo()

// //this w konstruktorze wsklazuje na obiekt, stworzony na podstawie konstruktora

// function Food(name) {
//     this.name=name
// }
// const meal= new Food('schabowy')
// const meal2= new Food('pepsi')
// console.log(meal,meal2);

//THIS CZ:3

// const btns=document.querySelectorAll('button')
// btns.forEach(btn=>btn.addEventListener('click',(e)=>{
//     console.log(this.textContent);//this w funckji strzalkowej nie dziala
//     console.log('------');
//     console.log(e.target.textContent);
// }))

// //this w funkcji strzalkowej:
// const ob={
//     number:123,
//     showNumber(){
//         console.log(this.number);
//     },
//     // showNumber2:()=>{
//     //     console.log(this);//obietk Window
//     // }
//     showNumber2(){
//         const test=()=>{
//             console.log(this.number);
//         }
//         test()
//     }
// }
// ob.showNumber()
// ob.showNumber2()


//BIND: => wywoluje inne obiekty 
// function test(){
//     console.log(this);
//     console.log(this.name);
// }
// const car={
//     name:'Audi'
// }
// const car2={
//     name:'Mercedes'
// }
// test.bind(car)()//dwa nawiasy

//CALL&APPLY:
// const movie={
//     title:'Avengers',
// }
// function showMovie(price, cinema) {
//     console.log(`Film ${this.title}, cena: ${price} kino: ${cinema} `);
// }
// showMovie(30,'SuperKino')
// //funkcja.call(obiekt,argumenty):
// showMovie.call(movie,25,'SuperKino2')
// //funckja.apply(obiekt,tablica)
// showMovie.apply(movie, [25,'SuperKino2'])

//KLASY
// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// Person.prototype.sayHi=function() {
//     console.log(`Czesc jestem ${this.name}`);
// }
// Person.prototype.showAge=function() {
//     console.log(`Mam ${this.age} lat/a`);
// }
// const person=new Person('Majek',23)
// person.sayHi()
// person.showAge()

// // ============= stary zapis 

// class Person2{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     sayHi(){
//         console.log(`Czesc jestem ${this.name}`);
//     }
//     showAge(){
//         console.log(`Mam ${this.age} lat/a`);
//     }
// }
// const person2=new Person2('Ania',17)
// person2.sayHi()
// person2.showAge()

//EXTENDS & SUPER
// class Animal{
//     constructor(name){
//         this.name=name
//     }
//     sound(){
//         console.log(`Zwierzak robi "hau hau "`);
//     }
// }
// class Dog extends Animal{
//     constructor(name,age){
//         super(name)//dziedziczenie z klasy Animal
//         this.age=age;
//     }
// }

// class Cat extends Animal{
//     sound(){
//         console.log('Miau');
//     }
// }
// const dog= new Dog('Drops',6)
// const cat=new Cat('Kicia')
// cat.sound()
// console.log(cat);
// // dog.sound();
// // console.log(dog);


//OBEJCT ASSIGN:
// const user={
//     name:'Lily',
//     age:23
// }
// const pet={
//     name:'Drops',
//     type:"dog"
// }

// const userInfo=Object.assign({},user,pet)//zawsze z przodu dajemy pusty obiekt {}
// console.log(userInfo);
// const userCopy=Object.assign({},user)//nadpisywanie objektow
// userCopy.age=25
// console.log(userCopy);

//DESTRUKTURYZACJA:

// const person={
//     name:'Lily',
//     age:25,
//     job:'DJ',
//     car:{
//         brand:'Dodge',
//         model:"Viper"
//     }
// }

// const showInfo=({name,age,job})=>{
//     // const {name,age,job}=person//dzieki temu:
//     console.log(`${name} parcuje jako ${job} i ma ${age} lata.`);//wtedy mozna to tak zapisac 
//     // console.log(`${person.name} parcuje jako ${person.job} i ma ${person.age} lata.`);
// }
// // showInfo()
// showInfo(person)

// const showInfo2 = ({car:{brand,model}}) => {
// console.log(`Jej samochod to : ${brand} ${model}`);
// }
// showInfo2(person)

// const colors=['red','green','blue']
// const firstColor=colors[0]
// const secondColor=colors[1]

// const [first,second]=colors

// console.log(firstColor,secondColor);
// console.log(first,second);

