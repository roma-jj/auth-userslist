import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {TOKEN} from "../../app/constants/api";
import './styles.css';

const Header = () => {

    const token = useSelector(s => s?.auth?.state?.accessToken) || TOKEN;

    return (
        <div className="header__container">
                {(token || TOKEN) && <Link className="header__link" to={'/users'}>Users</Link>}
                <Link className="header__link" to={'/register'}>Register</Link>
                <Link className="header__link" to={'/login'}>Log in</Link>
                <Link className="header__link" to={'/logout'}>Log out</Link>
        </div>
    );
};

export default Header;