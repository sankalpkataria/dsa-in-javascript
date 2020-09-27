/**
 * @name bubbleSort
 * @param {number[]} arr Input array
 * @description Sort the given array using the bubble sort.
 * @summary This covers the cases where the given array is completely or partially sorted
 * 		For each iteration, compare the element with each subsequent element on right and 
 *      check if the element on left is greater than the element on right,
 *      If element on right is greater, Swap
 * 
 * 		If for any iteration, we do not do any swap that means that the array is sorted at this point
 * 		hence we use a flag to check this and break our loop if no swap occurred
 * @Time complexity: - O(n^2)
 * @returns {number[]} Sorted array
 */
function bubbleSort(arr) {
	var arrLen = arr.length;
	for (var i = 0; i < arrLen; i++) {
		let noSwap = true;
		for (var j = 0; j < arrLen-1-i; j++) {
			if (arr[j] > arr[j+1]) {
				// swap
				[arr[j+1], arr[j]] = [arr[j], arr[j+1]];
				noSwap = false;
			}
		}

		if (noSwap) break;
	}
	return arr;
}