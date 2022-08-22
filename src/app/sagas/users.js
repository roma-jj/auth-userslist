import {call, put, select} from 'redux-saga/effects';
import {
    userMyServiceGet,
    userServiceDelete,
    userServiceGet,
    userServicePost,
    userServicePut,
    usersServiceGet
} from "../services/users";
import {usersFailure, usersSuccess} from "../reducers/users";

const getState = (state) => state.users.state;

export function* usersSagaGet({payload}) {
    try {
            const response = yield call(usersServiceGet, payload);
            yield put({ type: usersSuccess.type, payload: response });
    } catch(error) {
        yield put({ type: usersFailure.type, error });
    }
}

export function* userMySagaGet({payload}) {
    try {
        const response = yield call(userMyServiceGet, payload);
        const state = yield select(getState);
        yield put({ type: usersSuccess.type, payload: {...state, myUser: response} });
    } catch(error) {
        yield put({ type: usersFailure.type, error });
    }
}

export function* userSagaGet({payload}) {
    try {
        yield call(userServiceGet, payload);
    } catch(error) {
        yield put({ type: usersFailure.type, error });
    }
}

export function* userSagaPost({payload}) {
    try {
        yield call(userServicePost, payload);
    } catch(error) {
        yield put({ type: usersFailure.type, error });
    }
}

export function* userSagaPut({payload}) {
    try {
        const response = yield call(userServicePut, payload);
        const state = yield select(getState);
        const updatedState = state.items.map(item => {
            if (item.id === response.id) {
                const updatedItem = {
                    ...item, name: response.name, surname: response.surname, email: response.email
                }
                return updatedItem;
            }
            return item;
        });
        yield put({ type: usersSuccess.type, payload: {...state, items: updatedState} });
    } catch(error) {
        yield put({ type: usersFailure.type, error });
    }
}


export function* userSagaDelete({payload}) {
    try {
        yield call(userServiceDelete, payload);
        const state = yield select(getState);
        const updatedState = state.items.filter(item => item.id !== payload);
        yield put({ type: usersSuccess.type, payload: {...state, items: updatedState} });
    } catch(error) {
        yield put({ type: usersFailure.type, error });
    }
}
