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

let countTime
let minutes=0
let seconds=0

let timesArr=[]

const handleStart = () => {
    clearInterval(countTime)//blokada przed nieskonczeniem liczenia stopera (stukanie w przycisk wiele razy)

    countTime=setInterval(()=>{
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
const handlePasue = () => {
    clearInterval(countTime)
}

const handleStop = () => {
    time.innerHTML=`Ostatani czas ${stopWatch.textContent}`
    if(stopWatch.textContent !=='0:00'){
        time.style.visibility='visible'
        timesArr.push(stopWatch.textContent)
    }
    clearStuff()
}

const handleReset = () => {
    time.style.visibility='hidden'
    timesArr=[]
    clearStuff()
}

const clearStuff = () => {
    clearInterval(countTime)
    stopWatch.textContent="0:00"
    timelist.textContent=''
    seconds=0
    minutes=0
}

const showHistory = () => {
    timelist.textContent=''
    let num=1
    timesArr.forEach(time=>{
        const newTime=document.createElement('li')
        newTime.innerHTML=`Pomiar nr ${num} <sapn>${time}</span>`
        timelist.append(newTime)
        num++
    })
}

const showModal = () => {
    if(!(modalshadow.style.display==='block')){
        modalshadow.style.display='block'
    }else{
        modalshadow.style.display='none'
    }

    modalshadow.classList.toggle('.modal-animation')
}

startBTN.addEventListener('click',handleStart)
pauseBTN.addEventListener('click',handlePasue)
stopBTN.addEventListener('click',handleStop)
resetBTN.addEventListener('click',handleReset)
historyBTN.addEventListener('click',showHistory)
infoBTN.addEventListener('click',showModal)
closeModalBTN.addEventListener('click',showModal)
window.addEventListener('click',(e)=>{
    e.target===modalshadow ? showModal() :false
})