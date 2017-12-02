// sorry for the mess, I tried to solve this quickly

const isInt = (n) => n % 1 === 0;
const findEvenlyDivisibleValue = (arr) => {
  let value = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // Try diving the numbers & later try dividing vice versa
      if (isInt(arr[j] / arr[i])) {
        value = arr[j] / arr[i];
        break;
      } else if (isInt(arr[i] / arr[j])) {
        value = arr[i] / arr[j];
        break;
      }
    }
  }

  return value;
}

const part2 = () => parseData().map(findEvenlyDivisibleValue).reduce(add);

console.log("Part 2 answer:", part2());