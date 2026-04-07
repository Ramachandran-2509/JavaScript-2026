// level 1 easy questions

// let input='hello'

// console.log(typeof(input.split('').reverse().join('')))

// count vowels in a string

// function countVowels(str){

// let count=0

// let vowels = "aeiou";

// str = str.toLowerCase()



// for(let char of str.toLowerCase()){
//   if(vowels.includes(char)){
//     count++
// }

// }
// return count
// }
// console.log(countVowels("education"))

// modern level method

// function countVowels1(str){

// let vowels = "aeiou";

// let output={
//   a:0,
//   e:0,
//   i:0,
//   o:0,
//   u:0
// }

// for(let char of str.toLowerCase()){
//   if(vowels.includes(char)){
//     output[char]++
// }

// }
// return output
// }
// console.log(countVowels1("education"))   // {a: 2, e: 1, i: 1, o: 1, u: 1}

// case 3 remove voewels from a string

// function countVowels2(str){

// let vowels = "aeiou";

// let res="";

// for(let i of str.toLowerCase()){
//   if(!vowels.includes(i)){
//     res += i;
//   }
// }
// return res
// }
// console.log(countVowels2("javascript"))   // jvscrpt

//  important last string related

function removeDuplicate(str) {
  let seen = new Set();
  let res = "";
  for (let char of str) {
    if (!seen.has(char)) {
      seen.add(char);
      res += char;
    }
  }
  return res;
}
console.log(removeDuplicate("aabbccdde")); // abcde

// final one count the number of each words in a string even it's repeated

//   Input: "javascript"
// Output: { j:1, a:2, v:1, s:1, c:1, r:1, i:1, p:1, t:1 }

// function countWords(str) {
//   let res = {};
//   for (let char of str) {
//     if (res[char]) {
//       res[char]++;
//     } else {
//       res[char] = 1;
//     }
//   }
//   return res;
// }
// console.log(countWords("javascript"));




// non repeated characters in a string

// function  nonRepeated(str){

//   let count = '';

//   for(let char of str){
//     if(str.indexOf(char) === str.lastIndexOf(char)){
//       count += char
//     }
//   }
//   return count

// }
// console.log(nonRepeated("aabbcdd"))  // c