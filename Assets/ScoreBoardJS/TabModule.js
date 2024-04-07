// Main tab module
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('section[class$="-wrapper"]');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            sections.forEach(section => {
                if (section.classList.contains(tabName + '-wrapper')) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
            tabs.forEach(t => t.classList.remove('info-active'));
            tab.classList.add('info-active');
        });
    });
});
// Main tab module

// opponent change tab module
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.opponent');
    const sections = document.querySelectorAll('section[class$="-info"]');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.opponent;
            sections.forEach(section => {
                if (section.classList.contains(tabName + '-info')) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
            tabs.forEach(t => t.classList.remove('opponent-active'));
            tab.classList.add('opponent-active');
        });
    });
});
// opponent change tab module

// Commentary change tab module
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.comment');
    const sections = document.querySelectorAll('section[class$="-infos"]');

    console.log(sections)

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.comment;
            console.log(tabName)
            sections.forEach(section => {
                if (section.classList.contains(tabName + '-infos')) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
            tabs.forEach(t => t.classList.remove('commentary-active'));
            tab.classList.add('commentary-active');
        });
    });
});
// Commentary change tab module


// Playing Tab Module 
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.players');
    const sections = document.querySelectorAll('section[class$="-inf"]');

    console.log(sections)

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.players;
            console.log(tabName)
            sections.forEach(section => {
                if (section.classList.contains(tabName + '-inf')) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
            tabs.forEach(t => t.classList.remove('playing-active'));
            tab.classList.add('playing-active');
        });
    });
});
// Playing Tab Module

function openBenchPlayer() {
    var toggle = document.getElementById('onBench')
    var chevron = document.getElementById('chevron');
    if (toggle.style.display === "none") {
        toggle.style.display = 'block'
        chevron.classList.add('rotate');
    }
    else {
        toggle.style.display = 'none'
        chevron.classList.remove('rotate')
    }
}