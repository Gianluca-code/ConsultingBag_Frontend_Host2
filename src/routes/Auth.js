import React, { memo } from 'react';
import {Redirect, useNavigate} from 'react-router-dom';
import { isLoggedIn } from '../utils';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from "./PrivateRoutes";

/*
* TODO: when user loggedIn he/she unable to goto public routes
*  ie: ('/about', '/contact', 'any other public route')
*/
function Auth() {
	const navigate=useNavigate();
	// TODO: temp logged-in check, update as per your app logic
	return isLoggedIn() ? (
	<PrivateRoutes/>
		) : (
			<PublicRoutes />
		)
}

export default memo(Auth);
