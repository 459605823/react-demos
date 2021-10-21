import {takeEvery, put, call} from 'redux-saga/effects';
import {GET_TODOLIST} from './actionType';
import {getInitListAction} from './actionCreater';
import axios from 'axios';

const getList = () => axios.get<string[]>('/list.json');

function* getTodolist() {
  try {
    // @ts-ignore
    const res = yield call(getList);
    const action = getInitListAction(res.data);
    // put相当于store.dispatch
    yield put(action);
  } catch (error) {
    console.log(error);
  }
}

function* mySage() {
  // 处理所有该类型的action
  yield takeEvery(GET_TODOLIST, getTodolist);
}

export default mySage;
