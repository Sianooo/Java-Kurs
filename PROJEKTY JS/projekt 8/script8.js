const incomeSections=document.querySelector('.income-area')
const expensesSection=document.querySelector('.expenses-area')
const availableManey=document.querySelector('.available-money')
const addTransactionPanel=document.querySelector('.add-transaction-panel')

const nameinput=document.querySelector('#name')
const amountInput=document.querySelector('#amount')
const categorySelect=document.querySelector('#category')

const addTransactionBtn=document.querySelector('.add-transaction')
const saveBtn=document.querySelector('.save')
const cancelBtn=document.querySelector('.cancel')
const deleteBtn=document.querySelector('.delete')
const deleteAllBtn=document.querySelector('.delete-all')
const lightThemeBtn=document.querySelector('.light')
const darkThemeBtn=document.querySelector('.dark')

let root=document.documentElement;
let ID=0
let categoryIcon
let selectedCategory
let moneyArr=[0]

const showPanel = () => {
    addTransactionPanel.style.display='flex'
}

const closePanel = () => {
    addTransactionPanel.style.display='none'
    clearInputs()
}

const checkForm = () => {
    if(nameinput.value !== ""&& amountInput.value !== ""&&categorySelect.value !== "none"){
        createNewTransaction()
    }else{
        alert('Wypełnij wszystkie pola!')
        
    }
}

const clearInputs = () => {
    nameinput.value =''
    amountInput.value = ''
    categorySelect.selectedIndex=0
}
const createNewTransaction = () => {
    const newTransaction = document.createElement('div')
    newTransaction.classList.add('transaction')
    newTransaction.setAttribute('id',ID)

    checkCategory(selectedCategory)

    newTransaction.innerHTML=`
    <p class="transaction-name">${categoryIcon} ${nameinput.value}</p>
    <p class="transaction-amount">${amountInput.value} zl
    <button class="delete" onclick="deleteTransaction(${ID})"><i class="fas fa-times"></i></button>
    </p>`
    if(amountInput.value>0){
        incomeSections.appendChild(newTransaction)
        newTransaction.classList.add('income')
    }else{
        expensesSection.appendChild(newTransaction)
        newTransaction.classList.add('expense')
    }

    
    moneyArr.push(parseFloat(amountInput.value))
    countMoney( moneyArr)
    closePanel()
    ID++
    clearInputs()
    
}

const selectCategory = () => {
    selectedCategory= categorySelect.options[categorySelect.selectedIndex].text
}

const checkCategory = transaction => {
    switch(transaction){
        case '[ + ] Przychód':
            categoryIcon='<i class="fas fa-money-bill-wave"></i>'
        break;
        case '[ - ] Zakupy':
            categoryIcon='<i class="fas fa-cart-arrow-down"></i>'
            break
        case '[ - ] Jedzenie':
            categoryIcon='<i class="fas fa-hamburger"></i>'
            break
        case '[ - ] Kino':
            categoryIcon='<i class="fas fa-film"></i>'
            break
    }
}

const countMoney = money => {
    const newMoney=money.reduce((a,b)=>a+b)
    availableManey.textContent=newMoney+'zl'
}

const deleteTransation = id => {
    const transactionToDelete = document.getElementById(id)
    const transactionAmount= parseFloat(transactionToDelete.childNodes[3].innerText) 
    const indexOftransaction=moneyArr.indexOf(transactionAmount)

    moneyArr.splice(indexOftransaction,1)
    if(transactionToDelete.classList.contains('income')){
        incomeSections.removeChild(transactionToDelete)
    }else{
        expensesSection.removeChild(transactionToDelete)
    }
    countMoney(moneyArr)
    
}

const deleteAllTransactions = () => {
    incomeSections.innerHTML='<h3>Przychody</h3>'
    expensesSection.innerHTML='<h3>Wydatki</h3>'
    availableManey.textContent='0zl'
    moneyArr=[0]
}

const changeThemeToLight = () => {
    root.style.setProperty('--first-color','#f9f9f9')
    root.style.setProperty('--second-color','#14161f')
    root.style.setProperty('--first-color','rba(0,0,0,.2')

}

const changeThemeToDark = () => {
    root.style.setProperty('--first-color','#14161f')
    root.style.setProperty('--second-color','#f9f9f9')
    root.style.setProperty('--first-color','rba(255,255,255,.4')

}


addTransactionBtn.addEventListener('click',showPanel)
cancelBtn.addEventListener('click',closePanel)
saveBtn.addEventListener('click',checkForm)
deleteAllBtn.addEventListener('click',deleteAllTransactions)
lightThemeBtn.addEventListener('click',changeThemeToLight)
darkThemeBtn.addEventListener('click',changeThemeToDark)
