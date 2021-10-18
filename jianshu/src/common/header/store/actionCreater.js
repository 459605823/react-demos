import * as actionTypes from "./actionTypes"
import { fromJS } from "immutable"
import { getData } from '../../../utils' 

export const getFocusAction = () => {
  return {
    type: actionTypes.SEARCH_FOCUS,
  }
}

export const getBlurAction = () => {
  return {
    type: actionTypes.SEARCH_BLUR,
  }
}

export const getInitListAction = (data) => {
  return {
    type: actionTypes.INIT_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
  }
}

export const initList = () => {
  return (dispatch) => {
    getData("/api/headerList.json", getInitListAction, dispatch)
  }
}

export const getMouseEnterAction = () => {
  return {
    type: actionTypes.MOUSE_ENTER
  }
}

export const getMouseLeaveAction = () => {
  return {
    type: actionTypes.MOUSE_LEAVE
  }
}

export const getChangePageAction = (page) => {
  return {
    type: actionTypes.CHANGE_PAGE,
    page
  }
}