const input = parseInt(document.body.innerText);

// Improved version
function part1(input) {
  let n = 1;
  while ((n*2-1)**2 < input) n += 1;
  return (n*2-1)**2 - input;
}

// function part1(n) {
//   let res = steps = turns = length = 0;
//   // While we haven't reached the input
//   while (steps < n - 1) { 
//     // Count the length
//     length = ~~(turns / 2);    
//     for (let i = 0; i < length; i++) {
//       // Check if we reached the end
//       if (steps == n - 1) break;
//       // Count steps only if we havent reached the end
//       steps++;
//       // Walk around, only in four directions...
//       turns % 4 < 2 ? res++ : res--;
//     }
//     // Increase turns
//     turns++;
//   }
//   // Count how many times we stepped on the x and y axis before reaching the input
//   return res;
// }

console.log("Part 1 answer:", part1(input));