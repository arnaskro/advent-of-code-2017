const parseData = () => document.body.innerText.split(" ").map(x => parseInt(x));
const part1 = (input) => {
  let steps = index = value = 0;

  while (index < input.length) {
    steps++;
    value = input[index];
    input[index] += 1;
    index += value;
  }

  return steps;
};

console.log("Part 1 answer:", part1(parseData()));