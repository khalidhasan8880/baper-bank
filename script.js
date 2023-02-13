// step 1 - select all tags
const email = document.getElementById('email-input');
const password = document.getElementById('password-input');
const sumit = document.getElementById('submit');
// step 2 - add event with submit btn
sumit.addEventListener('click', function(){
    if (email.value== 'khalid@gmail.com' && password.value == 'passwordnai' && email.value.includes('gmail') == true) {
        window.location.href = 'diposite.html'
    }
   
    else {
        console.log('your email and password not matched');
    }
})
