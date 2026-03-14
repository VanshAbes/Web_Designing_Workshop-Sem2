document.getElementById("change_heading").onclick = function change_heading(){
    let heading = document.getElementById("new_heading").value;
    if (heading === ""){
        document.getElementById("heading").textContent = "Welcome to JavaScript";
    }
    else{
        document.getElementById("heading").textContent = heading;
    }
}

document.getElementById("change_background").onclick = function change_background(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

document.getElementById("font_size").onclick = function font_size(){
    let size = Math.floor(Math.random() * (30 - 15 + 1)) + 15;
    document.body.style.fontSize = `${size}px`;
}

document.getElementById("paragraph").onclick = function () {

    let btn = document.getElementById("paragraph");
    let output = document.getElementById("output");

    if (btn.textContent === "Show Paragraph") {

        btn.textContent = "Hide Paragraph";
        output.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati veritatis quibusdam dolores odit, sit molestias aspernatur animi! Aliquid unde illum ratione dicta est autem, nostrum ipsam dolorem sint veniam aperiam, quas rem eum cum minus? Saepe libero fugiat obcaecati tenetur neque eos consequatur dolorem!";
    } 
    else {

        btn.textContent = "Show Paragraph";
        output.textContent = "";
    }
}

document.getElementById("reset").onclick = function reset(){
    document.body.style.backgroundColor = "rgb(143,136,136)";
    document.body.style.fontSize = "16px";
    document.getElementById("heading").textContent = "Welcome to JavaScript";
    document.getElementById("new_heading").value = "";
    document.getElementById("new_heading").placeholder = "Enter new Heading";
    document.getElementById("output").textContent = "";
    document.getElementById("paragraph").textContent = "Show Paragraph";
}