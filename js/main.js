// tabella numeri 1 a 100
for (let num = 1; num <= 100; num ++) {
    console.log("box",num)
    
    // variante "FizzBuzz" per multipli sia di 3 che di 5
    if (num % 3 == 0 && num % 5 == 0)
    console.log("FIzzBuzz");
    // variante "Fizz" per i multipli di 3
    else if (num % 3 == 0) 
    console.log("Fizz");
    // variante "Buzz" per i multipli di 5
    else if (num % 5 == 0) 
    console.log("Buzz");
    
}





// else if (i % 15 == 0) console.log("FizzBuzz");
    
    
//     else console.log(i);