// Function to load HTML components
async function loadComponent(elementId, filePath) {
    try {
        console.log(`Loading component: ${filePath}`);
        const response = await fetch(filePath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        console.log(`Component loaded: ${filePath}`);
    } catch (error) {
        console.error(`Error loading component ${filePath}:`, error);
    }
}

// Load navigation, testimonial, CTA, and footer
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, starting component loading...');
    loadComponent('nav-placeholder', './components/nav.html');
    loadComponent('testimonial-placeholder', './components/testimonial.html');
    loadComponent('cta-placeholder', './components/cta.html');
    loadComponent('footer-placeholder', './components/footer.html');
});
