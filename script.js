
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let message = document.getElementById('message').value;
            let errorMessage = '';
            
            if (name.trim() === '') {
                errorMessage += 'Please enter your name.<br>';

                
            }
            
            if (email.trim() === '') {
                errorMessage += 'Please enter your email.<br>';
            } else if (!email.includes('@') || !email.includes('.')) {
                errorMessage += 'Please enter a valid email address.<br>';


                 

            }
            
            if (message.trim() === '') {
                errorMessage += 'Please enter your message.<br>';
            }
            
            const formMessage = document.getElementById('formMessage');
            
            if (errorMessage === '') {
                formMessage.innerHTML = '<div class="alert alert-success">Thank you! We\'ll get back to you soon.</div>';
                contactForm.reset();
            } else {
                formMessage.innerHTML = '<div class="alert alert-danger">' + errorMessage + '</div>';
            }
        });
    }
});