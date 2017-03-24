import { call,takeLatest,put } from 'redux-saga/effects';
import { GET_LIST, NEW_LIST } from '../actions';
import {getList} from '../services';



const url = '/api/users'; // the server must the same to this url ,see the package.json by proxy setting

function* handleSubmit() {

    const data = yield call(getList,url)

    yield put({type:NEW_LIST,data});
   
}

function* doGet(){
   yield  takeLatest(GET_LIST,handleSubmit)
}

export default function* rootSaga() {
  yield [doGet()]
}
