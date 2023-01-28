window.addEventListener('load', () => {
    const nav = document.querySelector('nav');

    const showButton = document.getElementById('show-button');
    const hideButton = document.getElementById('hide-button');

    if (nav.style.display === 'none') { hideButton.disabled = true; }
    else { showButton.disabled = true; }

    document.querySelector(".show-animation").addEventListener("click", event => {
        const id = event.target.id;

        if (id == "show-button") {
            nav.style.display = 'block';
            hideButton.disabled = false;
            showButton.disabled = true;

        } else if (id == "hide-button") {
            nav.style.display = 'none';
            showButton.disabled = false;
            hideButton.disabled = true;

        }
    });

});