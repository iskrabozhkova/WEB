const errorEl = document.getElementsByClassName('error');
const successEl = document.getElementById('success');

const checkUserName = username =>{
    if(username.length < 3 || username.length > 10){
        errorEl[0].innerText = "Невалидно потребителско име"
        return false;
    }
    return true;
}
const checkName = name => {
    if(name.length > 50){
        errorEl[1].innerText = "Невалидно име"
        return false;
    }
    return true;
}
const checkFamilyName = name => {
    if(name.length > 50){
        errorEl[2].innerText = "Невалидно фамилно име"
        return false;
    }
    return true;
}
const checkEmail = email => {
    const validEmailRegex = /\S+@\S+\.\S+/;
    if(!validEmailRegex.test(email)){
            errorEl[3].innerText = "Невалидно поле за e-mail"
        return false;
    }
    return true;
}
 const checkPassword = password => {
     const validPasswordRegex = /^[a-zA-Z0-9]+$/;
     if(!validPasswordRegex.test(password)  || password.length < 6 || password.length > 10){
         errorEl[4].innerText = "Невалидно поле за парола"
         return false;
     }
     return true;
 }
const checkPostCode = postCode => {
    const postCodeRegex = /^([[0-9]{4})$|^([0-9]{5}-[0-9]{4})$/;
    if(!postCodeRegex.test(postCode)){
        errorEl[7].innerText = "Невалидно поле за пощенски код"
        return false;
    }
    return true;
}

(() => {
    const registerBtn = document.getElementById('register-btn');

    registerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const errorEl = document.getElementsByClassName('error');
        const successEl = document.getElementById('success');
        errorEl.innerText=null;

        const username = document.getElementById('username').value;
        const name = document.getElementById('name').value;
        const familyName = document.getElementById('family-name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const postCode = document.getElementById('postal-code').value;

        fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(data => {
                        checkUserName(username);
                        checkName(name);
                        checkFamilyName(familyName);
                        checkEmail(email);
                        checkPassword(password);
                        checkPostCode(postCode);
                        if(checkUserName(username) && checkName(name) && checkFamilyName(familyName) &&  checkEmail(email) &&  checkPassword(password) 
                            && checkPostCode(postCode)){
                            if(data.some(e => e.username === username)){
                                errorEl[8].innerText = "Съществува потребител с това потребителско име";
                             }else{
                                successEl.innerText = "Успешна регистрация!";
                             }
                        }  
            })}       
    );
})();