import usuarios from './usuarios.js';

//Declaração das variáveis da página recuperar senha
let recuperarUsuario;
let recuperarEmail;
let btnRecuperarSenha;

recuperarUsuario = document.getElementById('recuperarUsuario');
recuperarEmail = document.getElementById('recuperarEmail');
btnRecuperarSenha = document.getElementById('btnRecuperarSenha');




// Evento ao clicar no botão da página recuperar senha

btnRecuperarSenha.addEventListener('click', () => {
    let usuarioRecuperado = usuarios.find((usuario) => 
    usuario.nomeUsuario === recuperarUsuario.value 
    && usuario.email === recuperarEmail.value);
    
    if (usuarioRecuperado) {
        window.location.href='/novaSenha.html'
    } else {
        alert(`usuário não encontrado`)
    }

}); 

