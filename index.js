// Your code here

function greet(name) {
    var name = prompt("What is your name?");
    alert ("Hello, " + name);
    
    var userAge = prompt("How old are you?");
    var userAge = parseInt(userAge);
    
    var birthday = confirm("Have you celebrated your birthday already this year?");

    var yearP = new Date().getFullYear() - userAge;
    var yearN = new Date().getFullYear() - userAge - 1;

    if (birthday === true) {
        alert("Based on my calculations, you were born in " + yearP);
    } else {
        alert("Based on my calculations, you were born in " + yearN);
    }
}
