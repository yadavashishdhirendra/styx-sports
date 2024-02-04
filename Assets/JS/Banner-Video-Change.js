function changeVideo(newSrc) {
    console.log(newSrc)
    var video = document.getElementById('bannerVideo_html5_api');
    video.src = newSrc;
}


// full screen video player
document.getElementById('watchNowBtn').addEventListener('click', function () {
    var video = document.getElementById('bannerVideo');
    var player = videojs('bannerVideo');


    // Pause the video initially
    // if (video.requestFullscreen) {
    //     video.requestFullscreen();
    //     player.play();
    // } else if (video.mozRequestFullScreen) {
    //     video.mozRequestFullScreen();
    //     player.play();
    // } else if (video.webkitRequestFullscreen) {
    //     video.webkitRequestFullscreen();
    //     player.play();
    // } else if (video.msRequestFullscreen) {
    //     video.msRequestFullscreen();
    //     player.play();
    // }
});




// video js library
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the video player
    var player = videojs('bannerVideo');

    // Pause the video initially
    // player.pause();
});


// loader for commentary section


// Show loader
function showLoader() {
    var loaderContainers = document.querySelectorAll('.loader-container');
    loaderContainers.forEach(function (container) {
        container.classList.add('loading');
    });
}

// Hide loader
function hideLoader() {
    var loaderContainers = document.querySelectorAll('.loader-container');
    loaderContainers.forEach(function (container) {
        container.classList.remove('loading');
    });
}

// Show loader when fetching data
showLoader();

// Simulate data loading with setTimeout (Replace this with your actual data loading)
setTimeout(function () {
    // Hide loader when data is loaded
    hideLoader();
}, 5000);


// Hide show content when video is played
function hide() {
    var player = videojs('bannerVideo');
    var secondDiv = document.getElementById('left-scroll-hori')
    var firstDiv = document.getElementById('right-banner-title')
    var video_player = document.getElementById('video-overlay')
    var watchNowBtn = document.getElementById('watchNowBtn')
    var crossIcon = document.getElementById('cross')

    secondDiv.style.opacity = "0"
    firstDiv.style.opacity = "0"
    watchNowBtn.style.opacity = "0"
    player.muted(!player.muted());
    video_player.style.zIndex = '0'
    crossIcon.style.opacity = "1"
}

function show() {
    var player = videojs('bannerVideo');
    var secondDiv = document.getElementById('left-scroll-hori')
    var firstDiv = document.getElementById('right-banner-title')
    var video_player = document.getElementById('video-overlay')
    var watchNowBtn = document.getElementById('watchNowBtn')
    var crossIcon = document.getElementById('cross')

    secondDiv.style.opacity = "1"
    firstDiv.style.opacity = "1"
    watchNowBtn.style.opacity = "1"
    player.muted(!player.muted());
    video_player.style.zIndex = '1'
    crossIcon.style.opacity = "0"
}
