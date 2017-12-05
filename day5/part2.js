const part2 = (input) => {
  let steps = index = value = 0;

  while (index < input.length) {
    steps++;
    value = input[index];
    input[index] += value >= 3 ? -1 : 1;
    index += value;
  }

  return steps;
};

console.log("Part 2 answer:", part2(parseData()));