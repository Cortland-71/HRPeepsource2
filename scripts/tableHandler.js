var fieldIdList = ["firstNameField", "lastNameField", "ssnField", "idField", "locationField", "departmentField",
            "hireDateField", "jobTitleField", "middleNameField", "workStatusField", "employmentStatusField"];

function getTableHandler() {
    $(document).ready(function () {
        setSelectedRowAndDetailProperties(1);
        for (let i = 1; i < masterArr.length; i++) {
            $("#row" + i).click(function () {
                for (let j = 1; j < masterArr.length; j++) {
                    $("#row" + j).removeClass("selected");
                }
                setSelectedRowAndDetailProperties(i);
            });
        }
    });
}

function setSelectedRowAndDetailProperties(row) {
    $("#row" + row).addClass("selected");
    $("#row" + row).addClass("selected:hover");
    setDetailProperties(row, fieldIdList);
}

function setDetailProperties(row, fieldList) {
    for (let i = 0; i < fieldList.length; i++) {
        if("hireDateField" == fieldList[i]) {
            var date = new Date(masterArr[row][i]);
            var year = date.getFullYear();
            var month = date.getMonth()+1;
            var day = date.getDate();
            if(month.toString().length < 2) month = "0" + month.toString();
            if(day.toString().length < 2) day = "0" + day.toString();
            var newDate = year + "-" + month + "-" + day;
            document.getElementById(fieldList[i]).value = newDate;
            continue;
        }
        document.getElementById(fieldList[i]).value = masterArr[row][i];
    }
}