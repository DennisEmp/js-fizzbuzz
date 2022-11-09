// tabella numeri 1 a 100
for (let num = 1; num <= 98; num ++) {
    
    const table = document.querySelector(".table");
    const box = document.createElement("div");
    box.classList.add("box");
    // box.append(num);
    table.append(box);

    // variante "FizzBuzz" per multipli sia di 3 che di 5
    if (num % 3 == 0 && num % 5 == 0){
        box.append("FizzBuzz");
        console.log("FizzBuzz");
        box.classList.add("FizzBuzz");

    }

    // variante "Fizz" per i multipli di 3
    else if (num % 3 == 0){
        box.append("Fizz");
        console.log("Fizz");
        box.classList.add("Fizz");

    }

    // variante "Buzz" per i multipli di 5
    else if (num % 5 == 0){
        box.append("Buzz"); 
        console.log("Buzz");
        box.classList.add("Buzz");

    }

    else {
        box.append(num);
    }

}
