import React from "react";  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF  } from '@fortawesome/free-brands-svg-icons';
import {  faInstagram  } from '@fortawesome/free-brands-svg-icons';
import {  faTwitter  } from '@fortawesome/free-brands-svg-icons';
 
 
function rodape(){     


    
  return(
    
         <footer>
            <h6 class="n1">
                Jhonata Oliveira
            </h6>
            <p>Sigame em mihas redes sociais</p>

            <div class="Redes-sociais">
            <a href="https://www.facebook.com/"target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a>
          <a href="https://www.instagram.com/jhonata_oli02/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://twitter.com/Jhonata03017990" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
                 </div>
        <div class="End">
        <p>&copy;ByJhonata</p>
                </div>

         </footer>     
          
    )

    

}

export default rodape;
 
 