 // oppenet player info
 function toggleSecondDiv() {
    var secondDiv = document.getElementById("secondDiv");
    var secondDivs = document.getElementById("secondDivs");
    var iconElement = document.getElementById("iconElement");
    var jbs = document.getElementById("jbs");
    var mgs = document.getElementById("mgs");
    var mgss = document.getElementById("mgss");

    if (secondDiv.style.display === "none") {
        secondDiv.style.display = "block";
        secondDivs.style.display = "block";
        jbs.style.display = "none";
        mgs.style.opacity = ".5"; //
        mgss.style.opacity = ".5"; //
        // Change the icon to minus when secondDiv is shown
        iconElement.className = "fa-solid fa-minus";
    } else {
        secondDiv.style.display = "none";
        secondDivs.style.display = "none";
        // Change the icon to plus when secondDiv is hidden
        iconElement.className = "fa-solid fa-plus";
        jbs.style.display = "block";
        mgs.style.opacity = "1"; // Set opacity back to 100%
        mgss.style.opacity = "1"; // Set opacity back to 100%
    }
}