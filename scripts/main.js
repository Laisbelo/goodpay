

//Banco de dados fake

const usuarios = [
    {nomeUsuario: "Kotaro",
    email: "gatinhokotaro@hotmail.com",
    senha: "12345",
    },
    {
    nomeUsuario:"Lais",
    email:"lais_b21@hotmail.com",
    senha:"12345",
    }
]

//Dados de entrada de login
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");

//Botão de entrar
const btnEntrar = document.getElementById("btn-entrar")

//Ouvinte de evento (temos que saber qual o evento e o que acontece quando ele ocorre)
btnEntrar.addEventListener("click",() => {
    //1) Capturar os dados dos campos 
    const email = campoEmail.value;
    const senha = campoSenha.value;
    //2)Checar no array se existe usuario com email digitado
    //find => percore o array ate encontrar o elemento que satisfaz a condição(retorna o elemento encontrado)
                      // procurar no array usuários// nome da função => dentro do objeto email === email digitado no campo 
    let usuarioValido = usuarios.find((usuario => usuario.email === email)) //verifica se o email digitado esta igual ao email do banco de dados
    console.log(usuarioValido);

    if(usuarioValido !== undefined){
        if(usuarioValido.senha ===senha) {
            window.location.pathname = '/app.html'
        } else{
            alert("Senha incorreta");
        }
        //o usuário existe
        console.log("O usuário existe");
    } else {
        //o usuário não existe
        alert("Usuário não existe");
    }
    //3)Checar se a senha é correta
})