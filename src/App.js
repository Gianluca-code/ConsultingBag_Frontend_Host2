import {BrowserRouter, Outlet, Route, Routes,} from "react-router-dom";
import React from "react";
import Landing from "./pages/landing/Landing";
import NavBar from "./components/navbar/NavBar";
import Login from "./pages/login/Login";
import SingUp from "./pages/singUp/SingUp";

import ModProfiloConsulente from "./pages/modProfile/modProfileConsulente/ModificaProfiloConsulente";
import StepFourConsulente from "./pages/singUp/singUpConsulente/StepFourConsulente";
import NotFound from "./pages/notFound/NotFound";
import Abbonamenti from "./Abbonamenti";



import CvConsulente from "./pages/editCvConsulente/CvConsulente";
import AddCv from "./addCv";
import FileUploader from "./FileUploader";
import InserisciEsperienzaCV from "./components/inserisciEsperienzeCV/InserisciEsperienzeCV";
import {useSelector} from "react-redux";
import RicercaAste from "./pages/ricercaAste/RicercaAste";
import RicercaProposte from "./pages/ricercaProposte/RicercaProposte";
//import ProfiloConsulente from "./pages/profiloConsulente/ProfiloConsulente";
import ConsMieOfferte from "./pages/consMieOfferte/ConsMieOfferte";
import DettagliOfferta from "./pages/dettagliOfferta/DettagliOfferta";
import DettagliProposte from "./dettagliProposte";
import DettagliAsta from "./pages/dettagliAsta/DettagliAsta";
import CreaOfferta from "./pages/editOfferta/CreaOfferta";
import ModificaOfferta from "./pages/editOfferta/ModificaOfferta";
import ConsulDenyList from "./pages/consulDenyList/ConsulDenyList";
import CronologiaConsulente from "./pages/cronologiaConsulente/CronologiaConsulente";
//import Sidebar from "./components/sidebar/Sidebar";
import Overview from "./pages/overview/Overview";
//import ProfileForDash from "./pages/overview/ProfileForDash";


function DeleteDenyListItem() {
    return null;
}

function DeleteEsperienza() {
    return null;
}

export default function App() {
    const {user: currentUser, isLoggedIn: isLoggedIn} = useSelector(
        (state) => state.auth
    );

    return (
        <BrowserRouter>
            <NavBar/>
            <div className="container">
                <Routes>
                    {currentUser == null && (
                        <>
                            <Route path="/" element={<Landing/>}/>
                            <Route path="/registrazione" element={<SingUp/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/abbonamenti" element={<Abbonamenti/>}/>
                            <Route path="*" element={<NotFound page="/" name="Home page"/>}/>
                        </>
                    )}
                    <Route path="/congratulazioni" element={<StepFourConsulente/>}/>

                    {isLoggedIn && !currentUser.isActive && (
                        <>
                            <Route
                                path="/completaProfilo"
                                element={<ModProfiloConsulente text="Completa"/>}
                            />
                            <Route path="*"
                                   element={<NotFound page="/completaProfilo" name="Completa il tuo profilo"/>}/>


                        </>
                    )}

                    {isLoggedIn && currentUser.isActive && (
                        <>
                            <Route
                                path="/modificaProfilo"
                                element={<ModProfiloConsulente/>}
                            />
                            <Route path="/uploadCV" element={<FileUploader/>} />
                            <Route
                                path="/editCv"
                                element={<CvConsulente/>}
                            />
                            <Route
                                path="/addCv"
                                element={<AddCv/>}
                            />
                            <Route
                                path="/esperienze"
                                element={<InserisciEsperienzaCV/>}
                            />
                            <Route path="/abbonamenti" element={<Abbonamenti/>} />
                            <Route path="*" element={<NotFound page="/overview" name="Vai alla dashboard"/>}/>


                            <Route
                                path="/overview"
                                element={
                                    <>
                                        {/* <ProfileForDash/>*/}
                                        <Overview/>
                                    </>
                                }
                            />
                            <Route path="/user"/>
                            <Route path="/ricAste" element={<RicercaAste/>}/>
                            <Route path="/ricProposte" element={<RicercaProposte/>}/>
                            {/*<Route path="/profiloConsulente" element={<ProfiloConsulente/>}/>*/}
                            <Route path="/mieOfferte" element={<ConsMieOfferte/>}/>
                            <Route path="/dettagliOfferta/:idOfferta" element={<DettagliOfferta/>} />
                            <Route path="/dettagliProposta/:idProposta" element={<DettagliProposte/>} />
                            <Route path="/dettagliAsta/:idAsta" element={<DettagliAsta/>} />
                            <Route path="/creaOfferta" element={<CreaOfferta/>} />
                            <Route path="/modificaOfferta/:idOfferta" element={<ModificaOfferta/>} />
                            <Route path="/denyList" element={<ConsulDenyList/>} />
                            <Route path="/deleteDenyItem/:id" element={<DeleteDenyListItem/>} />
                            <Route path="/deleteEsperienza/:id" element={<DeleteEsperienza />} />
                            <Route path="/cronologiaConsulente" element={<CronologiaConsulente/>} />

                        </>
                    )}
                </Routes>
            </div>
        </BrowserRouter>
    );
}
