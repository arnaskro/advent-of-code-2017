const input = document.body.innerHTML.trim().split(/\n\r?/g).filter(x => x.length > 0 && x.indexOf('<') === -1).map(x => x.trim().split(" "));
const countDuplicates = a => a.filter((x, i) => a.indexOf(x) !== i).length > 0;
const part1 = input.length - input.filter(countDuplicates).length;

console.log("Part 1 answer:", part1);