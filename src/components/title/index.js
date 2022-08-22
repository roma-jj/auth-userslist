import React from 'react';
import {Link} from "react-router-dom";
import './styles.css';
import {useSelector} from "react-redux";

const Title = ({title}) => {
    const token = useSelector(s => s?.auth?.state?.accessToken);

    return (
        <div className="title__container">
            <h2>{title}</h2>
            {title === "Log in" && token && <p>You are logged in</p>}
            <Link to={'/'}>Main</Link>
            {title === "Create New User" && <Link to={'/users'}>Users</Link>}
        </div>
    );
};

export default Title;