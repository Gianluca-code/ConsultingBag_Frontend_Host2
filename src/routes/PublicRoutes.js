import React, { Fragment } from 'react';
import { Route, Routes} from 'react-router-dom';

import Login from "../pages/login/Login"
import SingUp from "../pages/singUp/SingUp";
import Landing from "../pages/landing/Landing";
import NotFound from "../pages/notFound/NotFound";


function PublicRoutes() {
	return (
			<Routes>
				<Route path="/registrazione" element={<SingUp />}/>
				<Route path="/login" element={<Login />}/>
				<Route path="/" element={<Landing />}/>
				<Route path="*" element={<NotFound/>}/>
			</Routes>
	)
}

export default PublicRoutes;
