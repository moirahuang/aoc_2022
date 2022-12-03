const readFileSync = require("fs").readFileSync;
var input = readFileSync("03/input.txt", {
  encoding: "utf8",
  flag: "r",
}).trim();

let rucksack = input.split("\n");

function part1(leftHalf, rightHalf) {
  let a = leftHalf.split("");
  let b = rightHalf.split("");
  const intersect = a.filter((value) => b.includes(value))[0];
  if (
    "a".charCodeAt(0) <= String(intersect).charCodeAt(0) &&
    String(intersect).charCodeAt(0) <= "z".charCodeAt(0)
  ) {
    return String(intersect).charCodeAt(0) - "a".charCodeAt(0) + 1;
  } else {
    return String(intersect).charCodeAt(0) - "A".charCodeAt(0) + 1 + 26;
  }
}

const totalScore = rucksack.map((line) => {
  let half = Math.floor(line.length / 2);
  const leftHalf = line.slice(0, half);
  const rightHalf = line.slice(half, line.length);
  return part1(leftHalf, rightHalf);
});

function part2(first, second, third) {
  let a = first.split("");
  let b = second.split("");
  let c = third.split("");
  const aBIntersect = a.filter((value) => b.includes(value));
  const intersect = aBIntersect.filter((value) => c.includes(value))[0];
  if (
    "a".charCodeAt(0) <= String(intersect).charCodeAt(0) &&
    String(intersect).charCodeAt(0) <= "z".charCodeAt(0)
  ) {
    return String(intersect).charCodeAt(0) - "a".charCodeAt(0) + 1;
  } else {
    return String(intersect).charCodeAt(0) - "A".charCodeAt(0) + 1 + 26;
  }
}

const groups = [];
for (let i = 0; i < rucksack.length; i += 3) {
  const group = rucksack.slice(i, i + 3);
  groups.push(group);
}

const groupScore = groups.map((group) => {
  return part2(group[0], group[1], group[2]);
});

console.log(groupScore.reduce((a, b) => a + b, 0));
