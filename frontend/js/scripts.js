document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.newsletter-form');
  
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value;
    
        if (email) {
            alert(`Obrigado por se inscrever! E-mail: ${email}`);
            emailInput.value = '';
        }
    });
});
