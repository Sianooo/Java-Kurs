const startBTN=document.querySelector('.start')
const pauseBTN=document.querySelector('.pause')
const stopBTN=document.querySelector('.stop')
const resetBTN=document.querySelector('.reset')
const historyBTN=document.querySelector('.history')
const stopWatch=document.querySelector('.stopwatch')
const time=document.querySelector('.time')
const timelist=document.querySelector('.time-list')
const infoBTN=document.querySelector('.info')
const modalshadow=document.querySelector('.modal-shadow')
const closeModalBTN=document.querySelector('.close')

let seconds=0
let minutes=0
let stoperStart
let arr=[]

function startStoper(){
    clearInterval(stoperStart)
    stoperStart=setInterval(()=>{
        if(seconds<9){
            seconds++
             stopWatch.textContent=`${minutes}:0${seconds}`
        }else if(seconds>=9&&seconds<59){
            seconds++
            stopWatch.textContent=`${minutes}:${seconds}`
        }else{
            minutes++
            seconds=0
            stopWatch.textContent=`${minutes}:00`
        }
    },100)
}
function pauseStoper(){
    clearInterval(stoperStart)
}
function clearStuff(){
    clearInterval(stoperStart)
    stopWatch.textContent='0:00'
    seconds=0
    minutes=0
}


function stopStoppr(){
     time.innerHTML=`Ostatni czas wyniosl ${stopWatch.textContent}`
    if(stopWatch.textContent !== '0:00'){
        time.computedStyleMap.visibility='visible'
        arr.push(stopWatch.textContent)
    }
    clearStuff()
}

startBTN.addEventListener('click',startStoper)
pauseBTN.addEventListener('click',pauseStoper)
stopBTN.addEventListener('click',stopStoppr)