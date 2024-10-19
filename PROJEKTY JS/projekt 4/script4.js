const input=document.querySelector('input')
const answer=document.querySelector('.answer')
const error=document.querySelector('.error')
const bill=document.querySelector('.ball-img img')

const randomQuestions = () => {
const question=["Tak, bedziesz","Tak sie nie stanie","Moze w przyszlosci","Nie, bedziesz"]
const randomIndex=Math.floor(Math.random()*question.length)
const randomAnswer=question[randomIndex]
answer.textContent=randomAnswer
}

const clickBill = (e) => {
    // const bill=e.target
    console.log(bill);
    if(bill){
        bill.classList.add('shake-animation')
        randomQuestions()
    }
    setTimeout(()=>{
        bill.classList.remove('shake-animation')
    },1000)
}

const emptyInput = (e) => {
    if(input.value===""){
        error.textContent="Wpisz pytanie!"
    }else if(input.value.indexOf('?')===-1){
        error.textContent="Musisz wpisac ? na koniec pytania:)"
    }else{
        error.textContent=""
        clickBill(e)
    }
}
bill.addEventListener('click', (e) => {
    emptyInput(e)
})

