const parseData = () => document.body.innerText.split(/\D+/).map(x => parseInt(x));

// find largest block
const findIndexOfLargest = (list) => {
  let indexOfLargest = 0;

  for (let i = 0; i < list.length; i++)
    if (list[i] > list[indexOfLargest])
      indexOfLargest = i;

  return indexOfLargest;
}

// check history for duplicates
const noDuplicateInHistory = (history, list) => history[list] !== true;

// redistribute
const redistribute = (input, index) => {
  let tempBank = input[index];
  input[index] = 0;

  while (tempBank > 0) {
    if (++index >= input.length) index = 0;
    input[index] += 1; 
    tempBank--;
  }

  return input;
}

// loop and count cycles
const part1 = (input) => {
  let cycles = 0;
  let history = {}; // Switched to use a hash instead of an array for faster checking
  let index = 0;

  while (noDuplicateInHistory(history, input.join(' '))) {
    cycles++;
    history[input.join(' ')] = true;
    index = findIndexOfLargest(input);
    input = redistribute(input, index);
  }

  return cycles;
};


console.log("Part 1 answer:", part1(parseData()));