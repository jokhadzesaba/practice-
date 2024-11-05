const str = "hello 1234";
const str1 = "world 12 ";

function merge(str, str1) {
  let mergedString = "";
  if (str.length > str1.length) {
    for (let i = 0; i < str1.length; i++) {
      mergedString += str.charAt(i);
      mergedString += str1.charAt(i);
    }
    mergedString += str.slice(str1.length, str.length);
  } else if (str.length < str1.length) {
    for (let i = 0; i < str.length; i++) {
      mergedString += str.charAt(i);
      mergedString += str1.charAt(i);
    }
    mergedString += str1.slice(str.length, str1.length);
  } else {
    for (let i = 0; i < str.length; i++) {
      mergedString += str.charAt(i);
      mergedString += str1.charAt(i);
    }
  }
  return mergedString;
}
console.log(merge(str, str1));
