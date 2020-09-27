/**
 * @name insertionSort
 * @param {number[]} arr Input array
 * @description Sort the given array using the insertion sort.
 * @summary We start from 2nd element and compare to the elements on left.
 * 		While the current value is smaller than the element on left,
 * 		decrement the counter.
 * 		Insert the current element on new counter position.
 * 
 * 		It is called insertion sort because we insert each element on its correct position.
 * 
 * 		Insertion sort is useful for sorting stream of data.
 * @Time complexity: - O(n^2)
 * @returns {number[]} Sorted array
 */
function insertionSort(arr) {
	for (var i = 1; i < arr.length; i++) {
		var currentVal = arr[i];
		var j = i-1;
		while(j>=0 && arr[j] > currentVal) {
			arr[j+1] = arr[j];
			j--;
		}
		arr[j+1] = currentVal;
	}
	return arr;
}