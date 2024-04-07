function toggleAccordion(element) {
    var detailsRow = element.parentElement.parentElement.nextElementSibling;
    if (detailsRow.classList.contains("series-details")) {
        if (detailsRow.style.display === "none" || detailsRow.style.display === "") {
            detailsRow.style.display = "table-row";
            element.querySelector('.arrow-down').style.display = 'none';
            element.querySelector('.arrow-up').style.display = 'inline-block';
        } else {
            detailsRow.style.display = "none";
            element.querySelector('.arrow-down').style.display = 'inline-block';
            element.querySelector('.arrow-up').style.display = 'none';
        }
    }
}


var currentYear = new Date().getFullYear();

// Update the copyright text
var copyrightText = document.getElementById("copyright");
copyrightText.innerHTML += " " + currentYear;