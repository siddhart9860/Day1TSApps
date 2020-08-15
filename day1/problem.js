var text =
  "TypeScrtipt is a front-end language that is an alternative to JavaSCript. This improves the JavaScript productivity. the typescript helps to use OOPs pattern for front-end development.";
// #1
console.log("#1");
var res = "";
for (var _i = 0, _a = text.split("."); _i < _a.length; _i++) {
  var line = _a[_i];
  if (line.trim().length != 0)
    res +=
      line.trim().substr(0, 1).toUpperCase() +
      line.trim().substr(1, line.length) +
      ". ";
}
console.log(res);
// #2
var aOccurences = text
  .trim()
  .split("")
  .filter(function (x, y) {
    return x == "a";
  }).length;
console.log('#2 No. of occurences of Character "a" --> ' + aOccurences);
var isOccurences = text
  .trim()
  .split(" ")
  .filter(function (x, y) {
    return x === "is";
  }).length;
console.log('#2 No. of occurences of word "is" --> ' + isOccurences);
// #3
console.log("#3");
var res3 = "";
for (var _b = 0, _c = text.split(" "); _b < _c.length; _b++) {
  var word = _c[_b];
  if (word.trim().length != 0)
    res3 +=
      word.trim().substr(0, 1).toUpperCase() +
      word.trim().substr(1, word.length) +
      " ";
}
console.log(res3);
