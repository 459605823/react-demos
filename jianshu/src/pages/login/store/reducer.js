import { fromJS } from "immutable"
import * as actionTypes from "./actionTypes"

// 使用immutable封装对象
const defaultState = fromJS({
  login: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN_STATUS:
      return state.set("login", action.value)
    default:
      return state
  }
}
