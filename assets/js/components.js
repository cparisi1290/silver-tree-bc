// Function to load HTML components
async function loadComponent(elementId, filePath) {
    try {
        console.log(`Loading component: ${filePath}`);
        // Add aggressive cache-busting with timestamp and random number
        const cacheBuster = `?v=${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const response = await fetch(filePath + cacheBuster);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;

        // Force browser to re-evaluate the component
        if (window.Alpine && window.Alpine.version) {
            console.log('Re-initializing Alpine.js after component load...');
            setTimeout(() => {
                window.Alpine.start();
            }, 100);
        }

        console.log(`Component loaded: ${filePath}`);
    } catch (error) {
        console.error(`Error loading component ${filePath}:`, error);
    }
}

// Load navigation, testimonial, CTA, and footer
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, starting component loading...');
    loadComponent('nav-placeholder', './components/nav.html');
    loadComponent('testimonial-placeholder', './components/testimonial.html');
    loadComponent('cta-placeholder', './components/cta.html');
    loadComponent('footer-placeholder', './components/footer.html');
});
