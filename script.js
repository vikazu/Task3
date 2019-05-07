let money = prompt('Your monthly budget');

let time = prompt('Enter date in format YYYY-MM-DD');

let income = ['','','',];

let answer1 = prompt('Enter the constant expense item');
let answer2 = prompt('How much does it cost?');
let expenses = {
    ans1 : answer1,
    ans2 : answer2
}
let appData = {
    budget: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses:'',
    income: income,
    savings: false
};
alert(appData.budget);
alert(appData.expenses);