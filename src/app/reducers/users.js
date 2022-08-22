import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        count: 0,
        items: [],
        isLoading: false,
    },
    reducers: {
        usersRequest: (state) => {
            state.isLoading = true;
        },
        usersSuccess: (state, { payload }) => ({
            state: payload,
            isLoading: false
        }),
        usersFailure: () => ({ isLoading: false }),
        userMyRequest: (state) => {
            state.isLoading = true;
        },
        userPostRequest: (state) => {
            state.isLoading = true;
        },
        userRequest: (state) => {
            state.isLoading = true;
        },
        userEditRequest: (state) => {
            state.isLoading = true;
        },
        userDeleteRequest: (state) => {
            state.isLoading = true;
        },
    }
});

export const {
    usersRequest,
    usersSuccess,
    usersFailure,
    userMyRequest,
    userPostRequest,
    userRequest,
    userEditRequest,
    userDeleteRequest,
} = usersSlice.actions
export default usersSlice.reducer;

