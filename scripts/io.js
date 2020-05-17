var output;
var masterArr = [];

async function getData() {
    const response = await fetch("hrDataWithHeads.csv");
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
        row_to_insert.setAttribute("id", ("row"+j));
        container_block = document.getElementById('mainTable');
        container_block.appendChild(row_to_insert);
        for (let i = 0; i < 8; i++) {
            element_to_insert = document.createElement('td');
            container_block = document.getElementById("row"+j);
            element_to_insert.innerHTML = masterArr[j][i];
            container_block.appendChild(element_to_insert);
        }
    }
    getTableHandler();
}

function getTableHandler() {
    $(document).ready(function() {
        $("#row1").addClass("selected");
        $("#row1").addClass("selected:hover");
        $("#testOutput").text(masterArr[1]);
        setDetailProperties(1);

        for (let i = 1; i < masterArr.length; i++) {
            $("#row"+i).click(function() {
                for (let j = 1; j < masterArr.length; j++) {
                    $("#row"+j).removeClass("selected");
                }
                $(this).addClass("selected");
                $(this).addClass("selected:hover");
                setDetailProperties(i);
            
                $("#testOutput").text(masterArr[i]);
                
            });
        } 
    });
}

function setDetailProperties(row) {
    document.getElementById("salutationField").value = masterArr[row][18];
    document.getElementById("firstNameField").value = masterArr[row][1];
    document.getElementById("lastNameField").value = masterArr[row][0];
    document.getElementById("middleNameField").value = masterArr[row][8];
}




