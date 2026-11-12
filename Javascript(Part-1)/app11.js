let color="red";

switch (color){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Light is broken");
}

console.log("After switch statement");

// Use switch statement to print the day of the week using a number variable 'day' with values 1 to 7
let day = 1;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday, Fun day");
        break;
    default:
        console.log("wrong day!!!!!!!")
}

