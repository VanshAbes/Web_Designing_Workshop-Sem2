document.getElementById("check_result").onclick = function check_result(){
    let n = document.getElementById("no_subject").value;
    let total = 0;

    for(let i = 1; i<=n;i++){
        let marks = parseFloat(prompt(`Enter marks of Subject ${i}`));
        total = total+marks;
    }

    let average = total/n;
    let grade;
    let result;
    if(average>=90){
        grade = "A+";
    }
    else if(average>=75){
        grade = "A";
    }
    else if(average>=60){
        grade = "B";
    }
    else if(average>=50){
        grade = "C";
    }
    else if(average>=45){
        grade = "D";
    }
    else{
        grade = "F";
    }

    if(marks>=45){
        result="Pass";
    }
    else{
        result= "Fail";
    }

    document.getElementById("output").innerHTML="Total marks: "+total+"<br>"+ "Average: "+average.toFixed(2)+"<br>" + "Grade: "+grade+"<br>" + "Result: "+result;
}