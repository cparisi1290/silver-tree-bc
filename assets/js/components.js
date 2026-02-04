// Function to load HTML components
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${filePath}:`, error);
    }
}

// Load navigation and footer
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('nav-placeholder', './components/nav.html');
    loadComponent('footer-placeholder', './components/footer.html');
});
