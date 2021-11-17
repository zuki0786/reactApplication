import { all } from 'redux-saga/effects';

export default function* RootSaga() {
    try {

        yield all(
            [

            ]
        );
    } catch (error) {
        // TODO:Need to return the correct error at this stage
        throw new Error(error);
    }
}