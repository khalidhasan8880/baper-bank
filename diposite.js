// btn selection
const withdrawSubmitBtn = document.getElementById('withdraw-submit');
const dipositeSubmitBtn = document.getElementById('diposite-submit');
// inputs selection 
const withdrawInput = document.getElementById('withdraw-input');
const dipositeInput = document.getElementById('diposite-input');
// displayer field selection
const withdrawNumber = document.getElementById('withdraw-number');
const dipositeNumber = document.getElementById('diposite-number');
const balanceNumber = document.getElementById('balance-number');

// diposite calculation
dipositeSubmitBtn.addEventListener('click', function () {
    // validation for no value from input
    if (dipositeInput.value != '') {
        const result = parseFloat(dipositeNumber.innerText) + parseFloat(dipositeInput.value);

        dipositeNumber.innerText = result;
        dipositeInput.value = '';

        //  subtraction with balance

        const sum = parseFloat(balanceNumber.innerText) - result;
        balanceNumber.innerText = sum;
    }
})

// withdrow calculation
withdrawSubmitBtn.addEventListener('click', function () {
    // validation for no value from input
    if (withdrawInput.value != '') {
        let result = parseFloat(withdrawNumber.innerText) + parseFloat(withdrawInput.value);
        withdrawNumber.innerText = result;
        withdrawInput.value = '';

        //  addition with balance
        const sum = parseFloat(balanceNumber.innerText) + result;
        balanceNumber.innerText = sum;
    }
})

