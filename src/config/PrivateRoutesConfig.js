import { Roles } from '../config';

// Components
import Sidebar from "../components/sidebar/Sidebar";
import RicercaProposte from "../pages/ricercaProposte/RicercaProposte";
import LeMieOfferte from "../LeMieOfferte";
import Login from "../pages/login/Login"
import ProfileForDash from "../pages/overview/ProfileForDash";
import SingUp from "../pages/singUp/SingUp";
import Landing from "../pages/landing/Landing";
import ModProfiloConsulente from "../pages/modProfile/modProfileConsulente/ModificaProfiloConsulente"
import StepFourConsulente from "../pages/singUp/singUpConsulente/StepFourConsulente";
import Overview from "../pages/overview/Overview";
import RicercaAste from "../pages/ricercaAste/RicercaAste";


// TODO:
/*
* 1. Make title optional
* 2. Make title multi type support ie: (string, node, react element)
* 3. Add child route support
* */


/*
* Route config object supports all react-router's route component props with some additional props ie: (title, permission, children)
* you can add or remove props from config object it's means it is super customizable and support upto N nesting, child routes must follow the same parent shape,
* it means the config object is same for both there is no additional key for child nor for parent.
* you can find route props from here https://reactrouter.com/web/api/Route let's take a look at some additional props
* 1. permission: permission is an optional prop and it's type is an array of roles, permission is used for allowing certain users/roles
*  	to have access of that route and if you skip/omit the permission or it's an empty array that means every authenticated user/role have access to that route.
* 2. title: title is an optional prop and it's type is a string|node it is used for mapping route link into a navigation
* 3. children: children is also an optional prop and it's type is an array of route config objects, children are used for nested routes
* */


export default [
	{
		component: Landing,
		path: '/',
		title: 'Landing',
		exact: true,
	},
	{
		component: SingUp,
		path: '/registrazione',
		title: 'Registrazione',
		exact: true,
	},
	{
		component: Login,
		path: '/login',
		title: 'Login',
		exact: true,
	},
	{
		component: StepFourConsulente,
		path: '/congratulazioni',
		title: 'Congratulazioni',
		permission: [
			Roles.ROLE_USER
		]
	},
	{
		component: ModProfiloConsulente,
		path: '/completa-profilo',
		title: 'Congratulazioni',
		text: 'Completa',
		permission: [
			Roles.ROLE_USER,
			Roles.ROLE_CONSULENTE
		]
	},
	{
		component: ModProfiloConsulente,
		path: '/modifica-profilo',
		title: 'Modifica profilo',
		permission: [
			Roles.ROLE_ADMIN,
			Roles.ROLE_SUPER_AZIENDA,
			Roles.ROLE_CONSULENTE,
			Roles.ROLE_AZIENDA,
		]
	},
	{
		component: Overview,
		path: '/overview',
		title: 'overview',
		permission: [
			Roles.ROLE_ADMIN,
			Roles.ROLE_CONSULENTE,
		],
	},
	{
		component: RicercaAste,
		path: '/ricerca-aste',
		title: 'Ricerca aste',
		permission: [
			Roles.ROLE_ADMIN,
			Roles.ROLE_CONSULENTE,
		],
		children: [
			{
				component: Sidebar,
				permission: [
					Roles.ROLE_ADMIN,
					Roles.ROLE_CONSULENTE,
				]
			},
		]
	},
	{
		component: RicercaProposte,
		path: '/ricerca-proposte',
		title: 'Ricerca proposte',
		permission: [
			Roles.ROLE_ADMIN,
			Roles.ROLE_CONSULENTE,
		],
		children: [
			{
				component: Sidebar,
				permission: [
					Roles.ROLE_ADMIN,
					Roles.ROLE_CONSULENTE,
				]
			},
		]
	},
	{
		component: LeMieOfferte,
		path: '/le-mie-offerte',
		title: 'Le mie offerte',
		permission: [
			Roles.ROLE_ADMIN,
			Roles.ROLE_CONSULENTE,
		],
		children: [
			{
				component: Sidebar,
				permission: [
					Roles.ROLE_ADMIN,
					Roles.ROLE_CONSULENTE,
				]
			},
		]
	},
	{
		component: LaMiaScheda,
		path: '/la-mia-scheda',
		title: 'La mia scheda',
		permission: [
			Roles.ROLE_ADMIN,
			Roles.ROLE_CONSULENTE,
		],
		children: [
			{
				component: Sidebar,
				permission: [
					Roles.ROLE_ADMIN,
					Roles.ROLE_CONSULENTE,
				]
			},
		]
	},
]
