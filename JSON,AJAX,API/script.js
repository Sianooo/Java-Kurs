// const btn=document.querySelector('button')
// const img=document.querySelector('img')

// const URL='https://dog.ceo/api/breeds/image/random'

//fetch().then().catch()
// fetch(URL)
// .then(res=> console.log(res))
// .catch(err=>console.error(err))

// fetch(URL)
// .then(res=> res.json())
// .then(data=>console.log(data))
// .catch(err=>console.error(err))

// btn.addEventListener('click',()=>{
//     fetch(URL)
//     .then(res=> res.json())
//     .then(data=>img.setAttribute('src',data.message))
//     .catch(err=>console.error(err))
    
// })

//SYNCHRONICZNOSC VS ASYNSCHRONICZNOSC:

//PROMISY:=>obietnica(api)

// callback hell:
// =>kod ktory bardzo ciezko sie czyta

// const test=new Promise((resolve,reject)=>{
//     if(true){
//         resolve('jest ok')
//     }else{
//         reject('blad')
//     }
// })

// test
//     .then(info=>console.log(info))
//     .catch(err=>console.error(err))

//GET,POST,PUT,PATCH:

// get-pobiera dane
// post-wysyla dane
// put,patch-edycja danych
// delete-usuwa dane

// const url='mmcschool.pl'
// const test={
//     method:'POST'
// }

// fetch(url,test)

//ASYNC & AWAIT:
// const checkAge=age=>{
//     return new Promise((resolve,reject)=>{
//         if(age>=18){
//             resolve()
//         }else{
//             reject('Masz za malo lat!')
//         }
//     })
// }

// const doubleCheck=()=>{
//     return new Promise (resolve=>{
//         console.log('Sprawdzam jeszcze raz..');
//         setTimeout(()=>{
//             resolve('Faktycznie wiek sie zgadza!')
//         },1000)
//     })
// }

// checkAge(50)
// .then(()=>{
//     console.log('Chyba mozesz wejsc')
//     return doubleCheck()
// })
// .then(res=>console.log(res))
// .then(()=>{
//     console.log('Weryfikacja zakonczona')
// })
// .catch(err=>console.error(err))

// async function test() {
//     try{
//     await checkAge(5)
//     console.log('Chyba mozesz wejsc');
//     await doubleCheck()
//     console.log('Faktycznie wiek sie zgadza!')
//     console.log('Weryfikacja zakonczona')
//     }catch{
//         console.error('Masz za malo lat');
//     }
// }

// test()
//  const URL2 = 'https://dog.ceo/api/breeds/image/random';

// fetch(URL2)
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

// async function test() {
//    try{
//     const res = await fetch(URL2);
//     const data = await res.json();
//     console.log(data);
//    }catch{
//     console.error('blad');
//    }
// }

// test();

//AXIOS: 

// const one=document.querySelector('.one')
// const two=document.querySelector('.two')
// const three=document.querySelector('.three')
// const URL='https://dog.ceo/api/breeds/image/random';

// fetch(URL)
// .then(res=>res.json())
// .then(res=>one.setAttribute('src',res.message))

// axios.get(URL)
// .then(res=>{
//     two.setAttribute('src',res.data.message)
// })

// async function showImage() {
//     const respose=await axios.get(URL)
//     three.setAttribute('src',respose.data.message)
// }
// showImage()

//WEATHER APP PROJEKT 8:
// const input = document.querySelector('input')
// const button = document.querySelector('button')
// const cityName = document.querySelector('.city-name')
// const warning = document.querySelector('.warning')
// const photo = document.querySelector('.photo')
// const weather = document.querySelector('.weather')
// const temperature = document.querySelector('.temperature')
// const humidity = document.querySelector('.humidity')

// const API_LINK='https://api.openweathermap.org/data/2.5/weather?q='
// const API_KEY='&appid=d958d4c38bab7d7c45b9e642d2e036b5'
// const API_UNITS='&units=metric'

// const getWeather=()=>{
//     const city=input.value || 'New York'
//     const URL=API_LINK + city + API_KEY + API_UNITS

//     axios.get(URL)
//     .then(res=>{
//         const temp=res.data.main.temp
//         const hum=res.data.main.humidity
//         cityName.textContent=res.data.name
//         const status=Object.assign({},...res.data.weather)
//         // console.log(status);
//         // console.log(res.data.weather[0]);to samo robi co status
//         temperature.textContent=temp.toFixed(0)+"℃"
//         humidity.textContent=hum+"%"
//         weather.textContent=status.main
//         warning.textContent=''
//         input.value=''
//         //tak mozna bylo to zapisac, po protu krocej :)
//         // temperature.textContent = Math.floor(res.data.main.temp) + '℃'
//         // humidity.textContent = res.data.main.humidity + '%' 
//         if(status.id >=200 && status.id <232){
//             photo.setAttribute('src','./img/thunderstorm.png')
//         }else if(status.id >=300 && status.id <321){
//             photo.setAttribute('src','./img/drizzle.png')
//         }else if(status.id >=500 && status.id <521){
//             photo.setAttribute('src','./img/rain.png')
//         }else if(status.id >=600 && status.id <621){
//             photo.setAttribute('src','./img/snow.png')
//         }else if(status.id >=701 && status.id <781){
//             photo.setAttribute('src','./img/atmosphere.png')
//         }else if(status.id===800){
//             photo.setAttribute('src','./img/sun.png')
//         }else if(status.id >=801 && status.id <804){
//             photo.setAttribute('src','./img/cloud.png')
//         }else{
//             photo.setAttribute('src',',/img/unknown.png')
//         }

//     })
//     .catch(()=>{
//         warning.textContent="Wpisz poprawna nazwe miasta!"
//     })
// }
// const enter=(e)=>{
//     if(e.key=='Enter'){
//         getWeather()
//     }
// }
// button.addEventListener('click',getWeather)
// input.addEventListener('keyup',enter)
// getWeather()