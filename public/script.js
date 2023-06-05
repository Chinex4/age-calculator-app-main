// Getting the input elements 
const inputDay = document.querySelector('.day');
const inputMonth = document.querySelector('.month');
const inputYear = document.querySelector('.year');
// Getting error messages
const errorDay = document.querySelector('.error-day');
const errorMonth = document.querySelector('.error-month');
const errorYear = document.querySelector('.error-year');
// Getting the output elements 
const outputDay = document.querySelector('.day-output');
const outputMonth = document.querySelector('.month-output');
const outputYear = document.querySelector('.year-output');
// Setting Valid value
let isValid = false;
// Getting the submit button
const submitBtn = document.querySelector('.submit')

// Setting and getting the current dates
const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Adding an event listener to the submit button

submitBtn.addEventListener('click', (e) => {
    // e.preventDefault();
    if (isValid) {
        if (inputDay.value > day) {
            day = day + months[month - 1];
            month = month - 1;
        }
        if (inputMonth.value > month) {
            month = month + 12;
            year = year - 1;
        }

        // Setting the results
        const d = day - inputDay.value;
        const m = month - inputMonth.value;
        const y = year - inputYear.value;

        // Outputing the results
        outputDay.textContent = d;
        outputMonth.textContent = m;
        outputYear.textContent = y;

    } else {
        // Error message if the inputs are empty
        errorDay.textContent = "This field is required!";
        inputDay.classList.remove('border-smokeygray');
        inputDay.classList.add('border-lightred');

        errorMonth.textContent = "This field is required!";
        inputMonth.classList.remove('border-smokeygray');
        inputMonth.classList.add('border-lightred');

        errorYear.textContent = "This field is required!";
        inputYear.classList.remove('border-smokeygray');
        inputYear.classList.add('border-lightred');
    };
});

// Validating the Day input

inputDay.addEventListener('input', (e) => {
    if (+inputDay.value > 31 || +inputDay.value < 0) {
        errorDay.textContent = "Must be a valid Date";
        inputDay.classList.add('focus:border-lightred');
        inputDay.classList.add('border-lightred');
        isValid = false;
        return;
    }
    else {
        isValid = true;
        errorDay.textContent = "";
        inputDay.classList.remove('focus:border-lightred');
        inputDay.classList.remove('border-lightred');
    }
    if (+inputDay.value === 0) {
        isValid = false;
        errorDay.textContent = "This field is required";
        inputDay.classList.add('focus:border-lightred');
        inputDay.classList.add('border-lightred');
        isValid = false;
        return;
    }
    else {
        errorDay.textContent = "";
        inputDay.classList.remove('focus:border-lightred');
        inputDay.classList.remove('border-lightred');
    }
});

// Validating the month input

inputMonth.addEventListener('input', (e) => {
    if (+inputMonth.value > 12 || +inputMonth.value < 0) {
        errorMonth.textContent = "Must be a valid Date";
        inputMonth.classList.add('focus:border-lightred');
        inputMonth.classList.add('border-lightred');
        isValid = false;
        return;
    }
    else {
        isValid = true;
        errorMonth.textContent = "";
        inputMonth.classList.remove('focus:border-lightred');
        inputMonth.classList.remove('border-lightred');
    }
    if (+inputMonth.value === 0) {
        isValid = false;
        errorMonth.textContent = "This field is required";
        inputMonth.classList.add('focus:border-lightred');
        inputMonth.classList.add('border-lightred');
        isValid = false;
        return;
    }
    else {
        errorMonth.textContent = "";
        inputMonth.classList.remove('focus:border-lightred');
        inputMonth.classList.remove('border-lightred');
    }
});

// Validating the year input

const presentYear = new Date().getFullYear();
console.log(presentYear);

inputYear.addEventListener('input', (e) => {
    if (+inputYear.value > presentYear) {
        errorYear.textContent = "Must be a valid Date";
        inputYear.classList.add('focus:border-lightred');
        inputYear.classList.add('border-lightred');
        isValid = false;
        return;
    }
    else {
        isValid = true;
        errorYear.textContent = "";
        inputYear.classList.remove('focus:border-lightred');
        inputYear.classList.remove('border-lightred');
    }
    if (+inputYear.value === 0) {
        isValid = false;
        errorYear.textContent = "This field is required"
        inputYear.classList.add('focus:border-lightred');
        inputYear.classList.add('border-lightred');
        isValid = false;
        return;
    }
    else {
        errorYear.textContent = "";
        inputYear.classList.remove('focus:border-lightred');
        inputYear.classList.remove('border-lightred');
    }
});

