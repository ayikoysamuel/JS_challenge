//task #1
function categorizeArray(arr) {
    let result = {
        even: [],
        odd: [],
        chars: []
    };
    for (let item of arr){
        if (typeof item === 'number'){
            if (item % 2 === 0) {
                result.even.push(item);
            }
            else{
                result.odd.push(item);
            }  
        }
        else if (typeof item === 'string') {
            result.chars.push(item);
        }
    }
    // Customsort for eve, odd, chars
    result.even = customSort(result.even);
    result.odd = customSort(result.odd);
    result.chars = customSort(result.chars);
    return result;
}

function customSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
// test
console.log(categorizeArray([1, 2, 3, 'a', 'b', 4, 5, 'c'])); // output: { even: [ 2, 4 ], odd: [ 1, 3, 5 ], chars: [ 'a', 'b', 'c' ] }
console.log(categorizeArray([1, 2, 3, 4, 5])); // output: { even: [ 2, 4 ], odd: [ 1, 3, 5 ], chars: [] }


//task #2
// function to check if the array contains a dip
function containsDip(nums){
    let dip = new Set(); 
    for (let num of nums) {
        if (dip.has(num)){
            return true;
        }
        dip.add(num);
    }
    return false;
}

// test
console.log(containsDip([1, 2, 3, 4, 5])); // output: false
console.log(containsDip([1, 2, 3, 4, 5, 1])); // output: true

//task #3 majorityElement
function majjorityCharacter(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};

// test case
console.log(majjorityCharacter([2, 2, 1, 1, 1, 2, 2])); // output: 2
console.log(majjorityCharacter([3, 2, 3])); // output: 3

//task #4 none empty array
function singleNumber(nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num;
    }
    return result;
}
//test
console.log(singleNumber([7, 1, 2, 1, 2])); // output: 7
console.log(singleNumber([2, 2, 5])); // output: 5

//task #4 // checking if the number is a dip
function checkDip(nums){
    let seen = new set();

    for (let num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}
console.log(checkDip([1,2,2,3,4]))
console.log(checkDip([1,2,3,4]))


//task #5 function to find the longest common prefix
function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""; // Return empty string if the array is empty

    let prefix = strs[0]; // Assume the first string is the prefix

    for (let i = 1; i < strs.length; i++) { // Loop through the rest of the strings
        while (strs[i].indexOf(prefix) !== 0) { // Check if the current string starts with the prefix
            prefix = prefix.slice(0, -1); // Remove the last character from the prefix
            if (prefix === "") return ""; // If the prefix becomes empty, return ""
        }
    }

    return prefix; // Return the longest common prefix
}

// Testing the function
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Expected output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Expected output: ""



