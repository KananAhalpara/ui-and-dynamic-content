let input = document.querySelector(".input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");
let feedback = document.querySelector(".feedback");

function addItem(){
    let li = document.createElement("li");
    if(input.value && input.value != " "){
        //adding the inputed value to the list li
        li.textContent = input.value;
        // append/add element li to the ul list at the end
        ul.appendChild(li);
        //clearing feedback message
        feedback.textContent = " ";
        //clearing the input field value
        input.value  = " ";
        //putting cursor back inthe input field
        input.focus();
    }

    else{
        feedback.textContent = "Sorry, nothing entered !";
    }
}

btn.addEventListener("click",addItem);

