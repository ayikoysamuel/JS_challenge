// task 1 #1
function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
// test case
fizzBuzz(15); // Expected output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz



//Task 1 #2 // function to prompt the user yearOfBirth
function getYearOfBirth(yearOfBirth = prompt("Whats your Year of Birth?")){
    yearOfBirth= Number(yearOfBirth);// convert the input to a number
    //calculate the age by subtracting the year of birth from the current year

let currentYear = new Date().getFullYear();
let age = currentYear -yearOfBirth;    

// the age groups
let ageGroup;

if (age < 18) {
    ageGroup = "Minor";
}
else if (age >= 18 && age <= 36){
    ageGroup = "Youth";
}
else{
    ageGroup = "Elders";
}

// print the age and age group
console.log("You are Aged:" + age);
console.log("And your Age group is " + ageGroup);   
}
// test if it is working or not
getYearOfBirth(2013); // output: Your age is: ---, Your age group is: ---.



//task 1 #3
//function which takes two parameters
function twoSum(nums, target){

     // create a new map, to store numz & indices
    let map = new Map(); 
   
    for (let i = 0; i < nums.length; i++) { // loop through the array
        let complement = target - nums[i]; // calculate the complement of the current number
        if (map.has(complement)) { // check if the complement is in the map
            return [map.get(complement), i]; // return the indices of the two numbers that add up to the target
        }
        map.set(nums[i], i); // add the current number and its index to the map
    }
    return []; // return an empty array if no solution is found
}

// Trying to test the function with an example
console.log(twoSum([2, 7, 11, 15], 18)); 



//task1 #4 //funcion firstpalindrome
function firstPalindrome(words) {
    for (let i = 0; i < words.length; i++) { // loop through the array of words
        let word = words[i]; // get the current word
        let reversedWord = word.split('').reverse().join(''); // reverse the word
        if (word === reversedWord) { // check if the word is a palindrome
            return word; // return the first palindrome found
        }
    }
    return ""; // return an empty string if no palindrome is found  
} // Close the firstPalindrome function

// // Trying to test the function with an example   
console.log(firstPalindrome(["abc", "def", "aba", "xyz"])); // Expected output: "aba"
console.log(firstPalindrome(["abc", "def", "xyz"])); // Expected output: "" (no palindrome found)


//task1 #5 //function that repeatedly adds the digits of a number until it becomes a single digit
function addDigits(num) {
    while (num >= 10) { // check if the number is greater than or equal to 10
        let sum = 0; // initialize the sum to 0
        while (num > 0) { // loop until the number becomes 0
            sum += num % 10; // add the last digit of the number to the sum
            num = Math.floor(num / 10); // remove the last digit from the number
        }
        num = sum; // update the number to be the sum of its digits
    }
    return num; // return the single digit result
} // Close the addDigits function
// // Trying to test the function with an example
console.log(addDigits(38)); // Expected output: 2 (3 + 8 = 11, 1 + 1 = 2)

