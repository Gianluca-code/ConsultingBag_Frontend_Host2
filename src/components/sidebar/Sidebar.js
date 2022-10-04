import './sidebar.css';
import React from 'react';
import SidebarElement from "./SidebarElement";
import { IoGridOutline } from 'react-icons/io5';
import { FaListUl, FaRegIdCard } from "react-icons/fa";
import { ImHammer2, ImSearch } from "react-icons/im";
import  { BreakpointProvider,Breakpoint } from 'react-socks';

function Sidebar() {
        let bordo = { color: "grey" };
        document.body.style.backgroundColor = 'white';
        return (
            <div>
                <BreakpointProvider>
                    <Breakpoint customQuery="(min-width: 1000px)" className="container sidebar">
                            <p className='menu'>Menu</p>
                            <SidebarElement icon={<IoGridOutline size={25} style={bordo}/>} text="Overview" link="/overview"> </SidebarElement>
                            <SidebarElement icon={<ImHammer2 size={25} style={bordo}/>} text="Ricerca Aste" link="/ricAste"> </SidebarElement>
                            <SidebarElement icon={<ImSearch size={25} style={bordo}/>} text="Ricerca Proposte" link="/ricProposte"> </SidebarElement>
                            <SidebarElement icon={<FaListUl size={25} style={bordo}/>} text="Le mie Offerte" link="/mieOfferte"> </SidebarElement>
                            <SidebarElement icon={<FaRegIdCard size={25} style={bordo}/>} text="La mia Scheda" link="/profiloConsulente"> </SidebarElement>
                    </Breakpoint>
                    <Breakpoint customQuery="(max-width: 999px)" className="container sidebarMobile">
                    <p className='menu'>Menu</p>
                            <SidebarElement icon={<IoGridOutline size={20} style={bordo}/>} text="Overview" link="/overview"> </SidebarElement>
                            <SidebarElement icon={<ImHammer2 size={20} style={bordo}/>} text="Ricerca Aste" link="/ricAste"> </SidebarElement>
                            <SidebarElement icon={<ImSearch size={20} style={bordo}/>} text="Ricerca Proposte" link="/ricProposte"> </SidebarElement>
                            <SidebarElement icon={<FaListUl size={20} style={bordo}/>} text="Le mie Offerte" link="/mieOfferte"> </SidebarElement>
                            <SidebarElement icon={<FaRegIdCard size={20} style={bordo}/>} text="La mia Scheda" link="/profiloConsulente"> </SidebarElement>
                    </Breakpoint>
                </BreakpointProvider>

            </div>
        );

}

export default Sidebar;