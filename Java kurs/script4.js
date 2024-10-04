//POZOSTALE DZIAL:
// const test = () => {
//     console.log(":)");
// }
// setTimeout(test,500);//wypisze nam :) po 5s //opoznianie jakies funkcji
// setInterval(test,1000);//co sekunde wykonuje dana funkcje 


// 'use strict'//funckja ktora wymusza na js dokladnosc w pisaniu kodu 
// const colors=['red','blue','yellow'];
// for(const color of colors){//bez const tutaj z use strict nei zadzialalo by to !
//     console.log(color);
// }

//ALERT, PROMPT, CONFIRM
// alert('czesc');

// if(confirm("Chcesz pizze?")){
//     console.log("ok");
// }else{
//     console.log('nie to nie');
// }

// const name=prompt('Czesc ,jak sie nazywasz?','Ania')
// console.log(name);

//OBIEKT MATH:
// const number=Math.random()*10;//0-1 generuje liczby, chyba ze damy * cos to zwiekszymy zakres
// console.log(Math.floor(number));//liczby calkowite, bez przecinka

// ATRYBUTY JS:
// const div=document.querySelector('div');
// const img=document.querySelector('img');

// div.setAttribute('href','#');//dodaje/usuwa nowy atrybut 
// console.log(img.getAttribute('alt'));//sprawdza jaki atrybut mamy 
// console.log(div.hasAttribute('src'));//sprawdzamy czy cos zawiera
// img.removeAttribute('alt');

//DATA-ATRYBUTY:
// const divTag=document.querySelector('[data-number="123"]');
// console.log(divTag.dataset.number);//odwolywanie sie co sie znajduje w naszym data
// console.log(divTag.dataset.moreInfo);
// divTag.setAttribute('data-set',"HELOU");'

// const middleChild=document.querySelector('.middleChild');
// console.log(middleChild);
// const prevSibling=middleChild.previousElementSibling;//funkcja, ktora pokazuje nam wczesniejsze elementy od tego
// console.log(prevSibling);
// const nextSibling=middleChild.nextElementSibling;
// console.log(nextSibling);//funkcja, ktora pokazuje nam pozniejsze elementy od tego
// const parentEl=middleChild.parentElement
// console.log(parentEl);
// const grandEl=middleChild.parentElement.parentElement
// console.log(grandEl);

// console.log(middleChild.closest('p'));//szybsza funkcja do tego wyzej!

//ZADANIE:
// const img=document.querySelector('img');
// img.setAttribute("src","https://www.google.com/imgres?q=kot&imgurl=https%3A%2F%2Fcdn.onemars.net%2Fsites%2Fperfect-fit_pl_W7ZCj_JAs8%2Fimage%2Flarge_kot-nie-chce-jeoe-mokrej-karmy-sprawdc-czy-powinieneo-si-r-przejmowae_1637151639646_1686300799201.png&imgrefurl=https%3A%2F%2Fwww.perfect-fit.pl%2Fkot-wskazowki%2Fja-i-moj-pupil%2Fkoci-jezyk-mowa-kota&docid=oyvDhT1PbJsweM&tbnid=pZsfIw9jZ8LTGM&vet=12ahUKEwi8gc_hqtyIAxUBQvEDHZtqI9YQM3oECBkQAA..i&w=750&h=700&hcb=2&ved=2ahUKEwi8gc_hqtyIAxUBQvEDHZtqI9YQM3oECBkQAA")
// img.setAttribute("alt","obrazek z neta")

// const test = () => {
//     console.log("Kocham jesc pizze!");
// }
// setTimeout(test,2000);

// const li=document.querySelectorAll('li');
// for(let i=0;i<li.length;i++){
//     li[i].textContent = i + 1; 
//     console.log(li[i]);
//     li[i].setAttribute("data-atrybutID",(i+1))
// }
// const findEl=document.querySelector('[data-atrybutID="3"]')
// console.log(findEl.closest(".wrapper"));


