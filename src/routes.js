import React from 'react';
import {Route, Switch} from "react-router-dom";
import App from "./App";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import UsersPage from "./pages/UsersPage";
import UserCreatePage from "./pages/UserCreatePage";
import NotFoundPage from "./pages/NotFoundPage";

export const APP_ROUTE = 'APP_ROUTE';
export const REGISTER_ROUTE = 'REGISTER_ROUTE';
export const LOGIN_ROUTE = 'LOGIN_ROUTE';
export const LOGOUT_ROUTE = 'LOGOUT_ROUTE';
export const USERS_ROUTE = 'USERS_ROUTE';
export const USER_CREATE_ROUTE = 'USER_CREATE_ROUTE';
export const NOT_FOUND_ROUTE = 'NOT_FOUND_ROUTE';

export const routes = [
    {
        id: APP_ROUTE,
        path: '/',
        exact: true,
        render: () => <App/>
    },
    {
        id: REGISTER_ROUTE,
        path: '/register',
        render: () => <RegisterPage />
    },
    {
        id: LOGIN_ROUTE,
        path: '/login',
        render: () => <LoginPage />
    },
    {
        id: LOGOUT_ROUTE,
        path: '/logout',
        render: () => <LogoutPage />
    },
    {
        id: USERS_ROUTE,
        path: '/users',
        render: () => <UsersPage />
    },
    {
        id: USER_CREATE_ROUTE,
        path: '/user-create',
        render: () => <UserCreatePage />
    },
    {
        id: NOT_FOUND_ROUTE,
        path: '*',
        render: () => <NotFoundPage />
    }

];

const Routes = () => {
    return (
        <Switch>
            {routes.map(route => {
                const {id, ...props} = route;
                return <Route key={id} {...props} />
            })}
        </Switch>
    );
};

export default Routes;
