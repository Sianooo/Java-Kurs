const price = document.querySelector('#price');  
const people = document.querySelector('#people');  
const tip = document.querySelector('#tip');
const countButton = document.querySelector('.count');  
const error = document.querySelector('.error');  
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');

const checkBox = () => {
    const priceValue = price.value;
    const peopleValue = people.value;
    const tipValue = tip.value;

    if (priceValue === "" || peopleValue === "" || tipValue === "") {
        error.textContent = "Wypełnij to pola!";
        costInfo.style.display="none"
    } else {
        error.textContent=""
        calculateBill()
    }
}
const calculateBill = () => {
    const priceValue=parseFloat(price.value)
    const tipValue=parseFloat(tip.value)
    const peopleValue=parseFloat(people.value)

    const total=(priceValue+(priceValue*tipValue))/peopleValue

    cost.textContent=total.toFixed(2)
    costInfo.style.display="block"

}
countButton.addEventListener('click',checkBox)