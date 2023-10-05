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
/*
var missingNumber = function (nums) {
  const arr = nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] === middle) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return left;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
*/

// #3

/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
*/
/*
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      return middle;
    }

    if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
*/

// #4
/*
Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.
    In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
Note that 0 is neither positive nor negative.
*/
/*
var maximumCount = function (nums) {
  return Math.max(upper(nums), lower(nums));
};

// binary
function upper(nums) {
  if (nums[0] >= 0) return 0;
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.ceil((left + right) / 2);
    if (nums[mid] < 0) left = mid;
    else right = mid - 1;
  }
  return left + 1;
}

function lower(nums) {
  if (nums[nums.length - 1] <= 0) return 0;
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > 0) right = mid;
    else left = mid + 1;
  }
  return nums.length - left;
}

console.log(maximumCount([5, 20, 66, 1314]));
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));
console.log(maximumCount([-2, -1, -1, 1, 2, 3]));
*/

// #5
/*
You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.
Example 1:

Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

Example 2:

Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

Example 3:

Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].

*/
/*
var nextGreatestLetter = function (letters, target) {
  if (letters[0] > target || target >= letters[letters.length - 1]) {
    return letters[0];
  }

  let left = 0;
  let right = letters.length - 1;

  while (left < right) {
    const middle = Math.floor((right + left) / 2);

    if (letters[middle] <= target) {
      left = middle + 1;
    } else if (letters[middle] > target) {
      right = middle;
    }
  }
  return letters[left];
};

console.log(nextGreatestLetter(["c", "f", "j"], "a"));
console.log(nextGreatestLetter(["c", "f", "j"], "c"));
console.log(nextGreatestLetter(["x", "x", "y", "y"], "z"));
*/

// #6
/*
You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.
*/
/*
function binarySearch(lists, sorted, low, high, target) {
  if (low > high) return; // базовый случай рекурсии

  const mid = low + Math.floor((high - low) / 2); // середина списка

  if (sorted[mid] === target) {
    lists.push(mid);
  } // проверяем, если значение target равно mid, то пушим в массив

  binarySearch(lists, sorted, low, mid - 1, target); // это рекурсивный вызов ф-ии, в этом случае high = mid - 1 (что означает половине диапазона в левой стороне)
  binarySearch(lists, sorted, mid + 1, high, target); // это второй вызов с low = mid + 1 (это означает половину диапазона в правой стороне)
}

var targetIndices = function (nums, target) {
  let result = [];
  nums.sort((a, b) => a - b);
  if (!nums.includes(target)) return [];

  binarySearch(result, nums, 0, nums.length - 1, target); // вызываем функцию в отсортированном массиве. Начальный диапазон поиска = 0, до индекса = num.length - 1
  return result.sort((a, b) => a - b);
};

console.log(targetIndices([1, 2, 5, 2, 3], 2));
console.log(targetIndices([1, 2, 5, 2, 3], 3));
console.log(targetIndices([1, 2, 5, 2, 3], 5));
*/

// #7
/*
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.
*/
/*
var findKthPositive = function (arr, k) {
  let num = 1;
  let index = 0;

  // цикл будет выполняться пока k больше 0. Этот цикл будет продолжаться до тех пор, пока не будет найдено k-ое отсутсвующее число в числовом ряде положительных чисел
  while (k > 0) {
    // Внутри цикла проверяем, если значение в массиве arr по текущему индексу (arr[index]) равно num, то index увеличивается (что означает переход к следующему элементу в массиве). В противном случае "k" уменьшается на 1, так как одно пропущенное число уже найдено
    arr[index] === num ? index++ : k--;
    // На следующей итерации цикла увеличиваем значение num на 1, чтобы проверить следующее положительное число
    num++;
  }

  // После завершения цикла возвращаем значение num-1, так как num указывает на (k+1)-ое отсутствующее положительное число
  return num - 1;
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
console.log(findKthPositive([1, 2, 3, 4], 2));
*/

// #8
/*
35. Search Insert Position
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
*/
/*
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      return middle;
    }

    if (nums[middle] < target) {
      left = middle + 1;
    }

    if (nums[middle] > target) {
      right = middle - 1;
    }
  }

  return left;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
*/

