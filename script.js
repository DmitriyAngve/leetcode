// #1
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
Constraints:
    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists. 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/
/*
function Given an integer x, return true if x is a
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
(nums, target) {
  // Создаем пустой объект с именем numIndices для хранения чисел как ключей и их индексов как значений.
  const numIndices = {};

  // Начинаем цикл for для итерации через элементы массива nums.
  for (let i = 0; i < nums.length; i++) {
    // Получаем текущее число из массива nums.
    const num = nums[i];

    // Вычисляем комплемент, который представляет собой разницу между целью и текущим числом.
    const compement = target - num;

    // Проверяем, существует ли комплемент в объекте numIndices (хеш-таблица).
    if (compement in numIndices) {
      // Если существует, возвращаем массив, содержащий индекс комплемента и текущий индекс (i).
      return [numIndices[compement], i];
    }
    // Если комплемент не существует в объекте numIndices, добавляем текущее число и его индекс в объект.
    numIndices[num] = i;
  }

  // Если в цикле не найдено решение, возвращаем пустой массив, чтобы указать, что подходящие индексы не были найдены.
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));

*/

// #2
/*
Given an integer x, return true if x is a
palindrome, and false otherwise.
Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/
/*
var isPalindrome = function (x) {
  const arr = x.toString().split("");
  console.log(arr);

  const revArr = arr.slice().reverse();
  console.log(revArr);

  return arr.join("") === revArr.join("") ? true : false;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
*/

// #3
/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/
/*
var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = 0;

  for (let i = 0; i < s.length; i++) {
    const currentNum = roman[s[i]];
    const nextNum = roman[s[i + 1]];

    if (nextNum && currentNum < nextNum) {
      res -= currentNum;
    } else {
      res += currentNum;
    }
  }

  return res;
};

console.log(romanToInt("MCMXCIV"));
*/

// #4

/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/
/*
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  let longerstCommonPrefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    if (!char) return "";
    if (strs.every((str) => str[i] === char)) {
      longerstCommonPrefix += char;
    } else break;
  }
  return longerstCommonPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
*/

/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/
/*
var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
*/

//# 5
/*
Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
    toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
    notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
*/
/*
var expect = function (val) {
  return {
    toBe: function (exp) {
      if (val === exp) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (exp) {
      if (val !== exp) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};
*/

// #6
/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
The three functions are:
    increment() increases the current value by 1 and then returns it.
    decrement() reduces the current value by 1 and then returns it.
    reset() sets the current value to init and then returns it.
*/
/*
var createCounter = function (init) {
  let pres = init;
  function increment() {
    return ++pres;
  }
  function decrement() {
    return --pres;
  }
  function reset() {
    return (pres = init);
  }

  return { increment, decrement, reset };
};
*/
// BINARY SEARCH
// #1
/*
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.
Example 1:
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
Example 2:
Input: grid = [[3,2],[1,0]]
Output: 0
*/
/*
var countNegatives = function (grid) {
  const combinedArray = [].concat(...grid).sort((a, b) => a - b);
  console.log(combinedArray);
  let count = 0;
  for (let i = 0; i < combinedArray.length; i++) {
    if (combinedArray[i] < 0) {
      count++;
    }
  }
  return count;
};
*/
/*
var countNegatives = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;
  let row = 0;
  let col = cols - 1;

  while (row < rows && col >= 0) {
    if (grid[row][col] < 0) {
      count += rows - row;
      col--;
    } else {
      row++;
    }
  }
  return count;
};

*/ /*
var countNegatives = function (grid) {
  let count = 0;
  const cols = grid[0].length; // в этой переменной храним количество столбцов в матрице (длина первой строки в матрице)
  for (const row of grid) {
    // цикл, который итерируется по каждой строке матрицы (назовем их row)
    // указатели для бинарного поиска
    let left = 0; // начало строки
    let right = cols - 1; // конец строки
    // запускается цикл, который вычисляется пока левая часть или равна правой
    while (left <= right) {
      const mid = Math.floor((left + right) / 2); // средний индекс
      if (row[mid] < 0) {
        count += right - mid + 1;
        right = mid - 1;
      } else {
        left = mid + 1; // это чтобы продолжить поиск в левой части строки
      }
    }
    return count;
  }
};

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
*/

// #2
/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
*/
/*
var missingNumber = function (nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
};

console.log(missingNumber([3, 0, 1]));
*/

var missingNumber = function (nums) {
  const arr = nums.sort((a, b) => a - b);
  let left = 0;
  let rigth = nums.length - 1;
  while (left <= rigth) {
    const middle = Math.floor((left + rigth) / 2);
    if (arr[middle] == middle) {
      left = middle + 1;
    } else {
      rigth = middle - 1;
    }
  }
  return left;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
