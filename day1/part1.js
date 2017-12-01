function part1() {
  let data = document.body.innerText.trim().split('');  // Get all the data and split it into array
  data.push(data[0]);  // Copy and append the first character to the end of the array since the list is circular
  let sum = 0;  // Initialize the variable were we will sum up the digits

  for (let i = 0; i < data.length - 1; i++) // Loop through all digits, but exluce looking at the last digit
    if (data[i] == data[i+1]) // Check if the next digit is the same as we are currently looking at
      sum += parseInt(data[i]); // Sum the digits

  return sum;
}

console.log("Part 1 answer:", part1()); // Print the answer