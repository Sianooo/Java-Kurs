const currencyOne = document.querySelector('#currency-one');
const amountOne = document.querySelector('.amount-one');
const currencyTwo = document.querySelector('#currency-two');
const amountTwo = document.querySelector('.amount-two');
const swapBtn = document.querySelector('.swap');
const rateInfo = document.querySelector('.rate-info');

const calculate = () => {
    fetch(`https://api.exchangeratesapi.io/v1/latest?access_key=edf5aed5d5a09b620c75f4b4ea32935c&symbols=${currencyTwo.value}`)
    .then(res => res.json())
    .then(data => {
        const currency1=currencyOne.value//przechowuja EUR
        const currency2=currencyTwo.value//przechowuje USD

        const rate=data.rates[currency2]
        rateInfo.textContent=`1 ${currency1} = ${rate.toFixed(4)} ${currency2}`

        amountTwo.value=(amountOne.value*rate.toFixed(2))
    })
}
currencyOne.addEventListener('change',calculate)
currencyTwo.addEventListener('change',calculate)
amountOne.addEventListener('input',calculate)//input aktualizuje na biezaco wartosc inputa
swapBtn.addEventListener('click',()=>{
    const temp=currencyOne.value
    currencyOne.value=currencyTwo.value
    currencyTwo.value=temp
    calculate()
})

calculate()