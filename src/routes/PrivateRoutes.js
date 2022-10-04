import React, { Fragment } from 'react';
import {Redirect, useNavigate, useMatch} from 'react-router-dom';
import { getAllowedRoutes, isLoggedIn } from '../utils';
import { PrivateRoutesConfig } from '../config';
import MapAllowedRoutes from '../routes/MapAllowedRoutes';

function PrivateRoutes(){
	const navigate=useNavigate();
	let allowedRoutes = [];

	if (isLoggedIn()) allowedRoutes = getAllowedRoutes(PrivateRoutesConfig);
	else return navigate("/");

	return (
		<Fragment>
			<MapAllowedRoutes routes={allowedRoutes} basePath="" isAddNotFound />
		</Fragment>
	);
}

export default PrivateRoutes;
