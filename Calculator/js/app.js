alert('سلام به همگی شما ، به داخل ماشین حساب من خیلی خوش آمدید 😊');

let oneNumber = Number(prompt('لطفا در اینجا عدد اول خود را وارد کنید 1️⃣'));

let sign = prompt('لطفا در اینجا علامت یا عملگر مورد نظر خود را وارد کنید ➕➖✖➗✖✖');

let towNumber = Number(prompt('لطفا در اینجا عدد دوم خود را وارد کنید 2️⃣'));

function calculator (oneNumber , sign , towNumber) {
    if (sign == '+') {
        return oneNumber + towNumber;   
    }

    else if (sign == '-') {
        return oneNumber - towNumber;
    }

    else if (sign == '*') {
        return oneNumber * towNumber;
    }

    else if (sign == '/') {
        return oneNumber / towNumber;
    }

    else if (sign == '**') {
        return oneNumber ** towNumber;
    }

    else {
        return 'متاسفانه اشتباه وارد کردی یا اصلا عددی وارد نکردی 😒';
    }
}

let result = calculator(oneNumber , sign , towNumber);
alert('جواب نهایی شما : ' + result + ' ✔ ');