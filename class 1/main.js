var firstName = "Muhiuddin";
let lastName = "anik"

const email = "muhiuddinanik98@gmail.com"
console.log(lastName)

lastName = "ashik"
console.log(lastName)

//email = firstName  (Assignment to constant variable)

console.log(Symbol('address') === Symbol('address'))


const obj = {
    name:"anik",
    age:22,
    height:5.7,
    email:"muhiuddinanik98@gmail.com"

}


const arr =["anik",22,5.7,{},[], function(){}]
//==object===========
console.log(obj.name)
console.log(obj["email"])
obj.profession ="Software dev"
console.log(obj)
console.log("name" in obj)

//object looping 
for(let key in obj){
    console.log(key)
    console.log(obj[key])//accesssing key value
    
}








//array index access
const arr1 =["anik","ashik",30,40,"programer"]
console.log(arr1[0])
console.log(arr1[arr1.length - 1])










//loop
for(let i=0; i<29; i++){
console.log(i)
}


let j =0;

while(j>-5){

    console.log(j)
    j--
}

//accessing array using loop
const arr2=["muhiuddin","anik","mesbah","ashik",24,27,"software engineer","test"]
console.log(arr2.length)

for(let k=0; k <= arr2.length -1;k++ ){

   console.log(arr2[k])
}


for(let elm of arr2){
    console.log(elm)
}




const randoomArry =["a","b","c",1,2,3,{name:"ashik"}]
 



arrAdd =[23,45,67,78]
let total = 0
let len = arrAdd.length - 1

for(let h = 0; h < len; h++){

    total = total + arrAdd[h]
}

console.log(total)