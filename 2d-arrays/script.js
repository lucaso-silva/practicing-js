function createArray() {
    let arrayGrades = [];
    let sum = 0;
    let average;
    let message;
    
    arrayGrades.push(["John", 100]);
    arrayGrades.push(["Ana", 95]);
    arrayGrades.push(["Liz", 85]);
    arrayGrades.push(["Sam", 70]);
    arrayGrades.push(["Philip", 80]);

    //console.log(arrayGrades);
    //console.log("length: " + arrayGrades.length);

    message = "[ " + arrayGrades + " ] \n"

    document.getElementById("outputOne").innerHTML = message;

    for(let i = 0; i < arrayGrades.length; i++) {
        console.log(arrayGrades[i][1]);
        sum += arrayGrades[i][1];
    }
    
    average = sum / arrayGrades.length;

    document.getElementById("outputTwo").innerHTML = "The average of the grades is: " + average;
} 