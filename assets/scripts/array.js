// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = new Array('hi', 'welcome', 1, 4);
// const moreNumbers = new Array(5);
// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(2, 3);
// console.log(yetMoreNumbers);

// const moreMore = Array.from('hello');
// console.log(moreMore);

// const list = document.querySelectorAll('li');
// console.log(list);

// const arryList = Array.from(list);
// console.log(arryList);

// const ul = document.getElementById('ulname');
// console.log(ul);

// const hobbes = ['cooking', 'sports'];
// hobbes.push('Reading');
// hobbes.unshift('Coding');
// const poppedValue = hobbes.pop();
// hobbes.shift();
// console.log(hobbes);

const prices = [10.99, 5.99, 6.99, 7.99];
const tax = 0.19;
const taxAdjusttePrices = [];

// for(const price of prices){
//     taxAdjusttePrices.push(price * (1 + tax));
// }

prices.forEach((price, idx, prices) => {
    taxAdjusttePrices.push(price * (1 + tax));
})
console.log(taxAdjusttePrices);
