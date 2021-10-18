import * as actionTypes from "./actionTypes"
import { getData } from '../../../utils'

export const initDetailData = (id) => {
  return (dispatch) => {
    getData('/api/detail.json?id=' + id, getInitDetailDataAction, dispatch)
  }
}

export const getInitDetailDataAction = (data) => {
  return {
    type: actionTypes.INIT_DETAIL_DATA,
    data
  }
}