document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signup");
  const successMessage = document.getElementById("success");

  
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (successMessage) {
      successMessage.style.display = "block";
    }

    if (signupForm) {
      signupForm.style.display = "none";
    }
  });


  window.dismissSuccessMessage = function() {
    if (successMessage) {
      successMessage.style.display = 'none';
    }

    const signin = document.getElementById('signin');
    if (signin) {
      signin.style.display = 'block';
    }
  };
 document.getElementById('email').addEventListener('input', function () {
            var emailInput = this.value;
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailRegex.test(emailInput)) {
                document.getElementById('error-message').style.display = 'none';
            } else {
                document.getElementById('error-message').style.display = 'block';
                document.getElementById('email').style.backgroundColor = 'hsl(0, 100%, 96%)';
                document.getElementById('email').style.color = 'hsl(4, 100%, 67%)';
                document.getElementById('email').style.border = '1px solid hsl(4, 100%, 67%)';
            }
        });
});