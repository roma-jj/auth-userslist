import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, CardActions, CardContent, Typography, Card, Pagination} from "@mui/material";
import {userDeleteRequest, userMyRequest, userRequest, usersRequest} from "../../app/reducers/users";
import Form from "../../components/form";
import MainButton from "../../components/button";
import {TOKEN} from "../../app/constants/api";
import Title from "../../components/title";
import './styles.css';

const UsersPage = () => {
    const [userInfo, setUserInfo] = useState({
        id: '',
        isEdit: false
    });
    const [currentPage, setCurrentPage] = useState(1);

    const store = useSelector(s => s?.users?.state);
    const token = useSelector(s => s?.auth?.state?.accessToken) || TOKEN;

    const dispatch = useDispatch();

    const textColor = '#ff80ab';

    const contentPerPage = 10;
    const lastIndex = currentPage * contentPerPage;
    const firstIndex = lastIndex - contentPerPage
    const countPages = Math.ceil(store?.items?.length / contentPerPage);

    const myUser = store?.myUser;
    const UsersPage = (store?.items?.slice(firstIndex, lastIndex)) || [];

    const handlePageChange = (event, newPage) => setCurrentPage(newPage);

    const showUsers = () => dispatch(usersRequest(token));
    const showMyInfo = () => dispatch(userMyRequest(token));
    const deleteUser = ({target: {dataset}}) => dispatch(userDeleteRequest(dataset.id));

    const editUser = ({target: {dataset}}) => dataset.id === userInfo.id
        ? setUserInfo({...userInfo, id: dataset.id, isEdit: true})
        : setUserInfo( {...userInfo, id: '', isEdit: false});

    const toggleUserInfo = ({target: {dataset}}) => {
        dataset.id === userInfo.id
            ? setUserInfo( {...userInfo, id: '', isEdit: false})
            : setUserInfo({...userInfo, id: dataset.id, isEdit: false})
        return dataset.id !== userInfo.id && dispatch(userRequest(dataset.id));
        // imitation to get info from GET request about user,
        // however we have this info from array of all users.
    };

    return (
        <div className="container_users">
            <Title title="Users" />
            <div className="container_usersButtons">
            <MainButton name="my user" onClick={showMyInfo} />
            <MainButton name="users" onClick={showUsers} />
            </div>

            <div className="container_usersCards">
            {myUser && myUser.id && (
                <Card
                    key={myUser.id}
                    sx={{
                        width: '50%',
                        border: '1px solid #880e4f',
                        marginBottom: '2px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        backgroundColor: '#ff80ab',
                        color: '#880e4f'
                    }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {myUser.email}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {myUser.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {myUser.surname}
                        </Typography>
                    </CardContent>
                </Card>
            )}
            {UsersPage && UsersPage.length ? UsersPage.map(user => {
            return (
                <Card key={user.id} sx={{
                    width: '50%',
                    border: '1px solid #f8bbd0',
                    marginBottom: '2px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: '#880e4f'
                }}>
                    <CardContent>
                        <Typography variant="h5" sx={{ color: textColor }} component="div">
                            {user.email}
                        </Typography>
                        {userInfo.id === user.id && (
                            <>
                            <Typography sx={{ mb: 1.5, color: '#f8bbd0' }} color="text.secondary">
                                {user.name}
                            </Typography>
                            <Typography sx={{ mb: 1.5, color: '#f8bbd0' }} color="text.secondary">
                                {user.surname}
                            </Typography>
                            </>
                        )}
                        {userInfo.id === user.id
                            && userInfo.isEdit
                            && <Form isUpdate={true} id={userInfo.id} user={user}/>}
                    </CardContent>
                    <CardActions sx={{  }}>
                        {userInfo.id === user.id && (
                            <Button
                                onClick={editUser}
                                data-id={user.id}
                                size="small"
                            >
                                edit
                            </Button>
                        )}
                        <Button
                            onClick={deleteUser}
                            data-id={user.id}
                            size="small"
                        >
                            delete
                        </Button>
                        <Button
                            onClick={toggleUserInfo}
                            data-id={user.id}
                            size="small"
                        >
                            {userInfo.id !== user.id ? 'more' : 'close'}
                        </Button>
                    </CardActions>
                </Card>
            );
            }) : null}
            {UsersPage && UsersPage.length ? <Pagination
                sx={{
                    margin: '35px'
                }}
                page={currentPage}
                onChange={handlePageChange}
                count={countPages} color="secondary"
            /> : null}
            </div>
            </div>
    );
};

export default UsersPage;