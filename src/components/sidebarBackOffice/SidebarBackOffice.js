import './sidebarBackOffice.css';
import React, {Component} from 'react';
import SidebarElement from "./SidebarElement";

import {MdSwitchAccount, MdOutlineWorkOutline} from "react-icons/md";
import {GiGreekTemple} from "react-icons/gi";
import { FaListUl, FaRegIdCard } from "react-icons/fa";
import { ImHammer2, ImSearch } from "react-icons/im";
import  { BreakpointProvider,Breakpoint } from 'react-socks';

class Sidebar extends Component {
    render() {
        let bordo = { color: "grey" };
        document.body.style.backgroundColor = 'white';
        return (
            <div> 
                <BreakpointProvider>
                    <Breakpoint customQuery="(min-width: 1000px)" className="container sidebar">
                            <p className='menu'>Menu</p>
                            <SidebarElement icon={<MdSwitchAccount size={25} style={bordo}/>} text="Ricerca Consulenti" link="/admin/ricConsulenti"> </SidebarElement>
                            <SidebarElement icon={<GiGreekTemple size={25} style={bordo}/>} text="Ricerca Aziende" link="/admin/ricAziende"> </SidebarElement>
                            <SidebarElement icon={<ImHammer2 size={25} style={bordo}/>} text="Ricerca Aste" link="/admin/ricAste"> </SidebarElement>
                            <SidebarElement icon={<FaListUl size={25} style={bordo}/>} text="Proposte Consulenti" link="/admin/ricProposte"> </SidebarElement>
                            <SidebarElement icon={<MdOutlineWorkOutline size={25} style={bordo}/>} text="Offerte Aziende" link="/admin/ricOfferte"> </SidebarElement>
                            <SidebarElement icon={<FaRegIdCard size={25} style={bordo}/>} text="Abbonamenti" link="/admin/gestioneAbbonamenti"> </SidebarElement>
                    </Breakpoint>
                    <Breakpoint customQuery="(max-width: 999px)" className="container sidebarMobile">
                    <p className='menu'>Menu</p>
                            <SidebarElement icon={<MdSwitchAccount size={20} style={bordo}/>} text="Ricerca Consulenti" link="/admin/ricConsulenti"> </SidebarElement>
                            <SidebarElement icon={<GiGreekTemple size={20} style={bordo}/>} text="Ricerca Aziende" link="/admin/ricAziende"> </SidebarElement>
                            <SidebarElement icon={<ImHammer2 size={20} style={bordo}/>} text="Ricerca Aste" link="/admin/ricAste"> </SidebarElement>
                            <SidebarElement icon={<FaListUl size={20} style={bordo}/>} text="Proposte Consulenti" link="/admin/ricProposte"> </SidebarElement>
                            <SidebarElement icon={<MdOutlineWorkOutline size={20} style={bordo}/>} text="Offerte Aziende" link="/admin/ricOfferte"> </SidebarElement>
                            <SidebarElement icon={<FaRegIdCard size={20} style={bordo}/>} text="Abbonamenti" link="/admin/gestioneAbbonamenti"> </SidebarElement>
                    </Breakpoint>
                </BreakpointProvider>

            </div>
        );
    }
}

export default Sidebar;