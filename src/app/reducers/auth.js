import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        name: '',
        surname: '',
        email: '',
        password: '',
        isLoading: false,
        type: ''
},
    reducers: {
        registerRequest: (state) => {
            state.isLoading = true;
        },
        registerSuccess: (state, { payload }) => ({
            state: payload,
            isLoading: false
        }),
        registerFailure: () => ({ isLoading: false }),
        loginRequest: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state, { payload }) => ({
            state: payload,
            isLoading: false
        }),
        loginFailure: () => ({ isLoading: false }),
        logoutRequest: (state) => {},
        logoutSuccess: (state, { payload }) => ({
            state: null
        })
    }
});

export const {
    registerRequest,
    registerSuccess,
    registerFailure,
    loginRequest,
    loginSuccess,
    loginFailure,
    logoutRequest,
    logoutSuccess
} = authSlice.actions
export default authSlice.reducer;

