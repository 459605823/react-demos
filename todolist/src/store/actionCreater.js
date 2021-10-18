import { DELETE_ITEM, ADD_ITEM, CHANGE_INPUTVALUE, INIT_LIST, GET_TODOLIST } from "./actionType"
// import axios from 'axios'

export const getInputChangeAction = (value) => {
  return {
    type: CHANGE_INPUTVALUE,
    value
  }
}

export const getAddItemAction = () => {
  return {
    type: ADD_ITEM
  }
}

export const getDelItemAction = (index) => {
  return {
    type: DELETE_ITEM,
    index
  }
}

export const getInitListAction = (data) => {
  return {
    type: INIT_LIST,
    data
  }
}

export const getTodoList = () => {
  return {
    type: GET_TODOLIST
  }
}

// redux-thunk中间件解析action
// 可以将异步操作分从组件生命周期函数中分离出来
// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('/list.json').then((res) => {
//       const action = getInitListAction(res.data)
//       dispatch(action)
//     })
//   }
// }
