function addall(food, rent, clothes) {
    const sum = food + rent + clothes;
    return sum;
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
    const totalexpenses = addall(foodvalue, rentvalue, clothesvalue);
    if (rentvalue >= 0 && rentvalue >= 0 && clothesvalue >= 0 && foodvalue >= 0 && totalexpenses >= 0) {

        if (incomevalue >= totalexpenses) {
            console.log(totalexpenses);

        }
        else if (incomevalue < totalexpenses) {
            const calculateerror = document.getElementById('notify-calculate');
            calculateerror.style.display = 'block';

        }


    }




})