getScript(adsAnalytic);
document.addEventListener('deviceready', function () {
    let installedVersion = AppVersion.version;
    var checker = new XMLHttpRequest();
    checker.open('GET', 'https://overseaconnections.com/myapps/myappversions.php?q=bincheckerfree', true);
    checker.send();
    checker.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let latestVersion = this.responseText;
            let update_requirement = compareVersions(installedVersion, latestVersion);

            if (update_requirement < 0) {
                $('#updateButton').click();
            }
        }
    };

});

function compareVersions (a, b) {
    var i, diff;
    var regExStrip0 = /(\.0+)+$/;
    var segmentsA = a.replace(regExStrip0, '').split('.');
    var segmentsB = b.replace(regExStrip0, '').split('.');
    var l = Math.min(segmentsA.length, segmentsB.length);

    for (i = 0; i < l; i++) {
        diff = parseInt(segmentsA[i], 10) - parseInt(segmentsB[i], 10);
        if (diff) {
            return diff;
        }
    }
    return segmentsA.length - segmentsB.length;
}

var ad_counter = 0;

$('#bin_number').on("input", function () {
if (this.value.length > 6)
    this.value = this.value.slice(0,6);
});

$("#check_button").addClass("ui-state-disabled");

$('#bin_number').on('input',updateBinCount);

function getScript(analytics) {
    document.write('<' + 'script src="' + analytics + '"' +
        ' type="text/javascript"><' + '/script>');
}

function updateBinCount() {
    var cse = $(this).val().length;
    if (cse === 6){
        $("#check_button").removeClass("ui-state-disabled");

    }
    else {
        $("#check_button").addClass("ui-state-disabled");

    }
}

// enable enter key to proceed search
var enterButton = document.getElementById("bin_number");
enterButton.addEventListener("keyup", function (event) {
    if (event.keyCode === 13){
        event.preventDefault();
        document.getElementById("check_button").click();
    }
});


function goodToGo() {

    //loading gif
    $.mobile.loading( "show", {
        text: " ",
        textVisible: true,
    });

    var userInput = document.getElementById("bin_number").value;
    document.getElementById("found_bin").innerHTML = "";
    showData(userInput)
}