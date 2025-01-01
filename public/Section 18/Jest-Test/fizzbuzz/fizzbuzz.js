function fizzbuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log(
      `Number ${number} is a multiple of both 3 and 5 so we call FizzBuzz`
    );
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    console.log(`Number ${number} is a multiple of 3 only so we call Fizz`);
    return "Fizz";
  } else if (number % 5 === 0) {
    console.log(`Number ${number} is a multiple of 5 only so we call Buzz`);
    return "Buzz";
  } else {
    console.log(
      `Number ${number} is a not multiple of either 3 or 5 so we call notFizzBuzz`
    );
    return number;
  }
}

module.exports = fizzbuzz;
