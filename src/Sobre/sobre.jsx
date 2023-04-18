import React from 'react'

function sobre(){
    return(
      <div class="container-servicos" >

      <div class="Title">
          <h2 id="ancora2">Meus Projetos</h2>
      </div>
          <div class="Caixa"> 
             
               <div class="Card">    
              <i class="fa-solid fa-calculator"></i>
               <h5>Cálculo de Média</h5>
               <p>Calcular a média dos alunos em uma instituição de ensino, a fim de proporcionar uma gestão mais eficiente e precisa das informações acadêmicas. </p>
                <button class="btn"><a class="link--underline" href="https://jhonataad.github.io/CalculoMedia/" target="_blank">Projeto 1</a></button> 
              </div> 

              <div class="Card">    
                  <i class="fa-solid fa-house-chimney-medical"></i>
                  <h5>Loja de Hardware </h5>
                  <p>Objetivo principal: Automatizar o cadastro de pets em uma clínica veterinária, buscando melhorar a eficiência e agilidade do atendimento aos clientes.</p>
                  <button class="btn"><a class="link--underline" href="https://github.com/JhonataAD/ProjetoWebLH-Pets" target="_blank">Projeto 2</a></button>
                 </div> 

                 <div class="Card">    
                  <i class="fa-solid fa-server"></i>
                  <h5>Loja de Hardware</h5>
                  <p>Objetivo principal: Um site criado usando HTML-CSS,JavaScript e Css com intuito de realizar uma atividade para o ComeiaAcadmy.</p>
                  <button class="btn"><a class="link--underline" href="https://jhonataad.github.io/LojaVirtualBeta2/" target="_blank">Projeto 3</a></button> 

          </div>   
    </div>  
</div>

    )
}

export default sobre;