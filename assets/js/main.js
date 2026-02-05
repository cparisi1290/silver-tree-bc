document.addEventListener("DOMContentLoaded", () => {
    const badgeContainer = document.querySelector(".badges");
    const badges = Array.from(document.querySelectorAll(".badges img"));

    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Animate badges from left to right (original order)
                badges.forEach((badge, index) => {
                    setTimeout(() => {
                        badge.classList.add("reveal");
                    }, index * 150); // 150ms stagger between each badge
                });

                // Stop observing once the animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(badgeContainer);
});


//  SERVICES PAGE
// Tab switching functionality for services page
function openService(evt, serviceName) {
    var i, panels, btns;

    // Hide all panels
    panels = document.getElementsByClassName("tabs-panel");
    for (i = 0; i < panels.length; i++) {
        panels[i].classList.remove("active");
        panels[i].style.display = "none";
    }

    // Remove active class from all buttons
    btns = document.getElementsByClassName("services-tab-btn");
    for (i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active");
    }

    // Show selected panel and activate button
    var targetPanel = document.getElementById(serviceName);
    if (targetPanel) {
        targetPanel.classList.add("active");
        targetPanel.style.display = "block";
        evt.currentTarget.classList.add("active");
    }
}
