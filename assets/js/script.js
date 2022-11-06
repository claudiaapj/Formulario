function oculta(){
    const eye = document.getElementById("eye");
    const eyeSlah = document.getElementById("eye-slash");
    const password = document.getElementById("password");

    if(eye.style.display == 'none'){
        eye.style.display = 'block';
        eyeSlah.style.display = 'none';
        password.type = 'text';
    }else{
        eye.style.display = 'none';
        eyeSlah.style.display = 'block';
        password.type = 'password';
    }
}
document.getElementById("btn-login").addEventListener('click', function(e){
    e.preventDefault();
})