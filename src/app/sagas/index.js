import { spawn, call, all } from 'redux-saga/effects';
import {watchUser, watchUserAuthentication, watchUsersList, watchUsersListByChangeLocation} from "./watchers";


export default function* rootSaga() {
    const sagas = [
        watchUserAuthentication,
        // watchUsersListByChangeLocation,
        watchUsersList,
        watchUser
    ];

    const retrySagas = yield sagas.map(saga => {
        return spawn(function* () {
            while (true) {
                try {
                    yield call(saga);
                }
                catch (e) {
                    console.log(e)
                }
            }
        })
    });

    yield all(retrySagas);
}