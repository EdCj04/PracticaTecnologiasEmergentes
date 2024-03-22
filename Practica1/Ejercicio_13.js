let array = [1, 2, 3, 4, 5];

console.log(array.length); // 5
console.log(array.push(6)); // 6
console.log(array); // [1, 2, 3, 4, 5, 6]
console.log(array.pop()); // 6
console.log(array); // [1, 2, 3, 4, 5]
console.log(array.shift()); // 1
console.log(array); // [2, 3, 4, 5]
console.log(array.unshift(1)); // 5
console.log(array); // [1, 2, 3, 4, 5]
console.log(array.concat([6, 7])); // [1, 2, 3, 4, 5, 6, 7]
console.log(array.indexOf(3)); // 2
console.log(array.lastIndexOf(4)); // 3
console.log(array.slice(1, 3)); // [2, 3]
console.log(array.splice(2, 1)); // [3]
console.log(array); // [1, 2, 4, 5]
array.forEach(element => console.log(element)); // 1 2 4 5
console.log(array.map(element => element * 2)); // [2, 4, 8, 10]
console.log(array.filter(element => element % 2 === 0)); // [2, 4]
console.log(array.find(element => element > 2)); // 4
console.log(array.reduce((acc, curr) => acc + curr, 0)); // 12
console.log(array.sort()); // [1, 2, 4, 5]