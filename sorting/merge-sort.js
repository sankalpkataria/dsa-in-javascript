/**
 * @name merge
 * @description Merge two sorted arrays
 * @param {number[]} arr1 sorted array 1
 * @param {number[]} arr2 sorted array 2
 * @Time complexity: - O(n)
 * @returns {number[]} Sorted array
 */
function merge(arr1, arr2) {
    const sortedArr = [];
    let i = 0, j = 0;
    const arr1Len = arr1.length
    const arr2Len = arr2.length
    while(i < arr1Len && j < arr2Len) {
        if (arr1[i] < arr2[j]) {
            sortedArr.push(arr1[i]);
            i++;
        } else {
            sortedArr.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1Len){
        sortedArr.push(arr1[i]);
        i++;
    }
    
    while(j<arr2Len){
        sortedArr.push(arr2[j]);
        j++;
    }
    return sortedArr;
}

/**
 * @name mergeSort
 * @description Sort the given array using the mergeSort sort.
 * @param {number[]} arr Input array
 * @summary The idea is to divide the given array into smaller ones, 
 *      then sort those smaller arrays and merge them
 *      
 *      Start with finding the middle position of the given array
 *      then call the same function recursively with the right half and
 *      again with the left half to divide them further
 *      
 *      Once the arrays cannot be divided further,
 *      merge the sub arrays in sorted manner
 * @Time complexity: - O(n(log(n)))
 * @returns {number[]} Sorted array
 */
function mergeSort(arr) {
    const arrLen = arr.length;
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arrLen / 2);
    // divide left sub array
    const left = mergeSort(arr.slice(0, mid));
    // divide right sub array
    const right = mergeSort(arr.slice(mid));
    // merge both right and left sub arrays in sorted manner
    return merge(left, right);
}