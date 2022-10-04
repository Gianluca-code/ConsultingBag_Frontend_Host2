import React, { memo } from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import history from '../utils/history';
import PrivateRoutes from './PrivateRoutes';
import Auth from './Auth';
import {isLoggedIn} from "../utils";
import PublicRoutes from "./PublicRoutes";

function Routess() {
	return isLoggedIn() ? (
		<PrivateRoutes/>
	) : (
		<PublicRoutes />
	)
	/*return (
			<Routes>

				<Route path="/protected" element={<PrivateRoutes />} />
				<Route path="/" element={<Auth />}/>
			</Routes>
	)*/
}

export default memo(Routess);

