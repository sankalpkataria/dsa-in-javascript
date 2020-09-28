/**
 * @name linearSearch
 * @description Find the position of given element in given array.
 * @param {number[]} array Input array
 * @param {number} num Number to search
 * @summary Loop through each element of array and 
 *     check if it matches the given number
 *     If it matches, return its position in array.
 *     If none of the elements matches, return -1
 * @Time complexity: - O(n)
 * @returns {number} Position in array or -1
 */
function linearSearch(array, num) {
	if (!array.length) {
		return -1;
	}
	for (let i = 0; i < array.length; i++) {
		if (array[i] === num) {
			return i;
		}
	}
	return -1;
}