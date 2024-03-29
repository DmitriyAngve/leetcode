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

/*
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
*/

// #2
/*
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
*/
/*
var getConcatenation = function (nums) {
  let ans = new Array(nums.length * 2);
  let len = nums.length;
  console.log(ans);
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[i];
    ans[i + len] = nums[i];
  }
  return ans;

  // return [...nums, ...nums]
};

console.log(getConcatenation([1, 2, 1]));
console.log(getConcatenation([1, 3, 2, 1]));
*/

// #3
/*
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

*/
/*
var numIdenticalPairs = function (nums) {
  let hash = {};
  let count = 0;
  for (const num of nums) {
    if (hash[num]) {
      // проверяю, существует ли в объекте hash ключ с таким числом.
      count += hash[num]; // Если существует, то увеличиваю счётчик на значение, которое уже хранится в hash. Это происходит, потому что каждый раз, когда я встречаю число, которое уже встречалось, то создаётся "хорошая пара" с каждой из предыдущих встреч этого числа.
      hash[num] += 1; // Затем увеличиваю значение hash[num] на 1
    } else {
      hash[num] = 1; // Это для первого вхождения числа. Создается ключ num и устанавливается в значение 1
    }
  }
  return count;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
// первый элемент = 1 => {1: 1} count = 0 (нет пары)
// второй элемент = 2 => {1: 1, 2: 1} count = 0 (нет пары)
// третий элемент = 3 => {1: 1, 2: 1, 3: 1} count = 0 (нет пары)
// четвертый элемент = 1 => {1: 2, 2: 1, 3: 1} count = 1 (пара у элементов с индексами 0-3)
// пятый элемент = 1 => {1: 3, 2: 1, 3: 1} count = 3 (пара у элементов с индексами 0-3, 0-4)
// шестой элемент = 3 {1: 3, 2: 1, 3: 2} count = 4 (пары у элементов с индексами 0-3, 0-4 и 2-5)

console.log(numIdenticalPairs([1, 1, 1, 1]));
console.log(numIdenticalPairs([1, 2, 3]));
*/

// #4
/*
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

Example 1:

Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
*/
/*
var shuffle = function (nums, n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }
  return result;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
console.log(shuffle([1, 1, 2, 2], 2));
*/

// #5
/*
There is a programming language with only four operations and one variable X:

    ++X and X++ increments the value of the variable X by 1.
    --X and X-- decrements the value of the variable X by 1.

Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

Example 1:

Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.
*/
/*
var finalValueAfterOperations = function (operations) {
  // return operations.reduce((acc, curr) => (curr[1] === "+" ? ++acc : --acc), 0);

  let count = 0;
  for (let i of operations) {
    if (i === "X++" || i === "++X") {
      count++;
    } else {
      count--;
    }
  }
  return count;
};

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
*/

// 06.12.2023

// #1
/*
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
The fn function takes one or two arguments:
    arr[i] - number from the arr
    i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
Please solve it without the built-in Array.filter method.
Example 1:
Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
*/
// FIRST
/*
var filter = function (arr, fn) {
  return arr.reduce(
    (res, el, index) => (fn(el, index) && res.push(el), res),
    []
  );
};

*/

// SECOND
/*
var filter = function (arr, fn) {
  let filterArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filterArr.push(arr[i]);
    }
  }
  return filterArr;
};
*/

// #2
/*
Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.
If the length of the array is 0, it should return init.
Please solve it without using the built-in Array.reduce method.
Example 1:
Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10
Explanation:
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.
*/
/*
var reduce = (nums, fn, init) => {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }

  return val;
};
*/

// #3
/*
Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
The function composition of an empty list of functions is the identity function f(x) = x.
You may assume each function in the array accepts one integer as input and returns one integer as output.
Example 1:
Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
*/
// FIRST
/*
var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((res, fun) => fun(res), x);
  };
};
*/

/*
// SECOND
var compose = (funcList) => (init) =>
  funcList.reduceRight((res, func) => func(res), init);
*/

// 07.12.2023

// #1
/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string.
Example 1:
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Example 2:
Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

Example 3:
Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
*/
/*
// FIRST
var mergeAlternately = function (word1, word2) {
  let result = "";
  let arr1 = word1.split("");
  let arr2 = word2.split("");

  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      result += arr1[i] + arr2[i];
    }
    return result;
  }

  if (arr1.length > arr2.length) {
    for (let i = 0; i < arr2.length; i++) {
      result += arr1[i] + arr2[i];
    }
    result += arr1.slice(arr2.length).join("");
    return result;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      result += arr1[i] + arr2[i];
    }
    result += arr2.slice(arr1.length).join("");
    return result;
  }
};
*/
/*
// SECOND
var mergeAlternately = function (word1, word2) {
  let merge = "";
  // Нахожу миинмальную длину, для гарантий, что итерация будет идти по короткой строке
  const min = Math.min(word1.length, word2.length);
  // "i" инициализирую снаружи цикла, чтобы можно было к ней обращаться в последующих "ifesle"
  let i;
  for (i = 0; i < min; i++) {
    // Конкатенация к строке "merge" символа на позиции "i" из "word1"
    merge += word1.charAt(i);
    // Конкатенация к строке "merge" символа на позиции "i" из "word2"
    merge += word2.charAt(i);
  }

  // После цикла проверяю, остались ли еще неприсоединенные символы в "word1" или "word2"
  if (min < word1.length) {
    // если "min" меньше, чем "word1.length", то складываю уже готовый после цикла "merge" с подстрокой, начиная с индекса "i"
    merge += word1.substring(i);
  } else if (min < word2.length) {
    merge += word2.substring(i);
  }

  return merge;
};

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));
*/

// #2
/*
For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
*/
/*
var gcdOfStrings = function (str1, str2) {
  // Проверяю строки, если условие не выполняется, то это значит, что строки не имеют общего префикса и не могут быть делителями друг друга
  if (str1 + str2 !== str2 + str1) return "";

  // Инициализирую функцию НОД, она находит наибольший общий делитель для двух чисел. В моем случае числами будут длины строк. Функция использует рукурсивный метод Евклида.
  const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
  // Подробное объяснение метода Евклида: с помощью тернарного оператора проверяется "0 === b" (равен ли "b" нулю). Если "b" равен нулю, то возвращается значение "a". Если не равен, то рекурсивно вызывается та же функция "gcd" с аргументами "b, a % b". Смысл заключается в том, что ф-ия заменяет большее число на остаток от деления на меньшее число и продолжает этот процесс до тех пор, пока одно из чисел не станет равным 0. Когда это произойдет - второе число становится НОД

  // Возвращаю подстроку с помощью функции НОД
  return str1.substring(0, gcd(str1.length, str2.length));
};

console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("LEET", "CODE"));
*/

// 11.12.2023
/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
*/
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length && n !== 0; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1
    ) {
      n--;
      i++;
    }
  }
  return n === 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
