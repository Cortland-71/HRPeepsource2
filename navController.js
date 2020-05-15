function myFunction(correctDiv) {
    var views = ['detailDiv', 'performanceDiv', 'contactsDiv', 'wagesDiv', 'taxesDiv', 'eeoDiv', 'emergancyDiv', 'seperationsDiv'];
    var x = document.getElementById(correctDiv);
    x.style.zIndex = 1;
    for (var i = 0; i < views.length; i++) {
        if (correctDiv != views[i]) {
            var x = document.getElementById(views[i]);
            x.style.zIndex = 0;
        }
    }
}