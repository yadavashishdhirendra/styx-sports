// Desktop Menu Script
document.addEventListener("DOMContentLoaded", function () {
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function (element) {
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.querySelector('.hide-scrollbar');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');

    leftBtn.addEventListener('click', function () {
        scrollContainer.scrollLeft -= 200; // Adjust the scroll amount as needed
    });

    rightBtn.addEventListener('click', function () {
        scrollContainer.scrollLeft += 200; // Adjust the scroll amount as needed
    });
});


// Mobile Menu Script
$("#showmenu").click(function (e) {
    e.preventDefault();
    $("#menu").toggleClass("show");
});
$("#menu a").click(function (event) {
    event.preventDefault();
    if ($(this).next('ul').length) {
        $(this).next().toggle('fast');
        $(this).children('i:last-child').toggleClass('fa-caret-down fa-caret-left');
    }
});