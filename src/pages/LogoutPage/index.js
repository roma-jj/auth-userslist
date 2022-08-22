import React from 'react';
import {useDispatch} from "react-redux";
import {logoutRequest} from "../../app/reducers/auth";
import Title from "../../components/title";
import MainButton from "../../components/button";

const LogoutPage = () => {

    const dispatch = useDispatch();

    const onLogout = () => dispatch(logoutRequest());

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Title title="Log out"/>
            <MainButton name="log out" onClick={onLogout} />
        </div>
    );
};

export default LogoutPage;