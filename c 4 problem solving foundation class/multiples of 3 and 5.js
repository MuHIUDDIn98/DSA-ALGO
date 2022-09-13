/*write a program that prints multiples of three and five  from 1 to 100. 
But for multiples of three print "Fizz" instead of the number and
for the multiples of five print "Buzz"
for numbers which are multiples of both three and five print "FizzBuzz" */


 function fizzBuzz(num){
    let result=""
   for(let i = 1; i<= num; i++){
  if(i%3 == 0 && i%5 ==0){
    result+="FizzBuzz \n"
    //console.log(i,"fizz")
  }
  else if (i%5 == 0){
    result+="Buzz \n"
   // console.log(i,"Buzz")

  }
  else if(i%3 == 0){
   // console.log(i)
   result+="Fizz \n"
  }
  else{
    result=result + i+"\n"
    //console.log(i)
  }
   
  }


return result
 }


 console.log(fizzBuzz(30))