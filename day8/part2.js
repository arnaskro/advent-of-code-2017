
const part2 = (input) => {
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

    if (register[x.registry1] > largest)
      largest = register[x.registry1];
  }

  return largest;
}

console.log("Part 2 answer:", part2(parseData())); 