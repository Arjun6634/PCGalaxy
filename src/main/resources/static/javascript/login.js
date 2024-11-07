const wrapper = document.querySelector('.wrapper');
const registerlink = document.querySelector('.register-link');
const loginlink = document.querySelector('.login-link');

registerlink.addEventListener('click', () =>{
    wrapper.classList.add('animate-login');
    wrapper.classList.remove('animate-register');
})

loginlink.addEventListener('click', () =>{
    wrapper.classList.add('animate-register');
    wrapper.classList.remove('animate-login');
})