// food = "banana";
// console.log(food);

// Tip calculator

// foodAmount = Number(prompt("How much was the food?"));
// tipPercentage = Number(prompt("tip %") / 100);
// totalTip = foodAmount * tipPercentage;
// totalAmount = foodAmount + totalTip;
// console.log(totalAmount);

// Tip calculator using function

// function foodCost(food, tip) {
//   const tipPercentage = tip / 100;
//   const tipAmount = food * tipPercentage;
//   const total = food + tipAmount;
//   return total;
// }

// console.log(foodCost(500, 25));

//Tip calculator using Arrow function

const foodCost1 = (food, tip) => {
  let tipPercentage = tip / 100;
  let tipAmount = food * tipPercentage;
  let total = food + tipAmount;
  console.log(total);
};

foodCost1(200, 20);
