// sorry for the mess, I tried to solve this quickly
const parseData = () => document.body.innerHTML.trim().split(/\n\r?/g).filter(x => x.length > 0 && x.indexOf('<') === -1).map(x => x.trim().split(/\D+/).map(x => parseInt(x)));
const max = (max, val) => max < val ? val : max;
const min = (min, val) => min > val ? val : min;
const diff = (arr) => arr.reduce(max) - arr.reduce(min);
const add = (a, b) => a + b;
const part1 = () => parseData().map(diff).reduce(add);

console.log("Part 1 answer:", part1());