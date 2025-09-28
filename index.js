let numbers =[5,8,2,10,3,7 ,25,40,20,5];

  

let even = numbers.filter(function(num){  
return num % 2 ===0;
});
 let odd = numbers.filter(function(num){
    return num % 2 !==0;

 });
 console.log("numbers :", even);
 console.log("numbers:", odd);

