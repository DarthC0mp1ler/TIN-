function onSubmit() {
    let in1 = document.getElementById("in1").value;
    let in2 = document.getElementById("in2").value;
    let oper = document.getElementById("oper").value;

    let fromData = JSON.stringify({
        "in1": in1, "in2": in2, "oper": oper
    });
    console.log(fromData);
    let sender = new XMLHttpRequest();
    sender.open("POST","/form",true);
    sender.setRequestHeader("Content-Type", "application/json");
    sender.onload = function()
    {
        let resp = JSON.parse(sender.response);
        document.getElementById("out").value = resp.result;
    };
    sender.send(fromData);
}