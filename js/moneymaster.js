function addall(food, rent, clothes) {
    const sum = food + rent + clothes;
    return sum;
}

function available_balance(income, texpenses) {
    const avail = income - texpenses;
    return avail;
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