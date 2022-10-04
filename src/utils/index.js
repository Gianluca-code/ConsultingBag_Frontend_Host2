import { intersection } from 'lodash';
import {useSelector} from "react-redux";

export function isLoggedIn() {
	const { isLoggedIn: isLoggedIn } = useSelector((state) => state.auth);
	/*
		* Note:
		*  This app assume if local storage have roles it means
		*  user is authenticated you can update this logic as per your app.
	*/
	return isLoggedIn;
}

export function isArrayWithLength(arr) {
	return (Array.isArray(arr) && arr.length)
}

export function getAllowedRoutes(routes) {
	const { user: currentUser, isLoggedIn: isLoggedIn } = useSelector((state) => state.auth);
	const roles = currentUser.roles;
	return routes.filter(({ permission }) => {
		if(!permission) return true;
		//else if(!isArrayWithLength(permission)) return true;
		else return intersection(permission, roles).length;
	});
}
