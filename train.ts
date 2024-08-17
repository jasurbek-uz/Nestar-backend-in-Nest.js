
function printNumbers() {
	for (let number = 1; number <= 5; number++) {
		setTimeout(
			() => {
				console.log(number);
			},
			(number - 1) * 1000,
		);
	}
}

printNumbers();











/* 
ZJ-TASK:

Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8
*/

// function sumArray(arr) {
//   return arr.flat(Infinity).reduce((sum, num) => sum + num, 0);
// }

// console.log(sumArray([1, [1, 2, [4]]]));