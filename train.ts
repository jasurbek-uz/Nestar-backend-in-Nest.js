/* 
ZJ-TASK:

Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8
*/

function sumArray(arr) {
  return arr.flat(Infinity).reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, [1, 2, [4]]]));