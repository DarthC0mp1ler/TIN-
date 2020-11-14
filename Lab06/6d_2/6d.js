function addRow() {
    let table = document.getElementById("tb");
    let newRow = table.rows.length;
    let row = table.insertRow(newRow);
    for(let i = 0; i < table.rows[newRow-1].cells.length; i++) {
        let cellTmp = row.insertCell(i);
        let tmpText = document.getElementById("in" + (i+1)).value;
        document.getElementById("in" + (i+1)).value = "";
        if(tmpText.length === 0)
            tmpText = "None";
        cellTmp.innerText = tmpText;
    }
}