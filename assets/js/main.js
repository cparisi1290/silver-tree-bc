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


// Testimonial data
const testimonials = [
    {
        quote: "I recently connected with Ruth, and even though we’ve only known each other a short time, it’s easy to see why she receives such outstanding recommendations. I took the time to read through several of them, and it’s clear they weren’t given lightly. The consistency and sincerity in what others say about her speak volumes. From what I’ve seen so far, Ruth truly reflects the professionalism and dedication people describe. I’m looking forward to getting to know her better and seeing more of the impact she makes in our business community.",
        name: "SP",
        title: "Kaizen Forward Solutions, Inc.",
        image: "./assets/images/kaizen-forward-solutions.jpg"
    },
    {
        quote: "Her dedication to supporting the business community shines through in everything she does, from her comprehensive service offerings to her regular 'Limelight' series where she highlights other exceptional business owners. If you're looking for someone who is truly great at what they do, extremely helpful, and genuinely invested in your success, I highly recommend connecting with Ruth. She's the real deal!",
        name: "HP",
        title: "HMF Balling, Inc.",
        image: "./assets/images/hmf-balling.png"
    },
    {
        quote: "Ruth’s energy and kindness really shine through in everything she does. Her recognition as Local Business of the Year and one of the Top 20 Businesses is so well-deserved! I truly admire how Ruth uplifts others, shares valuable insights, and brings such a positive spirit to the Alignable community. She’s the kind of person who makes this platform better for everyone.",
        name: "FM",
        title: "TekCheck Computer Services",
        image: "./assets/images/tekcheck-computer-services.png"
    },
    /* {
        quote: "The strategic insights and implementation support from Silver Tree helped us scale our operations efficiently. Highly recommend their consulting services!",
        name: "Michael Chen",
        title: "Operations Manager, GlobalTech",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800"
    } */
];

let currentTestimonial = 0;

// DOM elements
const quoteIcon = document.querySelector('.quote-icon');
const quoteText = document.querySelector('.testimonial-content blockquote');
const authorName = document.querySelector('.testimonial-author strong');
const authorTitle = document.querySelector('.testimonial-author small');
const testimonialImage = document.querySelector('.testimonial-image img');
const prevButton = document.querySelector('.arrow-button.prev');
const nextButton = document.querySelector('.arrow-button.next');

// Function to update testimonial display
function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    
    // Add fade effect
    const testimonialContent = document.querySelector('.testimonial-content');
    const imageContainer = document.querySelector('.testimonial-image');
    
    testimonialContent.style.opacity = '0';
    imageContainer.style.opacity = '0';
    
    setTimeout(() => {
        // Update content
        quoteText.textContent = testimonial.quote;
        authorName.textContent = testimonial.name;
        authorTitle.textContent = testimonial.title;
        testimonialImage.src = testimonial.image;
        testimonialImage.alt = testimonial.name;
        
        // Fade back in
        testimonialContent.style.opacity = '1';
        imageContainer.style.opacity = '1';
    }, 300);
}

// Function to go to previous testimonial
function previousTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
}

// Function to go to next testimonial
function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}

// Event listeners
if (prevButton) {
    prevButton.addEventListener('click', previousTestimonial);
}

if (nextButton) {
    nextButton.addEventListener('click', nextTestimonial);
}

// Add transition styles
const style = document.createElement('style');
style.textContent = `
    .testimonial-content {
        transition: opacity 0.3s ease-in-out;
    }
    .testimonial-image {
        transition: opacity 0.3s ease-in-out;
    }
`;
document.head.appendChild(style);

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateTestimonial();
});