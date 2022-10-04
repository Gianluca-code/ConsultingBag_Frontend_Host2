import React, {Component, useCallback, useEffect, useState} from 'react';
import './NavBarBackOffice.css';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../actions/auth";


function NavBarBackOffice(){
    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const [isLoggedIn, setLogin]=useState(false);

    useEffect(()=>{
        setLogin(true);
    }, [currentUser]);

    const logOut = useCallback(() => {
        dispatch(logout());
        navigate("/");
    }, [dispatch]);


    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"> CONSULTING BAG</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className='col'></div>
                    <div className='col'>AREA AMMINISTRAZIONE PORTALE</div>
                    <div className='col'></div>
                    
                    
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Username dell'admin{/*currentUser.username*/}</Link>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-light bottone_navbar" onClick={logOut}>Logout</button>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </nav>
    );
}

export default NavBarBackOffice;