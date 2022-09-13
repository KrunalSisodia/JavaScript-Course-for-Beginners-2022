const fruits = [
  "banana",
  "mango",
  "orange",
  "pear",
  "dragon fruit",
  "mango",
  "orange",
  "pear",
  "dragon fruit",
  "mango",
  "orange",
  "pear",
  "dragon fruit",
  "mango",
  "orange",
  "pear",
  "dragon fruit",
  "mango",
  "orange",
  "pear",
  "dragon fruit",
  "mango",
  "orange",
  "pear",
  "dragon fruit",
  "mango",
  "orange",
  "pear",
  "dragon fruit",
];

// for (i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

//Another way

for (const fruit of fruits) {
  console.table(fruit);
}

const numbers = [1, 2, 3, 4, 5, 6];
let result = [];
for (const number of numbers) {
  result.push(number * 2);
}
console.log(result);

// Using arrow function...
const double = (numbers) => {
  let result = [];
  for (const number of numbers) {
    result.push(number * 2);
  }
  return result;
};
console.log(double([1, 2, 3, 4, 5, 6, 7, 8]));
