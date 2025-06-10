import { useState } from 'react';

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`);
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();


    return (
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlForm="name">Nome:</label>
                    <input type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlForm="password">Senha:</label>
                    <input type="password" id="password" name="name" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>

    )
}

export default Form;