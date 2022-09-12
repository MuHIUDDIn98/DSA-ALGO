const arr = ['a','b','c',"anik"]
console.log(arr.length)

console.log(arr[2])
arr[arr.length]=5;
console.log(arr)
// ============push==================
arr.push("d")
console.log(arr)
//============pop===================
arr.pop()
console.log(arr)
arr.pop()
console.log(arr)
arr.pop()
console.log(arr)


//============adding at the begening of the array unshift ===========
arr.unshift("anik")
console.log(arr)
arr.unshift("ashik")
console.log(arr)
//==========removing shift============================
arr.shift()
console.log(arr)
arr.shift()
console.log(arr)


//===========finding element==========================


 for(let elm of arr){
if(elm === 'c')  {console.log(true)
}
 }


//hash map in other language ==================
 const obj ={
email: 'muhiuddinanik98@gmail.com',
 name:"anik",
 age:45

 }
// adding element 
 obj.profession ="software engineer"

console.log(obj.name)
console.log(obj["name"])

console.log(Object.keys(obj));
console.log(Object.values(obj))
console.log(Object.entries(obj))


for(let key in obj){
    let k=obj[key]
//console.log(obj[key])
console.log(k)
}

// delete element
delete obj.profession

console.log(obj)


// searching 
for(let key in obj){
if(obj[key]== 45){
console.log(true)
}

}
console.log('email' in obj)