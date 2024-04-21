#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { massege: "enter your first number", type: "number", name: "firstNumber" },
  { massege: "enter your second number", type: "number", name: "secondNumber" },
  {
    massege: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition","subtraction","multiplication","division"],
  },
]);
//  console.log(answer);
// conditional statement
if(answer.operator ==="addition"){
  console.log(answer.firstNumber+answer.secondNumber);
}
else if(answer.operator ==="subtraction"){
  console.log(answer.firstNumber-answer.secondNumber);
}
else if(answer.operator ==="multiplication"){
  console.log(answer.firstNumber*answer.secondNumber)
}
else if(answer.operator ==="division"){
  console.log(answer.firstNumber/answer.secondNumber)
}
else{
  console.log("please select valid operator")
}
console.log(`THE END`)