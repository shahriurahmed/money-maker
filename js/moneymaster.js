// function for additioon

function addall(food, rent, clothes) {
    const sum = food + rent + clothes;
    return sum;
}

// function for subtractiopn
function available_balance(x, y) {
    const avail = x - y;
    return avail;
}

// find percentage

function total_savings(a_balance, prcnt) {
    const amount = (prcnt / 100) * a_balance;
    return amount;
}

document.getElementById('calculate').addEventListener('click', function () {
    const income = document.getElementById('inputincome');
    const incomevalue = parseFloat(income.value);
    if (incomevalue < 0 || income.value.length == 0) {
        const incomeerror = document.getElementById('notify-income');
        incomeerror.style.display = 'block';
    }
    const food = document.getElementById('inputfood');
    const foodvalue = parseFloat(food.value);
    if (foodvalue < 0 || food.value.length == 0) {
        const fooderror = document.getElementById('notify-food');
        fooderror.style.display = 'block';
    }
    const rent = document.getElementById('inputrent');
    const rentvalue = parseFloat(rent.value);
    if (rentvalue < 0 || rent.value.length == 0) {
        const renterror = document.getElementById('notify-rent');
        renterror.style.display = 'block';
    }
    const clothes = document.getElementById('inputclothes');
    const clothesvalue = parseFloat(clothes.value);
    if (clothesvalue < 0 || clothes.value.length == 0) {
        const clotheserror = document.getElementById('notify-clothes');
        clotheserror.style.display = 'block';
    }
    // calling function to calculate totalexpenses
    const totalexpenses = addall(foodvalue, rentvalue, clothesvalue);
    // calling function to calculate available_balance
    const available = available_balance(incomevalue, totalexpenses);

    if (rentvalue >= 0 && rentvalue >= 0 && clothesvalue >= 0 && foodvalue >= 0 && totalexpenses >= 0) {

        if (incomevalue >= totalexpenses) {

            const show_expenses = document.getElementById('totalexoenses')
            show_expenses.innerText = totalexpenses;
            const show_balance = document.getElementById('balance');
            show_balance.innerText = available;

        }
        else if (incomevalue < totalexpenses) {
            const calculateerror = document.getElementById('notify-calculate');
            calculateerror.style.display = 'block';
        }
    }

})

document.getElementById('save').addEventListener('click', function () {

    const show_balance = document.getElementById('balance');
    const a_balance = parseFloat(show_balance.innerText);
    const savings_percentage = document.getElementById('s_percent').value;
    const s_percentage = parseFloat(savings_percentage);
    if (s_percentage < 0 || s_percentage > 100) {
        const perror = document.getElementById('notify-savings');
        perror.style.display = 'block';
    }
    else if (s_percentage >= 0 && s_percentage <= 100) {
        const my_savings = total_savings(a_balance, s_percentage);
        const savings_amount = document.getElementById('show_savings');
        savings_amount.innerText = my_savings;
    }


})