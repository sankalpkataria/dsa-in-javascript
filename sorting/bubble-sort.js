function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

/**
 * @name bubbleSort
 * @param {number[]} arr Input array
 * @description Sort the given array using the bubble sort
 * @summary For each iteration, compare the element with each subsequent element on right and 
 *      check if the element on left is greater than the element on right,
 *      If element on right is greater, Swap
 * 
 * 		It is called bubble sort because elements bubble up in their correct order with each iteration
 * @Time complexity: - O(n^2)
 * @returns {number[]} Sorted array
 */
function bubbleSort(arr) {
	var arrLen = arr.length;
	for (var i = 0; i < arrLen; i++) {
		for (var j = 0; j < arrLen-i-1; j++) {
			if (arr[j] > arr[j+1]) {
				swap(arr, j, j+1);
			}
		}
	}
	return arr;
}