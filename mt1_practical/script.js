document.getElementById("give_result").onclick = function check_result(){
    let n = parseInt(document.getElementById("subject_number").value);
    let total = 0;
    let pass = true;
    for(let i = 1; i <= n; i++){
        let marks = parseFloat(prompt(`Enter marks of Subject ${i}`));
        total += marks;

        if(marks < 45){
            pass = false;
        }
    }

    let average = total / n;
    let grade;

    if(average >= 85){
        grade = "First Distinction";
    }
    else if(average >= 70){
        grade = "Second Distinction";
    }
    else if(average >= 55){
        grade = "Third Distinction";
    }
    else{
        grade = "Fail";
    }

    let result = pass ? "Pass" : "Fail";

    document.getElementById("output_window").innerHTML =
        "Total marks: " + total + "<br>" +
        "Percentage: " + average.toFixed(2) + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + result;
}
