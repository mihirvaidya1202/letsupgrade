var marks=window.prompt("Enter the marks");

//Using if else ladder
if(marks>=80 && marks<=100)
{
    console.log("O grade");
}
else if(marks>=70 && marks<80)
{
    console.log("A grade");
}
else if(marks>=60 && marks<70)
{
    console.log("B grade");
}
else if(marks>=50 && marks<60)
{
    console.log("C grade");
}
else if(marks>=40 && marks<50)
{
    console.log("D grade");
}
else if(marks<40 && marks>=0)
{
    console.log("Failed");
}
else
{
    console.log("Enter marks out of 100");
}

//Using Switch statement
switch(true)
{
    case (marks>=80 && marks<=100):
        console.log("O grade");
        break;
    case (marks>=70 && marks<80):
        console.log("A grade");
        break;
    case (marks>=60 && marks<70):
        console.log("B grade");
        break;
    case (marks>=50 && marks<60):
        console.log("C grade");
        break;
    case (marks>=40 && marks<50):
        console.log("D grade");
        break;
    case (marks<40 && marks>=0):
        console.log("Failed");
        break;
    default:
        console.log("Enter marks out of 100");
        break;
}