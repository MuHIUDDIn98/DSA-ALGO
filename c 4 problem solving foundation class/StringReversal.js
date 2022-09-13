function reverse(str){
    count=0
    let revStr=''
for (let i = str.length-1; i>=0; i--){
console.log(i) 
revStr+=str[i]
console.log(str[i])
console.log(revStr)
count++
}
console.log(count)
return revStr
}

let y =reverse("hello anik")
console.log(y)
//==========================================

function rev(str){
let restr=''
for(let char of str){
restr=char+restr
console.log(restr)
}

return restr

}
let k =rev("anik")
console.log(k)

//=================================================



