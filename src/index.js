console.log("This is a test");
const deDupe = (arr) => (arr.length === 1 ? Array.from(new Set(arr)) : []);
console.log(deDupe([1, 1, 1, 2, 3, 1, 2, 2, 3]));
// new Changes here
console.log("konichiwa");