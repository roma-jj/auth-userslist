import {call, put} from 'redux-saga/effects';
import authService from "../services/auth";
import {
    loginFailure,
    loginSuccess,
    logoutSuccess,
    registerFailure,
    registerSuccess
} from "../reducers/auth";

export function* registerSaga({payload}) {
    try {
        const response = yield call(authService, payload);
        yield put({ type: registerSuccess.type, payload: response });
    } catch(error) {
        yield put({ type: registerFailure.type, error });
    }
}

export function* loginSaga({payload}) {
    try {
        const response = yield call(authService, payload);
        localStorage.setItem('user', JSON.stringify(response));
        yield put({ type: loginSuccess.type, payload: response });
    } catch(error) {
        yield put({ type: loginFailure.type, error });
    }
}

export function* logoutSaga() {
    yield put({ type: logoutSuccess.type, payload: null });
    localStorage.clear();
}