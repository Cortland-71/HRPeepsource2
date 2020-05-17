$(document).ready(function () {
    var navList = ['#detailDiv', '#performanceDiv', '#contactsDiv',
        '#wagesDiv', '#taxesDiv', '#emergancyDiv', '#seperationsDiv', '#eeoDiv'];

    var numOfNavBtn = 9;

    $(".search-section div").hide().slideDown(500);

    for (var i = 0; i < numOfNavBtn; i++) {
        $("#" + i).hide();
        $("#" + i).fadeIn((i + 1) * 80);
    }

    $(".navBtn").on('click', function () {
        var index = $(this).attr("id");
        var selectedDiv = navList[index];
        $(selectedDiv).show();
        for (var i = 0; i < numOfNavBtn; i++) {
            if (selectedDiv != navList[i]) {
                $(navList[i]).hide();
            }
        }
    });

});