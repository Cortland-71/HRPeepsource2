var output;

async function getData() {
    const response = await fetch('test.csv');
    const data = await response.text();

    //this is a single dim array that holds each row
    const rows = data.split('\n');


    // console.log(rows);

    var masterArr = [];
    rows.forEach(elt => {
        var row = elt.split(',');
        masterArr.push(row);
    })

    var row_to_insert;
    var container_block;

    for (let j = 0; j < 100; j++) {
        row_to_insert = document.createElement('tr');
        row_to_insert.id = "row"+j;
        container_block = document.getElementById('mainTable');
        container_block.appendChild(row_to_insert);
        for (let i = 0; i < 8; i++) {
            element_to_insert = document.createElement('td');
            container_block = document.getElementById("row"+j);
            element_to_insert.innerHTML = 'this'+i;
            container_block.appendChild(element_to_insert);
        }
        
    }
    
    
    

    

}


