//task 1
let firstNameT1="Shalev";
let LastNameT1="Ben Moshe";
let ageT1=21;
let IsStudentT1 =true;
let isAdultT1 =(ageT1>18);
let isJohnT1 =(firstNameT1==="john");
console.log(firstNameT1)
console.log(LastNameT1)
console.log(ageT1)
console.log(IsStudentT1)
console.log(isAdultT1)
console.log(isJohnT1)
//task 2
let firstNameTest2="Shalev";
let LastNameTest2="Ben Moshe";
function greet(firstNameT2,LastNameT2)
    {
        let fullnameT2=firstNameT2+" "+LastNameT2;
        console.log("Hello, "+fullnameT2.toUpperCase()+"! Welcome to the IITC Bootcamp.")
    }  
greet(firstNameTest2,LastNameTest2)
//task 3
ageTest3=100
function checkAge(ageT3)
{
    if(ageT3<13) return "You are a child.";
    else if(ageT3>=13&&ageT3<=17) return "You are a teenager.";
    else if(ageT3>=18&&ageT3<=64) return "You are an adult.";
    else if(ageT3>65) return "You are a senior.";
}
console.log(checkAge(ageTest3));

function GetDayMessage(dayOfWeek)
    {
        switch(dayOfWeek)
        {
            case "Monday"
        }
        
    }