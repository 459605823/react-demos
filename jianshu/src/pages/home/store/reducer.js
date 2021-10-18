import { fromJS } from "immutable"
import * as actionTypes from "./actionTypes"

// 使用immutable封装对象
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1,
  showBackTop: false,
  writerPage: 1,
  writerTotalPage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INIT_HOME_DATA:
      return state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList,
        writerList: action.writerList,
        writerTotalPage: action.writerTotalPage
      })
    case actionTypes.LOAD_MORE_LIST:
      return state.merge({
        articleList: state.get("articleList").concat(action.list),
        articlePage: action.nextPage,
      })
    case actionTypes.CHANGE_BTN_STATE:
      return state.set("showBackTop", action.state)
    case actionTypes.CHANGE_PAGE:
      return state.set("writerPage", action.page)
    default:
      return state
  }
}
