import {takeLatest, take, fork} from 'redux-saga/effects';
import {loginSaga, logoutSaga, registerSaga} from "./auth";
import {loginRequest, logoutRequest, registerRequest} from "../reducers/auth";
import {LOCATION_CHANGE} from "connected-react-router";
import {userMySagaGet, userSagaDelete, userSagaGet, userSagaPost, userSagaPut, usersSagaGet} from "./users";
import {
    userDeleteRequest,
    userEditRequest,
    userMyRequest,
    userPostRequest,
    userRequest,
    usersRequest
} from "../reducers/users";

export function* watchUserAuthentication() {
    yield takeLatest(registerRequest.type, registerSaga);
    yield takeLatest(loginRequest.type, loginSaga);
    yield takeLatest(logoutRequest.type, logoutSaga);
}

// export function* watchUsersListByChangeLocation() {
//     while(true) {
//         const action = yield take(LOCATION_CHANGE);
//         if (action.payload.location.pathname.endsWith('users')) {
//             yield fork(usersSagaGet);
//         }
//     }
// }

export function* watchUsersList() {
    yield takeLatest(usersRequest.type, usersSagaGet);
}

export function* watchUser() {
    yield takeLatest(userPostRequest.type, userSagaPost);
    yield takeLatest(userMyRequest.type, userMySagaGet);
    yield takeLatest(userRequest.type, userSagaGet);
    yield takeLatest(userEditRequest.type, userSagaPut);
    yield takeLatest(userDeleteRequest.type, userSagaDelete);
}
