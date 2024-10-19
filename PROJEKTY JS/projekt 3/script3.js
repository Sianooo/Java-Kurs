const username=document.querySelector('#username')
const pass=document.querySelector('#password')
const pass2=document.querySelector('#password2')
const email=document.querySelector('#email')
const sendBtn=document.querySelector('.send')
const clearBtn=document.querySelector('.clear')
const popup=document.querySelector('.popup')

function showError(input,msg) {
    //argument input przechowuje nasze INPUTY
    //argumnet MSG przechowuje placeholder
    const formBox=input.parentElement
    const errorMsg=formBox.querySelector('.error-text')
    formBox.classList.add('error')
    errorMsg.textContent=msg
}

function clearError(input) {
    const formBox=input.parentElement
    formBox.classList.remove('error')
}

function checkForm(input) {//input przechpwuje tablice "checkForm" z naszymi inputami
    input.forEach(el=>{//el odnosi sie do kazdej zmiennej, ktora umiescilismy w tablicy
        if(el.value===""){
            showError(el,el.placeholder)
        }else{
            clearError(el)
        }
    })
}

function checkLenght(input,min) {
    if(input.value.length < min){
        showError(input,`${input.previousElementSibling.innerText.slice(0,-1)}
        sklada sie z conajmniej ${min} znakow`)
    }
}

function checkPass(input,input2){
    if(input.value!==input2.value){
        showError(pass2,`Hasla nie pasuja do siebie`)
    }
}

function checkMail(email) {
    const reg=  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(reg.test(email.value)){
        clearError(email)
    }else{
        showError(email,`Wpisz poprawny mail`)
    }
}

function checkError() {
    const allInputs=document.querySelectorAll('.form-box')
    let errorCount=0;
    allInputs.forEach(el=>{
        if(el.classList.contains('error')){
            errorCount++;
        }
    })
    if(errorCount===0){
        popup.classList.add('show-popup')
    }
}

sendBtn.addEventListener('click',e=>{
    e.preventDefault()//formularz sie nie przeladowuje
    checkForm([username,pass,pass2,email])
    checkLenght(username,3)
    checkLenght(pass,8)
    checkPass(pass,pass2)
    checkMail(email)
    checkError()
})

clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    [username, pass, pass2, email].forEach(el => {
        el.value = "";
        clearError(el)
    });
});

    // username.value=""
    // pass.value=""
    // pass2.value=""
    // email.value=""
