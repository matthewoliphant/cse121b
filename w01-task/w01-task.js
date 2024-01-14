let userName = "Moroni";
console.log(`Username: ${userName}`);
userName = "Moronihah";
console.log(`Username: ${userName}`);

const currentDateAndTime = new Date(); // Assuming you want the current date and time
console.log(`It is now ${currentDateAndTime}`);

let theTotal = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`The total is ${theTotal}`);

function total(...theNumbers) {
    let sum = 0;
    for (let aNumber of theNumbers) {
        sum += aNumber * 1;
    }
    return sum;
}
