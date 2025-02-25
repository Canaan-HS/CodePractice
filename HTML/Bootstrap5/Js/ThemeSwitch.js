const homeElement = document.getElementById('Home1');
const themeContainer = document.getElementById('Themebox');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            themeContainer.classList.remove('Theme-color-hide');
            themeContainer.classList.add('TheTcs-hide');
        } else {
            themeContainer.classList.remove('TheTcs-hide');
            themeContainer.classList.add('Theme-color-hide');
        }
    });
}, { threshold: 0 });
observer.observe(homeElement);

function toggleDarkMode() {
    var body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("white")) {
        return;
    }
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    var elements = document.querySelectorAll('body *:not(script):not(style):not(br):not(hr)');
    for (var i = 0; i < elements.length; i++) {
        var color = window.getComputedStyle(elements[i]).color;
        if (color === 'rgb(0, 0, 0)') {
            elements[i].style.color = 'white';
        }
    } toggleButtonStates();
}

function toggleLightMode() {
    var body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("black")) {
        return;
    }
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    var elements = document.querySelectorAll('body h2,h3,h4,h5,h6,p,th,label');
    for (var i = 0; i < elements.length; i++) {
        var color = window.getComputedStyle(elements[i]).color;
        elements[i].style.color = 'rgb(0, 0, 0)';
    } toggleButtonStates();
}

function toggleButtonStates() {
    var darkButton = document.getElementById("dark-button");
    var lightButton = document.getElementById("light-button");
    var body = document.getElementsByTagName("body")[0];

    if (body.classList.contains("dark-mode")) {
        darkButton.disabled = true;
        lightButton.disabled = false;
    } else {
        darkButton.disabled = false;
        lightButton.disabled = true;
    }
}