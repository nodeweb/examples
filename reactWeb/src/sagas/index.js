import { call,put,fork,takeLatest } from 'redux-saga/effects';
import { GET_LIST,NEW_LIST} from '../actions';
import {getList} from '../services';



const url = '/api/ping'; // the server must the same to this url ,see the package.json by proxy setting

function* handleSubmit(dd) {
    console.log("dd=",dd)
    const ds = yield call(getList,url)
    const data = ds["data"]

    yield put({type:NEW_LIST,data});
   
}

function* doGET() {
    yield takeLatest(GET_LIST,handleSubmit)
}

export default function* rootSaga() {
  yield fork(doGET)
}
