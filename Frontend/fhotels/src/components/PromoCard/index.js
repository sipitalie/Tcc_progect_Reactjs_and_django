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
                   
                    {(promo.hotel_name)&&<h1>{promo.hotel_name}</h1>}
                    {/*<button><MdDelete/></button>*/}
                    <p>{'Quarto Número: '+promo.quarto}</p>
                    <p>{'Carategoria:'}</p>
                    <p>{'Tipo:'}</p>
                    <p>{`Preço ${promo.preco} x ${promo.new_preco}`}</p>
                    <p>{`de ${promo.init_data} a ${ promo.valid_data}`}</p>
                    <p>{'Publicado a '+promo.data}</p>
                </div>
            </PromInfo> 
       </Container>
    )
}