// #9
/*
You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.
A row i is weaker than a row j if one of the following is true:

    The number of soldiers in row i is less than the number of soldiers in row j.
    Both rows have the same number of soldiers and i < j.
Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.
Example 1:
Input: mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3
Output: [2,0,3]
Explanation: 
The number of soldiers in each row is: 
- Row 0: 2 
- Row 1: 4 
- Row 2: 1 
- Row 3: 2 
- Row 4: 5 
The rows ordered from weakest to strongest are [2,0,3,1,4].
*/
/*
var kWeakestRows = function (mat, k) {
  const getPower = (row) => {
    let res = 0;
    for (const num of row) {
      if (num === 0) {
        return res;
      }
      res++;
    }
    return res;
  };
  let resRows = {};
  mat.forEach((row, idx) => {
    resRows[idx] = getPower(row);
  });
  return Object.keys(resRows)
    .sort((a, b) => resRows[a] - resRows[b])
    .slice(0, k);
};

console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3
  )
);
*/

// 905 Sort Array By Parity
/*
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
Return any array that satisfies this condition.
Example 1:
Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
Example 2:
Input: nums = [0]
Output: [0]
*/
/*
// SOLUTION 1
var sortArrayByParity = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    while (left < right && nums[left] % 2 === 0) {
      left++; // Найдено четное число, двигаемся вправо
    }

    while (left < right && nums[right] % 2 === 1) {
      right--; // Найдено нечетное число, двигаемся влево
    }

    if (left < right) {
      // Меняем местами четное и нечетное число
      [nums[left], nums[right]] = [nums[right], nums[left]];
    }
  }

  return nums;
};


*/
/*
// SOLUTION 2
var sortArrayByParity = function (nums) {
  // Инициализация указателей left и right.
  let left = 0;
  let right = nums.length - 1;
  // Вход в цикл, который будет выполняться, пока left < right.
  while (left < right) {
    // Проверка, является ли элемент на позиции left четным.
    if (nums[left] % 2 == 0) {
      left += 1; // Если четный, сдвигаем left вправо.
    } else {
      // Если элемент на позиции left нечетный:
      // Проверяем, является ли элемент на позиции right четным.
      if (nums[right] % 2 === 0) {
        // Если правый элемент четный, меняем их местами.
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left += 1; // Сдвигаем left вправо.
        right -= 1; // Сдвигаем right влево.
      } else {
        // Если правый элемент тоже нечетный:
        while (right > left && nums[right] % 2 == 1) {
          right -= 1; // Ищем ближайший четный элемент, двигая right влево.
        }
      }
    }
  }
  // Выход из цикла. Массив разделен на четные и нечетные числа.
  // Отсортированный массив nums возвращается.
  return nums;
};

console.log(sortArrayByParity([3, 1, 2, 4]));
*/

//
/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
Example 1:
Input: nums = [2,2,1]
Output: 1
Example 2:
Input: nums = [4,1,2,1,2]
Output: 4
Example 3:
Input: nums = [1]
Output: 1
*/
/*
var singleNumber = function (nums) {
  const ht = {};

  for (const num of nums) {
    ht[num] = ht[num] + 1 || 1;
  }
  console.log(ht);

  for (const key in ht) {
    if (ht[key] === 1) {
      return key;
    }
  }
};
*/
/*
var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let duplicate = false;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        // в этом условии проверяю, что индекс i не равен индексу j. Далее проверяю, что элементы nums[i] и nums[j] равны
        duplicate = true;
        break;
      }
    }
    if (!duplicate) {
      return nums[i];
    }
  }
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([2, 2, 3, 3, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
*/

// 05.10.2023

// #1
/*
Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

Example 1:

Input: nums = [0,2,1,5,3,4]
Output: [0,1,2,4,5,3]
Explanation: The array ans is built as follows: 
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
    = [0,1,2,4,5,3]
*/
var buildArray = function (nums) {
  const result = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    result[i] = nums[nums[i]];
    // nums = [0, 2, 1, 5, 3, 4]
    // result[i] = nums[nums[i]]
    // result[0] = nums[nums[0] = 0] = 0
    // result[1] = nums[nums[1] = 2] = 1
    // result[2] = nums[nums[2] = 1] = 2
    // result[3] = nums[nums[3] = 5] = 4
    // result[4] = nums[nums[4] = 3] = 5
    // result[5] = nums[nums[5] = 4] = 3
  }
  return result;
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));
