/*you have been provided an array of numbers ,
you have to sum the numbers */

/* 
function sum(arr){
let total = 0

let len =arr.length -1

for(let i=0; i<=len ; i++){
total+=arr[i]
}
return total

}


let x =sum([1,2,3])
console.log(x)
*/

function sum(arr){
let sum = 0
for(let num of arr){
 sum = sum + num
}

return sum


}

console.log(sum([1,2,3,5]))