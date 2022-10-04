import React from 'react';
import './EditOfferta.css';
import '../../index.css';
import EditOffertaComponent from"../../components/editOffertaComponent/EditOffertaComponent";

import {useLocation} from "react-router-dom";





function CreaOfferta (){

    const location = useLocation();

    if(location.state){

      return (
        <div>
          <div className="sfondo">
            
          <div className="arrotondato col-10">
  
              <b>Nuova Offerta:</b><br/>
  
              <EditOffertaComponent nuova={true} paginaPrecedente={location.state.paginaPrecedente}/>
  
  
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
  
              <b>Nuova Offerta:</b><br/>
  
              <EditOffertaComponent nuova={true}/>
  
  
          </div>
  
  
  
          </div>
        </div>
      );
    }






 
    
}

export default CreaOfferta;
