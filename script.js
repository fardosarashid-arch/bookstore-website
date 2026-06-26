
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

                const fullName = document.getElementById('fullName').value.trim();
            const namePattern = /^[a-zA-Z\s']+$/; // Regular expression for validating full name (letters, spaces, and apostrophes)
            if (fullName === '') { // Check if the full name is empty
                document.getElementById('fullNameError').textContent = 'Full Name is required.';
                isValid = false;
            }else if(fullName.length < 3){ // Check if the full name is less than 3 characters
                document.getElementById('fullNameError').textContent = 'Full Name must be at least 3 characters long.';
                isValid = false;
            }else if(!namePattern.test(fullName)){ // Check if the full name contains only letters, spaces, and apostrophes
                document.getElementById('fullNameError').textContent = 'Full Name can only contain letters, spaces, and apostrophes.';
                isValid = false;
            }
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