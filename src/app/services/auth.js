import {LOCATION, LOGIN_API, REGISTER_API} from "../constants/api";

export default async function authService(data) {
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };

    try {
        const fetchResponse = await fetch(
            `${LOCATION}/api/v1/auth/${data.name ? REGISTER_API : LOGIN_API}`,
            settings
        );

        return await fetchResponse.json();

    } catch(e) {
        console.log(e)
    }
}