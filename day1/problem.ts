let text =
  "TypeScrtipt is a front-end language that is an alternative to JavaSCript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.";

// #1
console.log("#1");

let res = "";

for (let line of text.split(".")) {
  if (line.trim().length != 0)
    res +=
      line.trim().substr(0, 1).toUpperCase() +
      line.trim().substr(1, line.length) +
      ". ";
}

console.log(res);

// #2
let aOccurences = text
  .trim()
  .split("")
  .filter((x, y) => x == "a").length;

console.log(`#2 No. of occurences of Character "a" --> ${aOccurences}`);

let isOccurences = text
  .trim()
  .split(" ")
  .filter((x, y) => x === "is").length;

console.log(`#2 No. of occurences of word "is" --> ${isOccurences}`);

// #3
console.log("#3");
let res3 = "";

for (let word of text.split(" ")) {
  if (word.trim().length != 0)
    res3 +=
      word.trim().substr(0, 1).toUpperCase() +
      word.trim().substr(1, word.length) +
      " ";
}

console.log(res3);

// Output:
// #1
// TypeScrtipt is a front-end language that is an alternative to JavaSCript. This improves the JavaScript productivity. The typescript helps to use OOPs patternern for front-end development.
// #2 No. of occurences of Character "a" --> 12
// #2 No. of occurences of word "is" --> 2
// #3
// TypeScrtipt Is A Front-end Language That Is An Alternative To JavaSCript. This Improves The JavaScript Productivity. The Typescript Helps To Use OOPs Patternern For Front-end Development.
