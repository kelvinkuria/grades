function gradeGenerator(){
    let marks = parseInt(prompt("Enter students marks (0-100)"));

    if (isNaN(marks) || marks < 0 || marks > 100){
        console.log ("please enter a  valid numer (0-100)")
         return;
    }


    let grade;

    if(marks > 79){
        grade= "A"
    }
    else if (marks >= 60){
        grade = "B"
    }else if(marks >= 50){
        grade = "C"
    }else if (marks >=40){
        grade = 'D'
    }else{
        grade ="E"
    }


    console.log ("The students grade is : " + grade)
}
gradeGenerator();