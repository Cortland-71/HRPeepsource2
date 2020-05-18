var masterArr = [];

async function getData() {
    const response = await fetch("hrDataWithHeads2.csv");
    const data = await response.text();
    //this is a single dim array that holds each row
    const rows = data.split('\n');

    rows.forEach(elt => {
        var row = elt.split(',');
        masterArr.push(row);
    })
    var row_to_insert;
    var container_block;

    for (let j = 1; j < masterArr.length; j++) {
        row_to_insert = document.createElement('tr');
        row_to_insert.setAttribute("id", ("row" + j));
        container_block = document.getElementById('mainTable');
        container_block.appendChild(row_to_insert);
        for (let i = 0; i < 8; i++) {
            element_to_insert = document.createElement('td');
            container_block = document.getElementById("row" + j);
            element_to_insert.innerHTML = masterArr[j][i];
            container_block.appendChild(element_to_insert);
        }
    }
    getTableHandler();
}






