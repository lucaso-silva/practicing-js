function oddArray() {
    let size = +prompt("Enter the size for the array.");
    let arrayOdds = [];
    let number = 1;

    console.log(arrayOdds);

    do {
        if(number % 2 != 0) {
            arrayOdds.push(number);
        }
        number++;

    } while(arrayOdds.length < size );

    document.getElementById("outputOne").innerHTML = "[ " + arrayOdds + " ]"
}

// function createArray() {
//     let number = +prompt("Enter the numbers for the array. Enter a negative number to end");
//     let originalArray = [];

//     do {
//         originalArray.push(number);
//         number = +prompt("Enter the numbers for the array. Enter a negative number to end");

//     } while (number > 0);

//     document.getElementById("outputTwo-1").innerHTML = "[ " + originalArray + " ]";

//     removeOdds(originalArray);
// }

// function removeOdds(array) {
//     let resultArray = array.slice();

//     for(let i = 0; i < array.length; i++) {
//         if(resultArray[i] % 2 != 0) {
//             resultArray.splice(resultArray[i], 1);
//         }
//     }

//     document.getElementById("outputTwo-2").innerHTML = "[" + resultArray + "]";
// }