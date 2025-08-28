// Assignment Details:
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:
// Input: s = " fly me to the moon "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:
// Write a function to check if two strings are anagrams.
// Input: isAnagram('listen', 'silent')
// Output: true
// Input: isAnagram('hello', 'world')
// Output: false
// Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.

let s = "Hello world"
console.log(s.split(" ")[1].length)

let x= " fly me  to the moon "
console.log(x.trim().split(" ")[5].length)



function isAnagram(word1,word2){
   let w1 = (word1.toLowerCase().split('').sort().join(''))
   let w2 = (word2.toLowerCase().split('').sort().join(''))
    if (w1==w2) {
        console.log('The given word is an anagram')
    } else {
        console.log('The given word is not an anagram')
    }

}

isAnagram('Tea','eatas')