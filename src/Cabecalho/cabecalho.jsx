import React from "react";


function cabecalho(){
    return(
        <div class="background">
      
        <nav>
            <h2>Portfo<span>lio</span></h2>
            
            <ul class="cabeçalho-link">
                <li><a href="#ancora0">Inicio</a>  | <a href="#Jhonata"></a></li>
                <li><a href="#ancora1">Sobre-Mim</a>  |<a href="#Sobre-Mim"></a></li>
                <li><a href="#ancora2">Projetos</a>|<a href="#Meus Projetos"></a></li>
                <li><a href="#ancora3">Contato</a> | <a href="#Email: exemplo@outlook.com"></a></li>
            </ul> 
            <a href="https://github.com/JhonataAD" target="_blank" class="btn1">GitHub</a>
        </nav>
      
        <div class="main">
            <h4>Olá, meu nome é</h4>
            <h1 id="ancora0">Jhonata<span>'Oliveira</span></h1>    
        </div>
    </div>
    
    )
}

export default cabecalho;