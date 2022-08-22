import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import {loginRequest, registerRequest} from "../../app/reducers/auth";
import {
    Box,
    FormControl,
    Input,
    InputLabel,
} from "@mui/material";
import {userEditRequest, userPostRequest} from "../../app/reducers/users";
import MainButton from "../button";


export default function Form({isRegister, isCreate, isUpdate, id, user}) {
    const {setFocus, register, handleSubmit, formState: {errors}} = useForm();

    const dispatch = useDispatch();

    useEffect(() => {
        setFocus(`${isRegister || isUpdate ? "name" : "email"}`);
    }, [setFocus, isRegister, isUpdate]);

    const stringIsReq = 'is required';

    const requestTypeSend = (data) => isRegister
        ? registerRequest(data)
        : isCreate
            ? userPostRequest(data)
            : isUpdate
                ? userEditRequest({...data, id})
                : loginRequest(data);

    const putEmptyValuesOnEdit = (user, data, value) => data[value] = user[value]

    const onSubmit = data => {
        data.name === '' && putEmptyValuesOnEdit(user, data, 'name');
        data.surname === '' && putEmptyValuesOnEdit(user, data, 'surname');
        data.email === '' && putEmptyValuesOnEdit(user, data, 'email');
        dispatch(requestTypeSend(data));
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'

            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
        >
            {
                (isRegister || isCreate || isUpdate) && (
                    <>
                        <FormControl color="secondary" sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="name">Name</InputLabel>
                            <Input id="name" type="text" {...register("name", {required: !isUpdate, minLength: 3, maxLength: 20})} />
                        </FormControl>
                        <FormControl color="secondary" sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="surname">Surname</InputLabel>
                            <Input id="surname" type="text" {...register("surname", {required: !isUpdate, minLength: 3, maxLength: 20})} />
                        </FormControl>
                    </>
                    )
            }
            <FormControl color="secondary" sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                    sx={{
                        '&:focus': {
                            background: 'yellow',
                            color: 'yellow',
                            borderColor: 'yellow'
                        }
                    }
                    }
                    id="email"
                    type="email"
                    {...register("email", {required: !isUpdate})}
                />
                {errors.email && <span>email {`${stringIsReq}`}</span>}
            </FormControl>
            {!isUpdate && (
                <FormControl color="secondary" sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                        id="password"
                        type="password"
                        {...register("password", {required: !isUpdate})}
                    />
                    {errors.password && <span>password {`${stringIsReq}`}</span>}
                </FormControl>
            )}
            <MainButton name="submit" type="submit" IsStandardStyle={isUpdate} />
        </Box>
    );
}