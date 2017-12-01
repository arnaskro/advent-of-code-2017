function part2() {
  let data = document.body.innerText.trim().split('');  // Get all the data and split it into array
  let sum = 0;  // Initialize the variable were we will sum up the digits
  
  let secondIndex = 0;  // Variable to store the position of the 2nd index
  
  // Loop through all the digits
  for (let i = 0; i < data.length; i++) {
    secondIndex = data.length / 2 + i; // go half way through the lsit
    if (secondIndex > data.length) secondIndex = secondIndex - data.length; // Make it circular
    
    if (data[i] == data[secondIndex]) // Check if matches the digit
      sum += parseInt(data[i]); // Sum the digits
  }

  return sum;
}

console.log("Part 2 answer:", part2()); // Print the answer