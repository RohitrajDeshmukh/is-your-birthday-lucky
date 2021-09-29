const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output");



checkButton.addEventListener('click', function checkBirthdayLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    compareValues(sum, luckyNumber.value);

});

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for ( let index=0; index<dob.length; index++){
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

function compareValues(sum, luckyNumber){
    if(sum % luckyNumber === 0){
        console.log("your birthday is lucky");
    }else{
        console.log("sry..... your birthday is not lucky");
    }
}