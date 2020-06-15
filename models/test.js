const arr = [2,3,4,2,3,45,23,2,4,23,2,23,3,23,2,43];
const names = ['alice', 'betty', 'chris', 'jack', 'chris', 'james','alice', 'chris']
let sum = 0;
for(let num of arr){
    sum += num
}
console.log(sum);

console.log(arr.reduce((accumulator, element)=> accumulator + element, 0));
console.log(names.reduce((a,b)=>(a[b]?a[b]++:a[b]=1, a), {}));