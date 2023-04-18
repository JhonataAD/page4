import React, { useState } from "react";


function Formulaio(){

    const [nome, setNome] =useState("");
    const [email, setEmail] =useState("");
    const [telefone, setTelefone] =useState("");
    const [mensagem, setMensagem] =useState("");

    function enviarFormulario(event){
        event.preventDefault();
        console.log("Formulário enviado!");
        
        const texto = `Nome: ${nome}\nE-mail ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;

        const numeroWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER; 
        const linkWhatsapp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
        window.open(linkWhatsapp, '_blank');
    }

    function mascaraTelefone(event){
        const texto = event.target.value;
        const textoApenasNumeros = texto.replace(/\D/g, '').substring(0, 11);
            let telefoneFormatado = textoApenasNumeros.replace(/(\d{2})(\d)/,"($1) $2");
            if(textoApenasNumeros.length <11){
                telefoneFormatado = textoApenasNumeros.replace(/(\d)(\d{4})$/,"$1-$2");
            }

            setTelefone(telefoneFormatado);
    }

    return(
    
        <div class="forms">
            <form id="ancora3" class="cont"  onSubmit={enviarFormulario}>
            
            <fieldset>
                <input class="forma" type="text" name="input-nome" id="input-nome" required minLength="2" placeholder="Nome"
                value ={nome}
                onChange={(event) => setNome(event.target.value)}
                /> 
            </fieldset>

            <fieldset>
                <br/>
                <input class="forma" type="email" name="input-email" id="input-email" required placeholder="E-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                /> 
            </fieldset>

            <fieldset>
                <br/>
                <input class="forma" type="tel" name="input-tel" id="input-tel" placeholder="(99) 99999-99999" required pattern="^\(\d{2}\) \d{5}-\d{4}$" maxLength="15"
                  value={telefone}
                  onChange={mascaraTelefone}
                  />
            </fieldset>

            <fieldset>
                <br/>
                <textarea class="forma" name="input-msg" id="input-msg" cols="30" rows="8" placeholder="Mensagem"
                 value={mensagem}
                 onChange={(event) => setMensagem(event.target.value)}
                ></textarea>
            </fieldset>

            <center>
                <input type="submit" value="Enviar" class="button1"/>
            </center>
            </form>
        </div>
        
    )
}

export default Formulaio;