const toggle = document.querySelector('span');
const body = document.querySelector('body');

toggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.style.backgroundColor = '#222'; // Dark mode
        body.style.color = "white";
        toggle.classList.remove('bg-color');
        toggle.style.backgroundColor = 'white'
        toggle.style.color = 'black'
        toggle.innerHTML = 'Light Mode';
    } else {
        body.classList.add('light-mode');
        toggle.classList.remove('bg-color');
        body.style.backgroundColor = '#FAF9F6'; // Light mode
        body.style.color = 'black'
        toggle.style.backgroundColor = 'black'
        toggle.style.color = 'white'
        toggle.innerHTML = 'Dark Mode';
    }
});
