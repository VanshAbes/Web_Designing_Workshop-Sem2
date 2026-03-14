let employees = [];

document.getElementById("addemployee").onclick = function addemployee(){
    let name = document.getElementById("employee_name").value;
    let empId = document.getElementById("employee_number").value;
    let salary = document.getElementById("employee_salary").value;
    let dept = document.getElementById("employee_dept").value;

    if (name === "" || empId === "" || isNaN(salary) || dept === ""){
        alert(`Please fill all fields properly`);
        return;
    }

    let employee = {
        name:name,
        id: empId,
        salary: salary,
        department: dept
    };

    employees.push(employee);

    alert("Employee Added Successfully!");

    document.getElementById("employee_name").value = "";
    document.getElementById("employee_number").value = "";
    document.getElementById("employee_salary").value = "";
    document.getElementById("employee_dept").value = "";
}

document.getElementById("display_employee").onclick = function display_employee(){
    let output = "<h3>All Employees</h3>";

    employees.forEach(emp => {
        output += `
        Name: ${emp.name} |
        ID: ${emp.id} |
        Salary: ₹${emp.salary} |
        Dept: ${emp.department} <br>
        `;
    })

    document.getElementById("output").innerHTML = output;
}

document.getElementById("salary_sort").onclick = function salary_sort(){
    let sorted = employees.filter(emp=>emp.salary > 50000);

    let output = "<h3>Employees with Salary > ₹50000</h3>";
    sorted.forEach(emp => {
        output += `
        Name: ${emp.name} |
        ID: ${emp.id} |
        Salary: ₹${emp.salary} |
        Dept: ${emp.department} <br>
        `;
    });

    document.getElementById("output").innerHTML = output;
}

document.getElementById("total_salary").onclick = function total_salary(){
    if (employees.length === 0){
        document.getElementById("output").innerHTML = "<h3>No records are found</h3>";
        return;
    }

    let total = employees.reduce((sum, emp) => sum + Number(emp.salary), 0);

    document.getElementById("output").innerHTML = "<h3>Total Salary Payout: ₹" + total + "</h3>";
}

document.getElementById("average_salary").onclick = function average_salary(){
    if (employees.length === 0){
        document.getElementById("output").innerHTML = "<h3>No records are found</h3>";
        return;
    }

    let total = employees.reduce((sum, emp) => sum + Number(emp.salary), 0);
    let avg = total / employees.length;

    document.getElementById("output").innerHTML = "<h3>Average Salary: ₹" + avg + "</h3>";
}

document.getElementById("dept_segregate").onclick = function dept_segregate(){
    let deptName = prompt("Enter Department Name:");
    let count = employees.filter(emp => emp.department === deptName).length;

    document.getElementById("output").innerHTML = "<h3>Employees in "+deptName+" : "+count+"</h3>";
}