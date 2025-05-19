document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validate form
        if (!validateForm(name, email, subject, message)) {
            return;
        }
        
        // Simulate form submission
        showSubmissionStatus('Sending message...', 'info');
        
        // Simulate API call
        setTimeout(() => {
            showSubmissionStatus('Message sent successfully!', 'success');
            contactForm.reset();
        }, 1500);
    });
    
    function validateForm(name, email, subject, message) {
        // Reset previous error messages
        clearErrors();
        
        let isValid = true;
        
        // Validate name
        if (name.length < 2) {
            showError('name', 'Name must be at least 2 characters long');
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate subject
        if (subject.length < 3) {
            showError('subject', 'Subject must be at least 3 characters long');
            isValid = false;
        }
        
        // Validate message
        if (message.length < 10) {
            showError('message', 'Message must be at least 10 characters long');
            isValid = false;
        }
        
        return isValid;
    }
    
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
        field.classList.add('error');
    }
    
    function clearErrors() {
        // Remove all error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());
        
        // Remove error class from inputs
        const errorInputs = document.querySelectorAll('.error');
        errorInputs.forEach(input => input.classList.remove('error'));
    }
    
    function showSubmissionStatus(message, type) {
        // Remove existing status message if any
        const existingStatus = document.querySelector('.submission-status');
        if (existingStatus) {
            existingStatus.remove();
        }
        
        // Create new status message
        const statusDiv = document.createElement('div');
        statusDiv.className = `submission-status ${type}`;
        statusDiv.textContent = message;
        
        // Insert status message after the form
        contactForm.parentNode.insertBefore(statusDiv, contactForm.nextSibling);
        
        // Remove status message after 3 seconds
        setTimeout(() => {
            statusDiv.remove();
        }, 3000);
    }
}); 