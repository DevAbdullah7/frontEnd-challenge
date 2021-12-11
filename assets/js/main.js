let loginBtn = document.querySelector('.Login');
let loginForm = document.querySelector('.loginForm')
let singupBtn = document.querySelector('.Singup');
let singupForm = document.querySelector('.singupForm')
if (window.localStorage.hasOwnProperty('mood')) {
    if (localStorage.valueOf('mood').mood !== 'login') {
        singup();
    } else {
        login();
    }
} else {
    singup()
}
loginBtn.onclick = function () {
    login()
}
singupBtn.onclick = function () {
    singup()
}
function login() {
    window.localStorage.setItem('mood', 'login')
    loginBtn.classList.add('activate')
    loginForm.classList.add('activate')
    singupBtn.classList.remove('activate')
    singupForm.classList.remove('activate')
}
function singup() {
    window.localStorage.setItem('mood', 'signup')
    loginBtn.classList.remove('activate')
    loginForm.classList.remove('activate')
    singupBtn.classList.add('activate')
    singupForm.classList.add('activate')
}