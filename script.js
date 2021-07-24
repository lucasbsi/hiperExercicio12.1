var a = prompt("Digite o e-mail para validar");
        //validateEmail(a);
        function validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
        alert(validateEmail(a) ? ("E-mail Validado") : ("E-mail Não validado"));
        // console.log(validateEmail('texto@texto.com')); // true
        // console.log(validateEmail('texto@texto')); // false
        // console.log(validateEmail('texto.com')); // false
        // console.log(validateEmail('texto')); // false