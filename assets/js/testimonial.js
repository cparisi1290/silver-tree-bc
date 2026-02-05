// Alpine.js Testimonial Component
function testimonialSlider() {
    return {
        testimonials: [
            {
                quote: "I recently connected with Ruth, and even though we've only known each other a short time, it's easy to see why she receives such outstanding recommendations. I took the time to read through several of them, and it's clear they weren't given lightly. The consistency and sincerity in what others say about her speak volumes. From what I've seen so far, Ruth truly reflects the professionalism and dedication people describe. I'm looking forward to getting to know her better and seeing more of the impact she makes in our business community.",
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
                quote: "Ruth's energy and kindness really shine through in everything she does. Her recognition as Local Business of the Year and one of the Top 20 Businesses is so well-deserved! I truly admire how Ruth uplifts others, shares valuable insights, and brings such a positive spirit to the Alignable community. She's the kind of person who makes this platform better for everyone.",
                name: "FM",
                title: "TekCheck Computer Services",
                image: "./assets/images/tekcheck-computer-services.png"
            }
        ],
        currentIndex: 0,
        isTransitioning: false,
        
        get currentTestimonial() {
            return this.testimonials[this.currentIndex];
        },
        
        nextTestimonial() {
            this.isTransitioning = true;
            setTimeout(() => {
                this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
                this.isTransitioning = false;
            }, 150);
        },
        
        previousTestimonial() {
            this.isTransitioning = true;
            setTimeout(() => {
                this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
                this.isTransitioning = false;
            }, 150);
        }
    }
}
