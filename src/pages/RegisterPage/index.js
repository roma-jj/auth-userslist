import React from 'react';
import Form from "../../components/form";
import "../../App.css";
import Title from "../../components/title";

const RegisterPage = () => {

    // const state = useSelector(s => s.user.state)

    // const warningMassage = () => {
    //     if (state?.statusCode === 409) {
    //         return <span>{state.message}</span>;
    //     }
    // }


    return (
        <div className="container">
            <Title title="Registration"/>
            <Form isRegister={true} />
        </div>
    );
};

export default RegisterPage;