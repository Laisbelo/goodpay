//Declaração das variáveis da página novaSenha
let novaSenha;
let novaSenha2;
let btnNovaSenha;

novaSenha = document.getElementById('novaSenha');
novaSenha2 = document.getElementById('novaSenha2');
btnNovaSenha = document.getElementById('btnNovaSenha');

//Evento ao clicar no botão da página nova senha

btnNovaSenha.addEventListener('click', () => {
    
    if(novaSenha.value === novaSenha2.value){
        alert('Senha alterada com sucesso');
        window.location.href='/index.html'
    } else{
        alert('Senhas não são iguais')
    }
    
});