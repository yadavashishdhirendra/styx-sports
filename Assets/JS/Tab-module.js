function handleActives(tabIndex) {
    // Get all elements with class 'active-tab'
    var activeTabs = document.querySelectorAll('.active-tabs');

    // Remove 'active-tab' class from all elements
    activeTabs.forEach(function (tab) {
        tab.classList.remove('active-tabs');
    });

    // Add 'active-tab' class to the clicked element's parent div
    event.target.closest('div').classList.add('active-tabs');


    // Hide all tab contents
    var tabContents = document.querySelectorAll('.tab-contents');
    tabContents.forEach(function (content) {
        content.style.display = 'none';
    });

    // Show the corresponding tab content
    var tabContent = document.getElementById('tabs' + tabIndex + 'Content');
    if (tabContent) {
        tabContent.style.display = 'block';
    }
}



function handleActive(tabIndex) {
    // Get all elements with class 'active-tab'
    var activeTabs = document.querySelectorAll('.active-tab');

    // Remove 'active-tab' class from all elements
    activeTabs.forEach(function (tab) {
        tab.classList.remove('active-tab');
    });

    // Add 'active-tab' class to the clicked element's parent div
    event.target.closest('div').classList.add('active-tab');


    // Hide all tab contents
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function (content) {
        content.style.display = 'none';
    });

    // Show the corresponding tab content
    var tabContent = document.getElementById('tab' + tabIndex + 'Content');
    if (tabContent) {
        tabContent.style.display = 'block';
    }
}