import { call,takeLatest,put } from 'redux-saga/effects';
import { GET_LIST, NEW_LIST } from '../actions';
import {getList} from '../services';



const url = 'http://localhost/users';

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
