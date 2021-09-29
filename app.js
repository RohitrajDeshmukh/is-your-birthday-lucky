const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output");



checkButton.addEventListener('click', function checkBirthdayLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum && luckyNumber.value){
        compareValues(sum, luckyNumber.value);
    }else{
        output.innerText = "Please Enter Both the fields 😵"
    }
    

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
        output.innerText = "Yessss Your birthday is lucky! 🎂";
    }else{
        output.innerText= "Sry..... Your birthday is not lucky 🙌";
    }
}