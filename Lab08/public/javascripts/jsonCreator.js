function onSubmit() {
    let in1 = document.getElementById("in1").value;
    let in2 = document.getElementById("in2").value;
    let oper = document.getElementById("oper").value;


    let fromData = JSON.stringify({
        "in1": in1, "in2": in2, "oper": oper
    });
    let sender = new XMLHttpRequest();
    sender.open("POST","/jsonData",true);
    sender.setRequestHeader("Content-Type", "application/json");
    sender.send(fromData);
}