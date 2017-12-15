const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'utf8');

const part1 = (data) => {
  let waiting = score = 0, garbage = false;

  for (let i = 0; i < data.length; i++) {
    switch (data[i]) {
      case '{': if (!garbage) score += ++waiting; break;
      case '}': if (!garbage) waiting--; break;
      case '<': garbage = true; break;
      case '>': garbage = false; break;
      case '!': i++; break;
      default: break;
    }
  }
  
  return score;
}

console.log(part1(data)); 