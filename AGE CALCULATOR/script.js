const inputYear = document.querySelector('.input__year');
const labelYear = document.querySelector('.label__year')

const input__month = document.querySelector('.input__month')
const label__month = document.querySelector('.label__month')

const input__day = document.querySelector('.input__day')
const label__day = document.querySelector('.label__day')

const years = document.querySelector('.age__years')
const months = document.querySelector('.age__months')
const days = document.querySelector('.age__days')

const btn = document.querySelector('.btn')

const errorMsgDay = document.querySelector('.errormsgday')
const errorMsgMonth  = document.querySelector('.errormsgmonth')
const errorMsgYear = document.querySelector('.errormsgyear')

const calcAge = function (){

    const today = new Date()
    console.log(today) 
    const old = new Date(inputYear.value, input__month.value - 1, input__day.value)
    console.log(old)

    
   
    let calcYear = +today.getFullYear() - +old.getFullYear();
    let calcMonth = today.getMonth() - old.getMonth();
    let calcDays = today.getDate() - old.getDate();

    if(old.getMonth() > today.getMonth() ){

        calcYear -- 
        calcMonth = Math.abs(calcMonth)
        calcDays = Math.abs(calcDays)

    }



    years.innerHTML = calcYear;
    months.innerHTML = calcMonth;
    days.innerHTML = calcDays

}



console.log('try')


input__day.addEventListener('input', () => {

    input__day.setCustomValidity('')
    errorMsgDay.textContent = '';

    if (input__day.classList.contains('invalid')) {
        
        label__day.classList.remove('invalid')

    }

})



input__day.addEventListener('invalid', function(e)  {

    e.preventDefault()
    input__day.setCustomValidity(' Must be a Valid Day! ')
    errorMsgDay.textContent = ' Must be a Valid Day! '     
        label__day.classList.add('invalid')
        input__day.style.border = " 2px solid red";


})



input__month.addEventListener('input', () => {

    input__month.setCustomValidity('')
    errorMsgMonth.textContent = '';

    if (input__month.classList.contains('invalid')) {
        
        label__month.classList.remove('invalid')

    }

})



input__month.addEventListener('invalid', function(e)  {

    e.preventDefault()
    input__month.setCustomValidity(' Must be a Valid Month! ')
    errorMsgMonth.textContent = ' Must be a Valid Month! '     
        label__month.classList.add('invalid')
        input__month.style.border = " 2px solid red";


})


inputYear.addEventListener('input', () => {

    inputYear.setCustomValidity('')
    errorMsgYear.textContent = '';

    if (inputYear.classList.contains('invalid')) {
        
        labelYear.classList.remove('invalid')

    }

})



inputYear.addEventListener('invalid', function(e)  {

    e.preventDefault()
    inputYear.setCustomValidity(' Must be a Valid Year! ')
    errorMsgYear.textContent = ' Must be a Valid Year! '     
        labelYear.classList.add('invalid')
        inputYear.style.border = " 2px solid red";


})


btn.addEventListener('click', () => {

    if (inputYear.validity.valid && input__day.validity.valid && input__month.validity.valid) {

        calcAge()
        
    }

    

})
