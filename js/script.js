document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById("contactForm");

    if(form){
        form.addEventListener("submit", function(e){
            e.preventDefault(); // Prevent page reload

            // Show thank-you message
            const thankYou = document.getElementById("thankYou");
            thankYou.style.display = "block";

            // Clear form fields
            form.reset();
        });
    }

});