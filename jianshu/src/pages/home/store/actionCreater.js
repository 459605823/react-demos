import * as actionTypes from "./actionTypes"
import { fromJS } from "immutable"
import { getData } from "../../../utils"

export const initHomeData = () => {
  return (dispatch) => {
    getData("/api/home.json", getInitHomeDataAction, dispatch)
  }
}

export const getInitHomeDataAction = (data) => {
  return {
    type: actionTypes.INIT_HOME_DATA,
    topicList: fromJS(data.topicList),
    articleList: fromJS(data.articleList),
    recommendList: fromJS(data.recommendList),
    writerList: fromJS(data.writerList),
    writerTotalPage: Math.ceil(data.writerList.length / 5),
  }
}

export const loadMoreList = (page) => {
  return (dispatch) => {
    getData("/api/homeList.json?page=" + page, getLoadMoreListAction, dispatch, page + 1)
  }
}

export const getLoadMoreListAction = (list, nextPage) => {
  return {
    type: actionTypes.LOAD_MORE_LIST,
    list: fromJS(list),
    nextPage
  }
}

export const getChangeBackTopBtnStateAction = (state) => {
  return {
    type: actionTypes.CHANGE_BTN_STATE,
    state
  }
}

export const getChangePageAction = page => {
  return {
    type: actionTypes.CHANGE_PAGE,
    page,
  }
}