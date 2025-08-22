// Assignment Details:
// Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement
// to assess score ranges.
// Assignment Requirements:
// 1. Create a function that takes a student's score as a parameter.
// 2. Declare and initialize the variable.
// 3. Use `switch` statement inside the function.
// 4. Return the corresponding grade.
// 5. Call the function and print the resu

function gradeCalculation(score) {
    let grade
    switch(true) {
        case (score>=90 && score<=100):
            grade = 'A'
            break
        case (score>=70 && score<=90):
             grade = 'B'
            break
        case (score>=50 && score<70):
            grade = 'C'
            break
        case (score<50 && score>=40):
            grade = 'D'
            break
        default: 
            grade = 'F'
            break
    }
    return grade

}

let result = gradeCalculation(12)
console.log("grade is" + " " +result)
