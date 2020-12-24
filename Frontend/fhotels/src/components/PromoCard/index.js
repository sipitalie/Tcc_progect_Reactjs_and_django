import React from 'react';
//import {FiMapPin, FiWifi,} from 'react-icons/fi';
import { MdDelete }  from "react-icons/md";
//import { Link } from 'react-router-dom';
import { PromInfo,  Container} from './styles';


export default function PromCard({promo}){
    
    return(
       <Container>
            <PromInfo>
                <div>
                    <strong>{'Hotel ID '+promo.hotel}</strong>
                    <button><MdDelete/></button>
                    <p>{'ID do Quarto em promoção '+promo.quartos_em_prom}</p>
                    <p>{'Preço antigo :'}</p><p>{'Novo preço: '+promo.new_preco}</p>
                    <p>{`de ${promo.init_data} a ${ promo.valid_data}`}</p>
                    <p>Publicado a {promo.data}</p>
                </div>
            </PromInfo> 
       </Container>
            
    );
}
