
function createPhoneNumber() {
    let firstNumber = Math.round((Math.random() * 9));
    let tripleNumbers = String(firstNumber);

    let quadrupleNumbers = Math.round((Math.random() * 2500));
    let sizeSecondPart = String(quadrupleNumbers).length;
    let phoneNumber;
    //console.log("size second part: " + sizeSecondPart);

    if(firstNumber < 5) {
      
        for(let count = 1; count <= 2; count++) {
            tripleNumbers += String(firstNumber + count);
        } 
    } else {
        
        for(let count = 1; count <= 2; count++) {
            tripleNumbers += String(firstNumber - count);
        }
    }

    if( sizeSecondPart < 4) {
       
        for(let count = 4 - sizeSecondPart; count > 0; count--) {
            quadrupleNumbers = "0" + quadrupleNumbers;
        }
        phoneNumber = String(tripleNumbers) + "-" + String(quadrupleNumbers);
    } else {
        phoneNumber = String(tripleNumbers) + "-" + String(quadrupleNumbers);
    }
   
    document.getElementById("phone-number").innerHTML = phoneNumber;
} 