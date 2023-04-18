import React from 'react'
 import fotoImg from './foto.png'

function corpo(){
    return(
        <section class="background-color-sobre">
        <div class="container_main">
            <div class="main-img">
                 <img src={fotoImg}alt=""/>
            </div>
            <div class="main-sobre">
                <div class="text-sobre">
                    <h2 id="ancora1">Sobre-Mim</h2>
                    <h5>Desenvolvedor <span>& Editor</span></h5>
                    <p>Cursando Bacharelado em Sistemas de Informação (SI), sou um programador ávido por aprendizado. Sempre busco novas formas de resolver problemas e aprimorar minhas habilidades. Atualmente, estou estudando JavaScript, CSS, HTML, SQL Server e COBOL, além de possuir conhecimentos na área de edição de mídeas.</p>
                    <button class="button"><a class="link--underline" href="https://github.com/JhonataAD?tab=repositories" target="_blank"> Acesse meu repositório &#x1F44D;</a></button>
                </div>
            </div>
        </div>
    </section>
    ) 
}

export default corpo;
