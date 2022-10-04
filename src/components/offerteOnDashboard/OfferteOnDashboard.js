import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import offerteService from '../../services/offerte.service';

function OfferteOnDashboard(props){

    const [num, setNum] = useState(0);

    const [ready, setReady] = useState(false);

    useEffect(()=>{
        offerteService.getNumeroDiOfferte(props.consulente).then((res)=>{setNum(res.data);
                                                                            setReady(true);
                                                                        })
                                                                        .catch(()=>{});
    }, []);

    return(
        
        <div style={{fontWeight:"700", fontSize:"0.85rem", padding:"1%"}}>
            {(ready)? (
            <Row className="m-1">
                <Col>
                    Numero di offerte caricate: {num}<br /><br />
                </Col>
                <Col className="text-end"><Link to="/mieOfferte"><button className="btn btn-primary">Vedi Offerte</button></Link></Col>
            </Row>
            ):("")}
        </div>
    );

}

export default OfferteOnDashboard;