import React, {useEffect, useState} from 'react';
import './ConsMieOfferte.css';


import {useNavigate, Link} from "react-router-dom";

import {useSelector} from "react-redux";
import { Col} from "react-bootstrap";

import ConsulenteService from "../../services/consulente-service";

import offerteService from '../../services/offerte.service';








function RigaOfferta(props){


    
    return(
        <tr style={{fontWeight:"500"}}>
            <td>{props.offerta.dataInizioDisponibilita}</td>
            <td>{props.offerta.dataFineDisponibilita? (props.offerta.dataFineDisponibilita):("-")}</td>
            <td>{props.offerta.areaProfessionale}</td>
            <td>{props.offerta.conoscenzeMesseADisposizione}</td>
            <td>{props.offerta.ruoloDesiderato}</td>
            <td>€{props.offerta.tariffaGiornalieraDesiderata}</td>
            <td>{props.offerta.disponibilitaTempo}</td>
            <td>{props.offerta.noteSullaDisponibilita}</td>
            <td>{props.offerta.tariffaTrattabile ? "sì":"no"}</td>
            <td>
                <Link to={`/dettagliOfferta/${props.offerta.id}`}>
                    <button className="btn btn-primary bottone_dettagli-mie-offerte">Dettagli</button>
                </Link>
            </td>
            
            
        </tr>
    );
}



function ConsMieOfferte(){

    const navigate = useNavigate();

    const {user: currentUser} = useSelector((state) => state.auth);

    const [setConsulenteData] = useState();
    const [offerteData, setOfferteData] = useState([]);


    useEffect(() => {

        ConsulenteService.getConsulenteData(currentUser.username)
            .then(function (res) { setConsulenteData(res.data)})
            .catch(function () {
                setConsulenteData([]);
                navigate("/*");//se quello che sto cercando di visualizzare non è un consulente devo redirezionare a PageNotFound
            }); 

    }, []);
 
    useEffect(() => {
        offerteService.getOfferteByConsulente(currentUser.username)
            .then(function (res) { setOfferteData(res.data)})
            .catch(function () {
                setOfferteData([]);
                navigate("/*");
            });
    }, []);

    return (
      <div>
        <div className="sfondo">
          
        <div className="arrotondato-mie-offerte">

            <div className='row'>
                <div className="col-10"><b>Offerte Caricate:</b></div>
                <div className="col-2"><Link to={`/creaOfferta`} state={{paginaPrecedente:"/mieOfferte"}}><button className="btn btn-primary">Nuova Offerta</button></Link></div><br/>
            </div>


            <br/>
            <div className="arrotondato-mie-offerte shadow sezione-interna-mie-offerte">

            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Data Inizio Disponibilità</th>
                    <th scope="col">Data Fine Disponibilità</th>
                    <th scope="col">Area Professionale</th>
                    <th scope="col">Conoscenze Messe a Disposizione</th>
                    <th scope="col">Ruolo Desiderato</th>
                    <th scope="col">Tariffa Giornaliera Desiderata</th>
                    <th scope="col">Disponibilità Tempo</th>
                    <th scope="col">Note sulla Disponibilità</th>
                    <th scope="col">Tariffa Trattabile</th>
                    <th scope="col">Azione</th>
                    </tr>
                </thead>
                <tbody>

                {offerteData.map((field) => (
                    <RigaOfferta offerta={field} />
                ))}
                    
                 
                </tbody>
            </table>
            {(offerteData.length === 0)? (<Col className="text-center">Nessuna Offerta presente</Col>):("")}
                  
            </div>
        </div>



        </div>
      </div>
    );
}

export default ConsMieOfferte;
