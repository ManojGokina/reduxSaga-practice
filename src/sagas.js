import {call , put,takeEvery} from "redux-saga/effects";
import {GET_DATA_SUCCESS, GET_FAKE_DATA} from "./action";

function* storeFetch(){
    yield fetch('https://fakestoreapi.com/products').then(response => response.json());
}

function* getDataFetch(){
    const shopData = yield call(storeFetch);
    yield put({type: GET_DATA_SUCCESS , shopData})
}

function* mySaga(){
    yield takeEvery(GET_FAKE_DATA , getDataFetch);
}

export default mySaga;