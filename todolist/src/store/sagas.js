import { takeEvery, put } from 'redux-saga/effects'
import { GET_TODOLIST } from './actionType'
import { getInitListAction } from './actionCreater'
import axios from 'axios'

function *getTodolist() {
  try {
    const res = yield axios.get('/list.json')
    const action = getInitListAction(res.data)
    // put相当于store.dispatch
    yield put(action)
  } catch (error) {
    console.log(error)
  }
}

function *mySage() {
  // 处理所有该类型的action
  yield takeEvery(GET_TODOLIST, getTodolist)
}

export default mySage