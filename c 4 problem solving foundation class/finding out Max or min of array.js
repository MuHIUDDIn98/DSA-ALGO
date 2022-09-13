 function min(arr){
    count=0
let min_num = arr[0]
for(let num of arr){
    if(num< min_num){
     min_num = num
     count++
    }
}
console.log(count)
console.log(min_num)

}

min([88,74,44,22,33,44,54])




/*function minimum_number(arr){

let min_number = arr[0]
let last_index = arr.length-1; 

for(let i = 0; i<=last_index ; i++){

if(arr[i] < min_number){
    min_number = arr[i]

}

}
console.log(min_number)
return min_number

}

 minimum_number(2,3,4,5,56,67,6)

*/