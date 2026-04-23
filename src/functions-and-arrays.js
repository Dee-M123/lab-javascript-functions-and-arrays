// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord() {
  let longest = words[0];

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers() {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  return sum;
}



// Iteration #3.1 Bonus:
function sum() {}



// Iteration #4: Calculate the average
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {
  return sumNumbers(numbersAvg) / numbersAvg.length;
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength() {
  let total = 0;

  for (let word of wordsArr) {
    total += word.length;
  }

  return total / wordsArr.length;
}

// Bonus
function avg() {}


// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray() {
  let unique = [];

  for (let word of wordsUnique) {
    if (!unique.includes(word)) {
      unique.push(word);
    }
  }

  return unique;
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(word) {
  return wordsFind.includes(word);
}



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(word) {
  let count = 0;

  for (let item of wordsCount) {
    if (item === word) {
      count++;
    }
  }

  return count;
}



// Iteration #8 Bonus
function greatestProduct() {}





