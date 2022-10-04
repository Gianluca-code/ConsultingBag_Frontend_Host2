import React, {useEffect, useState} from 'react';
import {Form, Formik} from "formik";
import './ConsulDenyList.css';

import {useNavigate, Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Col, Row} from "react-bootstrap";

import CustomInput from "../../components/customFormElements/CustomInput";

import {denyListSchema} from "../../components/schemas/denyListSchema";

import denyListService from "../../services/consulDenyList.service";


import ConsulenteService from "../../services/consulente-service";



function RigaDenyList(props){

    
    return(
        <tr style={{fontWeight:"500"}}>
            <td>{props.riga.piva}</td>
            <td>{props.riga.motivazione}</td>
            <td><Link to={`/deleteDenyItem/${props.riga.id}`}><button className="btn btn-danger">Elimina blocco</button></Link></td>
        </tr>
    );
}



function ConsulDenyList(){

    const navigate = useNavigate();

    const {user: currentUser} = useSelector((state) => state.auth);

    const [consulenteData, setConsulenteData] = useState();
    const [denyListData, setDenyListData] = useState([]);

    
    const creaBlocco = (values) => {

        denyListService.createDenyListItem(currentUser.username, values)
            .then(()=>{
                denyListService.getDenyListByConsulente(currentUser.username)
                .then(function (res) { setDenyListData(res.data)})
                .catch(function () {
                    setDenyListData([]);
                    navigate("/*");
                }); })
            .catch((e)=>{alert(e);});

    };



    useEffect(() => {

        ConsulenteService.getConsulenteData(currentUser.username)
            .then(function (res) { setConsulenteData(res.data)})
            .catch(function () {
                setConsulenteData([]);
                navigate("/*");//se quello che sto cercando di visualizzare non è un consulente devo redirezionare a PageNotFound
            });

        denyListService.getDenyListByConsulente(currentUser.username)
            .then(function (res) { setDenyListData(res.data)})
            .catch(function () {
                setDenyListData([]);
                navigate("/*");
            }); 
        

    }, []);
 
    return (
      <div>
        
        <div className="sfondo">
          
        <div className="arrotondato">

            <div className='row'>
                <b>Partite IVA bloccate:</b>
                <br/>
            </div>


            <br/>
            <div className="arrotondato_consulDenyList shadow sezione-interna_consulDenyList">

            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Partita IVA bloccata</th>
                    <th scope="col">Motivazione</th>
                    <th scope="col">Azione</th>
                    </tr>
                </thead>
                <tbody>

                {denyListData.map((field) => (
                    <RigaDenyList riga={field} />
                ))}
                </tbody>
            </table>
            
            <Formik initialValues={{piva:"", motivazione:""}} 
            validationSchema={denyListSchema.pick(['piva', 'motivazione'])}

            onSubmit={creaBlocco}
            >
                <Form style={{width:"100%", maxWidth:"100%", border:"0px", marginTop:"0", padding:"2%", fontSize:"0.8rem"}}>
                    <Row>
                        <Col><CustomInput name="piva" type="text" placeholder="Inserire PIVA da bloccare"/></Col>
                        <Col><CustomInput name="motivazione" type="text" placeholder="Motivazione del blocco"/></Col>
                        <Col><button style={{marginTop:"4%"}} type="submit" className="btn btn-primary">Aggiungi nuovo blocco</button></Col>
                    
                    </Row> 
                </Form>
        </Formik>
                

            </div>
        </div>



        </div>
        
      </div>
    );
}

export default ConsulDenyList;