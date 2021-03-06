/**
 * @name selectionSort
 * @description Sort the given array using the selection sort.
 * @param {number[]} arr Input array
 * @summary For each iteration, choose a minimum element and 
 * 		compare it with each subsequent element on right and
 * 		if the element is smaller than the minimum element, 
 * 		replace our minimum with it.
 * 		Now at last, swap the initial element with minimum one.
 * 
 * 		It is called selection sort because for each iteration,
 * 		we select the smallest element and put it on its correct position.
 * @Time complexity: - O(n^2)
 * @Space complexity: - O(1)
 * @returns {number[]} Sorted array
 */
function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let minIndex = i;
		for (let j = i+1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		// swap
		[arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
	}
	return arr;
}