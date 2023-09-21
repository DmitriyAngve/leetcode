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
function twoSum(nums, target) {
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
