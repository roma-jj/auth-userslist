import {LOCATION, USERS_API} from "../constants/api";

const TOKEN = JSON.parse(localStorage.getItem('user'))?.accessToken;

const reqUrl = `${LOCATION}/api/v1/${USERS_API}`;

const settings = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN}`
    }
};

export async function usersServiceGet(token) {

    try {
        const fetchUsers = await fetch(
            reqUrl,
            {...settings, headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token || TOKEN}`
                }}
        );
        // const fetchMe = await fetch(
        //     `${reqUrl}/me`,
        //     settings
        // );
        // return await Promise.all([
        //     fetchUsers.json(), fetchMe.json()
        // ])
        return await fetchUsers.json();

    } catch(e) {
        console.log(e)
    }
}

export async function userServicePost(data) {

    try {
        const fetchUsers = await fetch(
            reqUrl,
            {...settings, method: 'POST', body: JSON.stringify(data)}
        );

        return await fetchUsers.json();

    } catch(e) {
        console.log(e)
    }
}

export async function userMyServiceGet(token) {

    try {
        const fetchMyUser = await fetch(
            `${reqUrl}/me`,
            {...settings, headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token || TOKEN}`
                }}
        );

        return await fetchMyUser.json();

    } catch(e) {
        console.log(e)
    }
}

export async function userServiceGet(id) {

    try {
        const fetchUser = await fetch(
            `${reqUrl}/${id}`,
            {...settings, method: 'GET'}
        );

        return await fetchUser.json();

    } catch(e) {
        console.log(e)
    }
}

export async function userServicePut(data) {

    console.log("data", data);

    try {
        const fetchUser = await fetch(
            `${reqUrl}/${data.id}`,
            {...settings, method: 'PUT', body: JSON.stringify(data)}
        );

        return await fetchUser.json();

    } catch(e) {
        console.log(e)
    }
}

export async function userServiceDelete(id) {

    try {
        const fetchDeleteUser = await fetch(
            `${reqUrl}/${id}`,
            {...settings, method: 'DELETE'}
        );

        return await fetchDeleteUser.json();

    } catch(e) {
        console.log(e)
    }
}
