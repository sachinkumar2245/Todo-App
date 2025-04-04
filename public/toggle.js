const toggle = document.querySelector('span');
const body = document.querySelector('body');

// Initial setup based on default mode (assuming starting in light mode)
if (!body.classList.contains('light-mode')) {
    body.classList.add('light-mode');
}
updateTheme();

toggle.addEventListener('click', () => {
    // Toggle the light-mode class
    body.classList.toggle('light-mode');
    
    // Update the theme based on the current state
    updateTheme();
});

function updateTheme() {
    const isLightMode = body.classList.contains('light-mode');
    
    // Update text content
    toggle.textContent = isLightMode ? 'Dark Mode' : 'Light Mode';
    
    // Clear any existing theme classes from toggle
    toggle.classList.remove('light-toggle', 'dark-toggle');
    
    // Apply appropriate classes
    if (isLightMode) {
        body.classList.remove('dark-theme');
        toggle.classList.add('dark-toggle');
    } else {
        body.classList.add('dark-theme');
        toggle.classList.add('light-toggle');
    }
}