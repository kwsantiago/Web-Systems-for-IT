function calcWordFrequencies() {
  let arr = null;
  arr = [];
  arr = prompt("Enter your words").split(" ");
  let med = createWordMap(arr);
  for(var i = 0; i < arr.length; i++){
      let tmp = arr[i];
    console.log(tmp + " " + med[arr[i]]);
  }
}

function createWordMap (wordsArray) {

  var wordsMap = {};

  wordsArray.forEach(function (key) {
    if(wordsMap.hasOwnProperty(key)){
      wordsMap[key]++;
    } else {
      wordsMap[key] = 1;
    }
  });

  return wordsMap;
}
