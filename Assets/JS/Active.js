// Active Link onClick
function changeTextTransform(element) {
    // Remove 'active' class from all links
    var links = document.querySelectorAll('.navbar-nav li a');
    links.forEach(function (link) {
        link.classList.remove('nav-active');
        link.style.textTransform = 'initial'; // Set text transform to initial
    });

    element.classList.add('nav-active');
}


// On scroll add background on Header
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".header").addClass("header_bg");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".header").removeClass("header_bg");
        }
    });
});


// Shimmer Animation script
document.addEventListener("DOMContentLoaded", function () {
    const shimmerBg = document.querySelector('.shimmer-bg');
    const contentText = document.querySelector('.content-text');
    const contentImage = document.querySelector('.content-image');

    contentImage.style.transform = 'translateX(100%)';

    // Add a class to the shimmer-bg element to activate the animation
    shimmerBg.classList.add('bg-active');

    // After 5 seconds (matching the animation duration), remove the active class
    setTimeout(function () {
        shimmerBg.classList.remove('bg-active');
        shimmerBg.style.display = 'none';
        // Show the text content again by removing the opacity style
        contentImage.style.transition = 'opacity 0.5s ease, transform 1s ease';
        contentImage.style.transform = 'translateX(0)';
        contentText.style.opacity = '1';
        // Show the image again by removing the opacity style
        contentImage.style.opacity = '1';
    }, 2000); // Adjust the time (in milliseconds) as needed
});

// banner carousel
$(document).ready(function () {
    $(".next").on("click", function () {
        $(".scroll-container").animate({
            scrollLeft: "+=220" // Adjust according to your item width + margin-right
        }, {
            duration: 200, // Use a shorter duration for faster animation (400 milliseconds)
            easing: "linear" // Use "linear" easing function for constant speed
        });
    });

    $(".prev").on("click", function () {
        $(".scroll-container").animate({
            scrollLeft: "-=220" // Adjust according to your item width + margin-right
        }, {
            duration: 200, // Use a shorter duration for faster animation (400 milliseconds)
            easing: "linear" // Use "linear" easing function for constant speed
        });
    });
});


// login input field disabled
// Get the input field and the submit button
const inputField = document.getElementById('mobileNumber');
const submitButton = document.getElementById('submitButton');

// Add an event listener to the input field
// Function to check if the button should be enabled
function checkButtonStatus() {
    // Convert the input value to a string
    const inputValue = inputField.value.toString();

    // Check if the input length is 10 or more
    if (inputValue.length >= 10) {
        // Enable the submit button
        submitButton.disabled = false;
    } else {
        // Disable the submit button
        submitButton.disabled = true;
    }
}

// Add an event listener to the input field
inputField.addEventListener('input', checkButtonStatus);

// Check the button status when the page loads
checkButtonStatus();

// login input field disabled

// Mute unmute
var video = document.getElementById("bannerVideo");
var muteButton = document.getElementById("mute-button");
function toggleMute() {
    if (video.muted) {
        video.muted = false;
        muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        video.muted = true;
        muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
}

// Add click event listener to the mute button
muteButton.addEventListener("click", toggleMute);

// Mute unmute
