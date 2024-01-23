const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(numArray) {
  let result = 0;
  numArray.forEach(num =>{
    result+=parseInt(num);
  })
  return parseInt(result);
	
};

const multiply = function(numArray) {
  let result = 1;
  for(const num of numArray){
    result*=parseInt(num);
  }
  return result;

};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(num) {
	let result = 1;
  for(let i=2; i<=num; i++){
    result*=i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
