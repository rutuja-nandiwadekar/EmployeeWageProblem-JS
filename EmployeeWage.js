console.log("*************Welcome to Employee Wage Problem*************");

const IS_PRESENT = 0

let empCheck = Math.floor(Math.random()*10) % 2;
if (empCheck == IS_PRESENT) {
    console.log("Employee is present");
}else{
    console.log("Employee is absent");
}