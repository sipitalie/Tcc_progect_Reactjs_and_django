import React ,{useState,useEffect}from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {quartos_hotel} from '../../../store/fetchActions';

 import {Conteainer, Content} from './styles';
 import api from '../../../service/api';

export default function CreatePromo(props){
    const [NovoPreço, SetNewpreco] = useState();
    const [DataDeValidade, SetDataDeValidade] = useState();
    const [DataInit,SetDataInit]=useState();
    const [QuartoEmProm, SetQuartosEmProm] = useState([]);
    const hotel_owner=props.idhotel


    const Quartos= useSelector((state) =>(state.Quartos));
    const dispatch =useDispatch();
    const { id } =useParams();
    const hotel_owner_id= id
    useEffect( () => {
        dispatch(quartos_hotel(hotel_owner_id));
    },[dispatch,hotel_owner_id]); 

   
    const lengthquarto= Quartos.length ;
   // console.log(lengthquarto,Quartos);

    async function handleNewPromo(e){
         e.preventDefault();
        
         const data = {
             new_preco:NovoPreço,
             valid_data:DataDeValidade,
             init_data: DataInit,
             hotel:hotel_owner,
             quartos_em_prom:[QuartoEmProm],
         };
        
         try{
             await api.post('api.v1/promoçao/', data /*, {
                 headers: {
                     Authorization: token,
                 }
             }*/).then(response=>{
                 console.log(response.data);
             })
 
         }catch(err){
             console.log('Erro, tente novamente', err.data)
         }
     }
     return(
         <Conteainer>
             <Content>
                 <form onSubmit={handleNewPromo}>
                    <div>
                    <select id="Quartos" value = {QuartoEmProm} onChange ={e => SetQuartosEmProm(e.target.value)}>
                        <option value='' disabled selected>Selecione o quarto</option>
                        {!!lengthquarto && Quartos.map(quarto=>(<option value={[quarto.id]}>{quarto.type_bedroom+"/"+quarto.Caract_bedroom}</option>))}
                        
                    </select> 
                    <input
                        placeholder="data de inicio"
                        value= {DataInit}
                        type="date"
                        onChange ={e =>  SetDataInit(e.target.value)}
                    />
                    <input
                        placeholder="valido ate"
                        value= {DataDeValidade}
                        type="date"
                        
                        onChange ={e => SetDataDeValidade(e.target.value)}
                    />
                    <input
                        placeholder="Preço"
                        value= {NovoPreço}
                        onChange ={e => SetNewpreco(e.target.value)}
                    />
                    <button className="button" type = "submit">Criar</button>  
                    </div>
                                 
                 </form>
             </Content>
 
         </Conteainer>
         
     )
    
 }
 