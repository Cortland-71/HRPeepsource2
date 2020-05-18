var filteredIndex = [];

function search(e) {
    var index;
    if (e.keyCode == 13) {
        var text = document.getElementById("searchField").value;
        var capName = text.charAt(0).toUpperCase() + text.slice(1);
        for (let i = 1; i < masterArr.length; i++) {
            if (capName != masterArr[i][0]) {
                document.getElementById("row"+i).outerHTML="";
                continue;
            }
            filteredIndex.push(i);
        }
        let first = filteredIndex[0];
        $("#row"+first).addClass("selected");
        $("#row"+first).addClass("selected:hover");
        setDetailProperties(first, fieldIdList);
    }
}

$(document).ready(function () {
    $("#clearSearchBarButton").on("click", function () {
        var search = document.getElementById("searchField");
        search.value = "";
        search.focus();
    })
})