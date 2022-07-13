// Veidoja: Johans Justs Eris, je21033

window.addEventListener('DOMContentLoaded', (event) => {
// Fucntion for forms validation and error message production.
    function forms_validation(){
        const fname = document.getElementById('fname');
        const lname = document.getElementById('lname'); 
        const age = document.getElementById('age');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const review = document.getElementById('review');
        const form = document.getElementById('form');
        const errorElement = document.getElementById('error');
        form.addEventListener('submit', (e) => {

            //Check each form input seperately, so as to provide the user with helpful error messages.
            let messages = [];
            if (fname.value === '' || fname.value == null ){
                messages.push('First name is required');
            }
            if (lname.value === '' || lname.value == null ){
                messages.push('Last name is required');
            }
            if (age.value<18){
                messages.push('Age must be at least 18');
            }
            else if (age.value>125){
                messages.push('Age must be under 125');
            }
            if (email.value === '' || email.value == null){
                messages.push('Email is required');
            }
            if (password.value === '' || password.value == null){
                messages.push('Password is required');
            }
            if (password.value.length < 10){
                messages.push('10 characters minimum');
            }
            if (review.value.length>200){
                messages.push("Review is "+(review.value.length-200)+' characters too long');
            }
            // Produces an error message.
            if (messages.length > 0){
                e.preventDefault();
                // errorElement.innerText = messages.join(', ')+'!';
                errorElement.innerText = messages[0]+"!";
            }     
        }) 
    }
    document.getElementById("submit").addEventListener('click', forms_validation);

    // Function to display more info, when a certain heading is clicked.
    function more_info(){
        const information = document.getElementById('investopedia');
        information.style.display = "contents";
    }
    document.getElementById("start").addEventListener('click', more_info);

    // Function that creates a new DOM element.
    function new_dom(){
        const p = document.createElement("p");
        const txt = document.createTextNode("Bitcoin is cool :D");
        p.appendChild(txt);
        const footer_content = document.getElementById("footer_content");
        footer_content.appendChild(p);
    }
    document.getElementById("info").addEventListener('click', new_dom);
})