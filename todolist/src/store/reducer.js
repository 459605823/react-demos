import { DELETE_ITEM, ADD_ITEM, CHANGE_INPUTVALUE, INIT_LIST } from "./actionType"

const defalutState = {
  inputValue: '',
  list: []
}

// reducer可以接收state，但绝不能修改state
// 只有store可以改变自身的数据，reducer生成新的state便返回给store，由store改变自身数据、
// reducer必须是一个纯函数
// 纯函数：给定固定的输入，就一定会有固定的输出，不会改变参数的值，且不会有任何副作用
// 不要在reducer中: 修改传入参数、执行有副作用的操作（API请求和路由跳转等）、调用非纯函数（Date.now()、Math.random()等)
export default (state = defalutState, action) => {
  if (action.type === CHANGE_INPUTVALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value;
    return newState
  }
  if (action.type === INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    return newState
  }
  if (action.type === ADD_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ""
    return newState
  }
  if (action.type === DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}