const sortLetters = x => x.split('').sort().join('');
const part2 = input.length - input.map(x => x.map(sortLetters)).filter(countDuplicates).length;

console.log("Part 2 answer:", part2);