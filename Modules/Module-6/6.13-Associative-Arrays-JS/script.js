function calcWordFrequencies() {
  let arr = new Object();
  arr = {};
  arr = prompt("Enter your words").split(" ");
  let final = createWordMap(arr);
  console.log(final);
}

function createWordMap (wordsArray) {

  var wordsMap = {};

  wordsArray.forEach(function (key) {
    if (wordsMap.hasOwnProperty(key)) {
      wordsMap[key]++;
    } else {
      wordsMap[key] = 1;
    }
  });

  return wordsMap;
}
