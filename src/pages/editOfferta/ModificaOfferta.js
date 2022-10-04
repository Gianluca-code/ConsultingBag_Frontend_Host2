import React from 'react';
import './EditOfferta.css';
import '../../index.css';
import {useLocation, useParams} from "react-router-dom";
import EditOffertaComponent from"../../components/editOffertaComponent/EditOffertaComponent";



function CreaOfferta (){

  const location = useLocation();

  const {idOfferta}=useParams();

  if(location.state){
 
    return (
      <div>
        <div className="sfondo">
          
        <div className="arrotondato col-10">

            <b>Modifica Offerta numero {idOfferta}:</b><br/>

            <EditOffertaComponent nuova={false} idOfferta={idOfferta} paginaPrecedente={location.state.paginaPrecedente}/>


        </div>



        </div>
      </div>
    );
  }
  else{

    return (
      <div>
        <div className="sfondo">
          
        <div className="arrotondato col-10">

            <b>Modifica Offerta numero {idOfferta}:</b><br/>

            <EditOffertaComponent nuova={false} idOfferta={idOfferta}/>


        </div>



        </div>
      </div>
    );

  }
}

export default CreaOfferta;
