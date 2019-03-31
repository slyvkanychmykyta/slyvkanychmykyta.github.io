(function validateForm () {
    var userName = document.querySelector('.input-name');
    var userEmail = document.querySelector('.input-email');
    var userPassword = document.querySelector('.input-password');
    var buttonSubmit = document.querySelector('.button-submit');
    var checkAge = document.querySelector('.input-check');

    var nameFlag = false;
    var emailFlag = false;
    var passwordFlag = false;
    
    var validateName = function  (evt) {
        var REG_EXP_NAME = /^[a-zA-Zа-яА-Я]+$/;

        if (userName.value && userName.value.length > 1 && REG_EXP_NAME.test(userName.value)) {
            return nameFlag = true;
        } else {
            userName.classList.add('input-invalid');
            userName.setAttribute('placeholder', 'Введите свое имя');
        }
    }

    var validateEmail = function (evt) {
        var REG_EXP_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (userEmail.value && REG_EXP_EMAIL.test(userEmail.value)) {
            return emailFlag = true;
        } else {
            userEmail.classList.add('input-invalid');
            userEmail.setAttribute('placeholder', 'Введите свой e-mail');
        }
    }

    var validatePassword = function (evt) {
        var REG_EXP_PASSWORD = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

        if (userPassword.value && REG_EXP_PASSWORD.test(userPassword.value)) {
            return passwordFlag = true;
        } else {
            userPassword.classList.add('input-invalid');
            userPassword.setAttribute('placeholder', 'Введите пароль');
        }
    }

    userName.addEventListener('focus', function () {
        userName.classList.remove('input-invalid');
        userName.removeAttribute('placeholder');
        nameFlag = false;
    });

    userEmail.addEventListener('focus', function () {
        userEmail.classList.remove('input-invalid');
        userEmail.removeAttribute('placeholder');
        emailFlag = false;
    });
    
    userPassword.addEventListener('focus', function () {
        userPassword.classList.remove('input-invalid');
        userPassword.removeAttribute('placeholder');
        passwordFlag = false;
    });
     
    buttonSubmit.addEventListener('click', function (evt) {
        validateName();
        validateEmail();
        validatePassword();

        if (!nameFlag || !emailFlag || !passwordFlag || !checkAge.hasAttribute('checked')) {
            evt.preventDefault();
        }
    }); 
})();






