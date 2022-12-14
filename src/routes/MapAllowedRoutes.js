import React, { memo } from 'react';
import { Routes, Route, useRouteMatch } from 'react-router-dom';
import NotFound  from '../pages/notFound/NotFound';

/*
* This is the route utility component used for generating
* routes and child routes it only requires routes array and basePath
*/
function MapAllowedRoutes({routes, basePath, isAddNotFound}) {
	return (
		<Routes>
			{routes.map((route) => {
				/*
				* some variables are used by below code
				* some are not used by the code but destructure due to remove from rest object
				* just make sure that rest object only contain props that supported by react-router's route component
				* you may find props list here https://reactrouter.com/web/api/Route
				*/
				const { path, component: Component, children, title, permission, text, ...rest } = route;

				return (
					<Route {...rest} key={path} path={basePath + `${path}`} element={<Component children={children}  text={text} />}/>
				)
			})}
			{isAddNotFound && <Route element={<NotFound />}/>}
		</Routes>
	)
}

export default memo(MapAllowedRoutes);
