var filteredIndex = [];
let first;

function search() {
    var index;
    var text = document.getElementById("searchField").value;
    //check no case search *
    var capName = text.charAt(0).toUpperCase() + text.slice(1);
    for (let i = 1; i < masterArr.length; i++) {
        if (!masterArr[i][0].includes(capName)) {
            document.getElementById("row"+i).style.display = 'none';
        } else {
            document.getElementById("row"+i).style.display = '';
        }
    }
}

$(document).ready(function () {
    $("#clearSearchBarButton").on("click", function () {
        var search = document.getElementById("searchField");
        search.value = "";
        search.focus();
        for (let i = 1; i < masterArr.length; i++) {
            if(document.getElementById("row"+i).style.display == 'none') {
                document.getElementById("row"+i).style.display = '';
            }
        }
    })
})