let inputform = document.querySelector("#tableform");
let input = document.querySelector("#inputId");
let table = document.querySelector(".time-table");

inputform.addEventListener("submit" , (event) => {
    event.preventDefault();

    let tableof = input.value;

    table.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        //console.log(tableof + "x" + i + "=", tableof * i);
        const message = `${tableof} x ${i} = ${tableof * i}`;
        
        table.innerHTML += `${message} <br>`;
    }
});