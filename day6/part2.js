const part2 = (input) => {
  let cycles = 0;
  let history = {}; 
  let index = 0;

  while (history[input.join(' ')] === undefined) {
    history[input.join(' ')] = cycles;
    index = findIndexOfLargest(input);
    input = redistribute(input, index);
    cycles++;
  }

  return cycles - history[input.join(' ')];
};


console.log("Part 2 answer:", part2(parseData())); // 8038