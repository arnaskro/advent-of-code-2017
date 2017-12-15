const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'utf8');

const solve = (data) => {
  let chars = 0, garbage = false;

  for (let i = 0; i < data.length; i++) {
    switch (data[i]) {
      case '<': garbage ? chars++ : garbage = true; break;
      case '>': garbage = false; break;
      case '!': i++; break;
      default: if (garbage) chars++; break;
    }
  }
  
  return chars;
}

console.log(solve(data)); // 7298