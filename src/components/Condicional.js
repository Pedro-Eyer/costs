
function Condicional() {

    function enviarEmail(event) { 
        event.preventDefault();
        console.log('Email enviado com sucesso!');
        
    }


    return (
        <div>
            <h2>Cadastre seu e-mail:</h2>
            <form>
                <input type='email' placeholder='Digite seu e-mail' />
                <button type="submit" onClick={enviarEmail}>Enviar email</button>
            </form>
            
        </div>
    )

}
export default Condicional;