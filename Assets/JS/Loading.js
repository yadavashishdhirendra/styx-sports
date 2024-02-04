document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll('.skeleton-container');

    function showContent(containerId, timeout) {
        const skeletonContainer = document.querySelector(`[data-container-id="${containerId}"]`);
        const contentContainer = document.getElementById(containerId);

        // Simulate delay for demonstration purposes
        setTimeout(function () {
            // Hide skeleton and show content
            skeletonContainer.style.display = "none";
            contentContainer.style.display = "block";
        }, timeout);
    }

    containers.forEach(container => {
        const containerId = container.getAttribute('data-container-id');
        const timeout = parseInt(container.getAttribute('data-timeout')) || 2000; // Default to 2000 if not specified
        showContent(containerId, timeout);
    });
});