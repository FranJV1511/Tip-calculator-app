const billInput=document.querySelector(".bill-input");
const peopleInput= document.querySelector(".people-input");
const tipperPerPerson=document.querySelector("tip-amount");
const totalPerPerson=document.getElementById("total-amount");
const tips= document.querySelectorAll(".tips");

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);

tips.forEach(function(val){
val.addEventListener('click',handleClick);
});


tipperPerPerson.forEach(function(val){
    val.addEventListener('click', handle);
});


billInput.value="0.0";
peopleInput.value="1";
tipperPerPerson.innerHTML="$" + (0.0).toFixed(2);
totalPerPerson.innerHTML="$" + (0.0).toFixed(2);

let billValue=0.0;
let peopleValue=1;
let tipValue=0.15;

function billInputFun(){
    billValue= parseFloat(billInput.value)
    console.log(billValue);
}

function peopleInputFun(){
    peopleValue= parseFloat(peopleInput.value)
    console.log(peopleValue);
}

function handleClick(event){
    tips.forEach(function(val) {
        val.classList.remove("active-tip");
        if(event.target.innerHTML == val.innerHTML){
         val.classList.add("active-tip");
         tipValue=parseFloat(val.innerHTML)/100;
        }
    });
    console.log(tipValue);

}

function calculateTip(){
    if(peopleValue >=1){
        let tipAmount=(billValue * tipValue)/peopleValue;
        let total=(billInputFun*tipAmount)/peopleValue;
        tipPerPerson.innerHTML="$" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML="$"+ total.toFixed(2);
    }
}


