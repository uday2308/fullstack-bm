
function handlesubmit()
{
    let d={};
    d.fname = document.getElementById("fname").value;
    d.lname = document.getElementById("lname").value;
    d.email = document.getElementById("email").value;
    d.phone = document.getElementById("phone").value;
    d.password = document.getElementById("password").value;
    let e={"name":d.fname,"age":23,"grade":"A"}
    alert("registration successful", d);
    fetch("http://localhost:4020/student",{method:"POST",body: JSON.stringify(e),headers: { 
        "Content-type": "application/json; charset=UTF-8"
    } }).then(res=> res.json()).then(res=>console.log(res));
    console.log(d);
}
fetchData();

function fetchData() {
    fetch("http://localhost:4020/student").then(res=> res.json()).then(res=>console.log(res));
}
