/** product: calculate the product of an array of numbers. */

function product(nums, index = 0) {
  if (index === nums.length) return 1;
  return nums[index] * product(nums, index + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0) {
  if (index === words.length) return 0;
  return Math.max(words[index].length, longest(words, index + 1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0) {
  if (index === str.length) return "";
  return (index % 2 === 0 ? str[index] : "") + everyOther(str, index + 1);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, index = 0) {
  if (index === Math.floor((str.length - 1) / 2))
    return str[index] === str[str.length - index - 1];
  return (
    str[index] === str[str.length - index - 1] && isPalindrome(str, index + 1)
  );
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (index === arr.length) return -1;
  else if (arr[index] === val) return index;
  else return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, index = 0) {
  if (index === str.length) return "";
  return revString(str, index + 1) + str[index];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let res = [];

  function gatherHelper(obj) {
    for (let prop in obj) {
      if (typeof obj[prop] === "string") res.push(obj[prop]);
      else if (typeof obj[prop] === "object") gatherHelper(obj[prop]);
    }
  }

  gatherHelper(obj);
  return res;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  if (val > arr[arr.length - 1]) return -1;
  else if (val < arr[0]) return -1;
  else {
    let middle = Math.floor(arr.length / 2);
    if (arr[middle] === val) return middle;
    else if (arr[middle] < val)
      return middle + 1 + binarySearch(arr.slice(middle + 1, arr.length), val);
    else return binarySearch(arr.slice(0, middle), val);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
