const parseData = () => 
  document.body.innerHTML
  .trim()
  .split(/\n\r?/g)
  .filter(x => x.length > 0 && x.indexOf('<script') === -1)
  .map(x => x.trim().replace("&gt;", ">").replace("&lt;", "<"))
  .map(line => 
    ( ([x, registry1, action, number1, _, registry2, condition, number2]) => 
    ({ registry1, action, number1: +number1, registry2, condition, number2: +number2 }))
    (line.match(/([a-z]+) ([a-z]+) ([-[0-9]+|-[0-9]+]) (\s*if\s*) ([a-z]+) (.+) ([-[0-9]+|-[0-9]+])/))
  );

const part1 = (input) => {
  let register = {}, currReg = null, x = null, largest = 0;

  for (var i = 0; i < input.length; i++) {
    x = input[i]; // store as temp
    if (register[x.registry1] === undefined) register[x.registry1] = 0; // set to 0
    if (register[x.registry2] === undefined) register[x.registry2] = 0; // set to 0
    
    // run
    switch(x.condition) {
      case "<=": if (register[x.registry2] <= x.number2){ x.action == "inc" ? (register[x.registry1] += x.number1) : (register[x.registry1] -= x.number1) } break;
      case "<": if (register[x.registry2] < x.number2){ x.action == "inc" ? (register[x.registry1] += x.number1) : (register[x.registry1] -= x.number1) } break;
      case ">=": if (register[x.registry2] >= x.number2){ x.action == "inc" ? (register[x.registry1] += x.number1) : (register[x.registry1] -= x.number1) } break;
      case ">": if (register[x.registry2] > x.number2){ x.action == "inc" ? (register[x.registry1] += x.number1) : (register[x.registry1] -= x.number1) } break;
      case "==": if (register[x.registry2] == x.number2){ x.action == "inc" ? (register[x.registry1] += x.number1) : (register[x.registry1] -= x.number1) } break;
      case "!=": if (register[x.registry2] != x.number2){ x.action == "inc" ? (register[x.registry1] += x.number1) : (register[x.registry1] -= x.number1) } break;
      default: break;
    }
  }
    
  // Find largest
  for (let key in register)
    if (register[key] > largest) largest = register[key];

  return largest;
}

console.log("Part 1 answer:", part1(parseData())); 