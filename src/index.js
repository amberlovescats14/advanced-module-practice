import add from "./modules/add";
import subtract from "./modules/subtract";
import multiply from "./modules/multiply";
import {addTen, addFive, addOne} from "./modules/addNumbers";
import {subtractOne, subtractFive, subtractTen} from "./modules/subtractNumbers";

const number1 = 393;
const number2 = 238;

let plus = add(number1,number2);
console.log(plus);

let sub = subtract(number1,number2);
console.log(sub);

let mul = multiply(number1,number2);
console.log(mul);


////////////
const divide = (a,b) => {
  return a / b
}
let div = divide(number1,number2);
console.log(div);
//////////////





let plusTen = addTen(number1);
console.log(plusTen);

let plusFive = addFive(number1);
console.log(plusFive);

let plusOne = addOne(number1);
console.log(plusOne);

let minusOne = subtractOne(number1);
console.log(minusOne);

let minusFive = subtractFive(number1);
console.log(minusFive);

let minusTen = subtractTen(number1);
console.log(minusTen);
