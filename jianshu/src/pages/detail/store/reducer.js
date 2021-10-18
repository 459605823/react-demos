import { fromJS } from "immutable"
import * as actionTypes from "./actionTypes"

// 使用immutable封装对象
const defaultState = fromJS({
  title: "",
  content: ""
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INIT_DETAIL_DATA:
      return state.merge({
        title: action.data.title,
        content: action.data.content
      })
    default:
      return state
  }
}
