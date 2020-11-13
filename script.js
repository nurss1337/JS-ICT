let regisBtn = document.querySelector('#register'), 
                nameInput = document.querySelector('#name'),
                ageInput = document.querySelector('#age'),
                passInput = document.querySelector('#password'),
                errortext = document.querySelector('.error');


regisBtn.addEventListener('click', function() {
    s = ' ';
    s = s.replace(/^\s+|\s+$/g, '');
    if(document.getElementById("name").value == s || document.getElementById("age").value == s || document.getElementById("password").value == s ) {
        errortext.style.display = 'flex';
    } else {
        alert('Вы зарегистрировались!');
    }
});



