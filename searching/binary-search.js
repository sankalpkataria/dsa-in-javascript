/**
 * @name binarySearch
 * @description Find the position of given element in given array.
 * @param {number[]} array Input sorted array
 * @param {number} num Number to search
 * @prerequisite Array should be sorted
 * @summary Find the middle position of array and 
 *      check if it matches the given number
 *      If it matches, return the middle position.
 *      If it does not, check if the given number is greater or less than the number at middle position
 *      If it is less, repeat above steps for left sub array
 *      else repeat for right sub array
 *      If none of the elements matches, return -1
 * @Time complexity: - O(log(n))
 * @Space complexity: - O(1)
 * @tags Divide & conquer
 * @returns {number} Position in array or -1
 */
function binarySearch(array, num) {
	if (!array.length) {
		return -1;
	}
	let start = 0, end = array.length - 1, mid;
	while(start <= end) {
		mid = Math.floor((end + start) / 2);
		if (array[mid] > num) {
			end = mid - 1;
		} else if (array[mid] < num) {
			start = mid + 1;
		} else {
			return mid;
		}
	}
	return -1;
}