import React from 'react';
import Form from "../../components/form";
import Title from "../../components/title";

const UserCreatePage = () => {
    return (
        <div>
            <Title title="Create New User" />
            <Form isCreate={true} />
        </div>
    );
};

export default UserCreatePage;